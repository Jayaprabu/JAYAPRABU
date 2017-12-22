import * as React from 'react';


/**
 * @Class - BaseComponent  
 */
abstract class BaseComponent<P, S> extends React.Component<P, S>{   
    render(): React.ReactElement<{}>{
        let result : React.ReactElement<{}>;
        try {
            result = this.doRender();
        } catch (error) {
            
            result = null;
        }

        return result;
    }
    abstract doRender(): React.ReactElement<{}>;

}

export default BaseComponent;