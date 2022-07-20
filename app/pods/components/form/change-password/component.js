import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class FormChangePasswordComponent extends Component {
  @service router;

  @tracked
  email = '';
  @tracked
  password = '';
  @tracked
  confirm = '';

  get isAddButtonDisabled() {
    return this.email === '' || this.password === '' || this.confirm === '';
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
}
