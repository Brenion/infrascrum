import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') email;
  @attr('string') password;
  @attr('string') username;
  @attr('string') firstname;
  @attr('string') lastname;
  @attr('string') image;
  @belongsTo('role') role;
  @hasMany('project', { inverse: 'admin' }) padmins;
  @hasMany('project', { inverse: 'users' }) projects;
  @hasMany('task') tasks;
}
