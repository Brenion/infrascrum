import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class HeaderComponent extends Component {
  @service session;
  @tracked isVisible = false;

  @action
  invalidateSession() {
    this.session.invalidate();
  }

  @action
  toggleEdit() {
    this.isVisible = !this.isVisible;
    console.log(this.isVisible);
  }
}
