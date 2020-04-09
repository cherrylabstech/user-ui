import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
// import Home from "./containers/Home/Home";
import Feed from "../containers/Feed/Feed";
//import { fetchPosts } from "./actions/postAction";
import SideNavLeft from "../components/SideNavLeft/SideNavLeft";
import SideNavRight from "../components/SideNavRight/SideNavRight";
import KnowledgeBase from "../ReduxContainers/KnowledgeBase";
import MyRequest from "../ReduxContainers/MyRequest";
import MyRequestDetail from "../ReduxContainers/MyRequestDetail";
import SignIn from "../ReduxContainers/SignIn";
import SignUp from "../ReduxContainers/SignUp";
import MyAssetDetail from "../ReduxContainers/MyAssetDetail";
import MyAsset from "../ReduxContainers/MyAsset";
import Profile from "../ReduxContainers/ Profile";
import LoginPage from "../components/Login/LoginPage";
import WelcomeMessage from "../components/HomePage/WelcomeMessage/WelcomeMessage";
import "../Interceptor.js";
import { useDispatch } from "react-redux";
//import { alertActions } from "../ApiCall/Alert";
import { userActions } from "../ApiCall/rootApi";
import CreateTicket from "../ReduxContainers/CreateTicket";
function Routes(props) {
  const dispatch = useDispatch();
  //const themeData = useSelector(state => state.ThemeReducer.themeData);
  const token = localStorage.getItem("X-Auth-Token");
  const location = props.location.pathname;
  useEffect(() => {
    const apiCalls = () => {
      dispatch(userActions.themeApi());
    };
    const tokenApiCalls = () => {
      dispatch(userActions.profileApi());
    };
    location !== "/login" && apiCalls();
    token && tokenApiCalls();
  }, []);
  return (
    <div className="App wrapper">
      {location !== "/login" && <Navbar />}
      <div className="container">
        <div className="columns">
          {location !== "/login" && <SideNavLeft />}

          <Switch>
            <Route exact path="/login" component={LoginPage}></Route>
            <Route exact path="/home" component={WelcomeMessage} />
            <Route path="/post/:post_id" component={Feed} />
            <Route
              exact
              path="/KnowledgeBase"
              component={KnowledgeBase}
            ></Route>
            <Route
              exact
              path="/MyRequest"
              key={2}
              component={MyRequest}
            ></Route>
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
            <Route exact path="/CreateTicket" component={CreateTicket} />
            <Redirect from="/" to="/home"></Redirect>
          </Switch>
          {location !== "/login" && <SideNavRight />}
        </div>
      </div>
    </div>
  );
}

export default withRouter(Routes);
