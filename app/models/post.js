import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.belongsTo('user', {async: true}),
  content: DS.attr('string')
});
