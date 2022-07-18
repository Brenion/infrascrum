import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ProjectsController extends Controller {
  @action deleteProject(project, e) {
    e.preventDefault();
    project.destroyRecord();
  }
}
