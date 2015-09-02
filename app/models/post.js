import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.belongsTo('user', {async: true}),
  author_uid: DS.attr('string'),
  content: DS.attr('string')
});
