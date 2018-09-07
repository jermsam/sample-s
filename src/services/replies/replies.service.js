// Initializes the `replies` service on path `/replies`
const createService = require('feathers-sequelize');
const createModel = require('../../models/replies.model');
const hooks = require('./replies.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/replies', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('replies');

  service.hooks(hooks);
};
