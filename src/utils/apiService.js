import axios from 'axios';

const fetch = (url, options = {}) => {
  if (!url && typeof url !== 'string') {
    return;
  }

  const {method = 'GET', body, headers = {}} = options;
  const requestHeaders = Object.assign({}, {
    Authorization: sessionStorage.getItem('usrtkn'),
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
    body: JSON.stringify(payload)
  };

  return axios(requestData)
    .catch((error) => {
      throw error;
    });
};

export default fetch;
