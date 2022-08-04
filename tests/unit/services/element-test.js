import { module, test } from 'qunit';
import { setupTest } from 'infrascrum/tests/helpers';

module('Unit | Service | element', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:element');
    assert.ok(service);
  });
});
