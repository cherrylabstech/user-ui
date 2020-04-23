import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import Spinner from "../ReusableComps/Spinner";
import {
  PaginationButton,
  PaginationPrevButton
} from "../helpers/paginationButtonDisable";
function MyRequest(props) {
  const query = queryString.parse(props.location.search);
  let params = new URLSearchParams(props.location.search);
  const [page, setPage] = useState(parseInt(query.page) || 1);
  //const [state, setState] = useState(parseInt(query.state) || "");
  const ticketListData = useSelector(
    state => state.TicketListReducer.TicketList
  );
  const ticketListLoading = useSelector(
    state => state.TicketListReducer.loading
  );
  const ticketListCount = useSelector(
    state => state.TicketCountReducer.TicketCount
  );

  const ticketList = ticketListData && ticketListData.payload;
  const dispatch = useDispatch();
  useEffect(() => {
    const apiCall = () => {
      dispatch(userActions.PriorityApi(), dispatch(userActions.DashBoardApi()));
    };
    apiCall();
  }, [dispatch]);
  //Ticket List Refresh
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     dispatch(userActions.TicketListRefreshApi(props.location.search));
  //   }, 10000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // });
  //Ticket List
  useEffect(() => {
    dispatch(userActions.TicketCountApi(props.location.search));
  }, [query.state, dispatch]);
  useEffect(() => {
    dispatch(userActions.TicketListApi(props.location.search));
  }, [props.location.search, dispatch]);
  const handleIncrement = () => {
    setPage(page + 1);
    params.set("page", page + 1);
    props.history.push({
      pathname: "/request",
      search: params.toString()
    });
  };
  const handleDecrement = () => {
    setPage(page - 1);
    params.set("page", page - 1);
    props.history.push({
      pathname: "/request",
      search: params.toString()
    });
  };
  // const handleState = value => {
  //   params.set("state", value);
  //   props.history.push({
  //     pathname: "/request",
  //     search: params.toString()
  //   });
  // };
  const nextButtonDisable =
    ticketListCount &&
    PaginationButton({
      count: ticketListCount.request_count,
      to: parseInt(query.page) * 10
    });
  const handleTicketDetail = id => {
    props.history.push(`/ticket/detail/${id}`);
  };
  return (
    <Fragment>
      <div className="main">
        {ticketListCount && (
          <>
            <button
              disabled={PaginationPrevButton(parseInt(query.page))}
              onClick={handleDecrement}
            >
              {"<"}
            </button>
            |
            <button disabled={nextButtonDisable} onClick={handleIncrement}>
              {">"}
            </button>
          </>
        )}
        <span>
          Request Count is : {ticketListCount && ticketListCount.request_count}
        </span>
        {ticketListLoading && (
          <Spinner fontSize="40px" marginTop="60%"></Spinner>
        )}
        <div>
          {!ticketListLoading &&
            ticketList &&
            ticketList.map(data => (
              <div
                onClick={() => handleTicketDetail(data.requestId)}
                key={data.requestId}
                className="post-container"
              >
                <span>{data.requestId}</span>
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
}
export default withRouter(MyRequest);
