// Initializes the `broker` service on path `/broker`
const createService = require('feathers-mongoose');
const createModel = require('../../models/broker.model');
const hooks = require('./broker.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/broker', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('broker');

  service.hooks(hooks);
};
