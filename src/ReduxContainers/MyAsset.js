import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
import { withRouter } from "react-router-dom";
import Spinner from "../ReusableComps/Spinner";
//import queryString from "query-string";

function MyAsset(props) {
  //const query = queryString.parse(props.location.search);
  const assetData = useSelector(state => state.AssetListReducer.AssetList);
  const assetLoading = useSelector(state => state.AssetListReducer.loading);
  const assetCount = useSelector(state => state.AssetCountReducer.AssetCount);
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
  const assetDatas = assetData !== undefined && assetData.payload;
  return (
    <Fragment>
      <div className="main">
        My Asset
        <div>
          asset count : {assetCount !== undefined && assetCount.assetCount}
        </div>
        <div>
          {assetLoading ? (
            <div>
              <Spinner fontSize="40px"></Spinner>
            </div>
          ) : (
            <div>
              {assetDatas &&
                assetDatas.map(data => <div key={data.id}>{data.item}</div>)}
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}
export default withRouter(MyAsset);
