import React, { Fragment, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
import parse from "html-react-parser";
import Spinner from "../ReusableComps/Spinner";
import { getKnowledgeBaseArticle } from "../ApiCall/KnowledgeBaseArticlesApi";

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
    return function cleanUp() {
      dispatch(getKnowledgeBaseArticle());
    };
  }, [props.match.params.articleId, dispatch]);
  return (
    <Fragment>
      <div className="main">
        Knowledge Base Article
        {articlesDataLoading && (
          <Spinner fontSize="60px" marginTop="40%"></Spinner>
        )}
        {!articlesDataLoading && articlesData && (
          <div>
            {articlesData.subject}
            <div>{parse(articlesData.content)}</div>
          </div>
        )}
      </div>
    </Fragment>
  );
}
export default withRouter(KnowledgeBaseArticle);
