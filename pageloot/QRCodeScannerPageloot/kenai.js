try{!function(){function e(i){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(i)}function i(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function t(e,i){for(var t=0;t<i.length;t++){var o=i[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function n(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}if("function"!=typeof PrebidImpressionController){var r=function(){function e(){i(this,e),n(this,"prebidImpressions",[]),n(this,"auctions",{}),n(this,"slotAuctions",{}),n(this,"videoAuctions",{})}return o(e,[{key:"newPrebidImpression",value:function(e,i){var t=new PrebidImpression(e,i),o=t.ad_unit_code+t.refresh_count.toString();void 0===this.auctions[o]&&(this.auctions[o]=[]),void 0===this.slotAuctions[t.ad_unit_code]&&(this.slotAuctions[t.ad_unit_code]=[]),0==this.auctions[o].filter((function(e){return e.request_id==t.request_id})).length&&(this.auctions[o].push(t),this.prebidImpressions.push(t),this.slotAuctions[t.ad_unit_code].push(t),t.fire())}},{key:"newPrebidVideoImpression",value:function(e,i){var t=this;void 0!==e&&void 0!==i&&i.forEach((function(i){var o=new PrebidImpression(e,i);t.videoAuctions.hasOwnProperty(o.request_id)||(t.videoAuctions[o.request_id]=!0,o.fire())}))}}]),e}();window.PrebidImpressionController=new r}if("function"!=typeof PrebidImpression){var s=function(){function t(o,r){i(this,t),n(this,"storeUrl","/detroitchicago/bluemonkey.gif"),n(this,"fired",!1),n(this,"advertiser_domains",null);var s=this;s.request_id=r.requestId,s.from_cache=void 0===r.from_cache?0:1,s.pageview_id=_ezaq.page_view_id,s.auction_id=r.auctionId,s.ad_unit_code=r.adUnitCode,s.adapter_code=r.adapterCode,void 0!==r.meta.advertiserDomains&&(s.advertiser_domains=r.meta.advertiserDomains.join(",")),s.original_cpm=r.originalCpm,s.cpm=r.cpm,s.adjustment=isNaN(r.cpm/r.originalCpm)?null:r.cpm/r.originalCpm,s.media_type="banner"==r.mediaType?"display":r.mediaType,s.time_to_respond=void 0===r.timeToRespond?null:r.timeToRespond,s.response_size=void 0===r.size?null:r.size,s.domain_id=parseInt(_ezaq.domain_id),s.form_factor_id=parseInt(_ezaq.form_factor_id),s.stat_source_id=parseInt(epbjs.SS[s.adapter_code]),s.source=r.source,s.ab_test_id=_ezaq.ab_test_id,"video"===r.mediaType?s.request_size=o.prebidParams.w+"x"+o.prebidParams.h:(s.position_type=parseInt(o.pt),s.refresh_count=e("number"!=o.alc)?0:parseInt(o.alc))}return o(t,[{key:"outputPrebidImpression",value:function(){var e=["pageview_id","auction_id","ad_unit_code","adapter_code","advertiser_domains","original_cpm","cpm","adjustment","media_type","time_to_respond","request_size","response_size","domain_id","form_factor_id","position_type","stat_source_id","refresh_count","from_cache","source","ab_test_id"],i={};for(var t in this)e.includes(t)&&(i[t]=this[t]);return i}},{key:"getBaseUrl",value:function(){return void 0!==window._ez_sa&&1==window._ez_sa||void 0!==window.ezWp&&!0===window.ezWp?"https://g.ezoic.net":window.location.protocol+"//"+document.location.hostname}},{key:"fire",value:function(){if(void 0!==__ez.dot&&__ez.dot.hasOwnProperty("getURL")&&"undefined"!=typeof navigator&&"function"==typeof navigator.sendBeacon){var e=__ez.dot.getURL(this.storeUrl)+"?e="+btoa(JSON.stringify(this.outputPrebidImpression()));navigator.sendBeacon(e)}else{var i=new XMLHttpRequest;i.open("POST",this.getBaseUrl()+this.storeUrl+"?e="+btoa(JSON.stringify(this.outputPrebidImpression())),!0),i.send()}this.fired=!0}}]),t}();window.PrebidImpression=s}}();}catch(err){var hREED=function(er){return function(){reportEzError(er,"QRCodeScannerPageloot/kenai.js")}};typeof reportEzError==="function"?hREED(err):window.addEventListener('reportEzErrorDefined',hREED(err),{once:true});console.error(err);}