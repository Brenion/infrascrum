import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class PagesProjectComponent extends Component {
  @tracked taskId = '';
  @service store;

  @action deleteTask(task, e) {
    e.preventDefault();
    task.destroyRecord();
  }
  constructor(owner, args) {
    super(owner, args);
    console.log(this.elements);
  }

  // @tracked isEditElement = false;
  // get filteredElement() {
  //   console.log();
  // }
  @action editElement() {
    this.isEditElement = !this.isEditElement;
    console.log(this.isEditElement);
  }
  @action deleteElement(element, e) {
    e.preventDefault();
    element.destroyRecord();
  }
  @action
  taskEdit() {
    const taskId = this.task.id;
    // console.log(taskId);
  }
}
