import Service from '@ember/service';
import { service } from '@ember/service';

export default class UserService extends Service {
  @service store;
  model() {
    return this.store.findAll('user');
  }
}
