const { queryTweetSchema } = require("./tweet.schema");

const tweetService  = require("./tweet.service");

const getTweets = {
  method: "GET",
  url: "/get_tweets/:username",
  Schema: queryTweetSchema,
  handler: async (req, res) => {
    const userName = req?.params?.username;
    console.log("Fetching tweets for ", userName)
    const result = await tweetService.getTweetsByUsername(userName);
    return res.code(200).send(result);
  },
};

module.exports = [
  getTweets,
]
