import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('user', {username: params.username});
  },

  setupController(controller, model) {
    return this._super(controller, model.get('firstObject'));
  }
});
