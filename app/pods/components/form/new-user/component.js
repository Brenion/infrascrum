import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class FormNewUserComponent extends Component {
  @service router;
  @service store;

  @tracked selectUser = { username: '', email: '', password: '' };

  @tracked
  username = '';
  @tracked
  email = '';
  @tracked
  password = '';
  @tracked
  confirm = '';

  constructor(owner, args) {
    super(owner, args);

    // if (this.args.model != null) {
    //   this.selectUser = {
    //     username: this.args.model.username,
    //     email: this.args.model.email,
    //     password: this.args.model.password,
    //   };
    // }
  }
  @action
  async addNewUser(e) {
    e.preventDefault();
    console.log(this.selectUser);
    let newUser = await this.store.createRecord('user', this.selectUser);
    await newUser.save();
    console.log(newUser);
  }

  // get isAddButtonDisabled() {
  //   return (
  //     this.selectUser.username === '' ||
  //     this.selectUser.email === '' ||
  //     this.selectUser.password === '' ||
  //     this.selectUser.confirm === ''
  //   );
  // }
  // get confirmSame() {
  //   if (this.selectUser.password === this.selectUser.confirm) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  // get minimumChar() {
  //   if (this.selectUser.password.length < 5) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
