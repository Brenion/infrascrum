import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PagesProjectComponent extends Component {
  @action deleteTask(task, e) {
    e.preventDefault();
    task.destroyRecord();
  }
}
