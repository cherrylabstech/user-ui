import React, { useEffect } from "react";

import Navbar from "../components/Navbar/Navbar";
import {
  Route,
  withRouter,
  Switch,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";
// import Home from "./containers/Home/Home";
import Feed from "../containers/Feed/Feed";
//import { fetchPosts } from "./actions/postAction";
import SideNavLeft from "../components/SideNavLeft/SideNavLeft";
import SideNavRight from "../components/SideNavRight/SideNavRight";
import KnowledgeBase from "../ReduxContainers/KnowledgeBase";
import MyRequest from "../ReduxContainers/MyRequest";
import MyRequestDetail from "../ReduxContainers/MyRequestDetail";
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
import knowledgeBaseArticle from "../ReduxContainers/KnowledgeBaseArticle";
import KnowledgeBaseTopics from "../ReduxContainers/KnowledgeBaseTopics";
import { getKnowledgeBaseTopics } from "../ApiCall/KnowledgeBaseTopicsApi";
import { getKnowledgeBaseArticle } from "../ApiCall/KnowledgeBaseArticlesApi";
import { createBrowserHistory } from "history";
export let profile = "";
const history = createBrowserHistory();
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
      dispatch(getKnowledgeBaseTopics());
      dispatch(getKnowledgeBaseArticle());
    };
  }, [token]);
  useEffect(() => {
    dispatch(getKnowledgeBase());
  }, [location]);
  const profileData = useSelector(state => state.profileReducer.profileData);
  if (profileData !== undefined) {
    profile = profileData;
  }
  return (
    <div className="App wrapper">
      <Router basename="/agent/#" history={history}>
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
              <Route
                exact
                path="/KnowledgeBase/:articleId"
                component={knowledgeBaseArticle}
              ></Route>
              <Route
                exact
                path="/KnowledgeBase/topic/:topicId"
                component={KnowledgeBaseTopics}
              ></Route>
              <Route exact path="/CreateTicket" component={CreateTicket} />
              <Route exact path="/login" component={LoginPage}></Route>

              <Route exact path="/ticket" key={2} component={MyRequest}></Route>
              <Route
                exact
                path="/ticket/detail/:ticketId"
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
              <Route exact path="/activities"></Route>
              <Redirect from="*" to="/home"></Redirect>
              <Redirect from="/home" to="/agent/#/home"></Redirect>
            </Switch>

            {location !== "/login" && <SideNavRight />}
          </div>
        </div>
      </Router>
    </div>
  );
}

export default withRouter(Routes);
