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

export const DetailsTimestamp = timeDate => {
  let zone = profile.timezoneOfset;
  let timeOffset = parseInt(timeDate) + parseInt(zone);
  let moment = require("moment");
  let formatted = moment
    .unix(timeOffset)
    .utc()
    .format("Do MMM YYYY, h:mm a ");
    return formatted}