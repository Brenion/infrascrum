import Service from '@ember/service';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ProjectService extends Service {
  @service store;
  @tracked projects = {};

  async model() {
    let projects = await this.store.findAll('project');
    this.projects = projects;
  }
}
