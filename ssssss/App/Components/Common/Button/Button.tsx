import * as React from 'react';

//import 
import BaseComponect from "../../BaseComponent";
import { ButtonProps } from "../../../Interface/Interface";

class Button extends BaseComponect<ButtonProps,{}>{
    doRender():React.ReactElement<{}>{
        return ( <button
                    onClick={() => this.props.onClick() }
         >{this.props.name}</button> )
    }
}

export default Button;