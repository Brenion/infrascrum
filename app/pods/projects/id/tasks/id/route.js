import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ProjectsIdTasksIdRoute extends Route {
  @service store;
  model(params) {
    return this.store.findRecord('task', params.id);
  }
}
