import * as React from "react";

/**
 * Base component which wraps render function in a try catch structure
 * Any child components who extends from this component will get protection when
 * Exception thrown, so protect component life cycle.
 */
abstract class BaseComponent<P, S> extends React.Component<P, S> {
    render(): React.ReactElement<{}> {
        let result: React.ReactElement<{}>;
        try {
            result = this.doRender();
        } catch (error) {

            result = null;
        }

        return result;
    }

    /**
     * Abstract method to be overriden by child component which will do real
     * render work as usual react component
     */
    abstract doRender(): React.ReactElement<{}>;


 };

 export default BaseComponent;
