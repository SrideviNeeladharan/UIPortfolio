google.maps.__gjsload__('infowindow', function(_){'use strict';var tba=function(a){a=a.__gm.get("panes");if(!_.Xk())return{xi:null,view:new _.gJ(a,new _.YI,_.cz.b)};var b=_.X("div");b.style.borderTop="1px solid #ccc";b.style.marginTop="9px";b.style.paddingTop="6px";var c=new _.Ng(b),d=new _.gJ(a,new _.YI,_.cz.b,b);_.B.addListener(c,"place_changed",function(){var a=c.get("place");d.set("apiContentSize",a?_.hP:_.gh);_.ND(b,!!a)});return{xi:c,view:d}},uba=function(){this.b=new _.DD},QZ=function(a,b,c){this.m=!0;var d=b.__gm;this.da=c;c.bindTo("center",
d,"projectionCenterQ");c.bindTo("zoom",d);c.bindTo("offset",d);c.bindTo("projection",b);c.bindTo("focus",b,"position");c.bindTo("latLngPosition",a,"position");this.b=b instanceof _.Kd?a.b.get("logAsInternal")?"Ia":"Id":null;this.f=[];var e=new _.Pw(["scale"],"visible",function(a){return null==a||.3<=a});e.bindTo("scale",c);var f=tba(b);this.C=f.xi;this.l=f.view;var f=this.C,g=this.l;f&&(f.bindTo("place",a),f.bindTo("attribution",a));g.set("logAsInternal",!!a.b.get("logAsInternal"));g.bindTo("zIndex",
a);g.bindTo("layoutPixelBounds",d);g.bindTo("maxWidth",a);g.bindTo("content",a);g.bindTo("pixelOffset",a);g.bindTo("visible",e);g.bindTo("position",c,"pixelPosition");g.set("open",!0);this.f.push(_.B.forward(b,"forceredraw",g),_.B.addListener(g,"domready",function(){a.trigger("domready")}));this.j=new _.Pv(function(){var a=g.get("pixelBounds");a?_.B.trigger(d,"pantobounds",a):this.j.Ya()},150,this);a.get("disableAutoPan")||this.j.Ya();var h=this;this.f.push(_.B.addListener(g,"closeclick",function(){a.close();
a.trigger("closeclick");h.b&&_.cn(h.b,"-i",h,!!b.b)}));if(this.b){var l=this.b;_.an(b,this.b);_.cn(l,"-p",this,!!b.b);c=function(){var c=a.get("position"),d=b.getBounds();c&&d&&d.contains(c)?_.cn(l,"-v",h,!!b.b):_.dn(l,"-v",h)};this.f.push(_.B.addListener(b,"idle",c));c()}};QZ.prototype.close=function(){if(this.m){this.m=!1;this.b&&(_.dn(this.b,"-p",this),_.dn(this.b,"-v",this));_.G(this.f,_.B.removeListener);this.f.length=0;this.j.stop();var a=this.C;a&&(a.unbindAll(),a.setPlace(null),a.setAttribution(null));a=this.l;a.unbindAll();a.set("open",!1);a.Ma();this.da.unbindAll()}};_.lc("infowindow",{Uk:function(a){var b=null;_.rl(a,"map_changed",function d(){var e=a.get("map");b&&(b.eh.b.remove(a),b.$n.close(),b=null);if(e){var f=e.__gm;f.get("panes")?(f=new QZ(a,e,new _.iJ),e=e.__gm,e=e.IW_AUTO_CLOSER=e.IW_AUTO_CLOSER||new uba,b={$n:f,eh:e},f=b.eh,1==f.b.lb()&&(e=f.b.wa()[0],e.nd!=a.nd&&(e.set("map",null),f.b.remove(e))),f.b.add(a)):_.B.addListenerOnce(f,"panes_changed",d)}})}});});
