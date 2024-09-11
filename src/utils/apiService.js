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
    'Content-Type': 'application/json'
  }, headers);

  let payload = body;
  if (method !== 'DELETE' && method !== 'GET') {
    payload = payload || {};
  }

  const requestData = {
    url,
    method,
    headers: requestHeaders,
    data: JSON.stringify(payload)
  };

  return axios(requestData)
    .then((response)=>{
      return { data: response.data, error: null };
    })
    .catch((error) => {
      return { data: null, error: error };
    });
};

export default fetch;
