import { Model, attr, belongsTo, hasMany } from 'miragejs';

export default Model.extend({
  username: attr,
  firstname: attr,
  lastname: attr,
  email: attr,
  password: attr,
  image: attr,
  role: belongsTo('role'),
  padmins: hasMany('project'),
  projects: hasMany('project'),
});
