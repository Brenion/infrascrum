import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ProjectsIdRoute extends Route {
  @service store;
  async model(params) {
    let project = await this.store.findRecord('project', params.id);
    let element = await this.store.query('element', {
      projectId: params.id,
      include: 'tasks',
    });
    // let task = this.store.findAll('task');
    return { project: project, element: element };
  }
}
