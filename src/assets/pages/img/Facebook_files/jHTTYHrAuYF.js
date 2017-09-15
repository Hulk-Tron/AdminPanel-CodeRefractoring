if (self.CavalryLogger) { CavalryLogger.start_js(["5TG4z"]); }

__d("LiveVideoEndScreenEvent",[],(function a(b,c,d,e,f,g){f.exports={SCREEN_SHOWN:"screen_shown"};}),null);
__d('ProfileTile.react',['Link.react','Image.react','ImageBlock.react','React','XUIText.react','URI'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=24;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;k.prototype.render=function(){var l=this.props.size||j,m=this.props.imageProps&&this.props.imageProps.src||'https://graph.facebook.com/'+this.props.id+'/picture?width='+l+'&height='+l,n=null;if(this.props.shouldShowProfileCardOnHover)n=new (c('URI'))('/ajax/hovercard/user.php').setQueryData({id:this.props.id});var o=this.props.desc?c('React').createElement(c('XUIText.react'),babelHelpers['extends']({display:'block'},this.props.descProps),this.props.desc):null,p=c('React').createElement('span',this.props.titleProps,this.props.name);if(this.props.shouldNameLinkToProfile)p=c('React').createElement(c('Link.react'),babelHelpers['extends']({'data-hovercard':n,href:this.props.titleProps&&this.props.titleProps.href||'/'+this.props.id},this.props.titleProps),this.props.name);var q=c('React').createElement(c('Image.react'),babelHelpers['extends']({src:m},this.props.imageProps)),r=this.props.shouldImageLinkToProfile?c('React').createElement(c('Link.react'),{href:'/'+this.props.id},q):q;return c('React').createElement(c('ImageBlock.react'),this.props.tileProps,r,c('React').createElement('div',null,p,o));};function k(){h.apply(this,arguments);}k.defaultProps={shouldShowProfileCardOnHover:true,shouldNameLinkToProfile:true};f.exports=k;}),null);
__d("XAutoLoginToGamesDesktopAppController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/login\/gamesdesktopapp\/",{});}),null);
__d('GamesDesktopLogin.react',['cx','fbt','AppInstallLogger','AppInstallLoggerEvents','DOMContainer.react','Form','Link.react','ProfileTile.react','React','ShimButton.react','XAutoLoginToGamesDesktopAppController','XUISpinner.react','nullthrows'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=120,m=3000;j=babelHelpers.inherits(n,c('React').PureComponent);k=j&&j.prototype;function n(o){k.constructor.call(this,o);this.$GamesDesktopLogin1=null;this.state={step:this.props.userID&&this.props.nonce&&this.props.userName?'continue_as_available':'regular_login_flow'};}n.prototype.componentDidMount=function(){if(this.state.step==='continue_as_available'&&this.props.autoContinue)this.$GamesDesktopLogin1=setTimeout(this.$GamesDesktopLogin2.bind(this),m);};n.prototype.componentWillUnmount=function(){clearTimeout(this.$GamesDesktopLogin1);};n.prototype.$GamesDesktopLogin2=function(){c('Form').post(c('XAutoLoginToGamesDesktopAppController').getURIBuilder().getURI(),{id:this.props.userID,n:this.props.nonce});};n.prototype.render=function(){if(this.state.step==='regular_login_flow')return this.$GamesDesktopLogin3();if(this.state.step==='continue_as_available'&&this.props.autoContinue){return c('React').createElement('div',{className:"_4wix"},c('React').createElement('div',{className:"_4wiy"},i._("Signing in as {name}...",[i.param('name',c('React').createElement('span',{className:"_4wj2"},this.props.userName))])),this.$GamesDesktopLogin4(),this.$GamesDesktopLogin5());}else return c('React').createElement('div',{className:"_4wix"},c('React').createElement('div',{className:"_4wiy"},i._("Sign in with Facebook to get started.")),this.$GamesDesktopLogin4(),this.state.step==='continue_as_available'?this.$GamesDesktopLogin6():this.$GamesDesktopLogin7(),this.$GamesDesktopLogin5());};n.prototype.$GamesDesktopLogin3=function(){return c('React').createElement(c('DOMContainer.react'),null,this.props.regularLoginFlowMarkup);};n.prototype.$GamesDesktopLogin6=function(){return c('React').createElement(c('ShimButton.react'),{className:"_4wj1",onClick:this.$GamesDesktopLogin8.bind(this)},c('React').createElement('span',{className:"_4wiy"},i._("Continue as {name}",[i.param('name',c('React').createElement('span',{className:"_4wj2"},this.props.userName))])));};n.prototype.$GamesDesktopLogin4=function(){return c('React').createElement(c('ProfileTile.react'),{id:c('nullthrows')(this.props.userID),imageProps:{className:"_4wiz"},size:l});};n.prototype.$GamesDesktopLogin5=function(){return c('React').createElement(c('Link.react'),{className:"_4wj0",onClick:this.$GamesDesktopLogin9.bind(this)},i._("Switch Account"));};n.prototype.$GamesDesktopLogin7=function(){return c('React').createElement('div',{className:"_4wj1"},c('React').createElement(c('XUISpinner.react'),{background:'light',className:"_4wj4",size:'large'}));};n.prototype.$GamesDesktopLogin8=function(){this.setState({step:'continue_as_in_flight'});this.$GamesDesktopLogin2();};n.prototype.$GamesDesktopLogin9=function(){clearTimeout(this.$GamesDesktopLogin1);this.setState({step:'regular_login_flow'});};f.exports=n;}),null);
__d('LiveVideoEndScreenTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:LiveVideoEndScreenLoggerConfig',this.$LiveVideoEndScreenTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:LiveVideoEndScreenLoggerConfig',this.$LiveVideoEndScreenTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$LiveVideoEndScreenTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$LiveVideoEndScreenTypedLogger1=babelHelpers['extends']({},this.$LiveVideoEndScreenTypedLogger1,j);return this;};h.prototype.setEvent=function(j){this.$LiveVideoEndScreenTypedLogger1.event=j;return this;};h.prototype.setVC=function(j){this.$LiveVideoEndScreenTypedLogger1.vc=j;return this;};h.prototype.setVideoID=function(j){this.$LiveVideoEndScreenTypedLogger1.video_id=j;return this;};var i={event:true,vc:true,video_id:true};f.exports=h;}),null);
__d("XLiveViewerAsyncDismissNuxController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/live\/viewer\/nux\/dismiss\/",{video_id:{type:"String"},source:{type:"String"}});}),null);
__d("XLiveWatchingAsyncNuxController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/live\/watching\/",{video_id:{type:"String"},source:{type:"String"},unmuted:{type:"Bool",defaultValue:true}});}),null);
__d('LiveVideoIndicatorOverlay',['csx','cx','invariant','CSS','DOM','SubscriptionsHandler','AsyncRequest','XLiveViewerAsyncDismissNuxController','Event','XLiveWatchingAsyncNuxController','Run','VideoPlayerLoggerSource'],(function a(b,c,d,e,f,g,h,i,j){var k=false;function l(m,n,o,p,q){var r,s=this;'use strict';this.$LiveVideoIndicatorOverlay4=m;this.$LiveVideoIndicatorOverlay1=n;this.$LiveVideoIndicatorOverlay2=o;this.$LiveVideoIndicatorOverlay5=p;this.$LiveVideoIndicatorOverlay6=m.getVideoID();this.$LiveVideoIndicatorOverlay7=q;this.$LiveVideoIndicatorOverlay8=false;this.$LiveVideoIndicatorOverlay3=new (c('SubscriptionsHandler'))();this.$LiveVideoIndicatorOverlay3.addSubscriptions(m.addListener('streamInterrupted',this.$LiveVideoIndicatorOverlay9.bind(this)),m.addListener('streamResumed',this.$LiveVideoIndicatorOverlay10.bind(this)),m.addListener('finishPlayback',this.$LiveVideoIndicatorOverlay11.bind(this)),m.addListener('VideoWithLiveBroadcast/viewCountChange',this.$LiveVideoIndicatorOverlay12.bind(this)),m.addListener('beginPlayback',this.$LiveVideoIndicatorOverlay13.bind(this)),m.addListener('VideoChannelController/enterChannel',this.$LiveVideoIndicatorOverlay14.bind(this)),m.addListener('VideoChannelController/exitChannel',this.$LiveVideoIndicatorOverlay15.bind(this)),m.addListener('TahoeController/enterTahoe',this.$LiveVideoIndicatorOverlay16.bind(this)),m.addListener('TahoeController/exitTahoe',this.$LiveVideoIndicatorOverlay17.bind(this)));if(this.$LiveVideoIndicatorOverlay5!=null){var r=function(){s.$LiveVideoIndicatorOverlay3.addSubscriptions(s.$LiveVideoIndicatorOverlay5.subscribe('hide',s.$LiveVideoIndicatorOverlay18.bind(s)));s.$LiveVideoIndicatorOverlay5!=null||j(0);var t=c('DOM').scry(s.$LiveVideoIndicatorOverlay5.getContentRoot(),"._36gl")[0];if(!t)return {v:void 0};var u=c('Event').listen(t,'click',function(){if(u){u.remove();u=null;}new (c('AsyncRequest'))().setAllowCrossPageTransition().setURI(c('XLiveViewerAsyncDismissNuxController').getURIBuilder().getURI()).setData({video_id:this.$LiveVideoIndicatorOverlay6,source:this.$LiveVideoIndicatorOverlay4.getSource()}).setHandler(function(){return k=true;}).send();}.bind(s));}();if(typeof r==="object")return r.v;}c('Run').onLeave(function(){return this.$LiveVideoIndicatorOverlay3.release();}.bind(this));}l.prototype.$LiveVideoIndicatorOverlay19=function(){'use strict';var m=this.$LiveVideoIndicatorOverlay4.getSource();if(m==c('VideoPlayerLoggerSource').CHANNEL||m==c('VideoPlayerLoggerSource').SNOWLIFT||m==c('VideoPlayerLoggerSource').PERMALINK)return true;return false;};l.prototype.$LiveVideoIndicatorOverlay13=function(){'use strict';if(this.$LiveVideoIndicatorOverlay7||this.$LiveVideoIndicatorOverlay19())setTimeout(function(){return this.$LiveVideoIndicatorOverlay20();}.bind(this),l.DELAY_TO_SHOW_WATCHING_NUX*1000);};l.prototype.$LiveVideoIndicatorOverlay16=function(){'use strict';this.$LiveVideoIndicatorOverlay8=true;this.$LiveVideoIndicatorOverlay7=true;this.$LiveVideoIndicatorOverlay21();var m=this.$LiveVideoIndicatorOverlay5;if(m){m.setOffsetX(65);m.setOffsetY(80);}};l.prototype.$LiveVideoIndicatorOverlay17=function(){'use strict';this.$LiveVideoIndicatorOverlay8=false;this.$LiveVideoIndicatorOverlay7=false;this.$LiveVideoIndicatorOverlay22();this.$LiveVideoIndicatorOverlay23();};l.prototype.$LiveVideoIndicatorOverlay14=function(){'use strict';this.$LiveVideoIndicatorOverlay7=true;};l.prototype.$LiveVideoIndicatorOverlay15=function(){'use strict';this.$LiveVideoIndicatorOverlay7=false;this.$LiveVideoIndicatorOverlay22();};l.prototype.$LiveVideoIndicatorOverlay18=function(){'use strict';};l.prototype.$LiveVideoIndicatorOverlay20=function(){'use strict';if(this.$LiveVideoIndicatorOverlay5&&!k)this.$LiveVideoIndicatorOverlay5.show();new (c('AsyncRequest'))().setAllowCrossPageTransition().setURI(c('XLiveWatchingAsyncNuxController').getURIBuilder().getURI()).setData({video_id:this.$LiveVideoIndicatorOverlay6,source:this.$LiveVideoIndicatorOverlay4.getSource(),unmuted:!this.$LiveVideoIndicatorOverlay4.isMuted()}).send();};l.prototype.$LiveVideoIndicatorOverlay9=function(){'use strict';this.$LiveVideoIndicatorOverlay21();};l.prototype.$LiveVideoIndicatorOverlay10=function(){'use strict';this.$LiveVideoIndicatorOverlay23();};l.prototype.$LiveVideoIndicatorOverlay21=function(){'use strict';c('CSS').removeClass(this.$LiveVideoIndicatorOverlay1,"_3rno");};l.prototype.$LiveVideoIndicatorOverlay23=function(){'use strict';if(this.$LiveVideoIndicatorOverlay4.isState('finished')||this.$LiveVideoIndicatorOverlay8)return;c('CSS').addClass(this.$LiveVideoIndicatorOverlay1,"_3rno");};l.prototype.$LiveVideoIndicatorOverlay11=function(){'use strict';this.$LiveVideoIndicatorOverlay21();this.$LiveVideoIndicatorOverlay22();};l.prototype.$LiveVideoIndicatorOverlay22=function(){'use strict';if(this.$LiveVideoIndicatorOverlay5&&this.$LiveVideoIndicatorOverlay5.isShown())this.$LiveVideoIndicatorOverlay5.hide();};l.prototype.$LiveVideoIndicatorOverlay12=function(m){'use strict';var n=c('DOM').replace(this.$LiveVideoIndicatorOverlay2,m);this.$LiveVideoIndicatorOverlay2=n&&n[0];};l.DELAY_TO_SHOW_WATCHING_NUX=8;f.exports=l;}),null);
__d('LiveVideoEndScreenCTAs.react',['cx','ProfileTile.react','React'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=130;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.$LiveVideoEndScreenCTAs1=function(){return c('React').createElement('div',{className:"_2219"},c('React').createElement('div',{className:"_221a"},c('React').createElement(c('ProfileTile.react'),{id:this.props.ownerID,imageProps:{className:"_2240"},size:k})),c('React').createElement('div',{className:"_2241"},this.props.ownerName));};l.prototype.render=function(){if(!this.props.shouldShow)return null;return this.$LiveVideoEndScreenCTAs1();};function l(){i.apply(this,arguments);}f.exports=l;}),null);
__d('LiveVideoEndScreenConstants',[],(function a(b,c,d,e,f,g){'use strict';var h={ACTIONS:{SET_THUMBNAILS:'SET_THUMBNAILS'}};f.exports=h;}),null);
__d('LiveVideoEndScreenDispatcher',['ExplicitRegistrationReactDispatcher'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('ExplicitRegistrationReactDispatcher'));i=h&&h.prototype;function j(k){i.constructor.call(this,k);this.dispatch=this.dispatch.bind(this);}f.exports=new j({strict:true});}),null);
__d("XLiveVideoTopBroadcastThumbnailController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/video_broadcast\/top_broadcast_thumbnails\/",{video_id:{type:"FBID"},thumbnail_count:{type:"Int",defaultValue:2}});}),null);
__d('LiveVideoEndScreenThumbnails.react',['AsyncRequest','DOMContainer.react','React','VideoPlayerController','XLiveVideoTopBroadcastThumbnailController'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;function j(k){i.constructor.call(this,k);var l=c('XLiveVideoTopBroadcastThumbnailController').getURIBuilder().setFBID('video_id',this.props.videoController.getVideoID()).setInt('thumbnail_count',3).getURI();new (c('AsyncRequest'))(l).send();}j.prototype.$LiveVideoEndScreenThumbnails1=function(){if(!this.props.thumbnails)return null;var k=[];for(var l=this.props.thumbnails,m=Array.isArray(l),n=0,l=m?l:l[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var o;if(m){if(n>=l.length)break;o=l[n++];}else{n=l.next();if(n.done)break;o=n.value;}var p=o;k.push(c('React').createElement(c('DOMContainer.react'),{key:p.href},p));}return k;};j.prototype.render=function(){if(this.props.videoController.getIsInChannel())return null;return c('React').createElement('div',null,this.$LiveVideoEndScreenThumbnails1());};f.exports=j;}),null);
__d('LiveVideoEndScreenUIStore',['FluxMapStore','immutable','LiveVideoEndScreenConstants','LiveVideoEndScreenDispatcher'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('LiveVideoEndScreenConstants').ACTIONS;h=babelHelpers.inherits(k,c('FluxMapStore'));i=h&&h.prototype;k.prototype.getInitialState=function(){return c('immutable').Map({thumbnails:null});};k.prototype.reduce=function(l,m){switch(m.type){case j.SET_THUMBNAILS:l=l.set('thumbnails',m.value);break;default:break;}return l;};function k(){h.apply(this,arguments);}f.exports=new k(c('LiveVideoEndScreenDispatcher'));}),null);
__d('LiveVideoEndScreenThumbnailsContainer.react',['FluxContainer','LiveVideoEndScreenDispatcher','LiveVideoEndScreenThumbnails.react','LiveVideoEndScreenUIStore','React','VideoPlayerController'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;j.getStores=function(){return [c('LiveVideoEndScreenUIStore')];};j.calculateState=function(k,l){var m=c('LiveVideoEndScreenUIStore').getState().toObject(),n=m.thumbnails;return {thumbnails:n};};function j(k){i.constructor.call(this,k);c('LiveVideoEndScreenDispatcher').explicitlyRegisterStores([c('LiveVideoEndScreenUIStore')]);}j.prototype.render=function(){return c('React').createElement(c('LiveVideoEndScreenThumbnails.react'),{thumbnails:this.state.thumbnails,videoController:this.props.videoController});};f.exports=c('FluxContainer').create(j,{withProps:true});}),null);
__d('VideoLiveEndscreen',['CSS','LiveVideoEndScreenThumbnailsContainer.react','React','ReactDOM','SubscriptionsHandler','LiveVideoEndScreenCTAs.react','LiveMapEntryPointsLoggerController','LiveVideoEndScreenEvent','LiveVideoEndScreenTypedLogger'],(function a(b,c,d,e,f,g){function h(i,j,k,l,m,n,o){'use strict';this.$VideoLiveEndscreen3=i;this.$VideoLiveEndscreen1=j;this.$VideoLiveEndscreen4=k;this.$VideoLiveEndscreen5=l;this.$VideoLiveEndscreen6=m;this.$VideoLiveEndscreen7=n;this.$VideoLiveEndscreen8=o;this.$VideoLiveEndscreen2=new (c('SubscriptionsHandler'))();this.$VideoLiveEndscreen2.addSubscriptions(i.addListener('beginPlayback',this.$VideoLiveEndscreen9.bind(this)),i.addListener('finishPlayback',this.$VideoLiveEndscreen10.bind(this)),i.addListener('playRequested',this.$VideoLiveEndscreen11.bind(this)),i.addListener('VideoChannelController/exitChannel',this.$VideoLiveEndscreen12.bind(this)));i.registerOption('VideoLiveEndscreen','enabled',function(){return true;});}h.prototype.$VideoLiveEndscreen9=function(){'use strict';c('CSS').hide(this.$VideoLiveEndscreen1);};h.prototype.$VideoLiveEndscreen10=function(){'use strict';if(this.$VideoLiveEndscreen4)c('LiveMapEntryPointsLoggerController').logEndscreenImpression();new (c('LiveVideoEndScreenTypedLogger'))().setEvent(c('LiveVideoEndScreenEvent').SCREEN_SHOWN).log();c('CSS').show(this.$VideoLiveEndscreen1);if(this.$VideoLiveEndscreen5)c('ReactDOM').render(c('React').createElement(c('LiveVideoEndScreenThumbnailsContainer.react'),{videoController:this.$VideoLiveEndscreen3}),this.$VideoLiveEndscreen5);if(this.$VideoLiveEndscreen8)c('ReactDOM').render(c('React').createElement(c('LiveVideoEndScreenCTAs.react'),{ownerID:this.$VideoLiveEndscreen6,ownerName:this.$VideoLiveEndscreen7,shouldShow:this.$VideoLiveEndscreen3.getIsInChannel()}),this.$VideoLiveEndscreen8);};h.prototype.$VideoLiveEndscreen11=function(){'use strict';c('CSS').hide(this.$VideoLiveEndscreen1);};h.prototype.$VideoLiveEndscreen12=function(){'use strict';if(this.$VideoLiveEndscreen8)c('ReactDOM').unmountComponentAtNode(this.$VideoLiveEndscreen8);};f.exports=h;}),null);
__d('VideoLiveInterruptedScreen',['CSS','SubscriptionsHandler'],(function a(b,c,d,e,f,g){function h(i,j){'use strict';this.$VideoLiveInterruptedScreen3=i;this.$VideoLiveInterruptedScreen1=j;this.$VideoLiveInterruptedScreen2=new (c('SubscriptionsHandler'))();this.$VideoLiveInterruptedScreen2.addSubscriptions(i.addListener('streamInterrupted',this.$VideoLiveInterruptedScreen4.bind(this)),i.addListener('streamResumed',this.$VideoLiveInterruptedScreen5.bind(this)));}h.prototype.$VideoLiveInterruptedScreen4=function(){'use strict';c('CSS').show(this.$VideoLiveInterruptedScreen1);};h.prototype.$VideoLiveInterruptedScreen5=function(){'use strict';c('CSS').hide(this.$VideoLiveInterruptedScreen1);};f.exports=h;}),null);