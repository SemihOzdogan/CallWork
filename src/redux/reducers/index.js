import { combineReducers } from "redux";
import loginReducers from './LoginReducers';
import callReducers from './CallReducers';
export default combineReducers({
    loginReducersResponse: loginReducers,
    callReducersResponse: callReducers
})