import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import ContentPage from "./Components/ContentPage/ContentPage";
import BaseComponent from "./Components/BaseComponent";
//import { loadContent } from "./ActionCreators/ContentActionCreators";
//import { StoreState } from "./Store/StoreState";




//@connect(undefined, mapDispatchToProps)
class App extends BaseComponent<{}, {}> {
    doRender(): React.ReactElement<{}> {
        return (<div>
                    <ContentPage />
                </div>);
    }

};



export default App;