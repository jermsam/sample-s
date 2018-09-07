const { authenticate } = require('@feathersjs/authentication').hooks;

const convertFileToImageUri = require('../../hooks/convert-file-to-image-uri');

const makeFilePublic = require('../../hooks/make-file-public');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [convertFileToImageUri(), makeFilePublic()],
    update: [convertFileToImageUri(), makeFilePublic()],
    patch: [convertFileToImageUri(), makeFilePublic()],
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
