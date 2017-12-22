import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { sayHello } from "./../../ActionCreators/HelloCountActionCreators";
import { StoreState } from "./../../Store/StoreState";
import BaseComponent from "./../BaseComponent";
import Button from "./../Common/Button/Button";
import Header from "./Header/Header";



interface IContentPageProps {
   sayHelloCount?: number;
   sayHello1?: () => void;
}

@connect(mapStateToProps, mapDispatchToProps)
class ContentPage extends BaseComponent<IContentPageProps, {}> {
    doRender(): React.ReactElement<{}> {
        return (<div>
                    <Header isActive={true} title={"Welcome to test1 page"} />
                    <Button onClick={() => this.props.sayHello1()}>Say Hello!</Button>
                    <div>You said hello {this.props.sayHelloCount} time(s)</div>
                </div>);
    }
}

function mapStateToProps(state: StoreState): IContentPageProps {
    return {
        sayHelloCount: state.helloCount.count,
    };
}

function mapDispatchToProps(dispatch: Dispatch<{}>): IContentPageProps {
    return {
        sayHello1: () => dispatch(sayHello())
    };
}

export default ContentPage;