class Apiv1.TrSpanComponent extends Ember.Component
  tagName: "span"
  classNames: ["i18n-translated-span"]
  opts: {}
  +computed I18n.locale, key, opts
  translated: ->
    Ember.assert "Translations require string keys, not null", @key?
    I18n.t @key, @opts

  +computed en
  key: ->
    Apiv1.StringEx.keyify @en