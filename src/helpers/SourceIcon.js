import web from "../components/IconImages/web.svg";
import email from "../components/IconImages/email.svg";
import facebook from "../components/IconImages/facebook.svg";
import twitter from "../components/IconImages/twitter.svg";
import phone from "../components/IconImages/phone.svg";
import crossTenant from "../components/IconImages/crossTenant.svg";
import send from "../components/IconImages/send.svg";
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
