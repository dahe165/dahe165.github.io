(function(){function h(){var a=document.head.querySelector('link[rel="manifest"]'),b=a?a.href:"",d=A([b,window.location]);Promise.resolve().then(function(){if(!b)throw'can\'t find <link rel="manifest" href=".." />\'';var a={};"use-credentials"===b.crossOrigin&&(a.credentials="include");return window.fetch(b,a)}).then(function(a){return a.json()}).then(function(a){return B(a,d)}).catch(function(a){return console.warn("pwacompat.js error",a)})}function A(a){for(var b={},d=0;d<a.length;b={c:b.c},++d){b.c=
a[d];try{return new URL("",b.c),function(a){return function(b){return(new URL(b,a.c)).toString()}}(b)}catch(m){}}return function(a){return a}}function t(a,b){a=document.createElement(a);for(var d in b)a.setAttribute(d,b[d]);document.head.appendChild(a);return a}function c(a,b){b&&(!0===b&&(b="yes"),t("meta",{name:a,content:b}))}function B(a,b){function d(b,d,f){var k=b.width,c=b.height,e=window.devicePixelRatio;b=u({width:k*e,height:c*e});b.scale(e,e);b.fillStyle=a.background_color||"#f8f9fa";b.fillRect(0,
0,k,c);b.translate(k/2,(c-32)/2);b.font="24px HelveticaNeue-CondensedBold";b.fillStyle=r?"white":"black";k=b.measureText(v).width;f&&(c=f.width/e,e=f.height/e,128<e&&(c/=e/128,e=128),48<=c&&48<=e&&(b.drawImage(f,c/-2,e/-2,c,e),b.translate(0,e/2+32)));b.fillText(v,k/-2,0);f=document.createElement("link");f.setAttribute("rel","apple-touch-startup-image");f.setAttribute("media","(orientation: "+d+")");f.setAttribute("href",b.canvas.toDataURL());return f}function m(a){var b=d(window.screen,"portrait",
a);a=d({width:window.screen.height,height:window.screen.width},"landscape",a);w.forEach(function(a){return a.remove()});document.head.appendChild(b);document.head.appendChild(a);w.add(b);w.add(a)}var g=a.icons||[];g.sort(function(a,b){return parseInt(b.sizes,10)-parseInt(a.sizes,10)});var x=g.map(function(a){a={rel:"icon",href:b(a.src),sizes:a.sizes};t("link",a);if(n)return a.rel="apple-touch-icon",t("link",a)}),p=a.display;g=-1!==C.indexOf(p);c("mobile-web-app-capable",g);D(a.theme_color||"black");
E&&(c("msapplication-starturl",a.start_url||"/"),c("msapplication-TileColor",a.theme_color));document.head.querySelector('[name="theme-color"]')||c("theme-color",a.theme_color);var h=F(a.orientation);c("x5-orientation",h);c("screen-orientation",h);"fullscreen"===p?(c("x5-fullscreen","true"),c("full-screen","yes")):g&&(c("x5-page-mode","app"),c("browsermode","application"));if(n){var r=y(a.background_color||"#f8f9fa"),v=a.name||a.short_name||document.title;(p=G(a.related_applications))&&c("apple-itunes-app",
"app-id="+p);c("apple-mobile-web-app-capable",g);c("apple-mobile-web-app-title",v);var w=new Set;m(null);if(x.length){var l=x[0],q=new Image;q.onload=function(){m(q);if(a.background_color){var b=z(q,a.background_color);null!==b&&(l.href=b,x.slice(1).forEach(function(b){var d=new Image;d.onload=function(){var c=z(d,a.background_color,!0);b.href=c};d.src=b.href}))}};q.src=l.href}}}function G(a){var b;(a||[]).filter(function(a){return"itunes"===a.platform}).forEach(function(a){a.id?b=a.id:(a=a.url.match(/id(\d+)/))&&
(b=a[1])});return b}function F(a){a=String(a||"");a=a.substr(0,3);return"por"===a?"portrait":"lan"===a?"landscape":""}function D(a){if(n||H){var b=y(a);if(n)c("apple-mobile-web-app-status-bar-style",b?"default":"black");else{try{var d=Windows.UI.ViewManagement.ApplicationView.getForCurrentView().titleBar}catch(m){d=null}null===d?console.debug("found Windows, could not fetch titleBar"):(d.foregroundColor=r(b?"black":"white"),d.backgroundColor=r(a))}}}function r(a){a=l(a);return{r:a[0],g:a[1],b:a[2],
a:a[3]}}function l(a){var b=u();b.fillStyle=a;b.fillRect(0,0,1,1);return b.getImageData(0,0,1,1).data}function y(a){a=l(a).map(function(a){a/=255;return.03928>a?a/12.92:Math.pow((a+.055)/1.055,2.4)});return 3<Math.abs(1.05/(.2126*a[0]+.7152*a[1]+.0722*a[2]+.05))}function z(a,b,d){d=void 0===d?!1:d;var c=u(a);c.drawImage(a,0,0);if(!d&&255==c.getImageData(0,0,1,1).data[3])return null;c.globalCompositeOperation="destination-over";c.fillStyle=b;c.fillRect(0,0,a.width,a.height);return c.canvas.toDataURL()}
function u(a){a=void 0===a?{width:1,height:1}:a;var b=a.height,c=document.createElement("canvas");c.width=a.width;c.height=b;return c.getContext("2d")}if("fetch"in window){var C=["standalone","fullscreen","minimal-ui"],n=navigator.vendor&&-1!==navigator.vendor.indexOf("Apple"),E=navigator.userAgent&&-1!==navigator.userAgent.indexOf("Edge"),H="undefined"!==typeof Windows;"complete"===document.readyState?h():window.addEventListener("load",h)}})();
