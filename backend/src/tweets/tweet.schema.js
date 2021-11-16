const queryTweetSchema = {
  querystring: {
    name: { type: "string" },
  },
  response: {
    200: {
      type: "object",
    },
  },
};

module.exports = {
  queryTweetSchema,
};
