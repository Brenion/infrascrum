import { module, test } from 'qunit';
import { setupTest } from 'infrascrum/tests/helpers';

module('Unit | Route | projects/id/task/checklists', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:projects/id/task/checklists');
    assert.ok(route);
  });
});
