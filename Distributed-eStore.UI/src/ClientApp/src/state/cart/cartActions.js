"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionCreators = void 0;
var _1 = require(".");
exports.actionCreators = {
    addProductToCart: function (cartProduct) { return function (dispatch, getState) {
        dispatch({
            type: _1.CartActionTypes.ADD_TO_CART,
            cartProduct: cartProduct
        });
    }; },
    removeProductFromCart: function (productId) { return function (dispatch, getState) {
        dispatch({
            type: _1.CartActionTypes.REMOVE_FROM_CART,
            productId: productId
        });
    }; },
    changeQuantity: function (productId, quantity) { return function (dispatch, getState) {
        dispatch({
            type: _1.CartActionTypes.CHANGE_QUANTITY,
            productId: productId
        });
    }; },
    placeOrder: function () { return function (dispatch, getState) {
        dispatch({
            type: _1.CartActionTypes.PLACE_ORDER
        });
    }; }
};
//# sourceMappingURL=cartActions.js.map