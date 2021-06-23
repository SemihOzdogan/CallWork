import { USERNAME_CHANGE, PASSWORD_CHANGE } from '../actions/types';

const INITIAL_STATE = {
    username: 'bayi@gruparge.com',
    password: 'Acer123ert.',
    loading: false
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USERNAME_CHANGE:
            return { ...state, username: action.payload }
        case PASSWORD_CHANGE:
            return { ...state, password: action.payload }
        default:
            return state;
    }
}