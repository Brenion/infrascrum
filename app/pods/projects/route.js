import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ProjectsRoute extends Route {
  @service user;
  @service store;
  async model() {
    // await this.user.model();
    return this.store.findAll('project');
  }
}
