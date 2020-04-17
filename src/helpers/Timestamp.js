import { profile } from "../Routes/routes";

export const Timestamp = date => {
  let zone = profile.timezoneOfset;
  let moment = require("moment");
  let formatted =
    date !== undefined &&
    moment
      .unix(date + zone)
      .utc()
      .format("MMM Do YYYY");
  return date !== undefined && formatted;
};
