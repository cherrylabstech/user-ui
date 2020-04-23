import React, { Fragment, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
import { getKnowledgeBase } from "../ApiCall/KnowledgeBaseApi";
import Spinner from "../ReusableComps/Spinner";
import "../css/knowledgeBase.css";

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
        <div>
          {(kbDataLoading || topicsDataLoading) && (
            <Spinner fontSize="60px" marginTop="40%"></Spinner>
          )}
          {!kbDataLoading &&
            !topicsDataLoading &&
            topicsData &&
            (topicsData || []).map(data => (
              <div key={data.id} className="kb-box">
                <span className="kb-topic">
                  <i
                    className="fas fa-folder-open"
                    style={{ marginRight: "10px" }}
                  />{" "}
                  {data.topic}
                </span>
                {data.kbArticles.length === 0 ? (
                  <div>
                    <ul>No articles</ul>
                  </div>
                ) : (
                  data.kbArticles.slice(0, 5).map(element => (
                    <Link key={element.id} to={`/KnowledgeBase/${element.id}`}>
                      <ul>
                        <li>{element.subject}</li>
                      </ul>
                    </Link>
                  ))
                )}
                <Link to={`/KnowledgeBase/topic/${data.id}`}>
                  <ul>
                    <li>See More</li>
                  </ul>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
}
export default withRouter(KnowledgeBase);
