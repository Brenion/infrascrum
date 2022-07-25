import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PagesProjectsComponent extends Component {
  @action deleteProject(project, e) {
    e.preventDefault();
    project.destroyRecord();
  }
}
