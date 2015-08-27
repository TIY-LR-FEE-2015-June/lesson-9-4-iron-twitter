import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.get('session').fetch().catch(function() {});
  },

  actions: {
    login(email, password) {
      this.get('session').open('firebase', {
        provider: 'password',
        email,
        password
      }).then((err, data) => {
        debugger;
      });
    }
  }
});
