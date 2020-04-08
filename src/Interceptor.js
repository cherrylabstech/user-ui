import axios from "axios";

axios.interceptors.request.use(
  request => {
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    if (error.response.status === 401) {
      alert("Enter Correct Credentials");
    }
    return Promise.reject(error);
  }
);
