import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
import { withRouter } from "react-router-dom";
import PopUp from "../components/PopUp/PopUp";
//import queryString from "query-string";

function MyAsset(props) {
  //const query = queryString.parse(props.location.search);
  //const asset = useSelector(state => state.AssetListReducer.AssetList);
  // let params = new URLSearchParams(props.location.search);
  // const [page, setPage] = useState(parseInt(query.page) || 1);
  const dispatch = useDispatch();
  useEffect(() => {
    const apiCall = () => {
      dispatch(userActions.AssetCountApi());
      dispatch(userActions.AssetDetailApi());
    };
    apiCall();
  }, [dispatch]);
  useEffect(() => {
    dispatch(userActions.AssetListApi(props.location.search));
  }, [props.location.search, dispatch]);
  // const handleIncrement = () => {
  //   setPage(page + 1);
  //   params.set("page", page + 1);
  //   props.history.push({
  //     pathname: "/asset",
  //     search: params.toString()
  //   });
  // };
  // const handleDecrement = () => {
  //   setPage(page - 1);
  //   params.set("page", page - 1);
  //   props.history.push({
  //     pathname: "/asset",
  //     search: params.toString()
  //   });
  // };
  return (
    <Fragment>
      <div className="main">
        My Asset
        <PopUp></PopUp>
      </div>
    </Fragment>
  );
}
export default withRouter(MyAsset);
