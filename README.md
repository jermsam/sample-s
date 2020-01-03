# sample-s

> a rest/socket-io api for a sample social media

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.
Stores user data; credentials, posts, comments and replies in a postgres database (m)
The main 3rd party libraries are:
1. [s3-blob-store](https://github.com/jb55/s3-blob-store) for AWS-S3 Media Storage 
2. [sequelize] (https://github.com/sequelize/sequelize) for Relation Database Mapping with postgres


## To Run it

Getting up and running is as easy as 1, 2, 3.

1. Clone the repository.
2. Install your dependencies

    ```
    cd path/to/sample-s; yarn
    ```
3. Set up a postgres database and aws-s3 store bucket and then write  a .env file that defines the following constants:

```
DB_URL = # the database url for your postgres database
SECRET = # any random string for your jwt authentic secret
AWSBucket = # your aws-s3 bucket name
AWSAccessKeyId = # your aws-s3 access key id
AWSSecretKey = # your aws-s3 secret key
```

4. Start your app

    ```
    yarn start
    ```

## Testing

Simply run `yarn test` and all your tests in the `test/` directory will be run.

