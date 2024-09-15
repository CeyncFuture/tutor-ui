import axios from 'axios';
import {get} from "lodash";
import config from "../config";

const fetch = (url, options = {}) => {
  if (!url && typeof url !== 'string') {
    return;
  }
  url = get(config,'API_URL')+url;
  const {method = 'GET', body, headers = {}} = options;
  const token = sessionStorage.getItem('usrtkn');
  const requestHeaders = Object.assign({}, {
    authorization: `Bearer ${token}`,
    'Content-Type': headers.contentType || 'application/json'
  }, headers);

  let payload = body;
  if (method !== 'DELETE' && method !== 'GET') {
    payload = payload || {};
    if (!headers.contentType){
      payload = JSON.stringify(payload);
    }
  }

  const requestData = {
    url,
    method,
    headers: requestHeaders,
    data: payload
  };

  return axios(requestData)
    .then((response)=>{
      return { data: response.data, error: null };
    })
    .catch((error) => {
      console.log("error", error);
      return { data: null, error: error };
    });
};

export default fetch;
