import {profile} from "../Routes/routes"

export const Timestamp = date => {
  let zone = profile.timezoneOfset;
  let moment = require("moment");
  // let time = new Date(date * 1000);
  let formatted = moment
    .unix(date + zone)
    .utc()
    .format("MMM Do YYYY");
  return formatted;
};