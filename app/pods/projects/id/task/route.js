import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ProjectsIdTaskRoute extends Route {
  @service store;
  model(params) {
    let task = this.store.findRecord('task', params.id);

    return task;
  }
}
