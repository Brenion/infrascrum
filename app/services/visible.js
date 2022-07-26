import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class VisibleService extends Service {
  @tracked isVisibleFeature = false;
  @tracked isVisibleElement = false;
  @action visibleFeature() {
    this.isVisibleFeature = !this.isVisibleFeature;
    console.log('click');
    console.log(this.isVisibleFeature);
  }

  @action visibleElement() {
    this.isVisibleElement = !this.isVisibleElement;
    console.log(this.isVisibleElement);
  }
}
