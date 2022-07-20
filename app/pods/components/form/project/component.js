import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class FormProjectComponent extends Component {
  @service router;
  @service store;

  constructor(owner, args) {
    super(owner, args);
    console.log(this.args.model);
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
        users: this.args.model.users,
      };
    }
    console.log(this.selectProject);
  }
  @action async saveProject(e) {
    e.preventDefault();
    if (this.selectProject != null) {
      console.log('if');
      const rec = await this.store.findRecord('project', this.selectProject.id);
      rec.setProperties(this.selectProject);
      await rec.save();
      this.router.transitionTo('projects');
    } else {
      console.log(this.selectProject);
      const rec = await this.store.createRecord('project', this.selectProject);
      await rec.save();
      this.router.transitionTo('projects');
    }
  }
}
