import * as React from 'react';
import BaseComponent from '../../BaseComponent';
import { HeaderProps } from "../../../Interface/Interface";



class Header extends BaseComponent<HeaderProps,{}>{
    doRender(): React.ReactElement<{}>{
        return (<h1>{this.props.title} </h1> )
    }
}

export default Header;