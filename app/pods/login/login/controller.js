import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginLoginController extends Controller {
  @tracked errorMessage;
  @tracked username;
  @tracked password;
  @service session;
  @service router;

  @action
  async authenticate(username, password) {
    try {
      await this.session.authenticate(
        'authenticator:oauth2',
        username,
        password
      );
    } catch (error) {
      console.log(error);
      this.errorMessage = error.responseJSON.errors;
    }

    if (this.session.isAuthenticated) {
      console.log('TEST');
      this.router.transitionTo('index');
    }
  }
}
