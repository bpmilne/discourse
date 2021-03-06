/**
  This controller supports actions when listing categories

  @class DiscoveryCategoriesController
  @extends Discourse.ObjectController
  @namespace Discourse
  @module Discourse
**/
Discourse.DiscoveryCategoriesController = Discourse.DiscoveryController.extend({
  needs: ['modal'],

  actions: {
    toggleOrdering: function(){
      this.set("ordering",!this.get("ordering"));
    }
  },

  canEdit: function() {
    return Discourse.User.currentProp('staff');
  }.property(),

  moveCategory: function(categoryId, position){
    this.get('model.categories').moveCategory(categoryId, position);
  },

  latestTopicOnly: function() {
    return this.get('categories').find(function(c) { return c.get('featuredTopics.length') > 1; }) === undefined;
  }.property('categories.@each.featuredTopics.length')

});
