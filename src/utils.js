export const apiCall = (url, method = 'GET', body) => {
  const token = process.env.ACCESS_TOKEN;
  const options = {
    method,
    headers: {
      Authorization : `${token}`,
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    options['body'] = JSON.stringify(body);
  }
  return new Promise((res, rej) => {
    fetch(url, options)
      .then((response) => {
        if (String(response.status)[0] !== '2') {
          rej(response);
        }
        res(response.json());
      })
      .catch((err) => rej(err));
  });
};