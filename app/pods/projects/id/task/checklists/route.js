import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ProjectsIdTaskChecklistsRoute extends Route {
  @service store;
  model() {
    let checklist = this.store.findAll('checklist', {
      include: 'task',
    });

    return checklist;
  }
}
