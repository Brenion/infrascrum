import Component from '@glimmer/component';

export default class PagesProjectComponent extends Component {
  get isVisibleElement() {
    return this.args.isVisibleElement;
  }
}
