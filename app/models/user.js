import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr(),
  provider: DS.attr(),
  email: DS.attr(),
  profileImageURL: DS.attr(),
});
