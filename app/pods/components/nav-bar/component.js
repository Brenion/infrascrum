import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NavBarComponent extends Component {
  @tracked isExpand = true;
  @action shrinkNavbar() {
    this.isExpand = false;
    console.log(this.isExpand);
  }
  @action expandNavbar() {
    this.isExpand = true;
    console.log(this.isExpand);
  }
}
