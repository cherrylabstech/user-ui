import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
import { withRouter } from "react-router-dom";
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
  return (
    <Fragment>
      <div className="main">
        My Asset Detail
        {assetDetailLoading ? (
          <div>
            <Spinner fontSize="30px"></Spinner>
          </div>
        ) : (
          assetDetailData && <div>{assetDetailData.team}></div>
        )}
      </div>
    </Fragment>
  );
}
export default withRouter(MyAssetDetail);
