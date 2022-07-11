import EmberRouter from '@ember/routing/router';
import config from 'infrascrum/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('projects', function () {
    this.route('project', function () {
      this.route('dashboard');
      this.route('elements', function () {
        this.route('newElement');
        this.route('tasks', function () {
          this.route('newTask');
          this.route('task', function () {
            this.route('dashboard');
            this.route('comments');
            this.route('checklists', function () {
              this.route('newchecklist');
            });
          });
        });
      });
    });
  });
  this.route('login');
  this.route('profils', function () {
    this.route('users');
    this.route('admin');
  });
  this.route('features');
});
