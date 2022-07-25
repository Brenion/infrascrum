import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PagesProjectComponent extends Component {
  @tracked isEditElement = false;

  @tracked selectElement = {};
  @tracked selectProject = {};

  @action editElement() {
    this.isEditElement = !this.isEditElement;
    console.log(this.isEditElement);
  }

  @action async saveElement(e) {
    e.preventDefault();

    const setOnProject = await this.store.peekRecord(
      'project',
      this.selectProject.id
    );
    let rec = this.store.editRecord('element', {
      nameElement: this.selectElement.nameElement,
      colorElement: this.selectElement.colorElement,
      project: setOnProject,
    });
    await rec.save();
  }
}
