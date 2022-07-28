import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class FormTaskComponent extends Component {
  @service router;
  @service store;
  @tracked selectTask = {};
  @tracked selectElement = {};
  @tracked ids;
  constructor(owner, args) {
    super(owner, args);
    if (this.args.model.id != undefined) {
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
    }
  }
  @action async saveTask(e) {
    e.preventDefault();
    if (this.args.model.id != undefined) {
      const rec = await this.store.findRecord('task', this.selectTask.id);
      rec.setProperties(this.selectTask);
      await rec.save();
    } else {
      // eslint-disable-next-line prettier/prettier

      this.args.model.element.forEach((element) => {
        if (element.nameElement.includes(this.selectTask.element)) {
          this.ids = element.id;
        }
      });

      const setOnElement = await this.store.findRecord('element', this.ids);
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
}
