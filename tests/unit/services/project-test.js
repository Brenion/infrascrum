import { module, test } from 'qunit';
import { setupTest } from 'infrascrum/tests/helpers';

module('Unit | Service | project', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:project');
    assert.ok(service);
  });
});
