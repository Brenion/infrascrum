import { Model, attr, hasMany, belongsTo } from 'miragejs';

export default Model.extend({
  projectName: attr,
  startDate: attr,
  endDate: attr,
  description: attr,
  image: attr,
  admin: belongsTo('user'),
  users: hasMany('user'),
  elements: hasMany('element'),
});
