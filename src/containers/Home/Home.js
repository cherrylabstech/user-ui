import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Post from "../../components/Post/Post";
import Skeleton from "../../components/Skeleton/Skeleton";
import PropTypes from "prop-types";
import "./Home.css";

class Home extends React.Component {
  render() {
    const postList = this.props.posts.length ? (
      this.props.posts.map(post => {
        return <Post post={post} key={post.id} />;
      })
    ) : (
      <Skeleton count={3} />
    );
    return <div className="main">{postList}</div>;
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.items
  };
};

Home.propTypes = {
  posts: PropTypes.array
};

Home = connect(mapStateToProps, null)(Home);
export default withRouter(Home);
