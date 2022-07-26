import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class ProjectModel extends Model {
  @attr('string') projectName;
  @attr('string') startDate;
  @attr('string') endDate;
  @attr('string') description;
  @attr('string') image;
  @belongsTo('user', { inverse: 'padmins' }) admin;
  @hasMany('user', { inverse: 'projects' }) users;
  @hasMany('element') elements;
}
