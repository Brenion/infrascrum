import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class UiUserSelectorComponent extends Component {
  @service user;
}
