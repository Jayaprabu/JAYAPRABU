import * as React from 'react';
import classNames from 'classnames';
import { IHeaderProps } from '../../Interface/interface';

import "../../Global/Style/brand";

const styles: any = require("./Header.module.less");

//const brand: any = require("../../Global/Style/brand.module.less")
//const styles: any = require("./Header.css");


class Header extends React.Component<IHeaderProps, null>{
    render(){
        return <span> <div className={styles.container}>{this.props.title}</div>
                    <div className="module_header mh_theme"> </div>
         </span>
    }
}

export default Header;

/**
 * <div className={classNames({[brand.module_header]:true, [brand.mh_theme]:true}) }
                > </div>

 */