import React from "react";
import { connect } from "react-redux";
import Post from "../../components/Post/Post";
import Skeleton from "../../components/Skeleton/Skeleton";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import "./Feed.css";

class Feed extends React.Component {
  render() {
    const post = this.props.post ? (
      <React.Fragment>
        <Post post={this.props.post} />
        <Helmet>
          <title>Hush | {this.props.post.title}</title>
          <meta name="description" content={this.props.post.metaDescription} />
          <meta name="title" content={this.props.post.title} />
        </Helmet>
      </React.Fragment>
    ) : (
      <Skeleton count={1} />
    );
    return <div className="main">{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.items.find(post => post.url === id)
  };
};

Feed.propTypes = {
  post: PropTypes.object
};

Feed = connect(
  mapStateToProps,
  null
)(Feed);

export default Feed;
