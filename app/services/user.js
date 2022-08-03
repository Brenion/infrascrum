import Service from '@ember/service';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class UserService extends Service {
  @service store;
  @tracked users = {};

  async model() {
    let users = await this.store.findAll('user');
    this.users = users;
    return this.users;
  }
}
