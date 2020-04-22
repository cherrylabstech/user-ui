import React, { Fragment, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
import { getKnowledgeBase } from "../ApiCall/KnowledgeBaseApi";
import Spinner from "../ReusableComps/Spinner";

function KnowledgeBase(props) {
  const dispatch = useDispatch();
  const kbDataLoading = useSelector(
    state => state.KnowledgeBaseReducer.loading
  );
  const topicsData = useSelector(
    state => state.KnowledgeBaseTopicsReducer.KnowledgeBaseTopicsData
  );
  const topicsDataLoading = useSelector(
    state => state.KnowledgeBaseTopicsReducer.loading
  );
  useEffect(() => {
    const tokenApiCalls = () => {
      dispatch(userActions.KnowledgeBaseApi(props.location.pathname));
    };
    tokenApiCalls();
    return function cleanUp() {
      dispatch(getKnowledgeBase());
    };
  }, [dispatch, props.location.pathname]);
  return (
    <Fragment>
      <div className="main">
        Knowledge Base
        {(kbDataLoading || topicsDataLoading) && (
          <Spinner fontSize="60px" marginTop="40%"></Spinner>
        )}
        {!kbDataLoading &&
          !topicsDataLoading &&
          topicsData &&
          (topicsData || []).map(data => (
            <div key={data.id}>
              {data.topic}
              {data.kbArticles.length === 0 ? (
                <div>No articles</div>
              ) : (
                data.kbArticles.map(element => (
                  <Link
                    key={element.id}
                    to={`/KnowledgeBase/topic/${element.id}`}
                  >
                    <ul>
                      <li>{element.subject}</li>
                    </ul>
                  </Link>
                ))
              )}
            </div>
          ))}
      </div>
    </Fragment>
  );
}
export default withRouter(KnowledgeBase);
