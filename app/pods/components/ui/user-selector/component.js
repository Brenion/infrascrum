import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UiUserSelectorComponent extends Component {
  @service user;
  @service store;
  @tracked utilisateurs = '';
  @tracked addedUser;
  @tracked project = '';
  @tracked error = '';
  @tracked isUser = false;

  constructor(owner, args) {
    super(owner, args);
    this.project = { id: this.args.project.id };
    this.addedUser = this.user.users;
    this.error = 'User does not exist';
  }
  @action async saveUser(e) {
    e.preventDefault();

    await this.addedUser.forEach((user) => {
      console.log(user.username);

      if (this.utilisateurs === user.username) {
        // console.log('ici');
        console.log(user.id);
        let setOnProject = this.store.peekRecord('project', this.project.id);
        let setOnUser = this.store.peekRecord('user', user.id);
        let users = setOnProject.users;
        users.pushObject(setOnUser);
        setOnProject.save();
        this.isUser = false;
      } else {
        this.isUser = true;
      }
    });
  }
}
