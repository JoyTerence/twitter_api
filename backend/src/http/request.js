const axios = require('axios');

const request = async ({
  method = 'GET',
  url = '/',
  data = {},
  headers = {Authorization: "Bearer " + process.env.TWITTER_TOKEN},
  otherConfigs = {}
}) => {
  return await axios.default({
    method,
    url,
    data,
    headers,
    ...otherConfigs
  });
};

module.exports = { request };