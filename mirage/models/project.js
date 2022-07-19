import { Model, attr, hasMany } from 'miragejs';

export default Model.extend({
  projectName: attr,
  startDate: attr,
  endDate: attr,
  description: attr,
  image: attr,
  users: hasMany('user'),
  elements: hasMany('element'),
});
