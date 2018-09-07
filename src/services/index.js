const users = require('./users/users.service.js');
const uploads = require('./uploads/uploads.service.js');
const posts = require('./posts/posts.service.js');
const comments = require('./comments/comments.service.js');
const replies = require('./replies/replies.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(uploads);
  app.configure(posts);
  app.configure(comments);
  app.configure(replies);
};
