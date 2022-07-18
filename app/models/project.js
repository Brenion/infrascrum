import Model, { attr, hasMany } from '@ember-data/model';

export default class ProjectModel extends Model {
  @attr('string') projectName;
  @attr('date') startDate;
  @attr('date') endDate;
  @attr('string') description;
  @attr('string') image;
  @hasMany('user') users;
  @hasMany('element') elements;
}
