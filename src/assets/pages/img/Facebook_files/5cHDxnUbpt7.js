if (self.CavalryLogger) { CavalryLogger.start_js(["rqFyr"]); }

__d('PagesInsightsLogger',['Banzai'],(function a(b,c,d,e,f,g){'use strict';var h='pages_insights_logger',i={logPagePreviewEvent:function j(k,l,m){var n={};n.event_type=k;n.page_id=l;n.preview_referer=m;c('Banzai').post(h,n);}};f.exports=i;}),null);
__d('isLinkshimURI',['isFacebookURI','isMessengerDotComURI'],(function a(b,c,d,e,f,g){'use strict';function h(i){var j=i.getPath();if((j==='/l.php'||j.indexOf('/si/ajax/l/')===0||j.indexOf('/l/')===0||j.indexOf('l/')===0)&&(c('isFacebookURI')(i)||c('isMessengerDotComURI')(i)))return true;return false;}f.exports=h;}),null);