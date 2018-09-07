

const fetchPostHook = require('../../hooks/fetch-post-hook');

module.exports = {
  before: {
    all: [],
    find: [fetchPostHook()],
    get: [fetchPostHook()],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
