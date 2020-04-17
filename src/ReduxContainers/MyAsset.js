import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
import { withRouter } from "react-router-dom";
import  "/home/cherry-dev02/workspace/User-UI 2.0/user-ui/src/css/myAsset.css"
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
  const list = (assetDatas || []).map(element => {
      return (
        <tr
          key={element.id}
          className="cursor-pointer"
        >
          <td>{element.item}</td>
          <td>{element.category}</td>
          <td>{element.model}</td>
          <td>{element.state}</td>
          <td>{element.startDate}</td>
          {/* <td>
            {element.startDate === null ? null : Timestamp(element.startDate)}
          </td> */}
        </tr>
      );
    });
  return (
    <Fragment>
      <div className="main">
        My Asset
        <div className="asset-page">
         <div className="count-row"> asset count : {assetCount !== undefined && assetCount.assetCount}
        </div>
        <div>
          {assetLoading ? (
            <div>
              <Spinner fontSize="40px"></Spinner>
            </div>
          ) : (
            <div className="asset-table">
              {assetDatas &&
                <table><thead>
                  <tr>
                    <td>
                    Asset Name
                    </td>
                    <td>
                    Category Name
                    </td>
                    <td>
                    Asset Type
                    </td>
                    <td>
                    Asset State
                    </td>
                    <td>
                    Start Date
                    </td>
                  </tr>
                </thead><tbody>{list}</tbody></table>}
            </div>
          )}
        </div>
        </div>
      </div>
    </Fragment>
  );
}
export default withRouter(MyAsset);
