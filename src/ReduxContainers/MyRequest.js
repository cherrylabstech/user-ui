import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
function MyRequest() {
  const value=useSelector(state=>state)
  console.log(value)
  const dispatch = useDispatch();
  useEffect(()=>{
    const apiCall = ()=>{
      dispatch(userActions.PriorityApi(),
      dispatch(userActions.DashBoardApi(),
      dispatch(userActions.TicketListApi())))
    }
    apiCall()
  },[dispatch])
  return (
    <Fragment>
      <div className="main">My Request</div>
    </Fragment>
  );
}
export default MyRequest;
