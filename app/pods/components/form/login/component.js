import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class FormLoginComponent extends Component {
  @service router;

  @tracked
  username = '';
  @tracked
  password = '';

  get isAddButtonDisabled() {
    return this.username === '' || this.password === '';
  }
}
