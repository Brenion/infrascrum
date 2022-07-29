import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class LoginController extends Controller {
  @service store;
  @service router;
  @service session;
}
// @action
// async addingNewUser(e) {
//   console.log(e);
//   let newUser = this.store.createRecord('user', e);
//   newUser.save();
//   console.log(newUser);
// }
