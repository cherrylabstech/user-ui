import React, { Fragment, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../ApiCall/rootApi";

function KnowledgeBase(props) {
  const dispatch = useDispatch();
  // const articlesData = useSelector(
  //   state => state.KnowledgeBaseArticleReducer.KnowledgeBaseArticleData
  // );
  // const articlesDataLoading = useSelector(
  //   state => state.KnowledgeBaseReducer.loading
  // );
  //const topicsData = useSelector(state => state.KnowledgeBaseTopicsReducer.KnowledgeBaseTopicsData);
  //const topicsDataLoading = useSelector(state => state.KnowledgeBaseTopicsReducer.loading);

  useEffect(() => {
    const token = localStorage.getItem("X-Auth-Token");
    const tokenApiCalls = () => {
      dispatch(userActions.KnowledgeBaseArticleApi(422));
      dispatch(userActions.KnowledgeBaseTopicsApi(81));
      dispatch(userActions.KnowledgeBaseApi());
    };
    token && tokenApiCalls();
  }, [dispatch]);
  return (
    <Fragment>
      <div className="main">Knowledge Base</div>
    </Fragment>
  );
}
export default withRouter(KnowledgeBase);
