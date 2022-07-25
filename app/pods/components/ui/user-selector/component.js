import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class UiUserSelectorComponent extends Component {
  @service user;
  @tracked utilisateurs;

  constructor(owner, args) {
    super(owner, args);
    this.utilisateurs = this.user.users;
  }
}
