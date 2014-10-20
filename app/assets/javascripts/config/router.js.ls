Apiv1.Router.map ->
  @route "about"
  @route "contact"
  @resource "products", path: "/products", ->
    @route "index"
  @resource "product", path: "/product/:product_id", ->
    @route "show"

  @resource "admin", path: "/admin", ->
    @resource "admin.translations", path: "/translations", ->
      @route "index"
      @route "new"
    @resource "admin.translation", path: "/translation/:translation_id", ->
      @route "edit"

    @resource "admin.products", path: "/products", ->
      @route "index"
      @route "new"
    @resource "admin.product", path: "/product/:product_id", ->
      @route "edit"
      
    @resource "admin.taxons", path: "/taxons", ->
      @route "index"
      @route "new"
    @resource "admin.taxon", path: "/taxon/:taxon_id", ->
      @route "edit"

    @resource "admin.contacts", path: "/contacts", ->
      @route "index"
      @route "new"
    @resource "admin.contact", path: "/contact/:contact_id", ->
      @route "edit"