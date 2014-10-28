class Apiv1.ProductsIndexController extends Ember.ObjectController
  queryParams: ["per", "page", "query"]
  per: 15
  page: 1
  query: null
  +computed model.taxons.@each.parentId
  taxons: -> @get("model.taxons")

  +computed products.content.meta
  metadatum: ->
    @get("products.content.meta")

  +computed activeTaxons.@each, query, per, page
  products: -> 
    @store.find("product", taxons: @activeTaxonIds, query: @query, per: @per, page: @page)

  +computed activeTaxons.@each.id
  activeTaxonIds: ->
    _.map @get("searchParams.activeTaxons"), (t) -> t.get "id"

  actions:
    search: (opts) ->
      @query = opts.searchQuery
      @activeTaxons = opts.activeTaxons