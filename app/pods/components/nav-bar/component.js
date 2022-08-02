import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class NavBarComponent extends Component {
  @service visible;

  @tracked isExpand = true;
  @action shrinkNavbar() {
    this.isExpand = false;
    console.log(this.isExpand);
  }
  @action expandNavbar() {
    this.isExpand = true;
    console.log(this.isExpand);
  }
  @action visibleElement() {
    this.visible.visibleElement();
  }
}
