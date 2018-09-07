
// feathers-blob service
const blobService = require('feathers-blob');
// Here we use feathers-blob with AWS, 

const multer = require('multer');

const AWS = require('aws-sdk');

const S3BlobStore = require('s3-blob-store');

const hooks = require('./uploads.hooks');

module.exports = function (app) {
// Upload Service with multipart support
  const multipartMiddleware = multer();
  const {bucket,accessKeyId,secretAccessKey} = app.get('aws-s3');

  const client = new AWS.S3({
    accessKeyId,
    secretAccessKey
  });
  
  const blobStorage = S3BlobStore({
    client,
    bucket,
  });
 
  // Initialize our service with any options it requires
  app.use('/uploads',
    // multer parses the file named 'uri'.
    // Without extra params the data is
    // temporarely kept in memory
    multipartMiddleware.single('uri'),

    // another middleware, this time to
    // transfer the received file to feathers
    function(req,res,next){
      req.feathers.file = req.file;
      next();
    },
    blobService({ Model: blobStorage}), // createService(options)
  );
  

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('uploads');

  service.hooks(hooks);
};