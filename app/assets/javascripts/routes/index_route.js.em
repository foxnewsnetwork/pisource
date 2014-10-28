class Apiv1.IndexRoute extends Ember.Route
  model: -> 
    products: @store.find("product", per: 3)
    productMetadata: @store.find("product_metadatum")
    employees: @store.find("employee", per: 5)