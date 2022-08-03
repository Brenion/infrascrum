import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class PagesProjectComponent extends Component {
  @tracked taskId = '';
  @tracked checkbox = false;

  @service store;
  @action deleteTask(task, e) {
    e.preventDefault();
    task.destroyRecord();
  }

  @tracked isEditElement = false;

  // @tracked selectElement = {};
  // @tracked selectProject = {};

  @action editElement() {
    this.isEditElement = !this.isEditElement;
    // console.log(this.isEditElement);
  }
  @action deleteElement(element, e) {
    e.preventDefault();
    element.destroyRecord();
  }
  @action
  taskEdit() {
    const taskId = this.task.id;
    console.log(taskId);
  }
  @action isChecked() {
    this.checkbox = !this.checkbox;
    if (this.checkbox == false) {
      console.log('pas terminé');
    } else {
      console.log('tache finie');
    }
  }
}
