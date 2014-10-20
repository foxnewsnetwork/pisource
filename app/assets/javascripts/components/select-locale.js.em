class Apiv1.SelectLocaleComponent extends Ember.Component
  classNames: ['select-locale']
  attributeBindinds: ['class']
  didInsertElement: ->
    @$(".selections").hide()
  +computed I18n.locale
  locale: (key, value) -> 
    if arguments.length > 1
      I18n.locale = value
    I18n.locale

  +computed I18n.translations.@each
  locales: -> _.keys I18n.translations

  actions:
    selectLocale: (locale) ->
      @$(".selections").hide()
      @$(".selected-value").show()
      @locale = locale
    openSelection: ->
      @$(".selections").show()
      @$(".selected-value").hide()