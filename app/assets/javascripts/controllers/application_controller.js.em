class Apiv1.ApplicationController extends Ember.ObjectController
  actions:
    toggleCanvasShift: ->
      if $(".toggle-shift").hasClass("shifted")
        $(".toggle-shift").removeClass "shifted"
      else
        $(".toggle-shift").addClass "shifted"