import Model, { attr } from '@ember-data/model';

export default class ProjectsModel extends Model {
  @attr('number') id;
  @attr('string') projectName;
}
