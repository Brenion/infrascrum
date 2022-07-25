import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class HeaderComponent extends Component {
  @service session;
  @service visible;
  @tracked isVisible = false;
  @tracked isVisibleToo;

  @action visibleFeature() {
    this.visible.visibleFeature();
    this.isVisibleToo = this.visible.isVisibleFeature;

    console.log(this.visible.isVisibleFeature);
  }
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
