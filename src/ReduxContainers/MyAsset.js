import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
import { withRouter } from "react-router-dom";
import { Timestamp } from "../helpers/Timestamp";
import "../css/myAsset.css";
import Spinner from "../ReusableComps/Spinner";
import queryString from "query-string";

function MyAsset(props) {
  const query = queryString.parse(props.location.search);
  const assetData = useSelector(state => state.AssetListReducer.AssetList);
  const assetLoading = useSelector(state => state.AssetListReducer.loading);
  const assetCount = useSelector(state => state.AssetCountReducer.AssetCount);
  let params = new URLSearchParams(props.location.search);
  const [page, setPage] = useState(parseInt(query.page) || 1);
  const dispatch = useDispatch();
  useEffect(() => {
    const apiCall = () => {
      dispatch(userActions.AssetCountApi());
    };
    apiCall();
  }, [dispatch]);
  useEffect(() => {
    dispatch(userActions.AssetListApi(props.location.search));
  }, [props.location.search, dispatch]);
  const handleIncrement = () => {
    setPage(page + 1);
    params.set("page", page + 1);
    props.history.push({
      pathname: "/asset",
      search: params.toString()
    });
  };
  const handleDecrement = () => {
    setPage(page - 1);
    params.set("page", page - 1);
    props.history.push({
      pathname: "/asset",
      search: params.toString()
    });
  };
  const handleAssetDetail = id => {
    props.history.push(`/asset/detail/${id}`);
  };
  const assetDatas = assetData !== undefined && assetData.payload;
  const list = (assetDatas || []).map(element => {
    return (
      <tr
        onClick={() => handleAssetDetail(element.id)}
        key={element.id}
        className="cursor-pointer"
      >
        <td>{element.item}</td>
        <td>{element.category}</td>
        <td>{element.model}</td>
        <td>{element.state}</td>
        {element.startDate ? (
          <td>{Timestamp(element.startDate)}</td>
        ) : (
          <td>null</td>
        )}
      </tr>
    );
  });
  return (
    <Fragment>
      <div className="main">
        My Asset
        <div className="asset-page">
          <div className="count-row">
            asset count : {assetCount !== undefined && assetCount.assetCount}
            <div className="pagination-box">
              <span onClick={handleDecrement}> {"<"} </span> |{" "}
              <span onClick={handleIncrement}>{">"}</span>
            </div>
          </div>
          <div>
            {assetLoading ? (
              <div>
                <Spinner fontSize="40px"></Spinner>
              </div>
            ) : (
              <div className="asset-table">
                {assetDatas && (
                  <table>
                    <thead>
                      <tr>
                        <td>Asset Name</td>
                        <td>Category Name</td>
                        <td>Asset Type</td>
                        <td>Asset State</td>
                        <td>Start Date</td>
                      </tr>
                    </thead>
                    <tbody>{list}</tbody>
                  </table>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default withRouter(MyAsset);
