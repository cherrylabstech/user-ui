import React, { Fragment, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
import Spinner from "../ReusableComps/Spinner";

function KnowledgeBaseArticle(props) {
  const dispatch = useDispatch();

  const articlesData = useSelector(
    state => state.KnowledgeBaseArticleReducer.KnowledgeBaseArticleData
  );
  const articlesDataLoading = useSelector(
    state => state.KnowledgeBaseArticleReducer.loading
  );

  useEffect(() => {
    dispatch(userActions.KnowledgeBaseArticleApi(props.match.params.articleId));
  }, [props.match.params.articleId, dispatch]);
  return (
    <Fragment>
      <div className="main">
        Knowledge Base Article
        {articlesDataLoading && (
          <Spinner fontSize="60px" marginTop="40%"></Spinner>
        )}
        {articlesData && <div>{articlesData.subject}</div>}
      </div>
    </Fragment>
  );
}
export default withRouter(KnowledgeBaseArticle);
