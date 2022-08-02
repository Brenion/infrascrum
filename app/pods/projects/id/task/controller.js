import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ProjectsIdTaskController extends Controller {
  @service store;
  @tracked projectId;
  @tracked project = {};

  get usersId() {
    let project = this.model.project;
    let projectId = [];
    project.forEach((element) => {
      projectId.push(element.id);
    });
    console.log('userId');
    return console.log(projectId);
  }
}
