const broker = require('./broker/broker.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(broker);
};
