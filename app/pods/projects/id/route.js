import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ProjectsIdRoute extends Route {
  @service project;

  model(params) {
    return this.project.find('project', (project) => project.id === params.id);
  }
}
