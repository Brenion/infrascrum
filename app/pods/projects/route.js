import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ProjectsRoute extends Route {
  @service store;
  @service currentUser;
  @tracked user;

  async model() {
    this.user = await this.currentUser.load();

    // return this.store.findAll('project');
    return await this.store.query('project', { userId: this.user.id });
    // let task = this.store.findAll('task');
  }
}
