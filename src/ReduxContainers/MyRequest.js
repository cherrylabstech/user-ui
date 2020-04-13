import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
function MyRequest(props) {
  const query = queryString.parse(props.location.search);
  const value = useSelector(state => state);
  console.log(value);
  const [page, setPage] = useState(parseInt(query.page) || 1);
  const dispatch = useDispatch();
  useEffect(() => {
    const apiCall = () => {
      dispatch(userActions.PriorityApi(), dispatch(userActions.DashBoardApi()));
    };
    apiCall();
  }, [dispatch]);

  //Ticket List
  useEffect(() => {
    dispatch(userActions.TicketListApi(props.location.search));
  }, [props.location.search, dispatch]);
  let params = new URLSearchParams(props.location.search);
  const handleIncrement = () => {
    setPage(page + 1);
    params.set("page", page + 1);
    props.history.push({
      pathname: "/request",
      search: params.toString()
    });
  };
  return (
    <Fragment>
      <div className="main">
        My Request
        <button onClick={handleIncrement}>Increment</button>
      </div>
    </Fragment>
  );
}
export default withRouter(MyRequest);
