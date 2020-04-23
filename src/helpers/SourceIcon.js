import web from "../Component/IconImages/web.svg";
import email from "../Component/IconImages/email.svg";
import facebook from "../Component/IconImages/facebook.svg";
import twitter from "../Component/IconImages/twitter.svg";
import phone from "../Component/IconImages/phone.svg";
import crossTenant from "../Component/IconImages/cross-tenant.svg";
import send from "../Component/IconImages/send.svg";
export const sourceIcon = source => {
  switch (source) {
    case 0:
      return send;
    case 1:
      return web;
    case 2:
      return email;
    case 3:
      return facebook;
    case 4:
      return twitter;
    case 5:
      return phone;
    case 6:
      return crossTenant;
    default:
      return "fas fa-laptop";
  }
};

export const sourceType = source => {
  switch (source) {
    case 1:
      return "Web";
    case 2:
      return "E-Mail";
    case 3:
      return "Facebook";
    case 4:
      return "Twitter";
    case 5:
      return "Mobile";
    case 6:
      return "Cross Tenant";
    default:
      return "Web";
  }
};
