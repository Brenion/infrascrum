import { Model, attr, belongsTo } from 'miragejs';

export default Model.extend({
  title: attr,
  done: attr,
  task: belongsTo('task'),
});
