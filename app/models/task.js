import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class TaskModel extends Model {
  @attr('string') title;
  @attr('boolean') description;
  @attr('string') done;
  @attr('string') time;
  @attr('string') colorTask;
  @belongsTo('taskType') taskType;
  @belongsTo('element') element;
  @hasMany('checklist') checkLists;
}
