const constants = {
  PORT: process.env.PORT || 5000,
  IS_MOCK: process.env.NODE_ENV === "mock",
  IS_DEV: process.env.NODE_ENV === "development",
};

module.exports = constants;
