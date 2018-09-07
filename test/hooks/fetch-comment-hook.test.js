const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const fetchCommentHook = require('../../src/hooks/fetch-comment-hook');

describe('\'fetchCommentHook\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: fetchCommentHook()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
