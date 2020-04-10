import React, { Fragment, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
import { getKnowledgeBase } from "../ApiCall/KnowledgeBaseApi";

function KnowledgeBase(props) {
  const dispatch = useDispatch();
  // const kbData = useSelector(
  //   state => state.KnowledgeBaseReducer.KnowledgeBaseData
  // );
  // const articlesData = useSelector(
  //   state => state.KnowledgeBaseArticleReducer.KnowledgeBaseArticleData
  // );
  // const articlesDataLoading = useSelector(
  //   state => state.KnowledgeBaseReducer.loading
  // );
  // const topicsData = useSelector(
  //   state => state.KnowledgeBaseTopicsReducer.KnowledgeBaseTopicsData
  // );
  //const topicsDataLoading = useSelector(state => state.KnowledgeBaseTopicsReducer.loading);
  useEffect(() => {
    const token = localStorage.getItem("X-Auth-Token");
    const tokenApiCalls = () => {
      dispatch(userActions.KnowledgeBaseArticleApi(422));
      dispatch(userActions.KnowledgeBaseTopicsApi(81));
      dispatch(userActions.KnowledgeBaseApi());
    };
    token && tokenApiCalls();
    return function cleanUp() {
      dispatch(getKnowledgeBase());
    };
  }, [dispatch]);
  // useEffect(() => {
  //   const kbArray = [{ id: 82 }, { id: 81 }];
  //   setTimeout(() => {
  //     kbData !== undefined &&
  //       kbArray.map(data =>
  //         dispatch(userActions.KnowledgeBaseTopicsApi(data.id, kbArray.length))
  //       );
  //   }, 3000);
  // }, [kbData, dispatch]);

  return (
    <Fragment>
      <div className="main">Knowledge Base</div>
    </Fragment>
  );
}
export default withRouter(KnowledgeBase);
