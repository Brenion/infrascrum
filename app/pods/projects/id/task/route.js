import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ProjectsIdTaskRoute extends Route {
  @service store;
  async model(params) {
    // let project = await this.store.project('project');
    let task = await this.store.findRecord('task', params.task_id);

    return task;
  }
}
