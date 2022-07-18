import { Model, attr, hasMany } from 'miragejs';

export default Model.extend({
  nameRole: attr,
  users: hasMany('user-roles'), //nom relation : relation('model')
});
