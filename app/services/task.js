import Service from '@ember/service';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class TaskService extends Service {
  @service store;
  @tracked users = {};

  async model() {
    let tasks = await this.store.findAll('task');
    this.users = tasks;
  }
}
