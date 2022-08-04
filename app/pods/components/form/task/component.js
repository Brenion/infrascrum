import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class FormTaskComponent extends Component {
  @service project;
  @service router;
  @service store;
  @service user;
  @tracked addUsers;
  @tracked addElements;
  @tracked selectTask = {};
  @tracked selectProject = {};
  @tracked record = {};
  @tracked isTitle = false;
  @tracked isUser = false;
  @tracked isTime = false;
  @tracked names = [];
  @tracked selectedUser = [];
  @tracked elementName = [];
  @tracked elements = [];
  @tracked selectedElement = [];
  @tracked element = [];

  constructor(owner, args) {
    super(owner, args);

    console.log(this.args.element.objet);
    this.args.element.forEach((element) => {
      console.log(element.nameElement);
    });

    if (this.args.model.id != null) {
      console.log('ici');
      this.selectTask = {
        id: this.args.model.get('id'),
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
      this.element = this.args.element;
      console.log(this.element);
    }
    // this.addUsers = this.user.users;
    // this.addUsers.forEach((element) => {
    //   this.names.push(element.username);
    //   console.log(element.username);
    // });
    this.addElements = this.element;

    this.args.element.forEach((element) => {
      this.elements.push({ name: element.nameElement, id: element.id });
      this.elementName.push(element.nameElement);
    });
  }

  checkLength(text, select /*, event */) {
    if (select.searchText.length >= 3 && text.length < 3) {
      return '';
    } else {
      return text.length >= 3;
    }
  }
  checkLengthElement(text, select /*, event */) {
    if (select.searchText.length >= 3 && text.length < 3) {
      return '';
    } else {
      return text.length >= 3;
    }
  }
  @action async saveTask(e) {
    e.preventDefault();
    if (this.args.model.id != null) {
      // const setOnElement = await this.store.findRecord('element', 1);
      // const setOnUser = await this.store.findRecord('user', 1);
      // let rec = this.store.createRecord('task', {
      //   title: this.selectTask.title,
      //   users: [setOnUser],
      //   time: this.selectTask.time,
      //   element: setOnElement,
      //   colorTask: this.selectTask.colorTask,
      //   description: this.selectTask.description,
      // });
      // await rec.save();
      // this.router.transitionTo('projects.id');
    } else {
      let elementId;
      console.log(this.selectedElement);
      console.log(this.element);
      this.elements.forEach((element) => {
        if (element.name.includes(this.selectedElement)) {
          elementId = element.id;
          console.log();
        }
      });

      console.log('create');
      console.log(this.selectTask.element);
      let rec = this.store.createRecord('task', {
        title: this.selectTask.title,
        time: this.selectTask.time,
        status: false,
        element: elementId,
        color: this.selectTask.colorTask,
        description: this.selectTask.description,
      });
      console.log(rec);
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
