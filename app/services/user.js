import Service from '@ember/service';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class UserService extends Service {
  @service store;

  model() {
    let users = this.store.findAll('user');
  }
}
