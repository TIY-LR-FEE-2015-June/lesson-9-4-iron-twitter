import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('session.currentUser');
  },
  actions: {
    submitPost(content) {
      var author = this.get('session.currentUser').content;
      var authorUid = author.get('uid');
      var newPost = this.store.createRecord('post', {content, authorUid, author});

      newPost.save().then(() => {
        author.save()
          .then(() => {
            this.controller.set('newPostContent', '');
          });
        });
    }
  }
});
