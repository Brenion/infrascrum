import Model, { attr, belongsTo } from '@ember-data/model';

export default class ChecklistModel extends Model {
  @attr('string') title;
  @attr('boolean') done;
  @belongsTo('task') task;
}
