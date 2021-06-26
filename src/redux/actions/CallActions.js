import { CALL_NUMBER_CHANGE, } from './types';

export const callNumberChange = (number) => {
    return (dispatch) => {
        dispatch({
            type: CALL_NUMBER_CHANGE,
            payload: number
        });
    };
};
