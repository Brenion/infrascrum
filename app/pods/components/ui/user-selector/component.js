import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class UiUserSelectorComponent extends Component {
  @service user;
  @tracked users;
  get user() {
    console.log(this.user.user);
    return this.user.user();
  }
}
