import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, BrowserRouter, Switch, withRouter } from "react-router-dom";
// import Home from "./containers/Home/Home";
import Feed from "./containers/Feed/Feed";
//import { fetchPosts } from "./actions/postAction";
import { connect } from "react-redux";
import SideNavLeft from "./components/SideNavLeft/SideNavLeft";
import SideNavRight from "./components/SideNavRight/SideNavRight";
import KnowledgeBase from "./ReduxContainers/KnowledgeBase";
import MyRequest from "./ReduxContainers/MyRequest";
import MyRequestDetail from "./ReduxContainers/MyRequestDetail";
import SignIn from "./ReduxContainers/SignIn";
import SignUp from "./ReduxContainers/SignUp";
import MyAssetDetail from "./ReduxContainers/MyAssetDetail";
import MyAsset from "./ReduxContainers/MyAsset";
import Profile from "./ReduxContainers/ Profile";
import LoginPage from "./components/Login/LoginPage";
import WelcomeMessage from "./components/WelcomeMessage/WelcomeMessage";
class Routes extends Component {
  //   componentDidMount() {
  //     this.props.dispatch(fetchPosts());
  //   }

  render() {
    const location = this.props.location.pathname;
    return (
      <BrowserRouter>
        <div className="App wrapper">
          {location !== "/login" && <Navbar />}
          <Route exact path="/login" component={LoginPage}></Route>
          {/* <Redirect from="/" to="/home"></Redirect> */}
          <div className="container">
            <div className="columns">
              {location !== "/login" && <SideNavLeft />}
              <Switch>
                <Route exact path="/home" component={WelcomeMessage} />
                <Route path="/post/:post_id" component={Feed} />
                <Route
                  exact
                  path="/KnowledgeBase"
                  component={KnowledgeBase}
                ></Route>
                <Route exact path="/MyRequest" component={MyRequest}></Route>
                <Route
                  exact
                  path="/MyRequestDetail"
                  component={MyRequestDetail}
                ></Route>
                <Route exact path="/SignIn" component={SignIn}></Route>
                <Route exact path="/SignUp" component={SignUp}></Route>
                <Route exact path="/MyAsset" component={MyAsset}></Route>
                <Route
                  exact
                  path="/MyAssetDetail"
                  component={MyAssetDetail}
                ></Route>
                <Route exact path="/Profile" component={Profile}></Route>
              </Switch>
              {location !== "/login" && <SideNavRight />}
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts.items
  };
};

Routes = connect(mapStateToProps, null)(Routes);
export default withRouter(Routes);
