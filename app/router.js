import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('users');
  this.route('posts', {path: '/:username'});
  this.route('my-profile', {path: '/'});
});

export default Router;
