import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class NavBarComponent extends Component {
  @tracked isVisibleElement = false;
  @action visibleElement() {
    this.isVisibleElement = !this.isVisibleElement;
  }
}
