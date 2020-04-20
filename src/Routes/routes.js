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
import { useDispatch, useSelector } from "react-redux";
//import { alertActions } from "../ApiCall/Alert";
import { userActions } from "../ApiCall/rootApi";
import CreateTicket from "../ReduxContainers/CreateTicket";
import { getKnowledgeBase } from "../ApiCall/KnowledgeBaseApi";
export let profile = "";

function Routes(props) {
  const dispatch = useDispatch();
  const profileDetailData = useSelector(
    state => state.profileDetailsReducer.profileDetailsData
  );
  const profileDetailLoading = useSelector(
    state => state.profileDetailsReducer.loading
  );

  const token = localStorage.getItem("X-Auth-Token");
  const location = props.location.pathname;

  useEffect(() => {
    const apiCalls = () => {
      dispatch(userActions.themeApi());
    };
    const tokenApiCalls = () => {
      dispatch(userActions.profileApi());
      dispatch(userActions.PlanApi());
      dispatch(userActions.profileDetailsApi());
    };
    location !== "/login" && apiCalls();
    token && tokenApiCalls();
    return function cleanUp() {
      dispatch(getKnowledgeBase());
    };
  }, []);

  const profileData = useSelector(state => state.profileReducer.profileData);
  profile = profileData;

  return (
    <div className="App wrapper">
      {location !== "/login" && (
        <Navbar
          profilePicture={profileDetailData}
          loading={profileDetailLoading}
        />
      )}

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
            <Route exact path="/CreateTicket" component={CreateTicket} />
            <Route exact path="/login" component={LoginPage}></Route>
            <Route exact path="/SignIn" component={SignIn}></Route>
            <Route exact path="/SignUp" component={SignUp}></Route>

            <Route exact path="/request" key={2} component={MyRequest}></Route>
            <Route
              exact
              path="/request/detail"
              component={MyRequestDetail}
            ></Route>
            <Route exact path="/asset" component={MyAsset}></Route>
            <Route
              exact
              path="/asset/detail/:id"
              component={MyAssetDetail}
            ></Route>
            <Route
              exact
              path="/profile"
              render={() => {
                return (
                  <Profile
                    profilePicture={profileDetailData}
                    loading={profileDetailLoading}
                  ></Profile>
                );
              }}
            ></Route>

            <Redirect from="/" to="/home"></Redirect>
          </Switch>
          {location !== "/login" && <SideNavRight />}
        </div>
      </div>
    </div>
  );
}

export default withRouter(Routes);
