import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class TaskModel extends Model {
  @attr('string') title;
  @attr('string') description;
  @attr('boolean') status;
  @attr('string') time;
  @attr('string') color;
  @belongsTo('type') type;
  @belongsTo('element') element;
  @hasMany('checklist') checklists;
  @hasMany('user') users;
}
