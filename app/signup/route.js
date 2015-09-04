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

        this.get('session').authenticate('authenticator:firebase', {
          email,
          password
        }).then((data) => {
          this.session.get('currentUser').set('username', username);

          this.session.get('currentUser').save().then(() => {
            this.transitionTo('login');
          });
        });

      });
    }
  }
});
