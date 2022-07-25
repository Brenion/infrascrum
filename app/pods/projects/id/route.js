import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ProjectsIdRoute extends Route {
  @service store;
  model(params) {
    let project = this.store.findRecord('project', params.id);
    let element = this.store.findAll('element');
    return { project: project, element: element };
  }
}
