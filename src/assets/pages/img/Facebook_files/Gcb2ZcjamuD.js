if (self.CavalryLogger) { CavalryLogger.start_js(["XUEf+"]); }

__d('AYMTHomepagePanelLogger',['BanzaiLogger','Event','tidyEvent'],(function a(b,c,d,e,f,g){var h=null,i={init:function j(k,l){c('tidyEvent')(c('Event').listen(k,'click',function(event){c('BanzaiLogger').log('AYMTHomepagePanelLoggerConfig',l);}));}};f.exports=i;}),null);
__d('MHubManualTrackingSetUpSection.react',['cx','fbt','ImportActions.atlas','ImportContentSection.atlas','MHubManualTagBuilderSection.react','React','SUITabGroup.react','nullthrows'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('React').PureComponent;j=babelHelpers.inherits(m,l);k=j&&j.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.state={activeTab:'tag_builder'},this.$MHubManualTrackingSetUpSection1=function(s){this.setState({activeTab:s});c('ImportActions.atlas').clearImportedData();}.bind(this),o;}m.prototype.render=function(){var n=[{label:i._("Tag Builder"),value:'tag_builder'},{label:i._("Bulk Import"),value:'bulk_import'}],o=this.props.viewModel?c('React').createElement('div',{className:"_2ph-"},c('React').createElement('div',{className:"_2pi3"},i._("Upload a spreadsheet of the ads you want to track. We will generate a view and click tag for each ad. Send the tags to the publisher to implement on each ad. You will need to repeat this process for each new campaign, placement, ad set or ad.")),c('React').createElement('div',{className:"_2pi3"},i._("If you only need to report on campaign-level data, use the manual tag builder.")),c('React').createElement(c('ImportContentSection.atlas'),{isInline:true,viewModel:c('nullthrows')(this.props.viewModel)})):null,p=this.props.viewModel?c('React').createElement('div',{className:"_2ph-"},c('React').createElement('div',{className:"_2pi3"},i._("Create view and clicks tags for each campaign you would like to track. Send the tags to the publisher to implement on each campaign. You will need to repeat this process for each new campaign.")),c('React').createElement('div',{className:"_2pi3"},i._("To generate tags placement, ad set or ad-level, use bulk import.")),c('React').createElement(c('MHubManualTagBuilderSection.react'),{viewModel:c('nullthrows')(this.props.viewModel)})):null;return c('React').createElement('div',null,c('React').createElement(c('SUITabGroup.react'),{onChange:this.$MHubManualTrackingSetUpSection1,tabs:n,value:this.state.activeTab}),this.state.activeTab==='tag_builder'?p:o);};f.exports=m;}),null);