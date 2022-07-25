import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class FormLoginComponent extends Component {
  @service router;

  @tracked
  username = 'user';
  @tracked
  password = 'machin';

  get isAddButtonDisabled() {
    return (
      this.username === '' || this.password === '' || this.password.length < 5
    );
  }
}
