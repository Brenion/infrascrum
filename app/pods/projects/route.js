import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ProjectsRoute extends Route {
  // appel du service store
  @service project;

  model() {
    return this.project.fetchAll('projects');
  }
}
