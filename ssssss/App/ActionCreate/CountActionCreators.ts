import { countAction } from '../Actions/CountAction';

export function count(): ReduxActions.Action<void>{
    return countAction();
}