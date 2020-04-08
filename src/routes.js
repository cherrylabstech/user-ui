import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import {
  Route,
  BrowserRouter,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import Home from "./containers/Home/Home";
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
import HomePage from "./containers/HomePage/HomePage";
class Routes extends Component {
  //   componentDidMount() {
  //     this.props.dispatch(fetchPosts());
  //   }

  render() {
    const location = this.props.location.pathname;
    const authPath = location === "/auth" ? true : false;
    const token = localStorage.getItem("X-Auth-Token");
    return (
      <BrowserRouter>
        {!token && location !== "/auth/login" && (
          <Redirect to="/auth"></Redirect>
        )}
        <div className="App wrapper">
          {!authPath && token && <Navbar />}
          <Route path="/auth" component={HomePage}></Route>
          <Route exact path="/auth/login" component={LoginPage}></Route>

          <div className="container">
            <div className="columns">
              {!authPath && token && <SideNavLeft />}
              <Switch>
                <Route exact path="/home" component={Home} />
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
              {!authPath && token && <SideNavRight />}
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
