import EmberRouter from '@ember/routing/router';
import config from 'infrascrum/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('projects', function () {
    this.route('newproject');
    this.route('id', { path: 'projects/:id' }, function () {
      this.route('settings');
      this.route('new-task');
      this.route('tasks', function () {
        this.route('id', { path: 'tasks/:id' }, function () {
          this.route('comments');
          this.route('checklists');
          this.route('new-checklist');
        });
      });
    });
  });
  this.route('login');
  this.route('profils', function () {
    this.route('admin');
    this.route('user', { path: 'profils/:id' });
  });
  this.route('features');
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
