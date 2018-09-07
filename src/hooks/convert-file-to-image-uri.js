/* eslint-disable no-console */
// before-create Hook to get the file (if there is any)
// and turn it into a datauri,
// transparently getting feathers-blob to work
// with multipart file uploads
const {getBase64DataURI} = require('dauria');
// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    if (!context.data.uri && context.params.file){
      const file = context.params.file;
      const uri = getBase64DataURI(file.buffer, file.mimetype);
      context.data = {uri: uri};
    }
    return context;
  };
};