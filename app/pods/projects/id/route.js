import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ProjectsIdRoute extends Route {
  @service store;
  model(params) {
    let projectId = params.id;
    let project = this.store.findRecord('project', params.id, {
      includes: 'elements',
      projects: projectId,
    });
    console.log(params.id);
    let element = this.store.query('element', {
      includes: 'tasks',
    });
    let task = this.store.query('task', {
      filter: { element: element.id },
      includes: 'checklists',
    });

    return { project: project, element: element, task: task };
  }
}
