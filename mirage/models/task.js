import { Model, attr, hasMany, belongsTo } from 'miragejs';

export default Model.extend({
  title: attr,
  description: attr,
  done: attr,
  time: attr,
  colorTask: attr,
  type: belongsTo('type'),
  element: belongsTo('element'),
  checklists: hasMany('checklist'),
  users: hasMany('user'),
});
