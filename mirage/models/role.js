import { Model, attr, hasMany } from 'miragejs';

export default Model.extend({
  nameRole: attr,
  users: hasMany('user'), //nom relation : relation('model')
});
