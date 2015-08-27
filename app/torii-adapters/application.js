import Ember from 'ember';
import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';

export default ToriiFirebaseAdapter.extend({
  /**
   * Gets the shared Firebase connection for our app
   */
  firebase: Ember.inject.service(),

  open(authentication) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      this.store.query('user', {uid: authentication.uid}).then((users) => {
        if (users.get('length')) {
          resolve({
            provider: authentication.provider,
            uid: authentication.uid,
            currentUser: users.get('firstObject')
          });
        } else {
          var info = authentication[authentication.provider];

          var user = this.store.createRecord('user', {
            uid: authentication.uid,
            provider: authentication.provider,
            email: info.email,
            profileImageURL: info.profileImageURL
          });

          user.save().then(() => {
            resolve({
              provider: authentication.provider,
              uid: authentication.uid,
              currentUser: user
            });
          }, reject);
        }
      })
    });
  },
});
