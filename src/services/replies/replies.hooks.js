

const fetchReplyHook = require('../../hooks/fetch-reply-hook');

module.exports = {
  before: {
    all: [],
    find: [fetchReplyHook()],
    get: [fetchReplyHook()],
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
