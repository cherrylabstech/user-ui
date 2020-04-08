import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
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
class Routes extends Component {
  //   componentDidMount() {
  //     this.props.dispatch(fetchPosts());
  //   }

  render() {
    const token = localStorage.getItem("X-Auth-Token");
    return (
      <BrowserRouter>
        {!token && <Redirect to="/"></Redirect>}
        <div className="App wrapper">
          {token && <Navbar />}
          <div className="container">
            <div className="columns">
              {token && <SideNavLeft />}
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
                <Route exact path="/" component={LoginPage}></Route>
                {token && <Redirect from="/" to="/home"></Redirect>}
              </Switch>
              {token && <SideNavRight />}
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
export default Routes;
