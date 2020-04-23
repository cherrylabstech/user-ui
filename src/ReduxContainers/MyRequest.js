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
import SelectDropDown from "../helpers/StateDrop";
import { DetailsTimestamp } from "../helpers/Timestamp";
import clock from "../icons/clock.svg";

import "../css/myRequest.css";
import { sourceIcon } from "../helpers/SourceIcon";
import { getTicketDetailState } from "../ApiCall/TicketDetailStateApi";
export const loading = [
  {
    label: "Loading",
    value: "Loading"
  }
];
export const noData = [
  {
    label: "No Data",
    value: "No Data"
  }
];
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
  const stateData = useSelector(
    state => state.TicketDetailStateReducer.TicketDetailStateData
  );
  const stateLoading = useSelector(
    state => state.TicketDetailStateReducer.loading
  );

  const priorityData = useSelector(state => state.PriorityReducer.PriorityData);
  const priorityLoading = useSelector(state => state.PriorityReducer.loading);
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
      pathname: "/ticket",
      search: params.toString()
    });
  };
  const handleDecrement = () => {
    setPage(page - 1);
    params.set("page", page - 1);
    props.history.push({
      pathname: "/ticket",
      search: params.toString()
    });
  };
  // const handleState = value => {
  //   params.set("state", value);
  //   props.history.push({
  //     pathname: "/ticket",
  //     search: params.toString()
  //   });
  // };
  const handleState = ticketId => {
    dispatch(userActions.TicketDetailStateApi(ticketId));
  };

  const handleStateChange = value => {
    console.log(value);
  };
  const handleStateBlur = () => {
    dispatch(getTicketDetailState());
  };
  const handlePriorityChange = value => {
    console.log(value);
  };
  const nextButtonDisable =
    ticketListCount &&
    PaginationButton({
      count: ticketListCount.request_count,
      to: parseInt(query.page) * 10
    });
  const handleTicketDetail = id => {
    props.history.push(`/ticket/detail/${id}`);
  };
  const dropDownOptions =
    stateData &&
    stateData.map(data => {
      return {
        value: data.state_type,
        label: data.state_type,
        key: data.id
      };
    });
  const priorityOptions =
    priorityData &&
    priorityData.map(data => {
      return {
        value: data.priority_state,
        label: data.priority_state,
        key: data.priority_id
      };
    });

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
          <Spinner fontSize="40px" marginTop="50%"></Spinner>
        )}
        <div style={{ width: "100%" }}>
          {!ticketListLoading &&
            ticketList &&
            ticketList.map(data => (
              <div key={data.requestId} className="post-container">
                <div className="src-img">
                  <img src={sourceIcon(data.source)} alt="src" />
                </div>
                <div style={{ width: "325px" }}>
                  <div
                    onClick={() => handleTicketDetail(data.requestId)}
                    className="ticket-subject-row"
                  >
                    <div>{data.requestId}</div>
                    <div className="ticket-subject">{data.subject}</div>
                  </div>
                  <div className="ticket-mini-info">
                    <div className="d-flex mr-5">
                      <img src={clock} width="15px" alt="created" />
                      {DetailsTimestamp(data.createTime)}
                    </div>
                    <div className="d-flex mr-5">
                      <img src={clock} width="15px" alt="created" />
                      {DetailsTimestamp(data.createTime)}
                    </div>
                  </div>
                </div>
                <div>
                  <SelectDropDown
                    onChange={handlePriorityChange}
                    name={data.priority}
                    options={
                      priorityLoading
                        ? loading
                        : priorityData && priorityOptions
                    }
                  />
                </div>
                <div
                  onBlur={handleStateBlur}
                  onClick={() => handleState(data.requestId)}
                >
                  <SelectDropDown
                    onChange={handleStateChange}
                    options={stateLoading ? loading : dropDownOptions}
                    name={data.state}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
}
export default withRouter(MyRequest);
