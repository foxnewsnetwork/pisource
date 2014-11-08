class Apiv1.MessagesNewController extends Ember.ObjectController
  notifySuccess: ->
    Apiv1.Flash.register "success", "message sent!", 5000
  successfulSave: (product) ->
    @swapOutForm()
    @notifySuccess()
  swapOutForm: ->
    @alreadySubmitted = true
  failedSave: (reason) ->
    Apiv1.Flash.register "warning", "uh-oh, the server is down", 5000 if reason.status is 500
    @failureReason = Apiv1.HashEx.camelize reason.responseJSON if reason.responseJSON
    
  actions:
    formSubmitted: ->
      @failureReason = null
      @model.save().then(_.bind @successfulSave, @).catch(_.bind @failedSave, @)