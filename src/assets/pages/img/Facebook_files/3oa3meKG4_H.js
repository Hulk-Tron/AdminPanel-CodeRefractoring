if (self.CavalryLogger) { CavalryLogger.start_js(["SdCpI"]); }

__d('isMessengerDotComURI',[],(function a(b,c,d,e,f,g){var h=new RegExp('(^|\\.)messenger\\.com$','i'),i=['https'];function j(k){if(k.isEmpty()&&k.toString()!=='#')return false;if(!k.getDomain()&&!k.getProtocol())return false;return i.indexOf(k.getProtocol())!==-1&&h.test(k.getDomain());}f.exports=j;}),null);
__d("XPagesSendPageInviteMultiController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pages\/batch_invite_send\/",{});}),null);