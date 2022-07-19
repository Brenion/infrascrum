import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class ElementModel extends Model {
  @attr('string') nameElement;
  @attr('string') colorElement;
  @belongsTo('project') project;
  @hasMany('task') tasks;
}
