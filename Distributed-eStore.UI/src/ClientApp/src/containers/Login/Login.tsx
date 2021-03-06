import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActionCreators } from '../../state/user/userActions';
import { IUserState } from '../../state/user';
import { IApplicationState } from '../../state';
import "./Login.css";

type LoginPageProps = typeof userActionCreators & {
    userState: IUserState
};

type LoginPageState = {
    email: string;
    password: string;
    submitted: boolean;
}

class LoginPage extends React.Component<LoginPageProps, LoginPageState> {
    constructor(props: LoginPageProps) {
        super(props);

        this.state = {
            email: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        const { name, value } = event.target;
        this.setState({ ...this.state, [name]: value });
    }

    handleSubmit(event: any) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            this.props.login(email, password);
        }
    }

    render() {
        const { email, password, submitted } = this.state;

        return this.props.userState.isLoggedIn
        ? (<Redirect to="/" />)
            : (<div className="container login">
                <div className="row">
                    <div className="col-md-8 login__container">
                        <h2>Login</h2>
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange} />
                                {submitted && !email &&
                                    <div className="help-block">Email is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                                {submitted && !password &&
                                    <div className="help-block">Password is required</div>
                                }
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">Login</button>
                                <Link to="/register" className="btn btn-link">Register</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state: IApplicationState) => { return { userState: state.user } }, userActionCreators)(LoginPage as any);