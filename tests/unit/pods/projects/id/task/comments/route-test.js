import { module, test } from 'qunit';
import { setupTest } from 'infrascrum/tests/helpers';

module('Unit | Route | projects/id/task/comments', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:projects/id/task/comments');
    assert.ok(route);
  });
});
