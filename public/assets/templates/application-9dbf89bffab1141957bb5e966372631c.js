Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"application-container toggle-shift shifted\"><div id=\"canvas-menu-top\">");
  stack1 = helpers._triageMustache.call(depth0, "site-nav", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div><div id=\"page-wrapper\"><div class=\"site-content\"><div class=\"not-site-footer\">");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</div>");
  data.buffer.push(escapeExpression((helper = helpers['site-footer'] || (depth0 && depth0['site-footer']),options={hash:{
    'action': ("displayModal")
  },hashTypes:{'action': "STRING"},hashContexts:{'action': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "site-footer", options))));
  data.buffer.push("</div></div><div id=\"fixed-bottom\"><div class=\"row\">");
  stack1 = helpers._triageMustache.call(depth0, "flash-message", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div></div></div><div class=\"modal-background\"><div class=\"modal-vertical-container\">");
  stack1 = (helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "modal", options) : helperMissing.call(depth0, "outlet", "modal", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div></div>");
  return buffer;
  
});
