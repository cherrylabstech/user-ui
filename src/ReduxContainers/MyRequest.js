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
import PopUp from "../components/PopUp/PopUp";
import FroalasEditor from "../FroalaEditor/FroalaEditor";
import Radio from "../ReusableComps/Radio";
import { Pagination } from "../helpers/Pagination";
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
  const [isOpen, setIsOpen] = useState(false);
  const [model, setModelChange] = useState("");
  const [elementsPerPage] = useState(10);
  const [requestId, setRequestId] = useState("");
  const [refreshRequestId, setRefreshRequestId] = useState("");
  const [status, setStatus] = useState("");
  const [radio, setRadio] = useState(false);
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
  const statePostLoading = useSelector(
    state => state.TicketDetailPostStateReducer.loading
  );
  const priorityPostLoading = useSelector(
    state => state.PriorityPostReducer.loading
  );
  //PriorityPostReducer
  const ticketList = ticketListData && ticketListData.payload;
  const dispatch = useDispatch();
  useEffect(() => {
    const apiCall = () => {
      dispatch(userActions.PriorityApi(), dispatch(userActions.DashBoardApi()));
    };
    apiCall();
  }, [dispatch]);
  //Ticket List Refresh
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(userActions.TicketListRefreshApi(props.location.search, 10));
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  });
  //Ticket List
  useEffect(() => {
    dispatch(userActions.TicketCountApi(props.location.search));
  }, [query.state, dispatch]);
  useEffect(() => {
    dispatch(userActions.TicketListApi(props.location.search, elementsPerPage));
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

  const handleRadioChange = () => {
    setRadio(!radio);
  };
  const handleStateBlur = () => {
    dispatch(getTicketDetailState());
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleModelChange = model => {
    setModelChange(model);
  };
  function handlePriorityChange(id) {
    const priorityChange = selectedOption => {
      setRefreshRequestId(id);
      dispatch(
        userActions.PriorityPostApi({
          ticketId: id,
          location: props.location.search,
          priorityId: selectedOption.key,
          pathname: props.location.pathname
        })
      );
    };
    return priorityChange; // you can also do return _onChange.bind(this) if you need the scope.
  }
  function handleStateChange(id) {
    const stateChange = selectedOption => {
      setStatus(selectedOption.key);
      setRequestId(id);
      setRefreshRequestId(id);
      let state = () => {
        dispatch(
          userActions.TicketDetailStatePostApi({
            stateData: {
              contentType: "text/html",
              requestId: id,
              role: 1,
              status: selectedOption.key
            },
            location: {
              location: props.location.pathname,
              search: props.location.search
            }
          })
        );
      };

      selectedOption.status === true ? setIsOpen(true) : state();
    };
    return stateChange; // you can also do return _onChange.bind(this) if you need the scope.
  }

  const onStateNoteChange = () => {
    setIsOpen(false);
    dispatch(
      userActions.TicketDetailStatePostApi({
        stateData: {
          contentType: "text/html",
          is_private: radio,
          requestId: requestId,
          role: 1,
          status: status,
          subject: model
        },
        location: {
          location: props.location.pathname,
          search: props.location.search
        }
      })
    );
    setModelChange("");
    setRequestId("");
    setRadio(false);
    setStatus("");
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
        status: data.note_status,
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
  const paginations = Pagination(props.location.search, elementsPerPage);
  const from = paginations.from || 0;
  const to = paginations.to || 10;
  return (
    <Fragment>
      <div className="main">
        <PopUp
          isOpen={isOpen}
          heading="Enter Comment"
          closeModal={handleCloseModal}
          className="ticket-listing"
        >
          <FroalasEditor
            model={model}
            onModelChange={handleModelChange}
          ></FroalasEditor>
          <div className="state-modal-dialog">
            <Radio
              checked={!radio}
              text="Public"
              onChange={handleRadioChange}
            />
            <Radio
              checked={radio}
              text="Private"
              onChange={handleRadioChange}
            />
            <button
              disabled={model.length >= 1 ? false : true}
              onClick={onStateNoteChange}
            >
              Submit
            </button>
          </div>
        </PopUp>
        <div className="ticket-list-top-bar">
          <div className="ticket-list-search-box">
            <input type="text" />
          </div>
          {ticketListCount && (
            <>
              <div className="page-count-details">
                {from} &nbsp;- &nbsp; {to} &nbsp; &nbsp;
                {ticketListCount && ticketListCount.request_count}
              </div>
              <div className="pagination-button">
                <button
                  disabled={PaginationPrevButton(parseInt(query.page))}
                  onClick={handleDecrement}
                >
                  {"<"}
                </button>

                <button disabled={nextButtonDisable} onClick={handleIncrement}>
                  {">"}
                </button>
              </div>
            </>
          )}
        </div>
        {ticketListLoading && (
          <Spinner fontSize="60px" marginTop="40%"></Spinner>
        )}
        <div style={{ width: "100%" }}>
          {!ticketListLoading &&
            ticketList &&
            ticketList.map(data => (
              <div
                key={data.requestId}
                className="post-container"
                style={
                  (statePostLoading || priorityPostLoading) &&
                  refreshRequestId === data.requestId
                    ? { opacity: 0.5 }
                    : { opacity: 1 }
                }
              >
                <div className="src-img">
                  <img src={sourceIcon(data.source)} alt="src" />
                </div>
                {(statePostLoading || priorityPostLoading) &&
                  refreshRequestId === data.requestId && (
                    <Spinner
                      fontSize="30px"
                      position="absolute"
                      marginLeft="20%"
                    ></Spinner>
                  )}
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
                    <div></div>
                    <div className="d-flex mr-5">
                      <img src={clock} width="15px" alt="created" />
                      {DetailsTimestamp(data.createTime)}
                    </div>
                  </div>
                </div>
                <div>
                  <SelectDropDown
                    onChange={handlePriorityChange(data.requestId)}
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
                    onChange={handleStateChange(data.requestId)}
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
