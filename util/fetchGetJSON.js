export default (url, customHeaders) => {
  const defaultHeaders = {
    'Accept': 'application/json',
    'Content-type': 'application/json',
  };
  const headers = {
    ...defaultHeaders,
    ...customHeaders,
  };
  const options = {
    method: 'GET',
    headers: headers,
  };

  // console.log(url);
  // console.log(options);
  return fetch(url, options).then(response => {
    if (response.status >= 400) {
      // throw new Error(response.status);
      Promise.reject(null, response.status);
    }
    return response.json();
  }).catch((error, statusCode) => {
    console.log(error);
    console.log(statusCode);
  });
}

// fetchGetJson(url).then().catch()