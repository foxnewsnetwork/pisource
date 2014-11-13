class Apiv1.IndexController extends Ember.ObjectController
  queryParams: ['anchor']
  anchor: null

  +observer anchor
  scroll2Anchor: ->
    return @smoothScrollTo 0 unless _.contains ["about", "products", "contacts"], @anchor
    Ember.run.schedule 'afterRender', @, =>
      el$ = $('#' + @anchor)
      @smoothScrollTo @topOffset el$ if el$.length > 0
  
  smoothScrollTo: (y) ->
    $("#page-wrapper").animate scrollTop: y if y?

  topOffset: (el$) ->
    p1 = $(".site-content").position()
    p2 = el$.position()
    return unless p1? and p2?
    p2.top - p1.top