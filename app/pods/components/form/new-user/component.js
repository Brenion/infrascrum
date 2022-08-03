import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
// eslint-disable-next-line ember/no-computed-properties-in-native-classes
import { computed } from '@ember/object';

// class SelectUser {
//   @tracked
//   username = '';
//   @tracked
//   email = '';
//   @tracked
//   password = '';
//   @tracked
//   confirm = '';
// }

export default class FormNewUserComponent extends Component {
  @service router;
  @service store;
  // selectUser = new SelectUser();
  @tracked selectUser = { username: '', email: '', password: '', confirm: '' };

  // @tracked
  // username;
  // @tracked
  // email = '';
  // @tracked
  // password = '';
  // @tracked
  // confirm = '';

  constructor(owner, args) {
    super(owner, args);
    if (this.args.model != null) {
      this.selectUser = {
        username: this.args.model.username,
        email: this.args.model.email,
        password: this.args.model.password,
      };
    }
  }

  @computed('selectUser.{confirm,email,password,username,password.length}')
  get isAddButtonDisabled() {
    return (
      this.selectUser.username === '' ||
      this.selectUser.email === '' ||
      this.selectUser.password === '' ||
      this.selectUser.confirm === '' ||
      this.selectUser.confirm != this.selectUser.password ||
      this.selectUser.password.length < 5
    );
  }
  @computed('selectUser.{confirm,password}')
  get confirmSame() {
    if (this.selectUser.password === this.selectUser.confirm) {
      return false;
    } else {
      return true;
    }
  }
  @computed('selectUser.password.length')
  get minimumChar() {
    if (
      (this.selectUser.password.length > 0) &
      (this.selectUser.password.length < 5)
    ) {
      return true;
    } else {
      return false;
    }
  }

  @action
  async addNewUser(e) {
    e.preventDefault();
    // console.log(this.selectUser.password);
    let newUser = await this.store.createRecord('user', this.selectUser);
    // console.log(newUser);
    await newUser.save();
    console.log(newUser);
    this.router.transitionTo('login.login');
  }
}
