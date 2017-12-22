import { handleActions } from 'redux-actions';
import { CountState } from '../State/CountState';
import { countAction } from '../Actions/CountAction';

const initialState: CountState = {
    count: 5,
}

export default handleActions<CountState, void>({
    [countAction.toString()] : ( state, action ) => {
        return {
            count: state.count + 2
        }
    }
}, initialState)
