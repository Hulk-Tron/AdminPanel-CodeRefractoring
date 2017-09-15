if (self.CavalryLogger) { CavalryLogger.start_js(["IOUFW"]); }

__d('ChatEventPlanTriggers.react',['cx','ChatEventReminderContainer.react','EventsActionsLogger','EventReminderActionsLogger','EventReminderRequestHelper','EventReminderStateStore','Link.react','React'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').PureComponent);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.state={isEditing:false,showFlyout:false},this.$ChatEventPlanTriggers1=function(){c('EventReminderActionsLogger').logClickOnTriggerWord();var r=c('EventReminderStateStore').getEvent(this.props.threadID);if(r&&r.exists){this.setState({isEditing:true});if(!this.state.showFlyout){c('EventReminderRequestHelper').fetchEventReminder(this.props.threadID,r.eventID,function(){this.setState({showFlyout:true});}.bind(this));}else this.setState({showFlyout:false});}else this.setState({isEditing:false,showFlyout:!this.state.showFlyout});}.bind(this),this.onToggle=function(r){this.setState({showFlyout:r});}.bind(this),n;}l.prototype.render=function(){return c('React').createElement(c('Link.react'),{className:"_fcj",onClick:this.$ChatEventPlanTriggers1},this.props.text,this.$ChatEventPlanTriggers2());};l.prototype.$ChatEventPlanTriggers2=function(){if(!this.state.showFlyout)return null;var m={alignment:'left',position:'left',contextRef:function(){return this;}.bind(this),shown:this.state.showFlyout,onToggle:this.onToggle},n={action_history:[{surface:c('EventsActionsLogger').Surface.MESSENGER_CHAT_TAB,mechanism:c('EventsActionsLogger').Mechanism.TRIGGER_WORD}]};return c('React').createElement(c('ChatEventReminderContainer.react'),{actionContext:n,defaultEventDate:this.props.data.value,dialogProps:m,flyoutNoSheet:true,isEditing:this.state.isEditing,threadID:this.props.threadID,useContextualDialog:true});};l.propTypes={text:k.string.isRequired,threadID:k.string.isRequired,data:k.shape({name:k.string.isRequired,value:k.number.isRequired}).isRequired};f.exports=l;}),null);