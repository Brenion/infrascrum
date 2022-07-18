import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class LoginController extends Controller {
  @service store;
  @service router;

  // @action isPasswordNotSimilar() {
  //   if (this.password !== this.passwordVerif) {
  //     return true;
  //   }
  // }

  @action
  async addingNewUser(e) {
    console.log(e);
    let newUser = this.store.createRecord('user', e);
    console.log(newUser);
  }
}
