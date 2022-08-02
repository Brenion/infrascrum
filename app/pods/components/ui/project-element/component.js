import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class UiProjectElementComponent extends Component {
  @service store;
  @tracked element;

  @tracked isEditElement = false;
  @action editElement() {
    this.isEditElement = !this.isEditElement;
  }

  @action deleteElement(element, e) {
    e.preventDefault();
    element.destroyRecord();
  }

  @action async saveElement(elem, e) {
    e.preventDefault();
    this.store.findRecord('element', 1).then(function (element) {
      console.log(element);
      element.color = elem.colorElement;
      element.name = elem.nameElement;
      element.save();
    });
    this.editElement();
  }
}
