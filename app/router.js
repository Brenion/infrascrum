import EmberRouter from '@ember/routing/router';
import config from 'infrascrum/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('projects', function () {
    this.route('newproject');
  });
  this.route('login');
  this.route('profils', function () {
    this.route('users');
    this.route('admin');
  });
  this.route('features');
});
