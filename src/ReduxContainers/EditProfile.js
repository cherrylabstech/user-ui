import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../ApiCall/rootApi";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import DropDown from "../ReusableComps/DropDown";

function EditProfile(props) {
  const dispatch = useDispatch();
  const [timeZone, setTimeZone] = useState("");
  //const profileDetailData = props.profilePicture && props.profilePicture;
  useEffect(() => {
    const token = localStorage.getItem("X-Auth-Token");
    const tokenApiCalls = () => {
      dispatch(userActions.profileDetailsApi());
      dispatch(userActions.TimeZoneApi());
      //   dispatch(
      //     userActions.editProfileApi({
      //       first_Name: profileDetailData.first_name,
      //       last_Name: profileDetailData.last_name,
      //       notification_email: profileDetailData.notification_email,
      //       phone: profileDetailData.phone
      //     })
      //   );
      //   dispatch(
      //     userActions.TimeZonePostApi({
      //       timezone: 192
      //     })
      //   );
    };
    token && tokenApiCalls();
  }, [dispatch]);
  const timeZoneData = useSelector(state => state.TimeZoneReducer.TimeZoneData);
  const timeZoneLoading = useSelector(state => state.TimeZoneReducer.loading);
  const timeZoneoptions =
    timeZoneData &&
    timeZoneData.map(data => {
      return <option value={data.id}>{data.zone_name}</option>;
    });
  const handleZoneChange = event => {
    console.log(event.target);
    setTimeZone(event.target.value);
  };
  return (
    <Fragment>
      <div className="main">
        <div>
          <label>Change Profie Picture</label>
          <ImageUpload
            profilePicture={props.profilePicture}
            loading={props.loading}
          ></ImageUpload>
        </div>
        <div>
          <label>TimeZone</label>
          <DropDown
            value={timeZone}
            onChange={handleZoneChange}
            options={
              timeZoneLoading ? <option>Loading</option> : timeZoneoptions
            }
          ></DropDown>
        </div>
      </div>
    </Fragment>
  );
}
export default EditProfile;
