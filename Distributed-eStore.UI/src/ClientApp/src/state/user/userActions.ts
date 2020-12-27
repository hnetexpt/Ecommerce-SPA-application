﻿import { IUser, UserActionTypes } from ".";
import { IAppThunkAction, ReduxAction } from "..";
import { register, login, logout } from "../../services/auth";

export type UserRegistrationData = {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

export const userActionCreators = {
    register: (userData: UserRegistrationData): IAppThunkAction<ReduxAction> => async (dispatch, getState) => {
        try {
            await register(userData.firstName, userData.lastName, userData.email, userData.password);

            dispatch({
                type: UserActionTypes.REGISTRATION_SUCCESS,
            });
        } catch (error) {
            const message: string = (error.response && error.response.data && error.response.data.message)
                || error.message
                || error.toString();

            dispatch({
                type: UserActionTypes.REGISTRATION_FAILED,
            });

            // TODO: implement state error message
            alert(`Registration failed - ${message}`);
        }
    },
    login: (email: string, password: string): IAppThunkAction<ReduxAction> => async (dispatch, getState) => {
        try {
            const user: IUser = (await login(email, password)).data;

            dispatch({
                type: UserActionTypes.LOGIN_SUCCESS,
                payload: { user }
            });
        } catch (error) {
            const message: string = (error.response && error.response.data && error.response.data.message)
                || error.message
                || error.toString();

            dispatch({
                type: UserActionTypes.LOGIN_FAIL
            });

            // TODO: implement state error message
            alert(`Login failed - ${message}`);
        }
    },
    logout: (): IAppThunkAction<ReduxAction> => (dispatch, getState) => {
         logout();

        dispatch({
            type: UserActionTypes.LOGOUT,
        });
    }
};