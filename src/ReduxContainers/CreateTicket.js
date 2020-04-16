import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "../ReusableComps/TextField";
import Button from "../ReusableComps/Button";
import FroalasEditor from "../FroalaEditor/FroalaEditor";
// import TextArea from "../ReusableComps/TextArea";
import Radio from "../ReusableComps/Radio";
import CheckBox from "../ReusableComps/CheckBox";
import DropDown from "../ReusableComps/DropDown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { userActions } from "../ApiCall/rootApi";
import FileUpload from "../components/FileUpload/FileUpload";

const today = new Date(Date.now());

function CreateTicket(props) {
  const [name, setName] = useState();
  const [subject, setSubject] = useState();
  const [email, setEmail] = useState();
  const [radio, setRadio] = useState();
  const [dropValue, setDropValue] = useState();
  const [selectedDate, setSelectedDate] = useState(today);
  const [assetCategory, setAssetCategory] = useState();
  const [assetType, setAssetType] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("X-Auth-Token");
    const apiCall = () => {
      token
        ? dispatch(userActions.CreateTicketApi(1))
        : dispatch(userActions.CreateTicketApi(0));
    };
    // dispatch(userActions.requestCategoryApi());
    //dispatch(userActions.LocationApi());
    // dispatch(userActions.CompanyApi());
    //  dispatch(userActions.UserApi({location : 5,companyId :  16}));
    apiCall();
  }, [dispatch]);

  const categoryCall = () => {
    dispatch(userActions.requestCategoryApi());
  };
  const assetCategoryCall = () => {
    dispatch(userActions.AssetCategoryApi());
  };
  const assetTypeCall = () => {
    dispatch(userActions.AssetTypeApi({ assetCategoryId: assetCategory }));
  };

  const assetCall = () => {
    dispatch(userActions.AssetCountApi());
    dispatch(
      userActions.ChooseAssetApi({
        assetCategoryId: assetCategory,
        assetTypeId: assetType,
        to: 10
      })
    );
  };

  const handleName = e => {
    setName(e.target.value);
  };
  const handleSubject = model => {
    setSubject(model);
  };
  const handleMail = event => {
    setEmail(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    alert("test Success");
  };
  const handleRadio = e => {
    setRadio(e.target.value);
  };
  const handleCheck = e => {
    console.log(e.target.value, e.target.checked);
  };

  const handleDrop = e => {
    setDropValue(e.target.value);
  };

  const handleDate = date => {
    setSelectedDate(date);
  };
  const handleAssetCategory = e => {
    setAssetCategory(e.target.value);
  };
  const handelAssetType = e => {
    setAssetType(e.target.value);
  };
  const CreateFormData = useSelector(
    state => state.createTicketReducer.createTicketData
  );
  //  CATEGORY DROPDOWN LIST
  const CategoryOptions = useSelector(
    state => state.requestCategoryReducer.requestCategoryData
  );
  const CategoryList = (CategoryOptions || []).map(data => {
    return <option value={data.id}>{data.category}</option>;
  });
  // ASSET CATEGORY DROPDOWN LIST
  const AssetCategoryOptions = useSelector(
    state => state.AssetCategoryReducer.AssetCategoryData
  );
  const AssetCategoryList = (AssetCategoryOptions || []).map(data => {
    return <option value={data.id}>{data.categoryName}</option>;
  });
  // ASSET TYPE DROPDOWN LIST
  const AssetTypeOptions = useSelector(
    state => state.AssetTypeReducer.AssetTypeData
  );
  const AssetTypeList = (AssetTypeOptions || []).map(data => {
    return <option value={data.id}>{data.model}</option>;
  });
  // ASSET DROPDOWN LIST
  // const AssetOptions= useSelector(state => state.ChooseAssetReducer.ChooseAssetData)

  //  const AssetList = (AssetOptions.payload||[]).map(data=>{
  //       return <option value={data.id}>{data.model}</option>
  //     })
  const AssetGroup = (CreateFormData || []).map(element => {
    if (element.field_type_id === 101) {
      return (
        <div onClick={assetCategoryCall}>
          <DropDown
            value={assetCategory}
            onChange={handleAssetCategory}
            text={element.field_label}
            placeholder={element.field_placeholder}
            options={AssetCategoryList}
          />
        </div>
      );
    } else if (element.field_type_id === 107) {
      return (
        <div onClick={assetTypeCall}>
          <DropDown
            value={assetType}
            onChange={handelAssetType}
            text={element.field_label}
            placeholder={element.field_placeholder}
            options={AssetTypeList}
          />
        </div>
      );
    } else if (element.field_type_id === 4) {
      return (
        <div onClick={assetCall}>
          <DropDown
            value={dropValue}
            onChange={handleDrop}
            text={element.field_label}
            placeholder={element.field_placeholder}
          />
        </div>
      );
    }
    return true;
  });

  const form = (CreateFormData || []).map((element, i) => {
    if (element.field_type_id === 80) {
      return (
        <div className="create-ticket-field-cont">
          <TextField
            type="text"
            placeholder={element.field_placeholder}
            text={element.field_label}
            required={true}
            onChange={handleName}
          />
        </div>
      );
    }
    if (element.field_type_id === 1 || element.field_type_id === 82) {
      return (
        <div className="create-ticket-field-cont">
          <TextField
            type="text"
            placeholder={element.field_placeholder}
            text={element.field_label}
            required={true}
            onChange={handleSubject}
          />
        </div>
      );
    } else if (element.field_type_id === 2) {
      return (
        <div className="create-ticket-field-cont">
          {/* <TextArea
              placeholder="Textarea"
              text="Description"
              required={true}
              onChange={handleSubject}
            /> */}
          <div className="f-14">
            <label>Description</label>
          </div>
          <div style={{ marginTop: "10px" }}>
            <FroalasEditor
              tag="textarea"
              model={subject}
              onModelChange={handleSubject}
              name={element.field_label}
            />
          </div>
        </div>
      );
    } else if (element.field_type_id === 16 || element.field_type_id === 84) {
      return (
        <div className="create-ticket-field-cont" onClick={categoryCall}>
          <DropDown
            value={dropValue}
            onChange={handleDrop}
            text={element.field_label}
            placeholder={element.field_placeholder}
            options={CategoryList}
          />
        </div>
      );
    } else if (element.field_type === "dropdown") {
      return (
        <div className="create-ticket-field-cont">
          <DropDown
            value={dropValue}
            onChange={handleDrop}
            text={element.field_label}
            placeholder={element.field_placeholder}
          />
        </div>
      );
    } else if (element.field_type_id === 81) {
      return (
        <div className="create-ticket-field-cont">
          <TextField
            type="email"
            placeholder={element.field_placeholder}
            text={element.field_label}
            required={true}
            value={email}
            onChange={handleMail}
          />
        </div>
      );
    } else if (element.field_type === "email") {
      return (
        <div className="create-ticket-field-cont">
          <TextField
            type="email"
            placeholder={element.field_placeholder}
            text={element.field_label}
            required={true}
            value={email}
            onChange={handleMail}
          />
        </div>
      );
    } else if (element.field_type === "radio") {
      const list = element.field_options.map(data => {
        return (
          <div style={{ margin: "10px 0" }}>
            <Radio
              text={data.option_title}
              value={data.option_title}
              onChange={handleRadio}
            />
          </div>
        );
      });
      return (
        <div className="create-ticket-field-cont">
          <div className="f-14">
            <label>{element.field_label}</label>
          </div>
          {list}
        </div>
      );
    } else if (element.field_type === "checkbox") {
      return (
        <div className="create-ticket-field-cont">
          <CheckBox
            text={element.field_label}
            value={element.field_label}
            onChange={handleCheck}
          />
        </div>
      );
    } else if (element.field_type === "date") {
      return (
        <div className="create-ticket-field-cont">
          <div className="f-14">
            <label>{element.field_label}</label>
          </div>
          <div style={{ margin: "10px 0" }}>
            <DatePicker
              selected={selectedDate}
              onChange={handleDate}
            ></DatePicker>
          </div>
        </div>
      );
    } else if (element.field_type_id === 4) {
      return <div>{AssetGroup}</div>;
    }
    return true;
  });

  return (
    <Fragment>
      <div className=" main main-create-ticket">
        Create Ticket
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          {form}
          <div className="create-ticket-field-cont">
            <FileUpload></FileUpload>
          </div>
          <div>
            <Button text="Submit" className="primary-btn btn-wide" />
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default CreateTicket;
