import React, { Fragment, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
import { getKnowledgeBase } from "../ApiCall/KnowledgeBaseApi";
import Spinner from "../ReusableComps/Spinner";
import "../css/knowledgeBase.css";

function KnowledgeBaseTopics(props) {
  const dispatch = useDispatch();
  const topicsData = useSelector(
    state => state.KnowledgeBaseTopicsReducer.KnowledgeBaseTopicsData
  );

  const topicsDataLoading = useSelector(
    state => state.KnowledgeBaseTopicsReducer.loading
  );
  console.log(props.match.params);
  useEffect(() => {
    const tokenApiCalls = () => {
      dispatch(userActions.KnowledgeBaseTopicsApi(props.match.params.topicId));
    };
    tokenApiCalls();
    return function cleanUp() {
      dispatch(getKnowledgeBase());
    };
  }, [dispatch, props.match.params.topicId]);
  return (
    <Fragment>
      <div className="main">
        Knowledge Base Topics
        <div>
          {topicsDataLoading && (
            <Spinner fontSize="60px" marginTop="40%"></Spinner>
          )}
          {!topicsDataLoading &&
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
                  data.kbArticles.map(element => (
                    <Link key={element.id} to={`/KnowledgeBase/${element.id}`}>
                      <ul>
                        <li>{element.subject}</li>
                      </ul>
                    </Link>
                  ))
                )}
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
}
export default withRouter(KnowledgeBaseTopics);
