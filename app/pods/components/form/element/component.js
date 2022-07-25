import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FormElementComponent extends Component {
  @service visible;

  @service router;
  @service store;
  @tracked selectElement = {};
  @tracked selectProject = {};
  @tracked isVisibleElement;
  constructor(owner, args) {
    super(owner, args);
    this.selectProject = {
      id: this.args.model.project.get('id'),
    };
  }
  @action async saveElement(e) {
    e.preventDefault();

    const setOnProject = await this.store.peekRecord(
      'project',
      this.selectProject.id
    );
    let rec = this.store.createRecord('element', {
      nameElement: this.selectElement.nameElement,
      colorElement: this.selectElement.colorElement,
      project: setOnProject,
    });
    await rec.save();
    this.visible.isVisibleElement = false;
    console.log(this.visible.isVisibleElement);
  }
  @action change() {
    this.visible.visibleElement();
  }
}
