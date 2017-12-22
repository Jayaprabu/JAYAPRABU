import * as React from 'react';
import { connect  } from 'react-redux';
import { Dispatch } from 'redux';

import {TITLE, SUMBIT_BTN} from '../../Constant/Constant';
import { count } from '../../ActionCreate/CountActionCreators'
import BaseComponect from "../BaseComponent";
import Header from './Header/Header';
import Button from '../Common/Button/Button';
import { StoreState } from "../../State/StoreState";

interface IContenetPageProrps{
    count ?: number;
    countAdd?: () => void;
}

@connect(mapStateToProps,  mapDispatchToProps)
class ContentPage extends BaseComponect<IContenetPageProrps,{}>{
   
    doRender(): React.ReactElement<{}> {
        return (<div> 
        <Header  title={TITLE}/>
        <Button  name= { SUMBIT_BTN } onClick={() => this.props.countAdd()} />
             
        </div>);
    }
}

function mapStateToProps(state: StoreState): IContenetPageProrps {
    return {
        count: state.buttonState.count,
    };
}

function mapDispatchToProps(dispatch: Dispatch<{}>): IContenetPageProrps {
    return {
        countAdd : () => dispatch(count()),
    };
}
export default ContentPage;