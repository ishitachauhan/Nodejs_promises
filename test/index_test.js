var assert = require('assert');
var mocha = require('mocha');
const findServer = require('../index');
var sinon = require('sinon');
sinon = sinon.createSandbox();
// let describe;
// let it;
// let before;
// let after;
if (mocha.describe) {
  describe = mocha.describe;
  it = mocha.it;
  before = mocha.before;
  after = mocha.after;
} else {
  describe = global.describe;
  it = global.it;
  before = global.before;
  after = global.after;
}

describe('checking async function with urls input positive suit', async () => {
  let findMockServer;
  before(() => {
    findMockServer = sinon.stub(Promise, 'allSettled');
  });
  after(() => {
    sinon.restore();
  });
  it('should get device', async () => {
    findMockServer.resolves([
      {
      "url": "http://doesNotExist.kratikal.com",
      "priority": 1
      },
      {
      "url": "http://kratikal.com",
      "priority": 7
      },
      {
      "url": "http://offline.kratikal.com",
      "priority": 2
      },
      {
      "url": "http://google.com",
      "priority": 4
      }
      ]);

    try {
      let inputs = [
        {
        "url": "http://doesNotExist.kratikal.com",
        "priority": 1
        },
        {
        "url": "http://kratikal.com",
        "priority": 7
        },
        {
        "url": "http://offline.kratikal.com",
        "priority": 2
        },
        {
        "url": "http://google.com",
        "priority": 4
        }
        ]
      let exits = {};
      exits.success = sinon.spy();
      await findMockServer(inputs, exits);
      assert.deepStrictEqual(exits.success.callCount, 0);
    } catch (err) {
      console.log(err);
      assert.fail('Exception in find device');
    }
  });
});
