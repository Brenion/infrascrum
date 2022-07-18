import { Model, attr, hasMany } from 'miragejs';

export default Model.extend({
  name: attr,
  tasks: hasMany('task'),
});
