import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "../ReusableComps/TextField";
import Button from "../ReusableComps/Button";
import FroalasEditor from "../FroalaEditor/FroalaEditor"
// import TextArea from "../ReusableComps/TextArea";
import Radio from "../ReusableComps/Radio";
import CheckBox from "../ReusableComps/CheckBox";
import DropDown from "../ReusableComps/DropDown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { userActions } from "../ApiCall/rootApi";

const today = new Date(Date.now());

function CreateTicket(props) {
  const [subject, setSubject] = useState();
  const [email, setEmail] = useState();
  const [radio, setRadio] = useState();
  const [dropValue, setDropValue] = useState();
  const [selectedDate, setSelectedDate] = useState(today);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("X-Auth-Token");
    const apiCall = () => {
      token
        ? dispatch(userActions.CreateTicketApi(1))
        : dispatch(userActions.CreateTicketApi(0));
    };
    apiCall();
  }, [dispatch]);
  const CreateFormData = useSelector(state => state.createTicketReducer);
  console.log(CreateFormData);
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

  return (
    <Fragment>
      <div className=" main main-create-ticket">
        Create Ticket
        <form onSubmit={handleSubmit}>
          <div className="create-ticket-field-cont">
            <TextField
              type="text"
              placeholder="Type Something"
              text="Subject"
              required={true}
              onChange={handleSubject}
            />
          </div>
          <div className="create-ticket-field-cont">
            <TextField
              type="email"
              placeholder="Type Mail Id"
              text="Mail Id"
              required={true}
              onChange={handleMail}
            />
          </div>
          <div className="create-ticket-field-cont">
            {/* <TextArea
              placeholder="Textarea"
              text="Description"
              required={true}
              onChange={handleSubject}
            /> */}
            <FroalasEditor
              tag="textarea"
              model={subject}
              onModelChange={handleSubject}
              name="description"
            />
          </div>
          <div className="create-ticket-field-cont">
            <div>
              <Radio
                text="Public"
                value="public"
                onChange={handleRadio}
                required={true}
              />
              <Radio
                text="Private"
                value="private"
                onChange={handleRadio}
                required={true}
              />
            </div>
          </div>
          <div className="create-ticket-field-cont">
            <div>
              <CheckBox
                text="Yes"
                value="public"
                onChange={handleCheck}
                required={true}
              />
              <CheckBox
                text="No"
                value="private"
                onChange={handleCheck}
                required={false}
              />
            </div>
          </div>
          <div className="create-ticket-field-cont">
            <DropDown onChange={handleDrop} />
          </div>
          <div className="create-ticket-field-cont">
            <DatePicker
              selected={selectedDate}
              onChange={handleDate}
            ></DatePicker>
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
