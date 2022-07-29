import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ProjectsIdRoute extends Route {
  @service store;
  model(params) {
    let project = this.store.findRecord('project', params.id);
    let element = this.store.findAll('element');
    let task = this.store.findAll('task');
    return { project: project, element: element, task: task };
  }
}
