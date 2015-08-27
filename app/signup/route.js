import Ember from 'ember';

export default Ember.Route.extend({
  firebase: Ember.inject.service('firebase'),

  actions: {
    signup(email, password) {
      var firebase = this.get('firebase');

      firebase.createUser({email, password}, (err, data) => {
        if (err) {
          return console.log(err);
        }

        alert('User created now login');

        this.transitionTo('login');
      });
    }
  }
});
