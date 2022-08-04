import Service from '@ember/service';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ElementService extends Service {
  @service store;
  @tracked element = {};

  model() {
    return this.store.findAll('element');
  }
}
