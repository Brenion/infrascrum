import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class FormTaskComponent extends Component {
  @service router;
  @service store;
  @tracked selectTask = {};
  @tracked selectProject = {};

  constructor(owner, args) {
    super(owner, args);
    console.log(this.args.model);
    if (this.args.model != null) {
      console.log('if');
      this.selectTask = {
        id: this.args.model.id,
        title: this.args.model.title,
        time: this.args.model.time,
        colorTask: this.args.model.colorTask,
        description: this.args.model.description,
        type: this.args.model.type,
        element: this.args.model.element,
        users: this.args.model.users,
        checklists: this.args.model.checklist,
      };
      console.log(this.selectTask.id);
    }
  }
  @action async saveTask(e) {
    e.preventDefault();

    const setOnElement = await this.store.findRecord('element', 1);
    const setOnUser = await this.store.findRecord('user', 1);
    let rec = this.store.createRecord('task', {
      title: this.selectTask.title,
      users: [setOnUser],
      time: this.selectTask.time,
      element: setOnElement,
      colorTask: this.selectTask.colorTask,
      description: this.selectTask.description,
    });
    await rec.save();
    this.router.transitionTo('projects.id');
  }
}
