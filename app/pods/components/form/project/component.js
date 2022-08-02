import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class FormProjectComponent extends Component {
  @service router;
  @service store;
  @tracked selectProject = {};

  constructor(owner, args) {
    super(owner, args);

    if (this.args.model != null) {
      console.log('if');
      this.selectProject = {
        id: this.args.model.id,
        projectName: this.args.model.projectName,
        startDate: this.args.model.startDate,
        endDate: this.args.model.endDate,
        description: this.args.model.description,
        image: this.args.model.image,
        elements: this.args.model.elements,
        admin: this.args.model.admin,
        users: this.args.model.users,
      };
    }
  }
  @action async saveProject(e) {
    e.preventDefault();
    if (this.selectProject.id != null) {
      const rec = await this.store.findRecord('project', this.selectProject.id);
      rec.setProperties(this.selectProject);
      await rec.save();
      this.router.transitionTo('projects');
    } else {
      const rec = await this.store.createRecord('project', this.selectProject);
      await rec.save();
      this.router.transitionTo('projects');
    }
  }
}
