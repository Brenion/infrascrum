import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PagesProjectComponent extends Component {
  @action deleteTask(task, e) {
    e.preventDefault();
    task.destroyRecord();
  }

  @tracked isEditElement = false;

  // @tracked selectElement = {};
  // @tracked selectProject = {};

  @action editElement() {
    this.isEditElement = !this.isEditElement;
    console.log(this.isEditElement);
  }
  @action deleteElement(element, e) {
    e.preventDefault();
    element.destroyRecord();
  }

  // @action async saveElement(e) {
  //   e.preventDefault();

  //   const setOnProject = await this.store.peekRecord(
  //     'project',
  //     this.selectProject.id
  //   );
  //   let rec = this.store.setRecord('element', {
  //     nameElement: this.selectElement.nameElement,
  //     colorElement: this.selectElement.colorElement,
  //     project: setOnProject,
  //   });
  //   await rec.save();
  // }
}
