import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('string'),
  provider: DS.attr('string'),
  email: DS.attr('string'),
  username: DS.attr('string', {defaultValue: function(user) {
    return user.get('email');
  }}),
  profileImageURL: DS.attr('string'),

  posts: DS.hasMany('post', {async: true}),
});
