import Ember from 'ember';

export default Ember.Route.extend({
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
