const assert = require('assert');
const app = require('../../src/app');

describe('\'replies\' service', () => {
  it('registered the service', () => {
    const service = app.service('replies');

    assert.ok(service, 'Registered the service');
  });
});
