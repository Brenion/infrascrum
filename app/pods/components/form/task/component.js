import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FormTaskComponent extends Component {
  @service router;
  @service store;
  @tracked selectTask = {};
  @tracked selectProject = {};
  @action async saveTask(e) {
    e.preventDefault();

    let rec = this.store.createRecord('task', {
      nameTask: this.selectTask.nameTask,
      colorTask: this.selectTask.colorTask,
    });
    await rec.save();
    //this.router.transitionTo(`${this.selectProject.id}`);
  }
}
