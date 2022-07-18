import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class FormProjectComponent extends Component {
  @service project;
  @service router;
  @service store;
  @tracked selectProject = { projectName: '' };

  @action async saveProject(e) {
    e.preventDefault();
    const rec = this.store.createRecord('project', this.selectProject);
    await rec.save();
    this.router.transitionTo('projects');
  }
}
