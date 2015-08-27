import Ember from 'ember';

export default Ember.Route.extend({
  firebase: Ember.inject.service('firebase'),

  actions: {
    signup(username, email, password) {
      var firebase = this.get('firebase');

      firebase.createUser({email, password}, (err, data) => {
        if (err) {
          return console.log(err);
        }

        this.get('session').open('firebase', {
          provider: 'password',
          email,
          password
        }).then((data) => {
          data.currentUser.set('username', username);

          data.currentUser.save().then(() => {
            this.transitionTo('login');
          });
        });

      });
    }
  }
});
