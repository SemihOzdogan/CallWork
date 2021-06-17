import { USERNAME_CHANGE, PASSWORD_CHANGE } from '../actions/types';

const INITIAL_STATE = {
    username: 'bayi@gruparge.com',
    password: 'Acer123ert.'
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'username_change':
            return { ...state, username: action.payload }
        case 'password_change':
            return { ...state, password: action.payload }
        default:
            return state;
    }
}