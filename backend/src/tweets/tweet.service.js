// const request = require("../http");
const axios = require("axios");

const getTweetsByUsername = async (username) => {
  const url =
    "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=" +
    username +
    "&count=10";

  const response = await axios.default({
    method: "GET",
    url,
    headers: { Authorization: "Bearer " + process.env.TWITTER_TOKEN },
  });

  const json = await response.data;

  return json;
};

module.exports = { getTweetsByUsername };
