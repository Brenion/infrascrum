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

    this.selectProject = {
      id: this.args.model.project.get('id'),
      elements: this.args.model.project.get('elements'),
    };
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
      // project: setOnProject,
    });
    await rec.save();
    this.router.transitionTo('projects.id');
    // console.log(this.selectProject.elements);
  }
}
