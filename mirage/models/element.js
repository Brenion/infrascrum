import { Model, attr, hasMany, belongsTo } from 'miragejs';

export default Model.extend({
  nameElement: attr,
  colorElement: attr,
  project: belongsTo('project'),
  tasks: hasMany('task'),
});
