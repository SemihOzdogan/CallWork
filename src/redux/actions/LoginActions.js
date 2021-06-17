import { USERNAME_CHANGE, PASSWORD_CHANGE } from './types';
export const usernameChange = (username) => {
    return (dispatch) => {
        dispatch({
            type: USERNAME_CHANGE,
            payload: username
        });
    };
};

export const passwordChange = (password) => {
    return (dispatch) => {
        dispatch({
            type: PASSWORD_CHANGE,
            payload: password
        });
    };
};