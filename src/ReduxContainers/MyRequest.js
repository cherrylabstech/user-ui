import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
import { withRouter } from "react-router-dom";
//import queryString from "query-string";
function MyRequest(props) {
  //   const query = queryString.parse(props.location.search);
  //   const ticketList = useSelector(state => state.TicketListReducer.TicketList);
  //   const ticketListLoading = useSelector(
  //     state => state.TicketListReducer.loading
  //   );
  //const [page, setPage] = useState(parseInt(query.page) || 1);
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
    dispatch(userActions.TicketListApi(props.location.search),
    dispatch(userActions.TicketCountApi(-1)));
  }, [props.location.search, dispatch]);
  //let params = new URLSearchParams(props.location.search);
  // const handleIncrement = () => {
  //   setPage(page + 1);
  //   params.set("page", page + 1);
  //   props.history.push({
  //     pathname: "/request",
  //     search: params.toString()
  //   });
  // };
  // const handleDecrement = () => {
  //   setPage(page - 1);
  //   params.set("page", page - 1);
  //   props.history.push({
  //     pathname: "/request",
  //     search: params.toString()
  //   });
  // };
  return (
    <Fragment>
      <div className="main">My Request</div>
    </Fragment>
  );
}
export default withRouter(MyRequest);
