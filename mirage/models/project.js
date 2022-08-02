import { Model, attr, hasMany, belongsTo } from 'miragejs';

export default Model.extend({
  projectName: attr,
  startDate: attr,
  endDate: attr,
  description: attr,
  image: attr,
  admin: belongsTo('user', { inverse: 'padmins' }),
  users: hasMany('user', { inverse: 'projects' }),
  elements: hasMany('element'),
});
