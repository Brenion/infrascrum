import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ProjectsIdTaskController extends Controller {
  @service store;
  @tracked ckecklists = null;
  @tracked model;

  queryParams = ['checklists'];
  get taskId() {
    let checklists = this.checklists;
    let task = this.model;
    if (checklists) {
      return task.filterBy('checklists', checklists);
    } else {
      return task;
    }
  }
}
