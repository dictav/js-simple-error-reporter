!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.SimpleErrorReporter=e.SimpleErrorReporter||{})}(this,function(e){"use strict";function t(e){var t=e.stack.toString();return console.log(t),t}function r(e){this.url=o+e.projectId+"/events:report?key="+e.key,this.payload={serviceContext:{
// https://cloud.google.com/error-reporting/reference/rest/v1beta1/ServiceContext
// resourceType is set automatically for incoming errors and must not be set when reporting errors. 
service:e.service,version:e.version},context:{httpRequest:{userAgent:window.navigator.userAgent,url:window.location.href,referrer:document.referrer}}}}function n(e){this.url="https://sentry.io/api/"+e.projectId+"/store/?sentry_version=7&sentry_client=simple-reporter%2F"+i+"&sentry_key="+e.key,this.payload={project:e.projectId,logger:"javascript",platform:"javascript",request:{headers:{"User-Agent":navigator.userAgent},url:window.location.href},exception:{values:[{type:"Error",value:"initial message",stacktrace:{frames:[{filename:"http://dictav.net/js-simple-error-reporter/index.html",lineno:17,colno:23,"function":"?",in_app:!0},{filename:"http://dictav.net/js-simple-error-reporter//dist/bundle.js",lineno:4,colno:587,"function":"Object.e.Crash",in_app:!0}]}}]},extra:{"session:duration":0}}}var o="https://clouderrorreporting.googleapis.com/v1beta1/projects/";r.prototype.send=function(e){if(this.payload.message=t(e),navigator.sendBeacon)navigator.sendBeacon(this.url,JSON.stringify(this.payload));else{var r=new XMLHttpRequest;r.open("POST",this.url,!0),r.send(JSON.stringify(this.payload))}};var i="0.0.1";n.prototype.send=function(e){if(this.payload.exception.values[0].value=e.message,navigator.sendBeacon)navigator.sendBeacon(this.url,JSON.stringify(this.payload));else{var t=new XMLHttpRequest;t.open("POST",this.url,!0),t.send(JSON.stringify(this.payload))}},e.HelloStackDriver=function(e){var t=new r(e);try{throw new Error("Whats wrong!!!")}catch(n){t.send(n)}},e.Crash=function(e){throw new Error(e)},e.HelloSentry=function(e){var t=new n(e);try{throw new Error("Whats wrong!")}catch(r){t.send(r)}},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=bundle.js.map
