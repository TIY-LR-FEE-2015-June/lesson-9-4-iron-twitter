import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.belongsTo('user', {async: true}),
  authorUid: DS.attr('string', {defaultValue: ''}),
  content: DS.attr('string', {defaultValue: ''})
});
