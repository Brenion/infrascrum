import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class FormNewUserComponent extends Component {
  @service router;

  @tracked
  username = '';
  @tracked
  email = '';
  @tracked
  password = '';
  @tracked
  confirm = '';

  get isAddButtonDisabled() {
    return (
      this.username === '' ||
      this.email === '' ||
      this.password === '' ||
      this.confirm === ''
    );
  }
  get confirmSame() {
    if (this.password === this.confirm) {
      return false;
    } else {
      return true;
    }
  }

  get minimumChar() {
    if (this.password.length < 5) {
      return true;
    } else {
      return false;
    }
  }

  @action
  addingNewUser(e) {
    // e.preventDefault;
    console.log(e);
    this.args.create({
      username: this.username,
      email: this.email,
      password: this.password,
    });
  }
}
