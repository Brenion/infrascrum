import { module, test } from 'qunit';
import { setupTest } from 'infrascrum/tests/helpers';

module(
  'Unit | Route | projects/project/elements/tasks/task/dashboard',
  function (hooks) {
    setupTest(hooks);

    test('it exists', function (assert) {
      let route = this.owner.lookup(
        'route:projects/project/elements/tasks/task/dashboard'
      );
      assert.ok(route);
    });
  }
);
