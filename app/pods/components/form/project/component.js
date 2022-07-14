import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
export default class FormProjectComponent extends Component {
  @service router;

  @action
  createProject(e) {
    e.preventDefault();
    this.args.create({
      projectName: this.projectName,
      description: this.description,
      startDate: this.startDate,
      endDate: this.endDate,
    });
  }
}
