

const fetchCommentHook = require('../../hooks/fetch-comment-hook');

module.exports = {
  before: {
    all: [],
    find: [fetchCommentHook()],
    get: [fetchCommentHook()],
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
