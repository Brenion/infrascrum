import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class HeaderComponent extends Component {
  @tracked isVisible = false;

  @action
  toggleEdit() {
    this.isVisible = !this.isVisible;
    console.log(this.isVisible);
  }
}
