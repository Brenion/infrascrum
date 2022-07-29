import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class UiUserSelectorComponent extends Component {
  @service user;
  @service store;
  @tracked utilisateurs = '';
  @tracked addedUser;
  @tracked project = {};
  @tracked isUser = false;
  @tracked isUserTrue = false;

  constructor(owner, args) {
    super(owner, args);
    this.project = {
      id: this.args.project.id,
      admin: this.args.project.admin,
      users: this.args.project.users,
    };

    this.addedUser = this.user.users;
    this.error = 'User does not exist';
    this.errorExist = 'User already exists on project';
  }

  @action async saveUser(e) {
    e.preventDefault();

    await this.addedUser.forEach((user) => {
      if (this.utilisateurs === user.username) {
        if (
          this.utilisateurs.includes(
            this.project.admin.get('username') ||
              this.project.users.forEach((user) => {
                user.username;
              })
          )
        ) {
          this.isUserTrue = true;
          this.isUser = false;
        } else {
          let setOnProject = this.store.peekRecord('project', this.project.id);
          let setOnUser = this.store.peekRecord('user', user.id);
          let users = setOnProject.users;
          users.pushObject(setOnUser);
          setOnProject.save();
          this.isUser = false;
          this.isUserTrue = false;
        }
      } else if (this.utilisateurs !== user.username) {
        this.isUser = true;
        this.isUserTrue = false;
      }
    });
  }
}
