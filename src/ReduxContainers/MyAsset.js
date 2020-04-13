import React, { Fragment,useEffect  } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
function MyAsset() {
  const dispatch = useDispatch();
  useEffect(()=>{
    const apiCall=()=>{
      dispatch(userActions.AssetListApi(),
      dispatch(userActions.AssetCountApi()))
    }
    apiCall()
  },[dispatch])
  return (
    <Fragment>
      <div className="main">My Asset</div>
    </Fragment>
  );
}
export default MyAsset;
