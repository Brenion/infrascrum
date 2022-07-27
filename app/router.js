import EmberRouter from '@ember/routing/router';
import config from 'infrascrum/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('projects', function () {
    this.route('newproject');
    this.route('id', { path: ':id' }, function () {
      this.route('settings');
      this.route('new-task');
      this.route('task', { path: 'task/:id' }, function () {
        this.route('comments');
        this.route('checklists');
      });
    });
    this.route('update', { path: 'dashboard/:id' });
  });
  this.route('login', function () {
    this.route('login');
    this.route('change-password');
    this.route('new-user');
  });
  this.route('profils', function () {
    this.route('admin');
    this.route('user', { path: ':id' });
  });
  this.route('testmirage');

  this.route('pods', function () {
    this.route('components', function () {
      this.route('pages', function () {});
    });
  });

  this.route('components', function () {
    this.route('pages', function () {});
  });
});
