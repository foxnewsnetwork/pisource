class Apiv1.AdminProductEditController extends Ember.ObjectController
  +computed model.id, model.data
  adminProduct: ->
    return if Ember.isBlank @model.id
    window.product = @model
    @store.push "admin_product", @model.get("data")