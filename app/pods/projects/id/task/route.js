import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ProjectsIdTaskRoute extends Route {
  @service store;
  model(params) {
    let test = this.store.findRecord('task', params.id);
    console.log(test);
    return test;
  }
}
