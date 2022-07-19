import Model, { attr, hasMany } from '@ember-data/model';

export default class TaskTypeModel extends Model {
  @attr('string') name;
  @hasMany('task') tasks;
}
