import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class FormProjectComponent extends Component {
  @service project;
  @service router;
  @tracked selectProject = { projectName: '' };

  @action async saveProject(e) {
    e.preventDefault();
    console.log(e);
    console.log(this.selectProject);
    await this.project.create(this.selectProject);
    console.log(this.model);
    this.router.transitionTo('projects');
  }
}
