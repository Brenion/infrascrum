import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ProjectsController extends Controller {
  @action deleteProject(id, e) {
    e.preventDefault();
    console.log(id);
    // await this.project.delete(this.selectProject);
    // this.router.transitionTo('projects');
  }
}
