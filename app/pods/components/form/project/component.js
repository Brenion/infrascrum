import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class FormProjectComponent extends Component {
  @service router;
  @service store;
  @tracked selectProject = {};
  @tracked project;
  @tracked admin;

  constructor(owner, args) {
    super(owner, args);

    console.log(this.args.model);
    if (this.args.model.projectId != null || this.args.model.get('id')) {
      console.log('if');
      this.selectProject = {
        id: this.args.model.id,
        projectName: this.args.model.projectName,
        startDate: this.args.model.startDate,
        endDate: this.args.model.endDate,
        description: this.args.model.description,
        image: this.args.model.image,
        elements: this.args.model.elements,
        users: this.args.model.users,
      };
    } else {
      this.admin = this.args.model.query.userId;
    }
  }
  @action async saveProject(e) {
    e.preventDefault();
    console.log('ici');
    console.log(this.selectProject);
    if (this.args.model.projectId != null || this.args.model.get('id')) {
      const rec = await this.store.findRecord('project', this.selectProject.id);
      await rec.setProperties(this.selectProject);
      await rec.changedAttributes();
      this.router.transitionTo('projects');
    } else {
      const setOnUser = await this.store.findRecord('user', this.admin);
      const rec = await this.store.createRecord('project', {
        projectName: this.selectProject.projectName,
        startDate: this.selectProject.startDate,
        endDate: this.selectProject.endDate,
        description: this.selectProject.description,
        image: this.selectProject.image,
        admin: setOnUser,
      });
      console.log(rec);
      await rec.save();
      this.router.transitionTo('index');
    }
  }
}
