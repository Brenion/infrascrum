import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ProjectsIdTaskChecklistsRoute extends Route {
  @service store;
  async model() {
    let checklist = await this.store.findAll('checklist');

    return checklist;
  }
}
