class Apiv1.IndexRoute extends Ember.Route
  model: -> 
    products: @store.find("product", limit: 9)
    contacts: @store.find("employee", limit: 5)