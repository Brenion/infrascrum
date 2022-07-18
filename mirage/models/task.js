import { Model, attr, hasMany, belongsTo } from 'miragejs';

export default Model.extend({
  title: attr,
  description: attr,
  done: attr,
  time: attr,
  colorTask: attr,
  taskType: belongsTo('taskType'),
  element: belongsTo('element'),
  checkLists: hasMany('checklist'),
});
