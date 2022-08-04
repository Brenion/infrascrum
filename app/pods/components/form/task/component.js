import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class FormTaskComponent extends Component {
  @service project;
  @service router;
  @service store;
  @service user;
  @tracked userId;
  @tracked addUsers;
  @tracked selectTask = {};
  @tracked selectElement = {};
  @tracked ids;
  @tracked selectProject = {};
  @tracked record = {};
  @tracked isTitle = false;
  @tracked isUser = false;
  @tracked isTime = false;
  @tracked names = [];
  @tracked selectedUser = [];

  constructor(owner, args) {
    super(owner, args);
    console.log('dans task');
    console.log(this.args.model.id);
    if (this.args.model.id != null) {
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
    } else {
    }
    this.addUsers = this.user.users;
    this.addUsers.forEach((element) => {
      this.names.push(element.username);
    });
  }
  model(params) {
    let task = this.store.findRecord('task', params.task_id, {
      checklist: 'checklist',
    });

    return task;
  }
  checkLength(text, select /*, event */) {
    if (select.searchText.length >= 3 && text.length < 3) {
      return '';
    } else {
      return text.length >= 3;
    }
  }
  @action async saveTask(e) {
    e.preventDefault();
    if (this.args.model.id != undefined) {
      const rec = await this.store.findRecord('task', this.selectTask.id);
      rec.setProperties(this.selectTask);
      await rec.changedAttributes();
    } else {
      // eslint-disable-next-line prettier/prettier

      this.args.model.element.forEach((element) => {
        if (element.nameElement.includes(this.selectTask.element)) {
          this.ids = element.id;
        }
      });

      const setOnElement = await this.store.findRecord('element', this.ids);
      const setOnUser = await this.store.findRecord('user', 1);
      console.log(this.selectedUser);
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

  // action sur bouton
  @action titled() {
    this.isTitle = !this.isTitle;
  }
  @action usered() {
    this.isUser = !this.isUser;
  }
  @action timed() {
    this.isTime = !this.isTime;
  }
}
