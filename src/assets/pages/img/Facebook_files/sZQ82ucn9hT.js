if (self.CavalryLogger) { CavalryLogger.start_js(["CZVZo"]); }

__d("LightweightEventType",[],(function a(b,c,d,e,f,g){f.exports={EVENT:"EVENT",CALL:"CALL",DIRECT_M:"DIRECT_M"};}),null);
__d('EventGuestProfileShape',['EventReminderConstants','React'],(function a(b,c,d,e,f,g){var h=c('EventReminderConstants').GuestStates,i=c('React').PropTypes,j={fbid:i.string,imageSrc:i.oneOfType([i.string,i.object]),guestState:i.oneOf([h.GOING,h.DECLINED,h.INVITED]).isRequired};f.exports=j;}),null);
__d('EventGuestProfilePicWithBadge.react',['ix','cx','EventGuestProfileShape','EventReminderConstants','Image.react','React','fbglyph'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('EventReminderConstants').GuestStates,m=c('React').PropTypes,n=2,o=h("114568"),p=h("114707");j=babelHelpers.inherits(q,c('React').Component);k=j&&j.prototype;q.prototype.render=function(){var r=this.props,s=r.badgeSize,t=r.imageSize,u=r.profile,v=c('React').createElement(c('Image.react'),{className:"_3vnr",height:t,width:t,src:u.imageSrc}),w={marginLeft:-s+'px',marginTop:t+2*n-s+'px'},x=null;if(u.guestState===l.GOING){x=c('React').createElement(c('Image.react'),{className:"_3vns",style:w,src:o});}else if(u.guestState===l.DECLINED)x=c('React').createElement(c('Image.react'),{className:"_3vnt",style:w,src:p});return c('React').createElement('div',{className:this.props.className},v,x);};function q(){j.apply(this,arguments);}q.defaultProps={badgeSize:16,imageSize:32};q.propTypes={badgeSize:m.number,className:m.string,imageSize:m.number,profile:m.shape(c('EventGuestProfileShape')).isRequired};f.exports=q;}),null);
__d('EventRSVPFacepile.react',['cx','EventGuestProfilePicWithBadge.react','EventGuestProfileShape','React','joinClasses'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){var m=this.props.profiles.map(function(n,o){return c('React').createElement(c('EventGuestProfilePicWithBadge.react'),{badgeSize:this.props.badgeSize,className:"_4sju",imageSize:this.props.faceSize,key:o+n.fbid,profile:n});}.bind(this));return c('React').createElement('div',{className:c('joinClasses')("_4sjv",this.props.className)},m);};function l(){i.apply(this,arguments);}l.defaultProps={badgeSize:16,faceSize:32};l.propTypes={badgeSize:k.number,className:k.string,faceSize:k.number,profiles:k.arrayOf(k.shape(c('EventGuestProfileShape'))).isRequired};f.exports=l;}),null);
__d('EventResponseButtons.react',['cx','fbt','EventReminderConstants','React','XUIButton.react','XUISingleSelector.react','XUISpinner.react'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('XUISingleSelector.react').Option,m=c('EventReminderConstants').GuestStates;j=babelHelpers.inherits(n,c('React').Component);k=j&&j.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=k.constructor).call.apply(o,[this].concat(r)),this.state={showSpinner:false,prevGuestState:''},this.$EventResponseButtons4=function(){this.setState({showSpinner:true,prevGuestState:this.props.guestState});this.props.onResponseClick(m.DECLINED);}.bind(this),this.$EventResponseButtons5=function(){this.setState({showSpinner:true,prevGuestState:this.props.guestState});this.props.onResponseClick(m.GOING);}.bind(this),this.$EventResponseButtons6=function(t){this.setState({showSpinner:true,prevGuestState:this.props.guestState});this.props.onResponseClick(t.value);}.bind(this),p;}n.prototype.render=function(){if(this.state.showSpinner){return this.$EventResponseButtons1();}else return this.props.guestState===m.INVITED?this.$EventResponseButtons2():this.$EventResponseButtons3();};n.prototype.$EventResponseButtons1=function(){var o=this.state.prevGuestState===m.INVITED?"_164q":"_164s";return c('React').createElement(c('XUISpinner.react'),{className:o,size:'small'});};n.prototype.$EventResponseButtons2=function(){return c('React').createElement('div',{className:"_26lz"},c('React').createElement(c('XUIButton.react'),{className:"_26l-",label:i._("Can't Go"),onClick:this.$EventResponseButtons4,size:this.props.size}),c('React').createElement(c('XUIButton.react'),{className:"_26l_",label:i._("Going"),onClick:this.$EventResponseButtons5,size:this.props.size}));};n.prototype.$EventResponseButtons3=function(){return c('React').createElement(c('XUISingleSelector.react'),{onChange:this.$EventResponseButtons6,value:this.props.guestState,size:this.props.size},c('React').createElement(l,{value:m.GOING,label:i._("Going")}),c('React').createElement(l,{value:m.DECLINED,label:i._("Can't Go")}));};f.exports=n;}),null);
__d('LightweightEventLocationTypeahead.react',['cx','fbt','AddressTypeahead.react','AddressTypeaheadCaller','AddressTypeaheadDisplayOrder','AddressTypeaheadIntegration','AddressTypeaheadProvider','AddressTypeaheadSearchSourceConfig','AddressTypeaheadType','React','XUIContextualDialog.react','emptyFunction'],(function a(b,c,d,e,f,g,h,i){var j,k,l=3,m='lightweight_events_creation';j=babelHelpers.inherits(n,c('React').Component);k=j&&j.prototype;function n(o){'use strict';k.constructor.call(this,o);this.$LightweightEventLocationTypeahead5=function(p){var q=this.$LightweightEventLocationTypeahead2(p),r=this.$LightweightEventLocationTypeahead3(p),s=this.$LightweightEventLocationTypeahead4(p);this.setState({queryString:r});this.props.onLocationSelect(q,r,s);}.bind(this);this.$LightweightEventLocationTypeahead6=function(event){var p='';if(event.target instanceof HTMLInputElement)p=event.target.value;this.setState({queryString:p});this.props.onLocationChange(p);}.bind(this);this.state={queryString:this.props.initialQueryString};}n.prototype.$LightweightEventLocationTypeahead2=function(o){'use strict';var p=o.getAuxiliaryData();if(p&&p.resultType&&p.resultType==='place')return p.locationID;return '';};n.prototype.$LightweightEventLocationTypeahead3=function(o){'use strict';var p=o.getAuxiliaryData();if(p)if(p.freeformEntry){return p.selectedTitle;}else if(p.resultType==='street')return o.getSubtitle();return o.getTitle();};n.prototype.$LightweightEventLocationTypeahead4=function(o){'use strict';var p=o.getAuxiliaryData();return p?p.full_address:'';};n.prototype.$LightweightEventLocationTypeahead7=function(){'use strict';return new (c('AddressTypeaheadSearchSourceConfig'))(null,null,c('AddressTypeaheadProvider').HERE_THRIFT,c('AddressTypeaheadType').STREET_PLACE_TYPEAHEAD,c('AddressTypeaheadIntegration').STRING_MATCH,c('AddressTypeaheadDisplayOrder').INTERLEAVE,l,c('AddressTypeaheadCaller').LIGHTWEIGHT_EVENTS_CREATION);};n.prototype.focusInput=function(){'use strict';this.$LightweightEventLocationTypeahead1&&this.$LightweightEventLocationTypeahead1.focusInput();};n.prototype.componentDidMount=function(){'use strict';this.focusInput();};n.prototype.render=function(){'use strict';return c('React').createElement(c('AddressTypeahead.react'),babelHelpers['extends']({},this.props,{className:"_4bb8",config:this.$LightweightEventLocationTypeahead7(),isFreeFormQueryAllowed:true,queryString:this.state.queryString,onSelectAttempt:this.$LightweightEventLocationTypeahead5,onChange:this.$LightweightEventLocationTypeahead6,placeholder:i._("Location"),productTag:m,ref:function(o){return this.$LightweightEventLocationTypeahead1=o;}.bind(this),layerComponent:c('XUIContextualDialog.react'),layerPosition:'left',useDialog:true}));};n.defaultProps={initialQueryString:'',onLocationChange:c('emptyFunction'),onLocationSelect:c('emptyFunction')};f.exports=n;}),null);
__d('ChatEventReminderFlyout.react',['cx','fbt','invariant','DatePickerRestraints','EventGuestProfileShape','EventReminderConstants','EventRemindersGating','EventResponseButtons.react','EventRSVPFacepile.react','Image.react','LayerHideOnBlur','ContextualLayerHideOnScroll','LightweightEventLocationTypeahead.react','LightweightEventType','Link.react','MercuryIDs','MercuryParticipants','React','ScrollableArea.react','XUIButton.react','XUICalendar.react','XUIContextualDialog.react','XUIContextualDialogBody.react','XUIContextualDialogFooter.react','XUIContextualDialogTitle.react','XUIDialog.react','XUIDateTimePicker.react','XUITextInput.react','fbglyph'],(function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l,m=c('React').PropTypes,n=c('EventReminderConstants').GuestStates,o=c('EventReminderConstants').TimeErrorType,p=266,q=122;k=babelHelpers.inherits(r,c('React').Component);l=k&&k.prototype;function r(s){l.constructor.call(this,s);this.state={imagesLoaded:false};this.$ChatEventReminderFlyout1(this.props.eventMembers);}r.prototype.$ChatEventReminderFlyout1=function(s){if(!s||!this.$ChatEventReminderFlyout2())return;var t=[];s.map(function(u){var v=c('MercuryIDs').getParticipantIDFromUserID(u.fbid);t.push(v);});c('MercuryParticipants').getBigImageMulti(t,function(u){if(!s)return;for(var v=0;v<s.length;v++)if(s[v].fbid)s[v].imageSrc=u[c('MercuryIDs').getParticipantIDFromUserID(s[v].fbid)];this.state={imagesLoaded:true};}.bind(this));};r.prototype.focusInput=function(){this.refs.event_title.focusInput();};r.prototype.componentDidMount=function(){this.focusInput();};r.prototype.render=function(){var s=c('XUIDialog.react'),t=null;if(this.props.useContextualDialog){s=c('XUIContextualDialog.react');t={LayerHideOnBlur:c('LayerHideOnBlur'),LayerHideOnScroll:c('ContextualLayerHideOnScroll')};}return c('React').createElement(s,babelHelpers['extends']({width:p,behaviors:t,hideOnEscape:true},this.props.dialogProps),c('React').createElement('div',{className:"_2l1g"},c('React').createElement(c('XUIContextualDialogTitle.react'),{className:"_2l1h"},c('React').createElement('span',{className:"_2l1i"},this.$ChatEventReminderFlyout3())),c('React').createElement(c('XUIContextualDialogBody.react'),{className:"_2l1j"},c('React').createElement('span',{className:"_2l1k",'aria-label':i._("Clock icon")}),this.$ChatEventReminderFlyout4(),c('React').createElement('div',{className:"_2l1l"},c('React').createElement(c('XUITextInput.react'),{className:"autofocus _2l1n",'aria-label':i._("Event Name"),placeholder:i._("Name"),ref:'event_title',value:this.props.eventName,onChange:this.props.onNameChange})),this.$ChatEventReminderFlyout5(),this.$ChatEventReminderFlyout6()),c('React').createElement(c('XUIContextualDialogFooter.react'),null,this.$ChatEventReminderFlyout7(),c('React').createElement(c('XUIButton.react'),{label:this.$ChatEventReminderFlyout8(),use:'confirm',onClick:this.props.onCreateOrChangeEvent}))));};r.prototype.$ChatEventReminderFlyout4=function(){var s=c('XUICalendar.react').normalizeDate(new Date()),t=[c('DatePickerRestraints').enforceDateIsNoEarlierThan(s)],u=void 0;switch(this.props.showTimeError){case o.PAST_TIME:u=i._("Event time must be in the future.");break;case o.AFTER_ONE_YEAR:u=i._("Select a date within one year from today.");break;case o.NO_ERROR:u=null;break;default:j(0);}return c('React').createElement('div',{className:"_2l1l"},c('React').createElement(c('XUIDateTimePicker.react'),{className:"_4ixo _2l1m _2l1n",date:new Date(this.props.eventDate),dateIcon:null,onChange:this.props.onDateChange,dateRestraints:t,xuiError:u}),c('React').createElement('span',{className:"_1kvx",'aria-label':i._("Calendar icon")}));};r.prototype.$ChatEventReminderFlyout5=function(){if(this.props.eventType!==c('LightweightEventType').EVENT)return null;return this.props.showLocationTypeahead?this.$ChatEventReminderFlyout9():this.$ChatEventReminderFlyout10();};r.prototype.$ChatEventReminderFlyout10=function(){return c('React').createElement('div',{className:"_2l1l _354f",onClick:this.props.onLocationRowClick,role:'button',tabIndex:'0'},c('React').createElement('div',null,c('React').createElement('div',{className:"_2b63"},this.props.eventLocationName),c('React').createElement('div',{className:"_2b64"},this.props.eventLocationAddress)));};r.prototype.$ChatEventReminderFlyout9=function(){return c('React').createElement('div',{className:"_2l1l"},c('React').createElement(c('LightweightEventLocationTypeahead.react'),{initialQueryString:this.props.eventLocationName,onLocationChange:this.props.onLocationChange,onLocationSelect:this.props.onLocationSelect,ref:'lightweightEventLocationTypeahead'}));};r.prototype.$ChatEventReminderFlyout6=function(){var s=this.props.eventMembers;if(this.props.eventType!==c('LightweightEventType').EVENT||!s||!this.state.imagesLoaded||!this.$ChatEventReminderFlyout2())return null;return c('React').createElement('div',{className:"_2l1l"},c('React').createElement('div',{className:"_pyv"},i._({"*":"{number} Going","268435456":"1 Going"},[i.plural(this.props.numOfGoingMembers,'number')])),c('React').createElement(c('ScrollableArea.react'),{className:"_pyw",maxHeight:q},c('React').createElement(c('EventRSVPFacepile.react'),{profiles:s})),c('React').createElement('div',{className:"_2m6x"},c('React').createElement(c('EventResponseButtons.react'),{guestState:this.props.selfGuestState,onResponseClick:this.props.onSelfGuestStateChange,size:'medium'})));};r.prototype.$ChatEventReminderFlyout7=function(){if(!this.props.isEditing)return null;var s=this.$ChatEventReminderFlyout11()?i._("Delete Plan"):i._("Delete");return c('React').createElement(c('Link.react'),{className:"_2l1p",onClick:this.props.onDeleteEvent},s);};r.prototype.$ChatEventReminderFlyout3=function(){if(this.props.eventType===c('LightweightEventType').CALL)return i._("Call Reminder");return this.$ChatEventReminderFlyout11()?i._("Plan"):i._("Event Reminder");};r.prototype.$ChatEventReminderFlyout8=function(){if(this.props.isEditing){return this.$ChatEventReminderFlyout11()?i._("Done"):i._("Set");}else return this.$ChatEventReminderFlyout11()?i._("Start Plan"):i._("Create");};r.prototype.$ChatEventReminderFlyout2=function(){return c('EventRemindersGating').isRSVPAllowed;};r.prototype.$ChatEventReminderFlyout11=function(){return c('EventRemindersGating').shouldUseNewName;};r.propTypes={isEditing:m.bool.isRequired,eventType:m.oneOf([c('LightweightEventType').CALL,c('LightweightEventType').DIRECT_M,c('LightweightEventType').EVENT]),eventDate:m.number.isRequired,eventName:m.string,eventLocationName:m.string,eventLocationAddress:m.string,eventMembers:m.arrayOf(m.shape(c('EventGuestProfileShape')).isRequired),numOfGoingMembers:m.number,selfGuestState:m.oneOf([n.GOING,n.DECLINED,n.INVITED]),onCreateOrChangeEvent:m.func.isRequired,onDeleteEvent:m.func.isRequired,onDateChange:m.func.isRequired,onNameChange:m.func.isRequired,onLocationRowClick:m.func.isRequired,onLocationChange:m.func.isRequired,onLocationSelect:m.func.isRequired,onSelfGuestStateChange:m.func.isRequired,useContextualDialog:m.bool.isRequired,dialogProps:m.object,showTimeError:m.string,showLocationTypeahead:m.bool.isRequired};f.exports=r;}),null);
__d('ChatEventReminderTabSheet.react',['ix','cx','fbt','ChatEventReminderFlyout.react','EventGuestProfileShape','EventReminderActionsLogger','EventReminderConstants','EventRemindersGating','Image.react','LightweightEventType','Link.react','React','XUIButton.react','fbglyph','formatDate'],(function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l,m=c('EventReminderConstants').GuestStates,n=c('React').PropTypes,o=' \u00B7 ';k=babelHelpers.inherits(p,c('React').Component);l=k&&k.prototype;p.prototype.componentDidMount=function(){c('EventReminderActionsLogger').logViewOnChatTabSheet(this.props.eventID);};p.prototype.render=function(){return c('React').createElement('div',{onClick:this.props.handleClick,ref:'banner',role:'button',tabIndex:'0'},c('React').createElement('div',{tabIndex:0,className:"_4cu7"},c('React').createElement('div',null,c('React').createElement('span',{className:"_4r4s"},this.$ChatEventReminderTabSheet1()),c('React').createElement(c('Image.react'),{className:"_4cu8",src:h("113739")})),this.$ChatEventReminderTabSheet2()),this.$ChatEventReminderTabSheet3());};p.prototype.$ChatEventReminderTabSheet3=function(){if(!this.props.shown)return null;var q={alignment:'left',position:'left',contextRef:function(){return this.refs.banner;}.bind(this),onToggle:this.props.onToggle,shown:this.props.shown};return c('React').createElement(c('ChatEventReminderFlyout.react'),{isEditing:true,eventType:this.props.eventType,eventDate:this.props.flyoutEventDate,eventName:this.props.flyoutEventName,eventLocationName:this.props.flyoutEventLocationName,eventLocationAddress:this.props.flyoutEventLocationAddress,eventMembers:this.props.eventMembers,numOfGoingMembers:this.props.numOfGoingMembers,selfGuestState:this.props.selfGuestState,onDateChange:this.props.onDateChange,onNameChange:this.props.onNameChange,onLocationRowClick:this.props.onLocationRowClick,onLocationChange:this.props.onLocationChange,onLocationSelect:this.props.onLocationSelect,onSelfGuestStateChange:this.props.onSelfGuestStateChange,onCreateOrChangeEvent:this.props.onCreateOrChangeEvent,onDeleteEvent:this.props.onDeleteEvent,useContextualDialog:true,dialogProps:q,showTimeError:this.props.showTimeError,showLocationTypeahead:this.props.showLocationTypeahead});};p.prototype.$ChatEventReminderTabSheet1=function(){if(!this.props.isEventLoaded){return j._("Loading...");}else{var q=this.props.eventDate,r=j._("{reminder_date} at {reminder_time}",[j.param('reminder_date',c('formatDate')(q,'D M j')),j.param('reminder_time',c('formatDate')(q,'g:iA'))]);if(this.props.eventName){return j._("{reminder_date_and_time}{middot_separator_for_time_and_name}{reminder_name}",[j.param('reminder_date_and_time',r),j.param('middot_separator_for_time_and_name',o),j.param('reminder_name',this.props.eventName)]);}else return r;}};p.prototype.$ChatEventReminderTabSheet2=function(){if(!this.props.eventLocationName&&!this.$ChatEventReminderTabSheet4())return null;if(this.props.selfGuestState===m.INVITED&&this.$ChatEventReminderTabSheet4())return this.$ChatEventReminderTabSheet5();var q=j._({"*":"{number} Going","268435456":"1 Going"},[j.plural(this.props.numOfGoingMembers,'number')]),r=void 0;if(this.props.eventLocationName){if(this.$ChatEventReminderTabSheet4()){r=j._("{reminder_location_name}{middot_separator_for_location_and_going_members}{going_member_count}",[j.param('reminder_location_name',this.props.eventLocationName),j.param('middot_separator_for_location_and_going_members',o),j.param('going_member_count',q)]);}else r=this.props.eventLocationName;}else r=q;return c('React').createElement('div',{className:"_47d1"},r);};p.prototype.$ChatEventReminderTabSheet5=function(){return c('React').createElement('div',{className:"_4qxr"},c('React').createElement(c('XUIButton.react'),{className:"_4qxu",label:j._("Can't Go"),onClick:function(event){event.stopPropagation();this.props.onSelfGuestStateChange(m.DECLINED);}.bind(this),size:'small'}),c('React').createElement(c('XUIButton.react'),{className:"_4qxv",label:j._("Going"),onClick:function(event){event.stopPropagation();this.props.onSelfGuestStateChange(m.GOING);}.bind(this),size:'small'}));};p.prototype.$ChatEventReminderTabSheet4=function(){return this.props.allowRSVP&&c('EventRemindersGating').isRSVPAllowed;};function p(){k.apply(this,arguments);}p.propTypes={eventName:n.string,eventDate:n.number.isRequired,eventLocationName:n.string,eventMembers:n.arrayOf(n.shape(c('EventGuestProfileShape')).isRequired),allowRSVP:n.bool.isRequired,numOfGoingMembers:n.number,selfGuestState:n.oneOf([m.GOING,m.DECLINED,m.INVITED]),flyoutEventDate:n.number.isRequired,flyoutEventName:n.string,flyoutEventLocationName:n.string,flyoutEventLocationAddress:n.string,eventID:n.string.isRequired,eventType:n.oneOf([c('LightweightEventType').CALL,c('LightweightEventType').DIRECT_M,c('LightweightEventType').EVENT]),handleClick:n.func.isRequired,onToggle:n.func.isRequired,onCreateOrChangeEvent:n.func.isRequired,onDeleteEvent:n.func.isRequired,onDateChange:n.func.isRequired,onNameChange:n.func.isRequired,onLocationRowClick:n.func.isRequired,onLocationChange:n.func.isRequired,onLocationSelect:n.func.isRequired,onSelfGuestStateChange:n.func.isRequired,isEventLoaded:n.bool,showTimeError:n.string,showLocationTypeahead:n.bool.isRequired};f.exports=p;}),null);
__d("XCreateEventReminderController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/ajax\/eventreminder\/create\/",{acontext:{type:"String",required:true},event_type:{type:"Enum",required:true,enumType:1},event_time:{type:"Int"},thread_id:{type:"Int",required:true},title:{type:"String"},location_id:{type:"String"},location_name:{type:"String"},related_event_id:{type:"Int"}});}),null);
__d("XEditEventReminderController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/ajax\/eventreminder\/submit\/",{acontext:{type:"String",required:true},event_reminder_id:{type:"Int",required:true},title:{type:"String"},date:{type:"Int"},location_id:{type:"String"},location_name:{type:"String"},"delete":{type:"Bool",defaultValue:false}});}),null);
__d("XEventReminderRSVPController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/ajax\/eventreminder\/rsvp\/",{acontext:{type:"String",required:true},event_reminder_id:{type:"Int",required:true},guest_state:{type:"Enum",required:true,enumType:1}});}),null);
__d('ChatEventReminderContainer.react',['AsyncRequest','ChatEventReminderFlyout.react','ChatEventReminderTabSheet.react','EventReminderActions','EventReminderActionsLogger','EventReminderConstants','EventReminderRequestHelper','EventReminderStateStore','FBJSON','FluxContainer','FluxStore','LightweightEventType','MercuryIDs','React','XCreateEventReminderController','XEditEventReminderController','XEventReminderRSVPController'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('React').Component,k=c('EventReminderConstants').GuestStates,l=c('EventReminderConstants').TimeErrorType,m=1000,n=3600;h=babelHelpers.inherits(o,j);i=h&&h.prototype;function o(p){i.constructor.call(this,p);this.$ChatEventReminderContainer10=function(q){if(q!==this.state.shown)this.setState({shown:q});}.bind(this);this.$ChatEventReminderContainer9=function(){var q=this.state.eventID;c('EventReminderActionsLogger').logClickOnChatTabSheet(q);if(!this.state.shown){c('EventReminderRequestHelper').fetchEventReminder(this.props.threadID,q,function(){this.setState({shown:true});}.bind(this));}else this.setState({shown:false});}.bind(this);this.$ChatEventReminderContainer1=function(q){this.setState({flyoutEventDate:q.getTime(),showTimeError:l.NO_ERROR});}.bind(this);this.$ChatEventReminderContainer2=function(event){this.setState({flyoutEventName:event.target.value});}.bind(this);this.$ChatEventReminderContainer3=function(){this.setState({showLocationTypeahead:true});}.bind(this);this.$ChatEventReminderContainer4=function(q){this.setState({flyoutEventLocationID:'',flyoutEventLocationName:q,flyoutEventLocationAddress:''});}.bind(this);this.$ChatEventReminderContainer5=function(q,r,s){this.setState({flyoutEventLocationID:q,flyoutEventLocationName:r,flyoutEventLocationAddress:s,showLocationTypeahead:false});}.bind(this);this.$ChatEventReminderContainer6=function(q){this.setState({selfGuestState:q});var r=c('XEventReminderRSVPController').getURIBuilder().setInt('event_reminder_id',this.state.eventID).setEnum('guest_state',q).setString('acontext',c('FBJSON').stringify(this.props.actionContext));new (c('AsyncRequest'))(r.getURI()).send();}.bind(this);this.$ChatEventReminderContainer8=function(){var q=this.state.flyoutEventDate,r=this.$ChatEventReminderContainer11(q);this.setState({showTimeError:r});if(r!==l.NO_ERROR)return;if(this.props.isEditing){this.$ChatEventReminderContainer12();}else this.$ChatEventReminderContainer13();}.bind(this);this.$ChatEventReminderContainer7=function(){var q=this.state.eventID,r=c('XEditEventReminderController').getURIBuilder().setInt('event_reminder_id',q).setBool('delete',true).setString('acontext',c('FBJSON').stringify(this.props.actionContext));new (c('AsyncRequest'))(r.getURI()).setHandler(function(s){if(s.payload){if(this.props.dialogProps&&this.props.dialogProps.onToggle)this.props.dialogProps.onToggle(false);c('EventReminderActions').deleteEventReminder(this.props.threadID);}}.bind(this)).send();}.bind(this);}o.getStores=function(p){return [c('EventReminderStateStore')];};o.calculateState=function(p,q){var event=c('EventReminderStateStore').getEvent(q.threadID);if(!q.isEditing||!event||!event.exists)return this.getDefaultState(q);var r=c('EventReminderStateStore').getEventMembers(q.threadID),s=c('EventReminderStateStore').getNumOfGoingMembers(q.threadID),t=c('EventReminderStateStore').getSelfGuestState(q.threadID);return {eventDate:event.eventDate,eventName:event.eventName,eventLocationName:event.eventLocationName,eventMembers:r,eventID:event.eventID,eventType:event.eventType,flyoutEventDate:event.eventDate*m,flyoutEventName:event.eventName,flyoutEventLocationID:'',flyoutEventLocationName:event.eventLocationName,flyoutEventLocationAddress:event.eventLocationAddress,shown:false,isEventLoaded:true,showTimeError:l.NO_ERROR,showLocationTypeahead:!event.eventLocationName,allowRSVP:event.allowRSVP,numOfGoingMembers:s,selfGuestState:t};};o.getDefaultState=function(p){var q=Date.now()+m*n;if(p.defaultEventDate)q=p.defaultEventDate*m;return {eventDate:q/m,eventName:'',eventLocationName:'',eventMembers:[],eventID:'',eventType:c('LightweightEventType').EVENT,flyoutEventDate:q,flyoutEventName:'',flyoutEventLocationID:'',flyoutEventLocationName:'',flyoutEventLocationAddress:'',shown:false,isEventLoaded:false,showTimeError:l.NO_ERROR,showLocationTypeahead:true,allowRSVP:false,numOfGoingMembers:0,selfGuestState:k.INVITED};};o.prototype.render=function(){if(this.props.flyoutNoSheet)return c('React').createElement(c('ChatEventReminderFlyout.react'),{isEditing:this.props.isEditing,eventType:this.state.eventType,eventDate:this.state.flyoutEventDate,eventName:this.state.flyoutEventName,eventLocationName:this.state.flyoutEventLocationName,eventLocationAddress:this.state.flyoutEventLocationAddress,eventMembers:this.state.eventMembers,numOfGoingMembers:this.state.numOfGoingMembers,selfGuestState:this.state.selfGuestState,onDateChange:this.$ChatEventReminderContainer1,onNameChange:this.$ChatEventReminderContainer2,onLocationRowClick:this.$ChatEventReminderContainer3,onLocationChange:this.$ChatEventReminderContainer4,onLocationSelect:this.$ChatEventReminderContainer5,onSelfGuestStateChange:this.$ChatEventReminderContainer6,onDeleteEvent:this.$ChatEventReminderContainer7,onCreateOrChangeEvent:this.$ChatEventReminderContainer8,useContextualDialog:this.props.useContextualDialog,dialogProps:this.props.dialogProps,showTimeError:this.state.showTimeError,showLocationTypeahead:this.state.showLocationTypeahead});return c('React').createElement('span',null,c('React').createElement(c('ChatEventReminderTabSheet.react'),babelHelpers['extends']({},this.props,{flyoutEventDate:this.state.flyoutEventDate,flyoutEventName:this.state.flyoutEventName,flyoutEventLocationName:this.state.flyoutEventLocationName,flyoutEventLocationAddress:this.state.flyoutEventLocationAddress,eventDate:this.state.eventDate,eventName:this.state.eventName,eventLocationName:this.state.eventLocationName,eventMembers:this.state.eventMembers,allowRSVP:this.state.allowRSVP,numOfGoingMembers:this.state.numOfGoingMembers,selfGuestState:this.state.selfGuestState,eventID:this.state.eventID,eventType:this.state.eventType,shown:this.state.shown,handleClick:this.$ChatEventReminderContainer9,onToggle:this.$ChatEventReminderContainer10,onDateChange:this.$ChatEventReminderContainer1,onNameChange:this.$ChatEventReminderContainer2,onLocationRowClick:this.$ChatEventReminderContainer3,onLocationChange:this.$ChatEventReminderContainer4,onLocationSelect:this.$ChatEventReminderContainer5,onSelfGuestStateChange:this.$ChatEventReminderContainer6,onDeleteEvent:this.$ChatEventReminderContainer7,onCreateOrChangeEvent:this.$ChatEventReminderContainer8,isEventLoaded:this.state.isEventLoaded,showTimeError:this.state.showTimeError,showLocationTypeahead:this.state.showLocationTypeahead,tabIndex:0})));};o.prototype.$ChatEventReminderContainer13=function(){var p=c('MercuryIDs').getThreadFBIDFromThreadID(this.props.threadID),q=c('XCreateEventReminderController').getURIBuilder().setString('acontext',c('FBJSON').stringify(this.props.actionContext)).setEnum('event_type',c('LightweightEventType').EVENT).setInt('event_time',Math.floor(this.state.flyoutEventDate/m)).setInt('thread_id',p).setString('title',this.state.flyoutEventName).setString('location_id',this.state.flyoutEventLocationID).setString('location_name',this.state.flyoutEventLocationName);new (c('AsyncRequest'))(q.getURI()).setHandler(function(r){if(r.payload&&this.props.dialogProps&&this.props.dialogProps.onToggle)this.props.dialogProps.onToggle(false);}.bind(this)).send();};o.prototype.$ChatEventReminderContainer12=function(){var p=c('XEditEventReminderController').getURIBuilder().setInt('event_reminder_id',this.state.eventID).setString('title',this.state.flyoutEventName).setInt('date',this.state.flyoutEventDate/m).setString('location_id',this.state.flyoutEventLocationID).setString('location_name',this.state.flyoutEventLocationName).setBool('delete',false).setString('acontext',c('FBJSON').stringify(this.props.actionContext));new (c('AsyncRequest'))(p.getURI()).setHandler(function(q){if(q.payload){if(this.props.dialogProps&&this.props.dialogProps.onToggle)this.props.dialogProps.onToggle(false);c('EventReminderActions').updateEventReminder(this.props.threadID,q.payload);}}.bind(this)).send();};o.prototype.$ChatEventReminderContainer11=function(p){var q=new Date(p),r=new Date(),s=new Date(new Date().setFullYear(new Date().getFullYear()+1));if(q<=r){return l.PAST_TIME;}else if(q>=s){return l.AFTER_ONE_YEAR;}else return l.NO_ERROR;};f.exports=c('FluxContainer').create(o,{withProps:true});}),null);
__d('FantaEventReminderTabSheet.react',['ChatEventReminderContainer.react','EventsActionsLogger','React'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('React').PureComponent);i=h&&h.prototype;j.prototype.render=function(){var k={action_history:[{surface:c('EventsActionsLogger').Surface.MESSENGER_CHAT_TAB,mechanism:c('EventsActionsLogger').Mechanism.REMINDER_BANNER}]};return c('React').createElement(c('ChatEventReminderContainer.react'),{threadID:this.props.threadID,flyoutNoSheet:false,isEditing:true,useContextualDialog:true,actionContext:k});};function j(){h.apply(this,arguments);}f.exports=j;}),null);