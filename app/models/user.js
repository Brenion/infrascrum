import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') username;
  @attr('string') firstname;
  @attr('string') lastname;
  @attr('string') email;
  @attr('string') password;
  @attr('string') image;
  @belongsTo('role') role;
  @hasMany('project') projects;
}
