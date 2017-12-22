import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import BaseComponent from  './Components/BaseComponent';
import ContentPage from './Components/ContentPage/ContentPage';

class App extends BaseComponent<{},{}> {
     doRender(): React.ReactElement<{}> {
        return (<div>
            <ContentPage />
        </div>);
    }
};

export default App;

