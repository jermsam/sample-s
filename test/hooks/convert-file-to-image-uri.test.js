const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const convertFileToImageUri = require('../../src/hooks/convert-file-to-image-uri');

describe('\'convertFileToImageUri\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: convertFileToImageUri()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
