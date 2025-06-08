import EmberRouter from '@ember/routing/router';
import config from 'c3-migration/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // this.route('welcome');
  // this.route('user-management');
  // this.route('contact-flows');
  // this.route('routing-profiles');
  this.route('welcome', { path: '/' });
  // this.route('user-management', { path: '/user-management' });
  this.route('user-mgmt', { path: '/user-mgmt' });
  this.route('contact-flow', { path: '/contact-flow' });
  this.route('routing-profile', { path: '/routing-profile' });
});

// Router.map(function () {});
