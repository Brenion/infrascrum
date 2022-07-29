import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginLoginController extends Controller {
  @service store;
  @tracked errorMessage;
  @tracked username;
  @tracked password;
  @service session;
  @service router;

  @action
  async authenticate(username, password) {
    const credentials = this.store.findRecord('user', {
      username: username,
      password: password,
    }); //oui mais de ou? pas sur mais bon
    const authenticator = 'authenticator:jwt'; // or 'authenticator:token'
    console.log(credentials);
    this.session.authenticate(authenticator, credentials);

    if (this.session.isAuthenticated) {
      console.log('TEST');
      this.router.transitionTo('projects');
    }
  }
}
