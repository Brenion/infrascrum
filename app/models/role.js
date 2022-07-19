import Model, { attr, hasMany } from '@ember-data/model';

export default class UserRolesModel extends Model {
  @attr('string') nameRole;
  @hasMany('user') users; //nom relation : relation('model')
}
