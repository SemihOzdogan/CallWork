import { CALL_NUMBER_CHANGE } from '../actions/types';

const INITIAL_STATE = {
    number: '05448355136',
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CALL_NUMBER_CHANGE:
            return { ...state, username: action.payload }
        default:
            return state;
    }
}