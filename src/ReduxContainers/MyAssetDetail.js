import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
import { withRouter } from "react-router-dom";
import { Timestamp } from "../helpers/Timestamp";
import Spinner from "../ReusableComps/Spinner";
function MyAssetDetail(props) {
  const dispatch = useDispatch();
  const params = props.match.params;
  const assetDetail = useSelector(
    state => state.AssetDetailReducer.AssetDetail
  );
  const assetDetailLoading = useSelector(
    state => state.AssetDetailReducer.loading
  );
  const assetDetailData = assetDetail && assetDetail.payload;
  useEffect(() => {
    dispatch(userActions.AssetDetailApi(params.id));
  }, [dispatch]);

// const extraData = assetDetailData.customFields;
    // const detailData = (extraData || []).map((data, index) => {
    //   return (
    //     <tr key={index}>
    //       <td>{data.name}</td>
    //       <td>{data.data}</td>
    //     </tr>
    //   );
    // });

  return (
    <Fragment>
      <div className="main">
        My Asset Detail
        <div className="asset-detail-page">
        {assetDetailLoading ? (
          <div>
            <Spinner fontSize="30px"></Spinner>
          </div>
        ) : (
          <div className="asset-table">
          {assetDetailData && <table>
                    <tbody>
                      <tr>
                        <td>Asset Name</td>
                        <td>{assetDetailData.item}</td>
                      </tr>
                      <tr>
                        <td>Asset Descript</td>
                        <td>{assetDetailData.itemDesc}</td>
                      </tr>
                      <tr>
                        <td>Category Name</td>
                        <td>{assetDetailData.category}</td>
                      </tr>
                      <tr>
                        <td>Support Team</td>
                        <td>{assetDetailData.team}</td>
                      </tr>
                      <tr>
                        <td>Asset Type</td>
                        <td>{assetDetailData.model}</td>
                      </tr>
                      <tr>
                        <td>Asset State</td>
                        <td>{assetDetailData.state}</td>
                      </tr>
                      <tr>
                        <td>Start Date</td>
                        <td>
                          {assetDetailData.startDate === null ? null : Timestamp(assetDetailData.startDate)}
                        </td>
                      </tr>
                      <tr>
                        <td>End Date</td>
                        <td>
                          {assetDetailData.endDate === 0 || assetDetailData.endDate === null
                            ? null
                            : Timestamp(assetDetailData.endDate)}
                        </td>
                      </tr>
                      {/* {detailData} */}
                    </tbody>
                  </table>
        }</div>)}</div>
      </div>
    </Fragment>
  );
}
export default withRouter(MyAssetDetail);
