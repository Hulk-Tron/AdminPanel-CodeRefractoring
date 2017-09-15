if (self.CavalryLogger) { CavalryLogger.start_js(["YPNa0"]); }

__d('PubcontentFeedChainingInjectionUtils',['getViewportDimensions'],(function a(b,c,d,e,f,g){'use strict';var h=100,i={isEligibleToInject:function j(k){var l=k.getBoundingClientRect(),m=l.top,n=c('getViewportDimensions').withoutScrollbars(),o=n.height;return !(!!o&&(o-m)/o*100>h);}};f.exports=i;}),null);