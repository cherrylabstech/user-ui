import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
import { withRouter } from "react-router-dom";
import parse from "html-react-parser";
import Spinner from "../ReusableComps/Spinner";
function MyRequestDetail(props) {
  const dispatch = useDispatch();
  const ticketDetailDatas = useSelector(
    state => state.TicketDetailReducer.TicketDetailData
  );
  const ticketDetailLoading = useSelector(
    state => state.TicketDetailReducer.loading
  );
  const stateData = useSelector(
    state => state.TicketDetailStateReducer.TicketDetailStateData
  );
  const ticketDetailData = ticketDetailDatas && ticketDetailDatas.payload;
  useEffect(() => {
    dispatch(userActions.TicketDetailApi(props.match.params.ticketId));
    dispatch(userActions.TicketDetailStateApi(props.match.params.ticketId));
  }, [dispatch, props.match.params.ticketId]);
  return (
    <Fragment>
      <div className="main">
        My Request Detail
        {ticketDetailLoading && (
          <Spinner fontSize="60px" marginTop="40%"></Spinner>
        )}
        {!ticketDetailLoading && ticketDetailData && (
          <div>{parse(ticketDetailData.description)}</div>
        )}
      </div>
    </Fragment>
  );
}
export default withRouter(MyRequestDetail);
