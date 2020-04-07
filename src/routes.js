import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Feed from "./containers/Feed/Feed";
import { fetchPosts } from "./actions/postAction";
import { connect } from "react-redux";
import SideNavLeft from "./components/SideNavLeft/SideNavLeft";
import SideNavRight from "./components/SideNavRight/SideNavRight";
import KnowledgeBase from "./ReduxContainers/KnowledgeBase";

class Routes extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App wrapper">
          <Navbar />
          <div className="container">
            <div className="columns">
              <SideNavLeft />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/post/:post_id" component={Feed} />
                <Route
                  exact
                  path="/KnowledgeBase"
                  component={KnowledgeBase}
                ></Route>
              </Switch>
              <SideNavRight />
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
