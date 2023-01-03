(self["webpackChunkvue_cli"]=self["webpackChunkvue_cli"]||[]).push([[998],{9662:function(e,t,n){var r=n(614),s=n(6330),i=TypeError;e.exports=function(e){if(r(e))return e;throw i(s(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),s=String,i=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw i("Can't set "+s(e)+" as a prototype")}},5787:function(e,t,n){var r=n(7976),s=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw s("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),s=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw i(s(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),s=n(1400),i=n(6244),o=function(e){return function(t,n,o){var a,l=r(t),c=i(l),u=s(o,c);if(e&&n!=n){while(c>u)if(a=l[u++],a!=a)return!0}else for(;c>u;u++)if((e||u in l)&&l[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},3658:function(e,t,n){"use strict";var r=n(9781),s=n(3157),i=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(s(e)&&!o(e,"length").writable)throw i("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4326:function(e,t,n){var r=n(1702),s=r({}.toString),i=r("".slice);e.exports=function(e){return i(s(e),8,-1)}},648:function(e,t,n){var r=n(1694),s=n(614),i=n(4326),o=n(5112),a=o("toStringTag"),l=Object,c="Arguments"==i(function(){return arguments}()),u=function(e,t){try{return e[t]}catch(n){}};e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=u(t=l(e),a))?n:c?i(t):"Object"==(r=i(t))&&s(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),s=n(3887),i=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=s(t),l=o.f,c=i.f,u=0;u<a.length;u++){var h=a[u];r(e,h)||n&&r(n,h)||l(e,h,c(t,h))}}},8880:function(e,t,n){var r=n(9781),s=n(3070),i=n(9114);e.exports=r?function(e,t,n){return s.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),s=n(3070),i=n(6339),o=n(3072);e.exports=function(e,t,n,a){a||(a={});var l=a.enumerable,c=void 0!==a.name?a.name:t;if(r(n)&&i(n,c,a),a.global)l?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(l=!0):delete e[t]}catch(u){}l?e[t]=n:s.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),s=Object.defineProperty;e.exports=function(e,t){try{s(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},5117:function(e,t,n){"use strict";var r=n(6330),s=TypeError;e.exports=function(e,t){if(!delete e[t])throw s("Cannot delete property "+r(t)+" of "+r(e))}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),s=n(111),i=r.document,o=s(i)&&s(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,s,i=n(7854),o=n(8113),a=i.process,l=i.Deno,c=a&&a.versions||l&&l.version,u=c&&c.v8;u&&(r=u.split("."),s=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!s&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(s=+r[1]))),e.exports=s},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),s=Error,i=r("".replace),o=function(e){return String(s(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,l=a.test(o);e.exports=function(e,t){if(l&&"string"==typeof e&&!s.prepareStackTrace)while(t--)e=i(e,a,"");return e}},2109:function(e,t,n){var r=n(7854),s=n(1236).f,i=n(8880),o=n(8052),a=n(3072),l=n(9920),c=n(4705);e.exports=function(e,t){var n,u,h,d,f,p,g=e.target,m=e.global,v=e.stat;if(u=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,u)for(h in t){if(f=t[h],e.dontCallGetSet?(p=s(u,h),d=p&&p.value):d=u[h],n=c(m?h:g+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;l(f,d)}(e.sham||d&&d.sham)&&i(f,"sham",!0),o(u,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),s=Function.prototype.call;e.exports=r?s.bind(s):function(){return s.apply(s,arguments)}},6530:function(e,t,n){var r=n(9781),s=n(2597),i=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=s(i,"name"),l=a&&"something"===function(){}.name,c=a&&(!r||r&&o(i,"name").configurable);e.exports={EXISTS:a,PROPER:l,CONFIGURABLE:c}},1702:function(e,t,n){var r=n(4374),s=Function.prototype,i=s.call,o=r&&s.bind.bind(i,i);e.exports=r?o:function(e){return function(){return i.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),s=n(614),i=function(e){return s(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),s=n(8554);e.exports=function(e,t){var n=e[t];return s(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),s=n(7908),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(s(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),s=n(7293),i=n(317);e.exports=!r&&!s((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),s=n(7293),i=n(4326),o=Object,a=r("".split);e.exports=s((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?a(e,""):o(e)}:o},9587:function(e,t,n){var r=n(614),s=n(111),i=n(7674);e.exports=function(e,t,n){var o,a;return i&&r(o=t.constructor)&&o!==n&&s(a=o.prototype)&&a!==n.prototype&&i(e,a),e}},2788:function(e,t,n){var r=n(1702),s=n(614),i=n(5465),o=r(Function.toString);s(i.inspectSource)||(i.inspectSource=function(e){return o(e)}),e.exports=i.inspectSource},9909:function(e,t,n){var r,s,i,o=n(4811),a=n(7854),l=n(111),c=n(8880),u=n(2597),h=n(5465),d=n(6200),f=n(3501),p="Object already initialized",g=a.TypeError,m=a.WeakMap,v=function(e){return i(e)?s(e):r(e,{})},y=function(e){return function(t){var n;if(!l(t)||(n=s(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var w=h.state||(h.state=new m);w.get=w.get,w.has=w.has,w.set=w.set,r=function(e,t){if(w.has(e))throw g(p);return t.facade=e,w.set(e,t),t},s=function(e){return w.get(e)||{}},i=function(e){return w.has(e)}}else{var b=d("state");f[b]=!0,r=function(e,t){if(u(e,b))throw g(p);return t.facade=e,c(e,b,t),t},s=function(e){return u(e,b)?e[b]:{}},i=function(e){return u(e,b)}}e.exports={set:r,get:s,has:i,enforce:v,getterFor:y}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},614:function(e,t,n){var r=n(4154),s=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===s}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),s=n(614),i=/#|\.prototype\./,o=function(e,t){var n=l[a(e)];return n==u||n!=c&&(s(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(i,".").toLowerCase()},l=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),s=n(4154),i=s.all;e.exports=s.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===i}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),s=n(614),i=n(7976),o=n(3307),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return s(t)&&i(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(7293),s=n(614),i=n(2597),o=n(9781),a=n(6530).CONFIGURABLE,l=n(2788),c=n(9909),u=c.enforce,h=c.get,d=Object.defineProperty,f=o&&!r((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),g=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!i(e,"name")||a&&e.name!==t)&&(o?d(e,"name",{value:t,configurable:!0}):e.name=t),f&&n&&i(n,"arity")&&e.length!==n.arity&&d(e,"length",{value:n.arity});try{n&&i(n,"constructor")&&n.constructor?o&&d(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(s){}var r=u(e);return i(r,"source")||(r.source=p.join("string"==typeof t?t:"")),e};Function.prototype.toString=g((function(){return s(this)&&h(this).source||l(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(9781),s=n(4664),i=n(3353),o=n(9670),a=n(4948),l=TypeError,c=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?i?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=u(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return c(e,t,n)}:c:function(e,t,n){if(o(e),t=a(t),o(n),s)try{return c(e,t,n)}catch(r){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),s=n(6916),i=n(5296),o=n(9114),a=n(5656),l=n(4948),c=n(2597),u=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=l(t),u)try{return h(e,t)}catch(n){}if(c(e,t))return o(!s(i.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),s=n(748),i=s.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),s=n(2597),i=n(5656),o=n(1318).indexOf,a=n(3501),l=r([].push);e.exports=function(e,t){var n,r=i(e),c=0,u=[];for(n in r)!s(a,n)&&s(r,n)&&l(u,n);while(t.length>c)s(r,n=t[c++])&&(~o(u,n)||l(u,n));return u}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,s=r&&!n.call({1:2},1);t.f=s?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(1702),s=n(9670),i=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return s(n),i(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),s=n(614),i=n(111),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&s(n=e.toString)&&!i(a=r(n,e)))return a;if(s(n=e.valueOf)&&!i(a=r(n,e)))return a;if("string"!==t&&s(n=e.toString)&&!i(a=r(n,e)))return a;throw o("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),s=n(1702),i=n(8006),o=n(5181),a=n(9670),l=s([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(a(e)),n=o.f;return n?l(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),s=TypeError;e.exports=function(e){if(r(e))throw s("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),s=n(9711),i=r("keys");e.exports=function(e){return i[e]||(i[e]=s(e))}},5465:function(e,t,n){var r=n(7854),s=n(3072),i="__core-js_shared__",o=r[i]||s(i,{});e.exports=o},2309:function(e,t,n){var r=n(1913),s=n(5465);(e.exports=function(e,t){return s[e]||(s[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.27.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.27.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),s=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!s((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),s=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?s(n+t,0):i(n,t)}},5656:function(e,t,n){var r=n(8361),s=n(4488);e.exports=function(e){return r(s(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),s=Math.min;e.exports=function(e){return e>0?s(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),s=Object;e.exports=function(e){return s(r(e))}},7593:function(e,t,n){var r=n(6916),s=n(111),i=n(2190),o=n(8173),a=n(2140),l=n(5112),c=TypeError,u=l("toPrimitive");e.exports=function(e,t){if(!s(e)||i(e))return e;var n,l=o(e,u);if(l){if(void 0===t&&(t="default"),n=r(l,e,t),!s(n)||i(n))return n;throw c("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),s=n(2190);e.exports=function(e){var t=r(e,"string");return s(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),s=r("toStringTag"),i={};i[s]="z",e.exports="[object z]"===String(i)},1340:function(e,t,n){var r=n(648),s=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return s(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),s=0,i=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++s+i,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),s=n(7293);e.exports=r&&s((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),s=n(614),i=r.WeakMap;e.exports=s(i)&&/native code/.test(String(i))},5112:function(e,t,n){var r=n(7854),s=n(2309),i=n(2597),o=n(9711),a=n(6293),l=n(3307),c=s("wks"),u=r.Symbol,h=u&&u["for"],d=l?u:u&&u.withoutSetter||o;e.exports=function(e){if(!i(c,e)||!a&&"string"!=typeof c[e]){var t="Symbol."+e;a&&i(u,e)?c[e]=u[e]:c[e]=l&&h?h(t):d(t)}return c[e]}},7658:function(e,t,n){"use strict";var r=n(2109),s=n(7908),i=n(6244),o=n(3658),a=n(7207),l=n(7293),c=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:c||u},{push:function(e){var t=s(this),n=i(t),r=arguments.length;a(n+r);for(var l=0;l<r;l++)t[n]=arguments[l],n++;return o(t,n),n}})},541:function(e,t,n){"use strict";var r=n(2109),s=n(7908),i=n(6244),o=n(3658),a=n(5117),l=n(7207),c=1!==[].unshift(0),u=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:c||u},{unshift:function(e){var t=s(this),n=i(t),r=arguments.length;if(r){l(n+r);var c=n;while(c--){var u=c+r;c in t?t[u]=t[c]:a(t,u)}for(var h=0;h<r;h++)t[h]=arguments[h]}return o(t,n+r)}})},2801:function(e,t,n){"use strict";var r=n(2109),s=n(7854),i=n(5005),o=n(9114),a=n(3070).f,l=n(2597),c=n(5787),u=n(9587),h=n(6277),d=n(3678),f=n(1060),p=n(9781),g=n(1913),m="DOMException",v=i("Error"),y=i(m),w=function(){c(this,b);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new y(t,n),s=v(t);return s.name=m,a(r,"stack",o(1,f(s.stack,1))),u(r,this,w),r},b=w.prototype=y.prototype,_="stack"in v(m),E="stack"in new y(1,2),T=y&&p&&Object.getOwnPropertyDescriptor(s,m),S=!!T&&!(T.writable&&T.configurable),C=_&&!S&&!E;r({global:!0,constructor:!0,forced:g||C},{DOMException:C?w:y});var I=i(m),k=I.prototype;if(k.constructor!==I)for(var x in g||a(k,"constructor",o(1,I)),d)if(l(d,x)){var A=d[x],O=A.s;l(I,O)||a(I,O,o(6,A.c))}},223:function(e,t,n){"use strict";n.d(t,{BH:function(){return I},L:function(){return a},LL:function(){return O},P0:function(){return T},Pz:function(){return C},Sg:function(){return k},UG:function(){return h},ZR:function(){return A},aH:function(){return S},b$:function(){return f},eu:function(){return m},hl:function(){return g},m9:function(){return q},ne:function(){return $},pd:function(){return U},q4:function(){return E},ru:function(){return d},tV:function(){return l},uI:function(){return u},vZ:function(){return P},w1:function(){return p},xO:function(){return M},xb:function(){return D},z$:function(){return c},zd:function(){return F}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296===(64512&s)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},s=function(e){const t=[];let n=0,r=0;while(n<e.length){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],l=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return t.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const t=e[s],i=s+1<e.length,o=i?e[s+1]:0,a=s+2<e.length,l=a?e[s+2]:0,c=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,i||(h=64)),r.push(n[c],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],i=s<e.length,o=i?n[e.charAt(s)]:0;++s;const a=s<e.length,l=a?n[e.charAt(s)]:64;++s;const c=s<e.length,u=c?n[e.charAt(s)]:64;if(++s,null==t||null==o||null==l||null==u)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==l){const e=o<<4&240|l>>2;if(r.push(e),64!==u){const e=l<<6&192|u;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return i.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},l=function(e){try{return i.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function u(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c())}function h(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function d(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){const e=c();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function g(){try{return"object"===typeof indexedDB}catch(e){return!1}}function m(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function v(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=()=>v().__FIREBASE_DEFAULTS__,w=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:""}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},b=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&l(e[1]);return t&&JSON.parse(t)},_=()=>{try{return y()||w()||b()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},E=e=>{var t,n;return null===(n=null===(t=_())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},T=e=>{const t=E(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},S=()=>{var e;return null===(e=_())||void 0===e?void 0:e.config},C=e=>{var t;return null===(t=_())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),l="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),l].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x="FirebaseError";class A extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=x,Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?R(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new A(r,o,n);return a}}function R(e,t){return e.replace(N,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const N=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function P(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],i=t[s];if(L(n)&&L(i)){if(!P(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function L(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function F(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function U(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e,t){const n=new V(e,t);return n.subscribe.bind(n)}class V{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=j(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=B),void 0===r.error&&(r.error=B),void 0===r.complete&&(r.complete=B);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function j(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function B(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(e){return e&&e._delegate?e._delegate:e}},4870:function(e,t,n){"use strict";n.d(t,{B:function(){return o},Bj:function(){return i},Fl:function(){return Ge},IU:function(){return Ae},Jd:function(){return S},PG:function(){return Ce},SU:function(){return Ve},Um:function(){return Ee},WL:function(){return Be},X$:function(){return x},X3:function(){return xe},XI:function(){return Fe},Xl:function(){return Oe},dq:function(){return Le},iH:function(){return Me},j:function(){return I},lk:function(){return C},qj:function(){return _e},qq:function(){return b},yT:function(){return ke}});n(7658);var r=n(7139);let s;class i{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=s,!e&&s&&(this.index=(s.scopes||(s.scopes=[])).push(this)-1)}run(e){if(this.active){const t=s;try{return s=this,e()}finally{s=t}}else 0}on(){s=this}off(){s=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this.active=!1}}}function o(e){return new i(e)}function a(e,t=s){t&&t.active&&t.effects.push(e)}const l=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&g)>0,u=e=>(e.n&g)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=g},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];c(s)&&!u(s)?s.delete(e):t[n++]=s,s.w&=~g,s.n&=~g}t.length=n}},f=new WeakMap;let p=0,g=1;const m=30;let v;const y=Symbol(""),w=Symbol("");class b{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let e=v,t=E;while(e){if(e===this)return;e=e.parent}try{return this.parent=v,v=this,E=!0,g=1<<++p,p<=m?h(this):_(this),this.fn()}finally{p<=m&&d(this),g=1<<--p,v=this.parent,E=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){v===this?this.deferStop=!0:this.active&&(_(this),this.onStop&&this.onStop(),this.active=!1)}}function _(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let E=!0;const T=[];function S(){T.push(E),E=!1}function C(){const e=T.pop();E=void 0===e||e}function I(e,t,n){if(E&&v){let t=f.get(e);t||f.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=l());const s=void 0;k(r,s)}}function k(e,t){let n=!1;p<=m?u(e)||(e.n|=g,n=!c(e)):n=!e.has(v),n&&(e.add(v),v.deps.push(e))}function x(e,t,n,s,i,o){const a=f.get(e);if(!a)return;let c=[];if("clear"===t)c=[...a.values()];else if("length"===n&&(0,r.kJ)(e)){const e=(0,r.He)(s);a.forEach(((t,n)=>{("length"===n||n>=e)&&c.push(t)}))}else switch(void 0!==n&&c.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&c.push(a.get("length")):(c.push(a.get(y)),(0,r._N)(e)&&c.push(a.get(w)));break;case"delete":(0,r.kJ)(e)||(c.push(a.get(y)),(0,r._N)(e)&&c.push(a.get(w)));break;case"set":(0,r._N)(e)&&c.push(a.get(y));break}if(1===c.length)c[0]&&A(c[0]);else{const e=[];for(const t of c)t&&e.push(...t);A(l(e))}}function A(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&O(r,t);for(const r of n)r.computed||O(r,t)}function O(e,t){(e!==v||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const R=(0,r.fY)("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),D=U(),P=U(!1,!0),L=U(!0),M=F();function F(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ae(this);for(let t=0,s=this.length;t<s;t++)I(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ae)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){S();const n=Ae(this)[t].apply(this,e);return C(),n}})),e}function U(e=!1,t=!1){return function(n,s,i){if("__v_isReactive"===s)return!e;if("__v_isReadonly"===s)return e;if("__v_isShallow"===s)return t;if("__v_raw"===s&&i===(e?t?ye:ve:t?me:ge).get(n))return n;const o=(0,r.kJ)(n);if(!e&&o&&(0,r.RI)(M,s))return Reflect.get(M,s,i);const a=Reflect.get(n,s,i);return((0,r.yk)(s)?N.has(s):R(s))?a:(e||I(n,"get",s),t?a:Le(a)?o&&(0,r.S0)(s)?a:a.value:(0,r.Kn)(a)?e?Te(a):_e(a):a)}}const $=j(),V=j(!0);function j(e=!1){return function(t,n,s,i){let o=t[n];if(Ie(o)&&Le(o)&&!Le(s))return!1;if(!e&&(ke(s)||Ie(s)||(o=Ae(o),s=Ae(s)),!(0,r.kJ)(t)&&Le(o)&&!Le(s)))return o.value=s,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),l=Reflect.set(t,n,s,i);return t===Ae(i)&&(a?(0,r.aU)(s,o)&&x(t,"set",n,s,o):x(t,"add",n,s)),l}}function B(e,t){const n=(0,r.RI)(e,t),s=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&x(e,"delete",t,void 0,s),i}function q(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&N.has(t)||I(e,"has",t),n}function z(e){return I(e,"iterate",(0,r.kJ)(e)?"length":y),Reflect.ownKeys(e)}const G={get:D,set:$,deleteProperty:B,has:q,ownKeys:z},H={get:L,set(e,t){return!0},deleteProperty(e,t){return!0}},W=(0,r.l7)({},G,{get:P,set:V}),K=e=>e,J=e=>Reflect.getPrototypeOf(e);function Q(e,t,n=!1,r=!1){e=e["__v_raw"];const s=Ae(e),i=Ae(t);n||(t!==i&&I(s,"get",t),I(s,"get",i));const{has:o}=J(s),a=r?K:n?Ne:Re;return o.call(s,t)?a(e.get(t)):o.call(s,i)?a(e.get(i)):void(e!==s&&e.get(t))}function X(e,t=!1){const n=this["__v_raw"],r=Ae(n),s=Ae(e);return t||(e!==s&&I(r,"has",e),I(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Y(e,t=!1){return e=e["__v_raw"],!t&&I(Ae(e),"iterate",y),Reflect.get(e,"size",e)}function Z(e){e=Ae(e);const t=Ae(this),n=J(t),r=n.has.call(t,e);return r||(t.add(e),x(t,"add",e,e)),this}function ee(e,t){t=Ae(t);const n=Ae(this),{has:s,get:i}=J(n);let o=s.call(n,e);o||(e=Ae(e),o=s.call(n,e));const a=i.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&x(n,"set",e,t,a):x(n,"add",e,t),this}function te(e){const t=Ae(this),{has:n,get:r}=J(t);let s=n.call(t,e);s||(e=Ae(e),s=n.call(t,e));const i=r?r.call(t,e):void 0,o=t.delete(e);return s&&x(t,"delete",e,void 0,i),o}function ne(){const e=Ae(this),t=0!==e.size,n=void 0,r=e.clear();return t&&x(e,"clear",void 0,void 0,n),r}function re(e,t){return function(n,r){const s=this,i=s["__v_raw"],o=Ae(i),a=t?K:e?Ne:Re;return!e&&I(o,"iterate",y),i.forEach(((e,t)=>n.call(r,a(e),a(t),s)))}}function se(e,t,n){return function(...s){const i=this["__v_raw"],o=Ae(i),a=(0,r._N)(o),l="entries"===e||e===Symbol.iterator&&a,c="keys"===e&&a,u=i[e](...s),h=n?K:t?Ne:Re;return!t&&I(o,"iterate",c?w:y),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:l?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&this}}function oe(){const e={get(e){return Q(this,e)},get size(){return Y(this)},has:X,add:Z,set:ee,delete:te,clear:ne,forEach:re(!1,!1)},t={get(e){return Q(this,e,!1,!0)},get size(){return Y(this)},has:X,add:Z,set:ee,delete:te,clear:ne,forEach:re(!1,!0)},n={get(e){return Q(this,e,!0)},get size(){return Y(this,!0)},has(e){return X.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:re(!0,!1)},r={get(e){return Q(this,e,!0,!0)},get size(){return Y(this,!0)},has(e){return X.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:re(!0,!0)},s=["keys","values","entries",Symbol.iterator];return s.forEach((s=>{e[s]=se(s,!1,!1),n[s]=se(s,!0,!1),t[s]=se(s,!1,!0),r[s]=se(s,!0,!0)})),[e,n,t,r]}const[ae,le,ce,ue]=oe();function he(e,t){const n=t?e?ue:ce:e?le:ae;return(t,s,i)=>"__v_isReactive"===s?!e:"__v_isReadonly"===s?e:"__v_raw"===s?t:Reflect.get((0,r.RI)(n,s)&&s in t?n:t,s,i)}const de={get:he(!1,!1)},fe={get:he(!1,!0)},pe={get:he(!0,!1)};const ge=new WeakMap,me=new WeakMap,ve=new WeakMap,ye=new WeakMap;function we(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function be(e){return e["__v_skip"]||!Object.isExtensible(e)?0:we((0,r.W7)(e))}function _e(e){return Ie(e)?e:Se(e,!1,G,de,ge)}function Ee(e){return Se(e,!1,W,fe,me)}function Te(e){return Se(e,!0,H,pe,ve)}function Se(e,t,n,s,i){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=i.get(e);if(o)return o;const a=be(e);if(0===a)return e;const l=new Proxy(e,2===a?s:n);return i.set(e,l),l}function Ce(e){return Ie(e)?Ce(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ie(e){return!(!e||!e["__v_isReadonly"])}function ke(e){return!(!e||!e["__v_isShallow"])}function xe(e){return Ce(e)||Ie(e)}function Ae(e){const t=e&&e["__v_raw"];return t?Ae(t):e}function Oe(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Re=e=>(0,r.Kn)(e)?_e(e):e,Ne=e=>(0,r.Kn)(e)?Te(e):e;function De(e){E&&v&&(e=Ae(e),k(e.dep||(e.dep=l())))}function Pe(e,t){e=Ae(e),e.dep&&A(e.dep)}function Le(e){return!(!e||!0!==e.__v_isRef)}function Me(e){return Ue(e,!1)}function Fe(e){return Ue(e,!0)}function Ue(e,t){return Le(e)?e:new $e(e,t)}class $e{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ae(e),this._value=t?e:Re(e)}get value(){return De(this),this._value}set value(e){const t=this.__v_isShallow||ke(e)||Ie(e);e=t?e:Ae(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Re(e),Pe(this,e))}}function Ve(e){return Le(e)?e.value:e}const je={get:(e,t,n)=>Ve(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Le(s)&&!Le(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Be(e){return Ce(e)?e:new Proxy(e,je)}var qe;class ze{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[qe]=!1,this._dirty=!0,this.effect=new b(e,(()=>{this._dirty||(this._dirty=!0,Pe(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ae(this);return De(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ge(e,t,n=!1){let s,i;const o=(0,r.mf)(e);o?(s=e,i=r.dG):(s=e.get,i=e.set);const a=new ze(s,i,o||!i,n);return a}qe="__v_isReadonly"},3396:function(e,t,n){"use strict";n.d(t,{$d:function(){return o},Cn:function(){return M},FN:function(){return gn},Fl:function(){return Rn},HY:function(){return Dt},JJ:function(){return H},Jd:function(){return Ie},Ko:function(){return Ve},LL:function(){return Fe},P$:function(){return re},Q6:function(){return ce},U2:function(){return ie},Uk:function(){return nn},Us:function(){return kt},Wm:function(){return Yt},Xn:function(){return Se},Y3:function(){return y},Y8:function(){return ee},YP:function(){return J},_:function(){return Xt},aZ:function(){return ue},bv:function(){return Te},dD:function(){return L},f3:function(){return W},h:function(){return Nn},iD:function(){return zt},ic:function(){return Ce},j4:function(){return Gt},kq:function(){return sn},nK:function(){return le},uE:function(){return rn},up:function(){return Le},w5:function(){return F},wg:function(){return $t},wy:function(){return Ne}});n(7658),n(541);var r=n(4870),s=n(7139);function i(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){a(i,t,n)}return s}function o(e,t,n,r){if((0,s.mf)(e)){const o=i(e,t,n,r);return o&&(0,s.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const l=[];for(let s=0;s<e.length;s++)l.push(o(e[s],t,n,r));return l}function a(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const s=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,s,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void i(a,null,10,[e,s,o])}l(e,n,s,r)}function l(e,t,n,r=!0){console.error(e)}let c=!1,u=!1;const h=[];let d=0;const f=[];let p=null,g=0;const m=Promise.resolve();let v=null;function y(e){const t=v||m;return e?t.then(this?e.bind(this):e):t}function w(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,s=I(h[r]);s<e?t=r+1:n=r}return t}function b(e){h.length&&h.includes(e,c&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(w(e.id),0,e),_())}function _(){c||u||(u=!0,v=m.then(x))}function E(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function T(e){(0,s.kJ)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?g+1:g)||f.push(e),_()}function S(e,t=(c?d+1:0)){for(0;t<h.length;t++){const e=h[t];e&&e.pre&&(h.splice(t,1),t--,e())}}function C(e){if(f.length){const e=[...new Set(f)];if(f.length=0,p)return void p.push(...e);for(p=e,p.sort(((e,t)=>I(e)-I(t))),g=0;g<p.length;g++)p[g]();p=null,g=0}}const I=e=>null==e.id?1/0:e.id,k=(e,t)=>{const n=I(e)-I(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function x(e){u=!1,c=!0,h.sort(k);s.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&i(e,null,14)}}finally{d=0,h.length=0,C(e),c=!1,v=null,(h.length||f.length)&&x(e)}}new Set;new Map;function A(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||s.kT;let i=n;const a=t.startsWith("update:"),l=a&&t.slice(7);if(l&&l in r){const e=`${"modelValue"===l?"model":l}Modifiers`,{number:t,trim:o}=r[e]||s.kT;o&&(i=n.map((e=>(0,s.HD)(e)?e.trim():e))),t&&(i=n.map(s.He))}let c;let u=r[c=(0,s.hR)(t)]||r[c=(0,s.hR)((0,s._A)(t))];!u&&a&&(u=r[c=(0,s.hR)((0,s.rs)(t))]),u&&o(u,e,6,i);const h=r[c+"Once"];if(h){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,o(h,e,6,i)}}function O(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const o=e.emits;let a={},l=!1;if(!(0,s.mf)(e)){const r=e=>{const n=O(e,t,!0);n&&(l=!0,(0,s.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||l?((0,s.kJ)(o)?o.forEach((e=>a[e]=null)):(0,s.l7)(a,o),(0,s.Kn)(e)&&r.set(e,a),a):((0,s.Kn)(e)&&r.set(e,null),null)}function R(e,t){return!(!e||!(0,s.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,s.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,s.RI)(e,(0,s.rs)(t))||(0,s.RI)(e,t))}let N=null,D=null;function P(e){const t=N;return N=e,D=e&&e.type.__scopeId||null,t}function L(e){D=e}function M(){D=null}function F(e,t=N,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Bt(-1);const s=P(t);let i;try{i=e(...n)}finally{P(s),r._d&&Bt(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function U(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:o,propsOptions:[l],slots:c,attrs:u,emit:h,render:d,renderCache:f,data:p,setupState:g,ctx:m,inheritAttrs:v}=e;let y,w;const b=P(e);try{if(4&n.shapeFlag){const e=i||r;y=on(d.call(e,e,f,o,g,p,m)),w=u}else{const e=t;0,y=on(e.length>1?e(o,{attrs:u,slots:c,emit:h}):e(o,null)),w=t.props?u:$(u)}}catch(E){Ft.length=0,a(E,e,1),y=Yt(Lt)}let _=y;if(w&&!1!==v){const e=Object.keys(w),{shapeFlag:t}=_;e.length&&7&t&&(l&&e.some(s.tR)&&(w=V(w,l)),_=tn(_,w))}return n.dirs&&(_=tn(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),y=_,P(b),y}const $=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,s.F7)(n))&&((t||(t={}))[n]=e[n]);return t},V=(e,t)=>{const n={};for(const r in e)(0,s.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function j(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!s&&!a||a&&a.$stable)||r!==o&&(r?!o||B(r,o,c):!!o);if(1024&l)return!0;if(16&l)return r?B(r,o,c):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!R(c,n))return!0}}return!1}function B(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!R(n,i))return!0}return!1}function q({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const z=e=>e.__isSuspense;function G(e,t){t&&t.pendingBranch?(0,s.kJ)(e)?t.effects.push(...e):t.effects.push(e):T(e)}function H(e,t){if(pn){let n=pn.provides;const r=pn.parent&&pn.parent.provides;r===n&&(n=pn.provides=Object.create(r)),n[e]=t}else 0}function W(e,t,n=!1){const r=pn||N;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&(0,s.mf)(t)?t.call(r.proxy):t}else 0}const K={};function J(e,t,n){return Q(e,t,n)}function Q(e,t,{immediate:n,deep:a,flush:l,onTrack:c,onTrigger:u}=s.kT){const h=pn;let d,f,p=!1,g=!1;if((0,r.dq)(e)?(d=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(d=()=>e,a=!0):(0,s.kJ)(e)?(g=!0,p=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),d=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?Z(e):(0,s.mf)(e)?i(e,h,2):void 0))):d=(0,s.mf)(e)?t?()=>i(e,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(e,h,3,[v])}:s.dG,t&&a){const e=d;d=()=>Z(e())}let m,v=e=>{f=E.onStop=()=>{i(e,h,4)}};if(_n){if(v=s.dG,t?n&&o(t,h,3,[d(),g?[]:void 0,v]):d(),"sync"!==l)return s.dG;{const e=Pn();m=e.__watcherHandles||(e.__watcherHandles=[])}}let y=g?new Array(e.length).fill(K):K;const w=()=>{if(E.active)if(t){const e=E.run();(a||p||(g?e.some(((e,t)=>(0,s.aU)(e,y[t]))):(0,s.aU)(e,y)))&&(f&&f(),o(t,h,3,[e,y===K?void 0:g&&y[0]===K?[]:y,v]),y=e)}else E.run()};let _;w.allowRecurse=!!t,"sync"===l?_=w:"post"===l?_=()=>It(w,h&&h.suspense):(w.pre=!0,h&&(w.id=h.uid),_=()=>b(w));const E=new r.qq(d,_);t?n?w():y=E.run():"post"===l?It(E.run.bind(E),h&&h.suspense):E.run();const T=()=>{E.stop(),h&&h.scope&&(0,s.Od)(h.scope.effects,E)};return m&&m.push(T),T}function X(e,t,n){const r=this.proxy,i=(0,s.HD)(e)?e.includes(".")?Y(r,e):()=>r[e]:e.bind(r,r);let o;(0,s.mf)(t)?o=t:(o=t.handler,n=t);const a=pn;mn(this);const l=Q(i,o.bind(r),n);return a?mn(a):vn(),l}function Y(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Z(e,t){if(!(0,s.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))Z(e.value,t);else if((0,s.kJ)(e))for(let n=0;n<e.length;n++)Z(e[n],t);else if((0,s.DM)(e)||(0,s._N)(e))e.forEach((e=>{Z(e,t)}));else if((0,s.PO)(e))for(const n in e)Z(e[n],t);return e}function ee(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Te((()=>{e.isMounted=!0})),Ie((()=>{e.isUnmounting=!0})),e}const te=[Function,Array],ne={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:te,onEnter:te,onAfterEnter:te,onEnterCancelled:te,onBeforeLeave:te,onLeave:te,onAfterLeave:te,onLeaveCancelled:te,onBeforeAppear:te,onAppear:te,onAfterAppear:te,onAppearCancelled:te},setup(e,{slots:t}){const n=gn(),s=ee();let i;return()=>{const o=t.default&&ce(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==Lt){0,a=t,e=!0;break}}const l=(0,r.IU)(e),{mode:c}=l;if(s.isLeaving)return oe(a);const u=ae(a);if(!u)return oe(a);const h=ie(u,l,s,n);le(u,h);const d=n.subTree,f=d&&ae(d);let p=!1;const{getTransitionKey:g}=u.type;if(g){const e=g();void 0===i?i=e:e!==i&&(i=e,p=!0)}if(f&&f.type!==Lt&&(!Wt(u,f)||p)){const e=ie(f,l,s,n);if(le(f,e),"out-in"===c)return s.isLeaving=!0,e.afterLeave=()=>{s.isLeaving=!1,!1!==n.update.active&&n.update()},oe(a);"in-out"===c&&u.type!==Lt&&(e.delayLeave=(e,t,n)=>{const r=se(s,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},re=ne;function se(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ie(e,t,n,r){const{appear:i,mode:a,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:v,onAppear:y,onAfterAppear:w,onAppearCancelled:b}=t,_=String(e.key),E=se(n,e),T=(e,t)=>{e&&o(e,r,9,t)},S=(e,t)=>{const n=t[1];T(e,t),(0,s.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},C={mode:a,persisted:l,beforeEnter(t){let r=c;if(!n.isMounted){if(!i)return;r=v||c}t._leaveCb&&t._leaveCb(!0);const s=E[_];s&&Wt(e,s)&&s.el._leaveCb&&s.el._leaveCb(),T(r,[t])},enter(e){let t=u,r=h,s=d;if(!n.isMounted){if(!i)return;t=y||u,r=w||h,s=b||d}let o=!1;const a=e._enterCb=t=>{o||(o=!0,T(t?s:r,[e]),C.delayedLeave&&C.delayedLeave(),e._enterCb=void 0)};t?S(t,[e,a]):a()},leave(t,r){const s=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();T(f,[t]);let i=!1;const o=t._leaveCb=n=>{i||(i=!0,r(),T(n?m:g,[t]),t._leaveCb=void 0,E[s]===e&&delete E[s])};E[s]=e,p?S(p,[t,o]):o()},clone(e){return ie(e,t,n,r)}};return C}function oe(e){if(de(e))return e=tn(e),e.children=null,e}function ae(e){return de(e)?e.children?e.children[0]:void 0:e}function le(e,t){6&e.shapeFlag&&e.component?le(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ce(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:i);o.type===Dt?(128&o.patchFlag&&s++,r=r.concat(ce(o.children,t,a))):(t||o.type!==Lt)&&r.push(null!=a?tn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function ue(e){return(0,s.mf)(e)?{setup:e,name:e.name}:e}const he=e=>!!e.type.__asyncLoader;const de=e=>e.type.__isKeepAlive;RegExp,RegExp;function fe(e,t){return(0,s.kJ)(e)?e.some((e=>fe(e,t))):(0,s.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function pe(e,t){me(e,"a",t)}function ge(e,t){me(e,"da",t)}function me(e,t,n=pn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(be(t,r,n),n){let e=n.parent;while(e&&e.parent)de(e.parent.vnode)&&ve(r,t,n,e),e=e.parent}}function ve(e,t,n,r){const i=be(t,e,r,!0);ke((()=>{(0,s.Od)(r[t],i)}),n)}function ye(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function we(e){return 128&e.shapeFlag?e.ssContent:e}function be(e,t,n=pn,s=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;(0,r.Jd)(),mn(n);const i=o(t,n,e,s);return vn(),(0,r.lk)(),i});return s?i.unshift(a):i.push(a),a}}const _e=e=>(t,n=pn)=>(!_n||"sp"===e)&&be(e,((...e)=>t(...e)),n),Ee=_e("bm"),Te=_e("m"),Se=_e("bu"),Ce=_e("u"),Ie=_e("bum"),ke=_e("um"),xe=_e("sp"),Ae=_e("rtg"),Oe=_e("rtc");function Re(e,t=pn){be("ec",e,t)}function Ne(e,t){const n=N;if(null===n)return e;const r=xn(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,l=s.kT]=t[o];e&&((0,s.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&Z(n),i.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:l}))}return e}function De(e,t,n,s){const i=e.dirs,a=t&&t.dirs;for(let l=0;l<i.length;l++){const c=i[l];a&&(c.oldValue=a[l].value);let u=c.dir[s];u&&((0,r.Jd)(),o(u,n,8,[e.el,c,e,t]),(0,r.lk)())}}const Pe="components";function Le(e,t){return Ue(Pe,e,!0,t)||e}const Me=Symbol();function Fe(e){return(0,s.HD)(e)?Ue(Pe,e,!1)||e:e||Me}function Ue(e,t,n=!0,r=!1){const i=N||pn;if(i){const n=i.type;if(e===Pe){const e=An(n,!1);if(e&&(e===t||e===(0,s._A)(t)||e===(0,s.kC)((0,s._A)(t))))return n}const o=$e(i[e]||n[e],t)||$e(i.appContext[e],t);return!o&&r?n:o}}function $e(e,t){return e&&(e[t]||e[(0,s._A)(t)]||e[(0,s.kC)((0,s._A)(t))])}function Ve(e,t,n,r){let i;const o=n&&n[r];if((0,s.kJ)(e)||(0,s.HD)(e)){i=new Array(e.length);for(let n=0,r=e.length;n<r;n++)i[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,i=new Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,o&&o[n])}else if((0,s.Kn)(e))if(e[Symbol.iterator])i=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);i=new Array(n.length);for(let r=0,s=n.length;r<s;r++){const s=n[r];i[r]=t(e[s],s,r,o&&o[r])}}else i=[];return n&&(n[r]=i),i}const je=e=>e?yn(e)?xn(e)||e.proxy:je(e.parent):null,Be=(0,s.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>je(e.parent),$root:e=>je(e.root),$emit:e=>e.emit,$options:e=>Qe(e),$forceUpdate:e=>e.f||(e.f=()=>b(e.update)),$nextTick:e=>e.n||(e.n=y.bind(e.proxy)),$watch:e=>X.bind(e)}),qe=(e,t)=>e!==s.kT&&!e.__isScriptSetup&&(0,s.RI)(e,t),ze={get({_:e},t){const{ctx:n,setupState:i,data:o,props:a,accessCache:l,type:c,appContext:u}=e;let h;if("$"!==t[0]){const r=l[t];if(void 0!==r)switch(r){case 1:return i[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(qe(i,t))return l[t]=1,i[t];if(o!==s.kT&&(0,s.RI)(o,t))return l[t]=2,o[t];if((h=e.propsOptions[0])&&(0,s.RI)(h,t))return l[t]=3,a[t];if(n!==s.kT&&(0,s.RI)(n,t))return l[t]=4,n[t];Ge&&(l[t]=0)}}const d=Be[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=c.__cssModules)&&(f=f[t])?f:n!==s.kT&&(0,s.RI)(n,t)?(l[t]=4,n[t]):(p=u.config.globalProperties,(0,s.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:o}=e;return qe(i,t)?(i[t]=n,!0):r!==s.kT&&(0,s.RI)(r,t)?(r[t]=n,!0):!(0,s.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:o}},a){let l;return!!n[a]||e!==s.kT&&(0,s.RI)(e,a)||qe(t,a)||(l=o[0])&&(0,s.RI)(l,a)||(0,s.RI)(r,a)||(0,s.RI)(Be,a)||(0,s.RI)(i.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,s.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Ge=!0;function He(e){const t=Qe(e),n=e.proxy,i=e.ctx;Ge=!1,t.beforeCreate&&Ke(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:l,watch:c,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:v,deactivated:y,beforeDestroy:w,beforeUnmount:b,destroyed:_,unmounted:E,render:T,renderTracked:S,renderTriggered:C,errorCaptured:I,serverPrefetch:k,expose:x,inheritAttrs:A,components:O,directives:R,filters:N}=t,D=null;if(h&&We(h,i,D,e.appContext.config.unwrapInjectedRef),l)for(const r in l){const e=l[r];(0,s.mf)(e)&&(i[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,s.Kn)(t)&&(e.data=(0,r.qj)(t))}if(Ge=!0,a)for(const r in a){const e=a[r],t=(0,s.mf)(e)?e.bind(n,n):(0,s.mf)(e.get)?e.get.bind(n,n):s.dG;0;const o=!(0,s.mf)(e)&&(0,s.mf)(e.set)?e.set.bind(n):s.dG,l=Rn({get:t,set:o});Object.defineProperty(i,r,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(c)for(const r in c)Je(c[r],i,n,r);if(u){const e=(0,s.mf)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{H(t,e[t])}))}function P(e,t){(0,s.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Ke(d,e,"c"),P(Ee,f),P(Te,p),P(Se,g),P(Ce,m),P(pe,v),P(ge,y),P(Re,I),P(Oe,S),P(Ae,C),P(Ie,b),P(ke,E),P(xe,k),(0,s.kJ)(x))if(x.length){const t=e.exposed||(e.exposed={});x.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===s.dG&&(e.render=T),null!=A&&(e.inheritAttrs=A),O&&(e.components=O),R&&(e.directives=R)}function We(e,t,n=s.dG,i=!1){(0,s.kJ)(e)&&(e=tt(e));for(const o in e){const n=e[o];let a;a=(0,s.Kn)(n)?"default"in n?W(n.from||o,n.default,!0):W(n.from||o):W(n),(0,r.dq)(a)&&i?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function Ke(e,t,n){o((0,s.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Je(e,t,n,r){const i=r.includes(".")?Y(n,r):()=>n[r];if((0,s.HD)(e)){const n=t[e];(0,s.mf)(n)&&J(i,n)}else if((0,s.mf)(e))J(i,e.bind(n));else if((0,s.Kn)(e))if((0,s.kJ)(e))e.forEach((e=>Je(e,t,n,r)));else{const r=(0,s.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,s.mf)(r)&&J(i,r,e)}else 0}function Qe(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,l=o.get(t);let c;return l?c=l:i.length||n||r?(c={},i.length&&i.forEach((e=>Xe(c,e,a,!0))),Xe(c,t,a)):c=t,(0,s.Kn)(t)&&o.set(t,c),c}function Xe(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Xe(e,i,n,!0),s&&s.forEach((t=>Xe(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Ye[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Ye={data:Ze,props:rt,emits:rt,methods:rt,computed:rt,beforeCreate:nt,created:nt,beforeMount:nt,mounted:nt,beforeUpdate:nt,updated:nt,beforeDestroy:nt,beforeUnmount:nt,destroyed:nt,unmounted:nt,activated:nt,deactivated:nt,errorCaptured:nt,serverPrefetch:nt,components:rt,directives:rt,watch:st,provide:Ze,inject:et};function Ze(e,t){return t?e?function(){return(0,s.l7)((0,s.mf)(e)?e.call(this,this):e,(0,s.mf)(t)?t.call(this,this):t)}:t:e}function et(e,t){return rt(tt(e),tt(t))}function tt(e){if((0,s.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function nt(e,t){return e?[...new Set([].concat(e,t))]:t}function rt(e,t){return e?(0,s.l7)((0,s.l7)(Object.create(null),e),t):t}function st(e,t){if(!e)return t;if(!t)return e;const n=(0,s.l7)(Object.create(null),e);for(const r in t)n[r]=nt(e[r],t[r]);return n}function it(e,t,n,i=!1){const o={},a={};(0,s.Nj)(a,Kt,1),e.propsDefaults=Object.create(null),at(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function ot(e,t,n,i){const{props:o,attrs:a,vnode:{patchFlag:l}}=e,c=(0,r.IU)(o),[u]=e.propsOptions;let h=!1;if(!(i||l>0)||16&l){let r;at(e,t,o,a)&&(h=!0);for(const i in c)t&&((0,s.RI)(t,i)||(r=(0,s.rs)(i))!==i&&(0,s.RI)(t,r))||(u?!n||void 0===n[i]&&void 0===n[r]||(o[i]=lt(u,c,i,void 0,e,!0)):delete o[i]);if(a!==c)for(const e in a)t&&(0,s.RI)(t,e)||(delete a[e],h=!0)}else if(8&l){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(R(e.emitsOptions,i))continue;const l=t[i];if(u)if((0,s.RI)(a,i))l!==a[i]&&(a[i]=l,h=!0);else{const t=(0,s._A)(i);o[t]=lt(u,c,t,l,e,!1)}else l!==a[i]&&(a[i]=l,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function at(e,t,n,i){const[o,a]=e.propsOptions;let l,c=!1;if(t)for(let r in t){if((0,s.Gg)(r))continue;const u=t[r];let h;o&&(0,s.RI)(o,h=(0,s._A)(r))?a&&a.includes(h)?(l||(l={}))[h]=u:n[h]=u:R(e.emitsOptions,r)||r in i&&u===i[r]||(i[r]=u,c=!0)}if(a){const t=(0,r.IU)(n),i=l||s.kT;for(let r=0;r<a.length;r++){const l=a[r];n[l]=lt(o,t,l,i[l],e,!(0,s.RI)(i,l))}}return c}function lt(e,t,n,r,i,o){const a=e[n];if(null!=a){const e=(0,s.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,s.mf)(e)){const{propsDefaults:s}=i;n in s?r=s[n]:(mn(i),r=s[n]=e.call(null,t),vn())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,s.rs)(n)||(r=!0))}return r}function ct(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const o=e.props,a={},l=[];let c=!1;if(!(0,s.mf)(e)){const r=e=>{c=!0;const[n,r]=ct(e,t,!0);(0,s.l7)(a,n),r&&l.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!c)return(0,s.Kn)(e)&&r.set(e,s.Z6),s.Z6;if((0,s.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,s._A)(o[h]);ut(e)&&(a[e]=s.kT)}else if(o){0;for(const e in o){const t=(0,s._A)(e);if(ut(t)){const n=o[e],r=a[t]=(0,s.kJ)(n)||(0,s.mf)(n)?{type:n}:Object.assign({},n);if(r){const e=ft(Boolean,r.type),n=ft(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,s.RI)(r,"default"))&&l.push(t)}}}}const u=[a,l];return(0,s.Kn)(e)&&r.set(e,u),u}function ut(e){return"$"!==e[0]}function ht(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function dt(e,t){return ht(e)===ht(t)}function ft(e,t){return(0,s.kJ)(t)?t.findIndex((t=>dt(t,e))):(0,s.mf)(t)&&dt(t,e)?0:-1}const pt=e=>"_"===e[0]||"$stable"===e,gt=e=>(0,s.kJ)(e)?e.map(on):[on(e)],mt=(e,t,n)=>{if(t._n)return t;const r=F(((...e)=>gt(t(...e))),n);return r._c=!1,r},vt=(e,t,n)=>{const r=e._ctx;for(const i in e){if(pt(i))continue;const n=e[i];if((0,s.mf)(n))t[i]=mt(i,n,r);else if(null!=n){0;const e=gt(n);t[i]=()=>e}}},yt=(e,t)=>{const n=gt(t);e.slots.default=()=>n},wt=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,s.Nj)(t,"_",n)):vt(t,e.slots={})}else e.slots={},t&&yt(e,t);(0,s.Nj)(e.slots,Kt,1)},bt=(e,t,n)=>{const{vnode:r,slots:i}=e;let o=!0,a=s.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,s.l7)(i,t),n||1!==e||delete i._):(o=!t.$stable,vt(t,i)),a=t}else t&&(yt(e,t),a={default:1});if(o)for(const s in i)pt(s)||s in a||delete i[s]};function _t(){return{app:null,config:{isNativeTag:s.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Et=0;function Tt(e,t){return function(n,r=null){(0,s.mf)(n)||(n=Object.assign({},n)),null==r||(0,s.Kn)(r)||(r=null);const i=_t(),o=new Set;let a=!1;const l=i.app={_uid:Et++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Ln,get config(){return i.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,s.mf)(e.install)?(o.add(e),e.install(l,...t)):(0,s.mf)(e)&&(o.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(s,o,c){if(!a){0;const u=Yt(n,r);return u.appContext=i,o&&t?t(u,s):e(u,s,c),a=!0,l._container=s,s.__vue_app__=l,xn(u.component)||u.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l}};return l}}function St(e,t,n,o,a=!1){if((0,s.kJ)(e))return void e.forEach(((e,r)=>St(e,t&&((0,s.kJ)(t)?t[r]:t),n,o,a)));if(he(o)&&!a)return;const l=4&o.shapeFlag?xn(o.component)||o.component.proxy:o.el,c=a?null:l,{i:u,r:h}=e;const d=t&&t.r,f=u.refs===s.kT?u.refs={}:u.refs,p=u.setupState;if(null!=d&&d!==h&&((0,s.HD)(d)?(f[d]=null,(0,s.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,s.mf)(h))i(h,u,12,[c,f]);else{const t=(0,s.HD)(h),i=(0,r.dq)(h);if(t||i){const r=()=>{if(e.f){const n=t?(0,s.RI)(p,h)?p[h]:f[h]:h.value;a?(0,s.kJ)(n)&&(0,s.Od)(n,l):(0,s.kJ)(n)?n.includes(l)||n.push(l):t?(f[h]=[l],(0,s.RI)(p,h)&&(p[h]=f[h])):(h.value=[l],e.k&&(f[e.k]=h.value))}else t?(f[h]=c,(0,s.RI)(p,h)&&(p[h]=c)):i&&(h.value=c,e.k&&(f[e.k]=c))};c?(r.id=-1,It(r,n)):r()}else 0}}function Ct(){}const It=G;function kt(e){return xt(e)}function xt(e,t){Ct();const n=(0,s.E9)();n.__VUE__=!0;const{insert:i,remove:o,patchProp:a,createElement:l,createText:c,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=s.dG,insertStaticContent:m}=e,v=(e,t,n,r=null,s=null,i=null,o=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!Wt(e,t)&&(r=Y(e),W(e,s,i,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:h}=t;switch(c){case Pt:y(e,t,n,r);break;case Lt:w(e,t,n,r);break;case Mt:null==e&&_(t,n,r,o);break;case Dt:P(e,t,n,r,s,i,o,a,l);break;default:1&h?k(e,t,n,r,s,i,o,a,l):6&h?L(e,t,n,r,s,i,o,a,l):(64&h||128&h)&&c.process(e,t,n,r,s,i,o,a,l,ee)}null!=u&&s&&St(u,e&&e.ref,i,t||e,!t)},y=(e,t,n,r)=>{if(null==e)i(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},w=(e,t,n,r)=>{null==e?i(t.el=u(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},T=({el:e,anchor:t},n,r)=>{let s;while(e&&e!==t)s=p(e),i(e,n,r),e=s;i(t,n,r)},I=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},k=(e,t,n,r,s,i,o,a,l)=>{o=o||"svg"===t.type,null==e?x(t,n,r,s,i,o,a,l):R(e,t,s,i,o,a,l)},x=(e,t,n,r,o,c,u,h)=>{let f,p;const{type:g,props:m,shapeFlag:v,transition:y,dirs:w}=e;if(f=e.el=l(e.type,c,m&&m.is,m),8&v?d(f,e.children):16&v&&O(e.children,f,null,r,o,c&&"foreignObject"!==g,u,h),w&&De(e,null,r,"created"),m){for(const t in m)"value"===t||(0,s.Gg)(t)||a(f,t,null,m[t],c,e.children,r,o,X);"value"in m&&a(f,"value",null,m.value),(p=m.onVnodeBeforeMount)&&un(p,r,e)}A(f,e,e.scopeId,u,r),w&&De(e,null,r,"beforeMount");const b=(!o||o&&!o.pendingBranch)&&y&&!y.persisted;b&&y.beforeEnter(f),i(f,t,n),((p=m&&m.onVnodeMounted)||b||w)&&It((()=>{p&&un(p,r,e),b&&y.enter(f),w&&De(e,null,r,"mounted")}),o)},A=(e,t,n,r,s)=>{if(n&&g(e,n),r)for(let i=0;i<r.length;i++)g(e,r[i]);if(s){let n=s.subTree;if(t===n){const t=s.vnode;A(e,t,t.scopeId,t.slotScopeIds,s.parent)}}},O=(e,t,n,r,s,i,o,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?an(e[c]):on(e[c]);v(null,l,t,n,r,s,i,o,a)}},R=(e,t,n,r,i,o,l)=>{const c=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||s.kT,g=t.props||s.kT;let m;n&&At(n,!1),(m=g.onVnodeBeforeUpdate)&&un(m,n,t,e),f&&De(t,e,n,"beforeUpdate"),n&&At(n,!0);const v=i&&"foreignObject"!==t.type;if(h?N(e.dynamicChildren,h,c,n,r,v,o):l||B(e,t,c,null,n,r,v,o,!1),u>0){if(16&u)D(c,t,p,g,n,r,i);else if(2&u&&p.class!==g.class&&a(c,"class",null,g.class,i),4&u&&a(c,"style",p.style,g.style,i),8&u){const s=t.dynamicProps;for(let t=0;t<s.length;t++){const o=s[t],l=p[o],u=g[o];u===l&&"value"!==o||a(c,o,l,u,i,e.children,n,r,X)}}1&u&&e.children!==t.children&&d(c,t.children)}else l||null!=h||D(c,t,p,g,n,r,i);((m=g.onVnodeUpdated)||f)&&It((()=>{m&&un(m,n,t,e),f&&De(t,e,n,"updated")}),r)},N=(e,t,n,r,s,i,o)=>{for(let a=0;a<t.length;a++){const l=e[a],c=t[a],u=l.el&&(l.type===Dt||!Wt(l,c)||70&l.shapeFlag)?f(l.el):n;v(l,c,u,null,r,s,i,o,!0)}},D=(e,t,n,r,i,o,l)=>{if(n!==r){if(n!==s.kT)for(const c in n)(0,s.Gg)(c)||c in r||a(e,c,n[c],null,l,t.children,i,o,X);for(const c in r){if((0,s.Gg)(c))continue;const u=r[c],h=n[c];u!==h&&"value"!==c&&a(e,c,h,u,l,t.children,i,o,X)}"value"in r&&a(e,"value",n.value,r.value)}},P=(e,t,n,r,s,o,a,l,u)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;g&&(l=l?l.concat(g):g),null==e?(i(h,n,r),i(d,n,r),O(t.children,n,d,s,o,a,l,u)):f>0&&64&f&&p&&e.dynamicChildren?(N(e.dynamicChildren,p,n,s,o,a,l),(null!=t.key||s&&t===s.subTree)&&Ot(e,t,!0)):B(e,t,n,d,s,o,a,l,u)},L=(e,t,n,r,s,i,o,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?s.ctx.activate(t,n,r,o,l):M(t,n,r,s,i,o,l):F(e,t,l)},M=(e,t,n,r,s,i,o)=>{const a=e.component=fn(e,r,s);if(de(e)&&(a.ctx.renderer=ee),En(a),a.asyncDep){if(s&&s.registerDep(a,$),!e.el){const e=a.subTree=Yt(Lt);w(null,e,t,n)}}else $(a,e,t,n,s,i,o)},F=(e,t,n)=>{const r=t.component=e.component;if(j(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,t,n);r.next=t,E(r.update),r.update()}else t.el=e.el,r.vnode=t},$=(e,t,n,i,o,a,l)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:r,u:i,parent:c,vnode:u}=e,h=n;0,At(e,!1),n?(n.el=u.el,V(e,n,l)):n=u,r&&(0,s.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&un(t,c,n,u),At(e,!0);const d=U(e);0;const p=e.subTree;e.subTree=d,v(p,d,f(p.el),Y(p),e,o,a),n.el=d.el,null===h&&q(e,d.el),i&&It(i,o),(t=n.props&&n.props.onVnodeUpdated)&&It((()=>un(t,c,n,u)),o)}else{let r;const{el:l,props:c}=t,{bm:u,m:h,parent:d}=e,f=he(t);if(At(e,!1),u&&(0,s.ir)(u),!f&&(r=c&&c.onVnodeBeforeMount)&&un(r,d,t),At(e,!0),l&&ne){const n=()=>{e.subTree=U(e),ne(l,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=U(e);0,v(null,r,n,i,e,o,a),t.el=r.el}if(h&&It(h,o),!f&&(r=c&&c.onVnodeMounted)){const e=t;It((()=>un(r,d,e)),o)}(256&t.shapeFlag||d&&he(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&It(e.a,o),e.isMounted=!0,t=n=i=null}},u=e.effect=new r.qq(c,(()=>b(h)),e.scope),h=e.update=()=>u.run();h.id=e.uid,At(e,!0),h()},V=(e,t,n)=>{t.component=e;const s=e.vnode.props;e.vnode=t,e.next=null,ot(e,t.props,s,n),bt(e,t.children,n),(0,r.Jd)(),S(),(0,r.lk)()},B=(e,t,n,r,s,i,o,a,l=!1)=>{const c=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void G(c,h,n,r,s,i,o,a,l);if(256&f)return void z(c,h,n,r,s,i,o,a,l)}8&p?(16&u&&X(c,s,i),h!==c&&d(n,h)):16&u?16&p?G(c,h,n,r,s,i,o,a,l):X(c,s,i,!0):(8&u&&d(n,""),16&p&&O(h,n,r,s,i,o,a,l))},z=(e,t,n,r,i,o,a,l,c)=>{e=e||s.Z6,t=t||s.Z6;const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const r=t[f]=c?an(t[f]):on(t[f]);v(e[f],r,n,null,i,o,a,l,c)}u>h?X(e,i,o,!0,!1,d):O(t,n,r,i,o,a,l,c,d)},G=(e,t,n,r,i,o,a,l,c)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const r=e[u],s=t[u]=c?an(t[u]):on(t[u]);if(!Wt(r,s))break;v(r,s,n,null,i,o,a,l,c),u++}while(u<=d&&u<=f){const r=e[d],s=t[f]=c?an(t[f]):on(t[f]);if(!Wt(r,s))break;v(r,s,n,null,i,o,a,l,c),d--,f--}if(u>d){if(u<=f){const e=f+1,s=e<h?t[e].el:r;while(u<=f)v(null,t[u]=c?an(t[u]):on(t[u]),n,s,i,o,a,l,c),u++}}else if(u>f)while(u<=d)W(e[u],i,o,!0),u++;else{const p=u,g=u,m=new Map;for(u=g;u<=f;u++){const e=t[u]=c?an(t[u]):on(t[u]);null!=e.key&&m.set(e.key,u)}let y,w=0;const b=f-g+1;let _=!1,E=0;const T=new Array(b);for(u=0;u<b;u++)T[u]=0;for(u=p;u<=d;u++){const r=e[u];if(w>=b){W(r,i,o,!0);continue}let s;if(null!=r.key)s=m.get(r.key);else for(y=g;y<=f;y++)if(0===T[y-g]&&Wt(r,t[y])){s=y;break}void 0===s?W(r,i,o,!0):(T[s-g]=u+1,s>=E?E=s:_=!0,v(r,t[s],n,null,i,o,a,l,c),w++)}const S=_?Rt(T):s.Z6;for(y=S.length-1,u=b-1;u>=0;u--){const e=g+u,s=t[e],d=e+1<h?t[e+1].el:r;0===T[u]?v(null,s,n,d,i,o,a,l,c):_&&(y<0||u!==S[y]?H(s,n,d,2):y--)}}},H=(e,t,n,r,s=null)=>{const{el:o,type:a,transition:l,children:c,shapeFlag:u}=e;if(6&u)return void H(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,ee);if(a===Dt){i(o,t,n);for(let e=0;e<c.length;e++)H(c[e],t,n,r);return void i(e.anchor,t,n)}if(a===Mt)return void T(e,t,n);const h=2!==r&&1&u&&l;if(h)if(0===r)l.beforeEnter(o),i(o,t,n),It((()=>l.enter(o)),s);else{const{leave:e,delayLeave:r,afterLeave:s}=l,a=()=>i(o,t,n),c=()=>{e(o,(()=>{a(),s&&s()}))};r?r(o,a,c):c()}else i(o,t,n)},W=(e,t,n,r=!1,s=!1)=>{const{type:i,props:o,ref:a,children:l,dynamicChildren:c,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&St(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,p=!he(e);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&un(g,t,e),6&u)Q(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&De(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,s,ee,r):c&&(i!==Dt||h>0&&64&h)?X(c,t,n,!1,!0):(i===Dt&&384&h||!s&&16&u)&&X(l,t,n),r&&K(e)}(p&&(g=o&&o.onVnodeUnmounted)||f)&&It((()=>{g&&un(g,t,e),f&&De(e,null,t,"unmounted")}),n)},K=e=>{const{type:t,el:n,anchor:r,transition:s}=e;if(t===Dt)return void J(n,r);if(t===Mt)return void I(e);const i=()=>{o(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:r}=s,o=()=>t(n,i);r?r(e.el,i,o):o()}else i()},J=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},Q=(e,t,n)=>{const{bum:r,scope:i,update:o,subTree:a,um:l}=e;r&&(0,s.ir)(r),i.stop(),o&&(o.active=!1,W(a,e,t,n)),l&&It(l,t),It((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,r=!1,s=!1,i=0)=>{for(let o=i;o<e.length;o++)W(e[o],t,n,r,s)},Y=e=>6&e.shapeFlag?Y(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),Z=(e,t,n)=>{null==e?t._vnode&&W(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),S(),C(),t._vnode=e},ee={p:v,um:W,m:H,r:K,mt:M,mc:O,pc:B,pbc:N,n:Y,o:e};let te,ne;return t&&([te,ne]=t(ee)),{render:Z,hydrate:te,createApp:Tt(Z,te)}}function At({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ot(e,t,n=!1){const r=e.children,i=t.children;if((0,s.kJ)(r)&&(0,s.kJ)(i))for(let s=0;s<r.length;s++){const e=r[s];let t=i[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[s]=an(i[s]),t.el=e.el),n||Ot(e,t)),t.type===Pt&&(t.el=e.el)}}function Rt(e){const t=e.slice(),n=[0];let r,s,i,o,a;const l=e.length;for(r=0;r<l;r++){const l=e[r];if(0!==l){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}i=0,o=n.length-1;while(i<o)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}i=n.length,o=n[i-1];while(i-- >0)n[i]=o,o=t[o];return n}const Nt=e=>e.__isTeleport;const Dt=Symbol(void 0),Pt=Symbol(void 0),Lt=Symbol(void 0),Mt=Symbol(void 0),Ft=[];let Ut=null;function $t(e=!1){Ft.push(Ut=e?null:[])}function Vt(){Ft.pop(),Ut=Ft[Ft.length-1]||null}let jt=1;function Bt(e){jt+=e}function qt(e){return e.dynamicChildren=jt>0?Ut||s.Z6:null,Vt(),jt>0&&Ut&&Ut.push(e),e}function zt(e,t,n,r,s,i){return qt(Xt(e,t,n,r,s,i,!0))}function Gt(e,t,n,r,s){return qt(Yt(e,t,n,r,s,!0))}function Ht(e){return!!e&&!0===e.__v_isVNode}function Wt(e,t){return e.type===t.type&&e.key===t.key}const Kt="__vInternal",Jt=({key:e})=>null!=e?e:null,Qt=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,s.HD)(e)||(0,r.dq)(e)||(0,s.mf)(e)?{i:N,r:e,k:t,f:!!n}:e:null;function Xt(e,t=null,n=null,r=0,i=null,o=(e===Dt?0:1),a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Jt(t),ref:t&&Qt(t),scopeId:D,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:N};return l?(ln(c,n),128&o&&e.normalize(c)):n&&(c.shapeFlag|=(0,s.HD)(n)?8:16),jt>0&&!a&&Ut&&(c.patchFlag>0||6&o)&&32!==c.patchFlag&&Ut.push(c),c}const Yt=Zt;function Zt(e,t=null,n=null,i=0,o=null,a=!1){if(e&&e!==Me||(e=Lt),Ht(e)){const r=tn(e,t,!0);return n&&ln(r,n),jt>0&&!a&&Ut&&(6&r.shapeFlag?Ut[Ut.indexOf(e)]=r:Ut.push(r)),r.patchFlag|=-2,r}if(On(e)&&(e=e.__vccOpts),t){t=en(t);let{class:e,style:n}=t;e&&!(0,s.HD)(e)&&(t.class=(0,s.C_)(e)),(0,s.Kn)(n)&&((0,r.X3)(n)&&!(0,s.kJ)(n)&&(n=(0,s.l7)({},n)),t.style=(0,s.j5)(n))}const l=(0,s.HD)(e)?1:z(e)?128:Nt(e)?64:(0,s.Kn)(e)?4:(0,s.mf)(e)?2:0;return Xt(e,t,n,i,o,l,a,!0)}function en(e){return e?(0,r.X3)(e)||Kt in e?(0,s.l7)({},e):e:null}function tn(e,t,n=!1){const{props:r,ref:i,patchFlag:o,children:a}=e,l=t?cn(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Jt(l),ref:t&&t.ref?n&&i?(0,s.kJ)(i)?i.concat(Qt(t)):[i,Qt(t)]:Qt(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Dt?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&tn(e.ssContent),ssFallback:e.ssFallback&&tn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx};return c}function nn(e=" ",t=0){return Yt(Pt,null,e,t)}function rn(e,t){const n=Yt(Mt,null,e);return n.staticCount=t,n}function sn(e="",t=!1){return t?($t(),Gt(Lt,null,e)):Yt(Lt,null,e)}function on(e){return null==e||"boolean"===typeof e?Yt(Lt):(0,s.kJ)(e)?Yt(Dt,null,e.slice()):"object"===typeof e?an(e):Yt(Pt,null,String(e))}function an(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:tn(e)}function ln(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,s.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),ln(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Kt in t?3===r&&N&&(1===N.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=N}}else(0,s.mf)(t)?(t={default:t,_ctx:N},n=32):(t=String(t),64&r?(n=16,t=[nn(t)]):n=8);e.children=t,e.shapeFlag|=n}function cn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,s.C_)([t.class,r.class]));else if("style"===e)t.style=(0,s.j5)([t.style,r.style]);else if((0,s.F7)(e)){const n=t[e],i=r[e];!i||n===i||(0,s.kJ)(n)&&n.includes(i)||(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}function un(e,t,n,r=null){o(e,t,7,[n,r])}const hn=_t();let dn=0;function fn(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||hn,a={uid:dn++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ct(i,o),emitsOptions:O(i,o),emit:null,emitted:null,propsDefaults:s.kT,inheritAttrs:i.inheritAttrs,ctx:s.kT,data:s.kT,props:s.kT,attrs:s.kT,slots:s.kT,refs:s.kT,setupState:s.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=A.bind(null,a),e.ce&&e.ce(a),a}let pn=null;const gn=()=>pn||N,mn=e=>{pn=e,e.scope.on()},vn=()=>{pn&&pn.scope.off(),pn=null};function yn(e){return 4&e.vnode.shapeFlag}let wn,bn,_n=!1;function En(e,t=!1){_n=t;const{props:n,children:r}=e.vnode,s=yn(e);it(e,n,s,t),wt(e,r);const i=s?Tn(e,t):void 0;return _n=!1,i}function Tn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,ze));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?kn(e):null;mn(e),(0,r.Jd)();const l=i(o,e,0,[e.props,n]);if((0,r.lk)(),vn(),(0,s.tI)(l)){if(l.then(vn,vn),t)return l.then((n=>{Sn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=l}else Sn(e,l,t)}else Cn(e,t)}function Sn(e,t,n){(0,s.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,s.Kn)(t)&&(e.setupState=(0,r.WL)(t)),Cn(e,n)}function Cn(e,t,n){const i=e.type;if(!e.render){if(!t&&wn&&!i.render){const t=i.template||Qe(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=i,l=(0,s.l7)((0,s.l7)({isCustomElement:n,delimiters:o},r),a);i.render=wn(t,l)}}e.render=i.render||s.dG,bn&&bn(e)}mn(e),(0,r.Jd)(),He(e),(0,r.lk)(),vn()}function In(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function kn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=In(e))},slots:e.slots,emit:e.emit,expose:t}}function xn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in Be?Be[n](e):void 0},has(e,t){return t in e||t in Be}}))}function An(e,t=!0){return(0,s.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function On(e){return(0,s.mf)(e)&&"__vccOpts"in e}const Rn=(e,t)=>(0,r.Fl)(e,t,_n);function Nn(e,t,n){const r=arguments.length;return 2===r?(0,s.Kn)(t)&&!(0,s.kJ)(t)?Ht(t)?Yt(e,null,[t]):Yt(e,t):Yt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Ht(n)&&(n=[n]),Yt(e,t,n))}const Dn=Symbol(""),Pn=()=>{{const e=W(Dn);return e}};const Ln="3.2.45"},9242:function(e,t,n){"use strict";n.d(t,{F8:function(){return ne},G2:function(){return ee},nr:function(){return Z},ri:function(){return ae},uT:function(){return P}});n(7658);var r=n(7139),s=n(3396);n(4870);const i="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=o&&o.createElement("template"),l={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?o.createElementNS(i,e):o.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&s.setAttribute("multiple",r.multiple),s},createText:e=>o.createTextNode(e),createComment:e=>o.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>o.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling)){while(1)if(t.insertBefore(s.cloneNode(!0),n),s===i||!(s=s.nextSibling))break}else{a.innerHTML=r?`<svg>${e}</svg>`:e;const s=a.content;if(r){const e=s.firstChild;while(e.firstChild)s.appendChild(e.firstChild);s.removeChild(e)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function c(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function u(e,t,n){const s=e.style,i=(0,r.HD)(n);if(n&&!i){for(const e in n)d(s,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&d(s,e,"")}else{const r=s.display;i?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const h=/\s*!important$/;function d(e,t,n){if((0,r.kJ)(n))n.forEach((n=>d(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=g(e,t);h.test(n)?e.setProperty((0,r.rs)(s),n.replace(h,""),"important"):e[s]=n}}const f=["Webkit","Moz","ms"],p={};function g(e,t){const n=p[t];if(n)return n;let s=(0,r._A)(t);if("filter"!==s&&s in e)return p[t]=s;s=(0,r.kC)(s);for(let r=0;r<f.length;r++){const n=f[r]+s;if(n in e)return p[t]=n}return t}const m="http://www.w3.org/1999/xlink";function v(e,t,n,s,i){if(s&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(m,t.slice(6,t.length)):e.setAttributeNS(m,t,n);else{const s=(0,r.Pq)(t);null==n||s&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function y(e,t,n,s,i,o,a){if("innerHTML"===t||"textContent"===t)return s&&a(s,i,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let l=!1;if(""===n||null==n){const s=typeof e[t];"boolean"===s?n=(0,r.yA)(n):null==n&&"string"===s?(n="",l=!0):"number"===s&&(n=0,l=!0)}try{e[t]=n}catch(c){0}l&&e.removeAttribute(t)}function w(e,t,n,r){e.addEventListener(t,n,r)}function b(e,t,n,r){e.removeEventListener(t,n,r)}function _(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[n,a]=T(t);if(r){const o=i[t]=k(r,s);w(e,n,o,a)}else o&&(b(e,n,o,a),i[t]=void 0)}}const E=/(?:Once|Passive|Capture)$/;function T(e){let t;if(E.test(e)){let n;t={};while(n=e.match(E))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}let S=0;const C=Promise.resolve(),I=()=>S||(C.then((()=>S=0)),S=Date.now());function k(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,s.$d)(x(e,n.value),t,5,[e])};return n.value=e,n.attached=I(),n}function x(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const A=/^on[a-z]/,O=(e,t,n,s,i=!1,o,a,l,h)=>{"class"===t?c(e,s,i):"style"===t?u(e,n,s):(0,r.F7)(t)?(0,r.tR)(t)||_(e,t,n,s,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):R(e,t,s,i))?y(e,t,s,o,a,l,h):("true-value"===t?e._trueValue=s:"false-value"===t&&(e._falseValue=s),v(e,t,s,i))};function R(e,t,n,s){return s?"innerHTML"===t||"textContent"===t||!!(t in e&&A.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!A.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const N="transition",D="animation",P=(e,{slots:t})=>(0,s.h)(s.P$,U(e),t);P.displayName="Transition";const L={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},M=(P.props=(0,r.l7)({},s.P$.props,L),(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)}),F=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function U(e){const t={};for(const r in e)r in L||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:s,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:u=a,appearToClass:h=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,g=$(i),m=g&&g[0],v=g&&g[1],{onBeforeEnter:y,onEnter:w,onEnterCancelled:b,onLeave:_,onLeaveCancelled:E,onBeforeAppear:T=y,onAppear:S=w,onAppearCancelled:C=b}=t,I=(e,t,n)=>{B(e,t?h:l),B(e,t?u:a),n&&n()},k=(e,t)=>{e._isLeaving=!1,B(e,d),B(e,p),B(e,f),t&&t()},x=e=>(t,n)=>{const r=e?S:w,i=()=>I(t,e,n);M(r,[t,i]),q((()=>{B(t,e?c:o),j(t,e?h:l),F(r)||G(t,s,m,i)}))};return(0,r.l7)(t,{onBeforeEnter(e){M(y,[e]),j(e,o),j(e,a)},onBeforeAppear(e){M(T,[e]),j(e,c),j(e,u)},onEnter:x(!1),onAppear:x(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>k(e,t);j(e,d),J(),j(e,f),q((()=>{e._isLeaving&&(B(e,d),j(e,p),F(_)||G(e,s,v,n))})),M(_,[e,n])},onEnterCancelled(e){I(e,!1),M(b,[e])},onAppearCancelled(e){I(e,!0),M(C,[e])},onLeaveCancelled(e){k(e),M(E,[e])}})}function $(e){if(null==e)return null;if((0,r.Kn)(e))return[V(e.enter),V(e.leave)];{const t=V(e);return[t,t]}}function V(e){const t=(0,r.He)(e);return t}function j(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function B(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function q(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let z=0;function G(e,t,n,r){const s=e._endId=++z,i=()=>{s===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=H(e,t);if(!o)return r();const c=o+"end";let u=0;const h=()=>{e.removeEventListener(c,d),i()},d=t=>{t.target===e&&++u>=l&&h()};setTimeout((()=>{u<l&&h()}),a+1),e.addEventListener(c,d)}function H(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),s=r(`${N}Delay`),i=r(`${N}Duration`),o=W(s,i),a=r(`${D}Delay`),l=r(`${D}Duration`),c=W(a,l);let u=null,h=0,d=0;t===N?o>0&&(u=N,h=o,d=i.length):t===D?c>0&&(u=D,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?N:D:null,d=u?u===N?i.length:l.length:0);const f=u===N&&/\b(transform|all)(,|$)/.test(r(`${N}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function W(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>K(t)+K(e[n]))))}function K(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function J(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Q=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function X(e){e.target.composing=!0}function Y(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Z={created(e,{modifiers:{lazy:t,trim:n,number:s}},i){e._assign=Q(i);const o=s||i.props&&"number"===i.props.type;w(e,t?"change":"input",(t=>{if(t.target.composing)return;let s=e.value;n&&(s=s.trim()),o&&(s=(0,r.He)(s)),e._assign(s)})),n&&w(e,"change",(()=>{e.value=e.value.trim()})),t||(w(e,"compositionstart",X),w(e,"compositionend",Y),w(e,"change",Y))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:i}},o){if(e._assign=Q(o),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(s&&e.value.trim()===t)return;if((i||"number"===e.type)&&(0,r.He)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const ee={created(e,{value:t},n){e.checked=(0,r.WV)(t,n.props.value),e._assign=Q(n),w(e,"change",(()=>{e._assign(te(e))}))},beforeUpdate(e,{value:t,oldValue:n},s){e._assign=Q(s),t!==n&&(e.checked=(0,r.WV)(t,s.props.value))}};function te(e){return"_value"in e?e._value:e.value}const ne={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):re(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),re(e,!0),r.enter(e)):r.leave(e,(()=>{re(e,!1)})):re(e,t))},beforeUnmount(e,{value:t}){re(e,t)}};function re(e,t){e.style.display=t?e._vod:"none"}const se=(0,r.l7)({patchProp:O},l);let ie;function oe(){return ie||(ie=(0,s.Us)(se))}const ae=(...e)=>{const t=oe().createApp(...e);const{mount:n}=t;return t.mount=e=>{const s=le(e);if(!s)return;const i=t._component;(0,r.mf)(i)||i.render||i.template||(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function le(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},7139:function(e,t,n){"use strict";n.d(t,{C_:function(){return h},DM:function(){return D},E9:function(){return se},F7:function(){return C},Gg:function(){return G},HD:function(){return M},He:function(){return ne},Kn:function(){return U},NO:function(){return T},Nj:function(){return te},Od:function(){return x},PO:function(){return q},Pq:function(){return f},RI:function(){return O},S0:function(){return z},W7:function(){return B},WV:function(){return m},Z6:function(){return _},_A:function(){return K},_N:function(){return N},aU:function(){return Z},dG:function(){return E},e1:function(){return i},fY:function(){return r},hR:function(){return Y},hq:function(){return v},ir:function(){return ee},j5:function(){return o},kC:function(){return X},kJ:function(){return R},kT:function(){return b},l7:function(){return k},mf:function(){return L},rs:function(){return Q},tI:function(){return $},tR:function(){return I},yA:function(){return p},yk:function(){return F},zw:function(){return y}});n(7658);function r(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const s="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",i=r(s);function o(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=M(r)?u(r):o(r);if(s)for(const e in s)t[e]=s[e]}return t}return M(e)||U(e)?e:void 0}const a=/;(?![^(]*\))/g,l=/:([^]+)/,c=/\/\*.*?\*\//gs;function u(e){const t={};return e.replace(c,"").split(a).forEach((e=>{if(e){const n=e.split(l);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function h(e){let t="";if(M(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=h(e[n]);r&&(t+=r+" ")}else if(U(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const d="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",f=r(d);function p(e){return!!e||""===e}function g(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=m(e[r],t[r]);return n}function m(e,t){if(e===t)return!0;let n=P(e),r=P(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=F(e),r=F(t),n||r)return e===t;if(n=R(e),r=R(t),n||r)return!(!n||!r)&&g(e,t);if(n=U(e),r=U(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const n in e){const r=e.hasOwnProperty(n),s=t.hasOwnProperty(n);if(r&&!s||!r&&s||!m(e[n],t[n]))return!1}}return String(e)===String(t)}function v(e,t){return e.findIndex((e=>m(e,t)))}const y=e=>M(e)?e:null==e?"":R(e)||U(e)&&(e.toString===V||!L(e.toString))?JSON.stringify(e,w,2):String(e),w=(e,t)=>t&&t.__v_isRef?w(e,t.value):N(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:D(t)?{[`Set(${t.size})`]:[...t.values()]}:!U(t)||R(t)||q(t)?t:String(t),b={},_=[],E=()=>{},T=()=>!1,S=/^on[^a-z]/,C=e=>S.test(e),I=e=>e.startsWith("onUpdate:"),k=Object.assign,x=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},A=Object.prototype.hasOwnProperty,O=(e,t)=>A.call(e,t),R=Array.isArray,N=e=>"[object Map]"===j(e),D=e=>"[object Set]"===j(e),P=e=>"[object Date]"===j(e),L=e=>"function"===typeof e,M=e=>"string"===typeof e,F=e=>"symbol"===typeof e,U=e=>null!==e&&"object"===typeof e,$=e=>U(e)&&L(e.then)&&L(e.catch),V=Object.prototype.toString,j=e=>V.call(e),B=e=>j(e).slice(8,-1),q=e=>"[object Object]"===j(e),z=e=>M(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,G=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),H=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},W=/-(\w)/g,K=H((e=>e.replace(W,((e,t)=>t?t.toUpperCase():"")))),J=/\B([A-Z])/g,Q=H((e=>e.replace(J,"-$1").toLowerCase())),X=H((e=>e.charAt(0).toUpperCase()+e.slice(1))),Y=H((e=>e?`on${X(e)}`:"")),Z=(e,t)=>!Object.is(e,t),ee=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},te=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ne=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let re;const se=()=>re||(re="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},89:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n}},65:function(e,t,n){"use strict";n.d(t,{MT:function(){return ee}});n(7658),n(541);var r=n(3396),s=n(4870);function i(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,l="devtools-plugin:setup",c="plugin:settings:set";let u,h;function d(){var e;return void 0!==u||("undefined"!==typeof window&&window.performance?(u=!0,h=window.performance):"undefined"!==typeof n.g&&(null===(e=n.g.perf_hooks)||void 0===e?void 0:e.performance)?(u=!0,h=n.g.perf_hooks.performance):u=!1),u}function f(){return d()?h.now():Date.now()}class p{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const o in e.settings){const t=e.settings[o];n[o]=t.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let s=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(s,t)}catch(i){}this.fallbacks={getSettings(){return s},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(i){}s=e},now(){return f()}},t&&t.on(c,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function g(e,t){const n=e,r=o(),s=i(),c=a&&n.enableEarlyProxy;if(!s||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&c){const e=c?new p(n,s):null,i=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else s.emit(l,e,t)}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var m="store";function v(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function y(e){return null!==e&&"object"===typeof e}function w(e){return e&&"function"===typeof e.then}function b(e,t){return function(){return e(t)}}function _(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function E(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;S(e,n,[],e._modules.root,!0),T(e,n,t)}function T(e,t,n){var i=e._state,o=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var a=e._wrappedGetters,l={},c={},u=(0,s.B)(!0);u.run((function(){v(a,(function(t,n){l[n]=b(t,e),c[n]=(0,r.Fl)((function(){return l[n]()})),Object.defineProperty(e.getters,n,{get:function(){return c[n].value},enumerable:!0})}))})),e._state=(0,s.qj)({data:t}),e._scope=u,e.strict&&O(e),i&&n&&e._withCommit((function(){i.data=null})),o&&o.stop()}function S(e,t,n,r,s){var i=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!i&&!s){var a=R(t,n.slice(0,-1)),l=n[n.length-1];e._withCommit((function(){a[l]=r.state}))}var c=r.context=C(e,o,n);r.forEachMutation((function(t,n){var r=o+n;k(e,r,t,c)})),r.forEachAction((function(t,n){var r=t.root?n:o+n,s=t.handler||t;x(e,r,s,c)})),r.forEachGetter((function(t,n){var r=o+n;A(e,r,t,c)})),r.forEachChild((function(r,i){S(e,t,n.concat(i),r,s)}))}function C(e,t,n){var r=""===t,s={dispatch:r?e.dispatch:function(n,r,s){var i=N(n,r,s),o=i.payload,a=i.options,l=i.type;return a&&a.root||(l=t+l),e.dispatch(l,o)},commit:r?e.commit:function(n,r,s){var i=N(n,r,s),o=i.payload,a=i.options,l=i.type;a&&a.root||(l=t+l),e.commit(l,o,a)}};return Object.defineProperties(s,{getters:{get:r?function(){return e.getters}:function(){return I(e,t)}},state:{get:function(){return R(e.state,n)}}}),s}function I(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(s){if(s.slice(0,r)===t){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return e.getters[s]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function k(e,t,n,r){var s=e._mutations[t]||(e._mutations[t]=[]);s.push((function(t){n.call(e,r.state,t)}))}function x(e,t,n,r){var s=e._actions[t]||(e._actions[t]=[]);s.push((function(t){var s=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return w(s)||(s=Promise.resolve(s)),e._devtoolHook?s.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):s}))}function A(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)})}function O(e){(0,r.YP)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function R(e,t){return t.reduce((function(e,t){return e[t]}),e)}function N(e,t,n){return y(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var D="vuex bindings",P="vuex:mutations",L="vuex:actions",M="vuex",F=0;function U(e,t){g({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[D]},(function(n){n.addTimelineLayer({id:P,label:"Vuex Mutations",color:$}),n.addTimelineLayer({id:L,label:"Vuex Actions",color:$}),n.addInspector({id:M,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===M)if(n.filter){var r=[];G(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[z(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===M){var r=n.nodeId;I(t,r),n.state=H(K(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===M){var r=n.nodeId,s=n.path;"root"!==r&&(s=r.split("/").filter(Boolean).concat(s)),t._withCommit((function(){n.set(t._state.data,s,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(M),n.sendInspectorState(M),n.addTimelineEvent({layerId:P,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=F++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:L,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},s=Date.now()-e._time;r.duration={_custom:{type:"duration",display:s+"ms",tooltip:"Action duration",value:s}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:L,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var $=8702998,V=6710886,j=16777215,B={label:"namespaced",textColor:j,backgroundColor:V};function q(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function z(e,t){return{id:t||"root",label:q(t),tags:e.namespaced?[B]:[],children:Object.keys(e._children).map((function(n){return z(e._children[n],t+n+"/")}))}}function G(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[B]:[]}),Object.keys(t._children).forEach((function(s){G(e,t._children[s],n,r+s+"/")}))}function H(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),s={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var i=W(t);s.getters=Object.keys(i).map((function(e){return{key:e.endsWith("/")?q(e):e,editable:!1,value:J((function(){return i[e]}))}}))}return s}function W(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var s=t,i=r.pop();r.forEach((function(e){s[e]||(s[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),s=s[e]._custom.value})),s[i]=J((function(){return e[n]}))}else t[n]=J((function(){return e[n]}))})),t}function K(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,s){var i=e[r];if(!i)throw new Error('Missing module "'+r+'" for path "'+t+'".');return s===n.length-1?i:i._children}),"root"===t?e:e.root._children)}function J(e){try{return e()}catch(t){return t}}var Q=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},X={namespaced:{configurable:!0}};X.namespaced.get=function(){return!!this._rawModule.namespaced},Q.prototype.addChild=function(e,t){this._children[e]=t},Q.prototype.removeChild=function(e){delete this._children[e]},Q.prototype.getChild=function(e){return this._children[e]},Q.prototype.hasChild=function(e){return e in this._children},Q.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},Q.prototype.forEachChild=function(e){v(this._children,e)},Q.prototype.forEachGetter=function(e){this._rawModule.getters&&v(this._rawModule.getters,e)},Q.prototype.forEachAction=function(e){this._rawModule.actions&&v(this._rawModule.actions,e)},Q.prototype.forEachMutation=function(e){this._rawModule.mutations&&v(this._rawModule.mutations,e)},Object.defineProperties(Q.prototype,X);var Y=function(e){this.register([],e,!1)};function Z(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void 0;Z(e.concat(r),t.getChild(r),n.modules[r])}}Y.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},Y.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},Y.prototype.update=function(e){Z([],this.root,e)},Y.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var s=new Q(t,n);if(0===e.length)this.root=s;else{var i=this.get(e.slice(0,-1));i.addChild(e[e.length-1],s)}t.modules&&v(t.modules,(function(t,s){r.register(e.concat(s),t,n)}))},Y.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},Y.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};function ee(e){return new te(e)}var te=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Y(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=s;var i=this,o=this,a=o.dispatch,l=o.commit;this.dispatch=function(e,t){return a.call(i,e,t)},this.commit=function(e,t,n){return l.call(i,e,t,n)},this.strict=r;var c=this._modules.root.state;S(this,c,[],this._modules.root),T(this,c),n.forEach((function(e){return e(t)}))},ne={state:{configurable:!0}};te.prototype.install=function(e,t){e.provide(t||m,this),e.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&U(e,this)},ne.state.get=function(){return this._state.data},ne.state.set=function(e){0},te.prototype.commit=function(e,t,n){var r=this,s=N(e,t,n),i=s.type,o=s.payload,a=(s.options,{type:i,payload:o}),l=this._mutations[i];l&&(this._withCommit((function(){l.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},te.prototype.dispatch=function(e,t){var n=this,r=N(e,t),s=r.type,i=r.payload,o={type:s,payload:i},a=this._actions[s];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(c){0}var l=a.length>1?Promise.all(a.map((function(e){return e(i)}))):a[0](i);return new Promise((function(e,t){l.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(c){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(c){0}t(e)}))}))}},te.prototype.subscribe=function(e,t){return _(e,this._subscribers,t)},te.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return _(n,this._actionSubscribers,t)},te.prototype.watch=function(e,t,n){var s=this;return(0,r.YP)((function(){return e(s.state,s.getters)}),t,Object.assign({},n))},te.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},te.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),S(this,this.state,e,this._modules.get(e),n.preserveState),T(this,this.state)},te.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=R(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),E(this)},te.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},te.prototype.hotUpdate=function(e){this._modules.update(e),E(this,!0)},te.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(te.prototype,ne);ie((function(e,t){var n={};return re(t).forEach((function(t){var r=t.key,s=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=oe(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof s?s.call(this,t,n):t[s]},n[r].vuex=!0})),n})),ie((function(e,t){var n={};return re(t).forEach((function(t){var r=t.key,s=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var i=oe(this.$store,"mapMutations",e);if(!i)return;r=i.context.commit}return"function"===typeof s?s.apply(this,[r].concat(t)):r.apply(this.$store,[s].concat(t))}})),n})),ie((function(e,t){var n={};return re(t).forEach((function(t){var r=t.key,s=t.val;s=e+s,n[r]=function(){if(!e||oe(this.$store,"mapGetters",e))return this.$store.getters[s]},n[r].vuex=!0})),n})),ie((function(e,t){var n={};return re(t).forEach((function(t){var r=t.key,s=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var i=oe(this.$store,"mapActions",e);if(!i)return;r=i.context.dispatch}return"function"===typeof s?s.apply(this,[r].concat(t)):r.apply(this.$store,[s].concat(t))}})),n}));function re(e){return se(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function se(e){return Array.isArray(e)||y(e)}function ie(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function oe(e,t,n){var r=e._modulesNamespaceMap[n];return r}},7077:function(e,t,n){"use strict";n.d(t,{Jn:function(){return ge},qX:function(){return he},Xd:function(){return ue},Mq:function(){return ve},ZF:function(){return me},KN:function(){return ye}});n(7658);var r=n(7142),s=n(5168),i=n(223);n(2801);const o=(e,t)=>t.some((t=>e instanceof t));let a,l;function c(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{t(E(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),g.set(t,e),t}function v(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)}));d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function w(e){y=e(y)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(T(this),t),E(h.get(this))}:function(...t){return E(e.apply(T(this),t))}:function(t,...n){const r=e.call(T(this),t,...n);return f.set(r,t.sort?t.sort():[t]),E(r)}}function _(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&v(e),o(e,c())?new Proxy(e,y):e)}function E(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=_(e);return t!==e&&(p.set(e,t),g.set(t,e)),t}const T=e=>g.get(e);function S(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=E(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(E(o.result),e.oldVersion,e.newVersion,E(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{i&&e.addEventListener("close",(()=>i())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const C=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],k=new Map;function x(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(k.get(t))return k.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!C.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&i.done]))[0]};return k.set(t,i),i}w((e=>({...e,get:(t,n,r)=>x(t,n)||e.get(t,n,r),has:(t,n)=>!!x(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(O(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function O(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const R="@firebase/app",N="0.9.0",D=new s.Yd("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",U="@firebase/app-check",$="@firebase/auth",V="@firebase/auth-compat",j="@firebase/database",B="@firebase/database-compat",q="@firebase/functions",z="@firebase/functions-compat",G="@firebase/installations",H="@firebase/installations-compat",W="@firebase/messaging",K="@firebase/messaging-compat",J="@firebase/performance",Q="@firebase/performance-compat",X="@firebase/remote-config",Y="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",se="9.15.0",ie="[DEFAULT]",oe={[R]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[U]:"fire-app-check",[F]:"fire-app-check-compat",[$]:"fire-auth",[V]:"fire-auth-compat",[j]:"fire-rtdb",[B]:"fire-rtdb-compat",[q]:"fire-fn",[z]:"fire-fn-compat",[G]:"fire-iid",[H]:"fire-iid-compat",[W]:"fire-fcm",[K]:"fire-fcm-compat",[J]:"fire-perf",[Q]:"fire-perf-compat",[X]:"fire-rc",[Y]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,le=new Map;function ce(e,t){try{e.container.addComponent(t)}catch(n){D.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ue(e){const t=e.name;if(le.has(t))return D.debug(`There were multiple attempts to register component ${t}.`),!1;le.set(t,e);for(const n of ae.values())ce(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new i.LL("app","Firebase",de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge=se;function me(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const s=Object.assign({name:ie,automaticDataCollectionEnabled:!1},t),o=s.name;if("string"!==typeof o||!o)throw fe.create("bad-app-name",{appName:String(o)});if(n||(n=(0,i.aH)()),!n)throw fe.create("no-options");const a=ae.get(o);if(a){if((0,i.vZ)(n,a.options)&&(0,i.vZ)(s,a.config))return a;throw fe.create("duplicate-app",{appName:o})}const l=new r.H0(o);for(const r of le.values())l.addComponent(r);const c=new pe(n,s,l);return ae.set(o,c),c}function ve(e=ie){const t=ae.get(e);if(!t&&e===ie)return me();if(!t)throw fe.create("no-app",{appName:e});return t}function ye(e,t,n){var s;let i=null!==(s=oe[e])&&void 0!==s?s:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void D.warn(e.join(" "))}ue(new r.wA(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const we="firebase-heartbeat-database",be=1,_e="firebase-heartbeat-store";let Ee=null;function Te(){return Ee||(Ee=S(we,be,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(_e)}}}).catch((e=>{throw fe.create("idb-open",{originalErrorMessage:e.message})}))),Ee}async function Se(e){try{const t=await Te();return t.transaction(_e).objectStore(_e).get(Ie(e))}catch(t){if(t instanceof i.ZR)D.warn(t.message);else{const e=fe.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});D.warn(e.message)}}}async function Ce(e,t){try{const n=await Te(),r=n.transaction(_e,"readwrite"),s=r.objectStore(_e);return await s.put(t,Ie(e)),r.done}catch(n){if(n instanceof i.ZR)D.warn(n.message);else{const e=fe.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});D.warn(e.message)}}}function Ie(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=1024,xe=2592e6;class Ae{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ne(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Oe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=xe})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Oe(),{heartbeatsToSend:t,unsentEntries:n}=Re(this._heartbeatsCache.heartbeats),r=(0,i.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Oe(){const e=new Date;return e.toISOString().substring(0,10)}function Re(e,t=ke){const n=[];let r=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),De(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),De(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ne{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Se(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ce(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ce(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function De(e){return(0,i.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(e){ue(new r.wA("platform-logger",(e=>new A(e)),"PRIVATE")),ue(new r.wA("heartbeat",(e=>new Ae(e)),"PRIVATE")),ye(R,N,e),ye(R,N,"esm2017"),ye("fire-js","")}Pe("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return c},wA:function(){return s}});var r=n(223);class s{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(l(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(s);n===e&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===i?void 0:e}function l(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Yd:function(){return c},in:function(){return s}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var s;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(s||(s={}));const i={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),s=a[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${r}]  ${e.name}:`,...n)};class c{constructor(e){this.name=e,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in s))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...e),this._logHandler(this,s.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...e),this._logHandler(this,s.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,s.INFO,...e),this._logHandler(this,s.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,s.WARN,...e),this._logHandler(this,s.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...e),this._logHandler(this,s.ERROR,...e)}}},7795:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(7077),s="firebase",i="9.15.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(s,i,"app")},9125:function(e,t,n){"use strict";n.d(t,{aT:function(){return Ot},Xb:function(){return ft},v0:function(){return Er},Aj:function(){return yt},Fb:function(){return gt},e5:function(){return pt},w7:function(){return wt}});n(7658);var r=n(223),s=n(7077),i=n(5168);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n}Object.create;Object.create;var a=n(7142);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=l,u=new r.LL("auth","Firebase",l()),h=new i.Yd("@firebase/auth");function d(e,...t){h.logLevel<=i["in"].ERROR&&h.error(`Auth (${s.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw m(e,...t)}function p(e,...t){return m(e,...t)}function g(e,t,n){const s=Object.assign(Object.assign({},c()),{[t]:n}),i=new r.LL("auth","Firebase",s);return i.create(t,{appName:e.name})}function m(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function v(e,t,...n){if(!e)throw m(t,...n)}function y(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function w(e,t){e||y(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function _(e){w(e instanceof Function,"Expected a class definition");let t=b.get(e);return t?(w(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,b.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){const n=(0,s.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),s=n.getOptions();if((0,r.vZ)(s,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const i=n.initialize({options:t});return i}function T(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function C(){return"http:"===I()||"https:"===I()}function I(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(C()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function x(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,t){this.shortDelay=e,this.longDelay=t,w(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return k()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){w(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},D=new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,s,i={}){return M(e,i,(async()=>{let i={},o={};s&&("GET"===t?o=s:i={body:JSON.stringify(s)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),R.fetch()(U(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},i))}))}async function M(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},N),t);try{const t=new $(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw V(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw V(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw V(e,"user-disabled",i);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(e,a,o);f(e,a)}}catch(i){if(i instanceof r.ZR)throw i;f(e,"network-request-failed")}}async function F(e,t,n,r,s={}){const i=await L(e,t,n,r,s);return"mfaPendingCredential"in i&&f(e,"multi-factor-auth-required",{_serverResponse:i}),i}function U(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?O(e.config,s):`${e.config.apiScheme}://${s}`}class ${constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),D.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=p(e,t,r);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j(e,t){return L(e,"POST","/v1/accounts:delete",t)}async function B(e,t){return L(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t=!1){const n=(0,r.m9)(e),s=await n.getIdToken(t),i=H(s);v(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"===typeof i.firebase?i.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:i,token:s,authTime:q(G(i.auth_time)),issuedAtTime:q(G(i.iat)),expirationTime:q(G(i.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function G(e){return 1e3*Number(e)}function H(e){const[t,n,s]=e.split(".");if(void 0===t||void 0===n||void 0===s)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(i){return d("Caught error parsing JWT payload as JSON",null===i||void 0===i?void 0:i.toString()),null}}function W(e){const t=H(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof r.ZR&&J(s)&&e.auth.currentUser===e&&await e.auth.signOut(),s}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e){var t;const n=e.auth,r=await e.getIdToken(),s=await K(e,B(n,{idToken:r}));v(null===s||void 0===s?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?te(i.providerUserInfo):[],a=ee(e.providerData,o),l=e.isAnonymous,c=!(e.email&&i.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!l&&c,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new X(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function Z(e){const t=(0,r.m9)(e);await Y(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await M(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=U(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",R.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):W(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:s}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:s}=t,i=new re;return n&&(v("string"===typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:e}),i.accessToken=r),s&&(v("number"===typeof s,"internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ie{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,s=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new X(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return z(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ie(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Y(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,j(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,s,i,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,f=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:w,emailVerified:b,isAnonymous:_,providerData:E,stsTokenManager:T}=t;v(w&&T,e,"internal-error");const S=re.fromJSON(this.name,T);v("string"===typeof w,e,"internal-error"),se(u,e.name),se(h,e.name),v("boolean"===typeof b,e,"internal-error"),v("boolean"===typeof _,e,"internal-error"),se(d,e.name),se(f,e.name),se(p,e.name),se(g,e.name),se(m,e.name),se(y,e.name);const C=new ie({uid:w,auth:e,email:h,emailVerified:b,displayName:u,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(C.providerData=E.map((e=>Object.assign({},e)))),g&&(C._redirectEventId=g),C}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const s=new ie({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Y(s),s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oe.type="NONE";const ae=oe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t,n){return`firebase:${e}:${t}:${n}`}class ce{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=le(this.userKey,r.apiKey,s),this.fullPersistenceKey=le("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ie._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ce(_(ae),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=r[0]||_(ae);const i=le(n,e.config.apiKey,e.name);let o=null;for(const c of t)try{const t=await c._get(i);if(t){const n=ie._fromJSON(e,t);c!==s&&(o=n),s=c;break}}catch(l){}const a=r.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(i,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(i)}catch(l){}}))),new ce(s,e,n)):new ce(s,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ve(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(ge(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function he(e=(0,r.z$)()){return/firefox\//i.test(e)}function de(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=(0,r.z$)()){return/crios\//i.test(e)}function pe(e=(0,r.z$)()){return/iemobile/i.test(e)}function ge(e=(0,r.z$)()){return/android/i.test(e)}function me(e=(0,r.z$)()){return/blackberry/i.test(e)}function ve(e=(0,r.z$)()){return/webos/i.test(e)}function ye(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function we(e=(0,r.z$)()){var t;return ye(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function be(){return(0,r.w1)()&&10===document.documentMode}function _e(e=(0,r.z$)()){return ye(e)||ge(e)||ve(e)||me(e)||/windows phone/i.test(e)||pe(e)}function Ee(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e,t=[]){let n;switch(e){case"Browser":n=ue((0,r.z$)());break;case"Worker":n=`${ue((0,r.z$)())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.Jn}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(s){r(s)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ke(this),this.idTokenSubscription=new ke(this),this.beforeStateQueue=new Se(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ce.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(s){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==i||!(null===o||void 0===o?void 0:o.user)||(r=o.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(i)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Y(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(_(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await ce.create(this,[_(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const s="function"===typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return v(i,this,"internal-error"),i.then((()=>s(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Te(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Ie(e){return(0,r.m9)(e)}class ke{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function xe(e,t,n){const r=Ie(e);v(r._canInitEmulator,r,"emulator-config-failed"),v(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(null===n||void 0===n?void 0:n.disableWarnings),i=Ae(t),{host:o,port:a}=Oe(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Ne()}function Ae(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Oe(e){const t=Ae(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const e=s[1];return{host:e,port:Re(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Re(t)}}}function Re(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ne(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(e,t){return L(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Le(e,t){return F(e,"POST","/v1/accounts:signInWithPassword",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Me(e,t){return F(e,"POST","/v1/accounts:signInWithEmailLink",P(e,t))}async function Fe(e,t){return F(e,"POST","/v1/accounts:signInWithEmailLink",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends De{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ue(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ue(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Le(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Me(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Pe(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Fe(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(e,t){return F(e,"POST","/v1/accounts:signInWithIdp",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="http://localhost";class je extends De{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new je(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,s=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const i=new je(n,r);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(e){const t=this.buildRequest();return $e(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,$e(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$e(e,t)}buildRequest(){const e={requestUri:Ve,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",P(e,t))}async function qe(e,t){return F(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,t))}async function ze(e,t){const n=await F(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,t));if(n.temporaryProof)throw V(e,"account-exists-with-different-credential",n);return n}const Ge={["USER_NOT_FOUND"]:"user-not-found"};async function He(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return F(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,n),Ge)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends De{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new We({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new We({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return qe(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ze(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return He(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:s}=e;return n||t||r||s?new We({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:s}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Je(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,s=(0,r.zd)((0,r.pd)(e))["deep_link_id"],i=s?(0,r.zd)((0,r.pd)(s))["link"]:null;return i||s||n||t||e}class Qe{constructor(e){var t,n,s,i,o,a;const l=(0,r.zd)((0,r.pd)(e)),c=null!==(t=l["apiKey"])&&void 0!==t?t:null,u=null!==(n=l["oobCode"])&&void 0!==n?n:null,h=Ke(null!==(s=l["mode"])&&void 0!==s?s:null);v(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(i=l["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(o=l["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=l["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Je(e);try{return new Qe(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe{constructor(){this.providerId=Xe.PROVIDER_ID}static credential(e,t){return Ue._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Qe.parseLink(t);return v(n,"argument-error"),Ue._fromEmailAndCode(e,n.code,n.tenantId)}}Xe.PROVIDER_ID="password",Xe.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Xe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze extends Ye{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et extends Ze{constructor(){super("facebook.com")}static credential(e){return je._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return et.credential(e.oauthAccessToken)}catch(t){return null}}}et.FACEBOOK_SIGN_IN_METHOD="facebook.com",et.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends Ze{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return je._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return tt.credential(t,n)}catch(r){return null}}}tt.GOOGLE_SIGN_IN_METHOD="google.com",tt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt extends Ze{constructor(){super("github.com")}static credential(e){return je._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch(t){return null}}}nt.GITHUB_SIGN_IN_METHOD="github.com",nt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt extends Ze{constructor(){super("twitter.com")}static credential(e,t){return je._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return rt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function st(e,t){return F(e,"POST","/v1/accounts:signUp",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rt.TWITTER_SIGN_IN_METHOD="twitter.com",rt.PROVIDER_ID="twitter.com";class it{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const s=await ie._fromIdTokenResponse(e,n,r),i=ot(n),o=new it({user:s,providerId:i,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=ot(n);return new it({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function ot(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class at extends r.ZR{constructor(e,t,n,r){var s;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,at.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new at(e,t,n,r)}}function lt(e,t,n,r){const s="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return s.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw at._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(e,t,n=!1){const r=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return it._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ut(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const i=await K(e,lt(r,s,t,e),n);v(i.idToken,r,"internal-error");const o=H(i.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(e.uid===a,r,"user-mismatch"),it._forOperation(e,s,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&f(r,"user-mismatch"),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ht(e,t,n=!1){const r="signIn",s=await lt(e,r,t),i=await it._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function dt(e,t){return ht(Ie(e),t)}async function ft(e,t,n){const r=Ie(e),s=await st(r,{returnSecureToken:!0,email:t,password:n}),i=await it._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function pt(e,t,n){return dt((0,r.m9)(e),Xe.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gt(e,t){return(0,r.m9)(e).setPersistence(t)}function mt(e,t,n,s){return(0,r.m9)(e).onIdTokenChanged(t,n,s)}function vt(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}function yt(e,t,n,s){return(0,r.m9)(e).onAuthStateChanged(t,n,s)}function wt(e){return(0,r.m9)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",P(e,t))}function _t(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",P(e,t))}new WeakMap;const Et="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Et,"1"),this.storage.removeItem(Et),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){const e=(0,r.z$)();return de(e)||ye(e)}const Ct=1e3,It=10;class kt extends Tt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=St()&&Ee(),this.fallbackToPolling=_e(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);be()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,It):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Ct)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}kt.type="LOCAL";const xt=kt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Tt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}At.type="SESSION";const Ot=At;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Nt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:s}=t.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map((async e=>e(t.origin,s))),a=await Rt(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt.receivers=[];class Pt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise(((o,a)=>{const l=Dt("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return window}function Mt(e){Lt().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return"undefined"!==typeof Lt()["WorkerGlobalScope"]&&"function"===typeof Lt()["importScripts"]}async function Ut(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function $t(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Vt(){return Ft()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="firebaseLocalStorageDb",Bt=1,qt="firebaseLocalStorage",zt="fbase_key";class Gt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Ht(e,t){return e.transaction([qt],t?"readwrite":"readonly").objectStore(qt)}function Wt(){const e=indexedDB.deleteDatabase(jt);return new Gt(e).toPromise()}function Kt(){const e=indexedDB.open(jt,Bt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(qt,{keyPath:zt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(qt)?t(n):(n.close(),await Wt(),t(await Kt()))}))}))}async function Jt(e,t,n){const r=Ht(e,!0).put({[zt]:t,value:n});return new Gt(r).toPromise()}async function Qt(e,t){const n=Ht(e,!1).get(t),r=await new Gt(n).toPromise();return void 0===r?null:r.value}function Xt(e,t){const n=Ht(e,!0).delete(t);return new Gt(n).toPromise()}const Yt=800,Zt=3;class en{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Kt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Zt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ft()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nt._getInstance(Vt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ut(),!this.activeServiceWorker)return;this.sender=new Pt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&$t()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kt();return await Jt(e,Et,"1"),await Xt(e,Et),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Jt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Qt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Xt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Ht(e,!1).getAll();return new Gt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:s}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Yt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}en.type="LOCAL";const tn=en;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",P(e,t))}function rn(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sn(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function on(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",sn().appendChild(r)}))}function an(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
an("rcb"),new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ln="recaptcha";async function cn(e,t,n){var r;const s=await n.verify();try{let i;if(v("string"===typeof s,e,"argument-error"),v(n.type===ln,e,"argument-error"),i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){v("enroll"===t.type,e,"internal-error");const n=await bt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;v(n,e,"missing-multi-factor-info");const o=await nn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Be(e,{phoneNumber:i.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class un{constructor(e){this.providerId=un.PROVIDER_ID,this.auth=Ie(e)}verifyPhoneNumber(e,t){return cn(this.auth,e,(0,r.m9)(t))}static credential(e,t){return We._fromVerification(e,t)}static credentialFromResult(e){const t=e;return un.credentialFromTaggedObject(t)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?We._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hn(e,t){return t?_(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */un.PROVIDER_ID="phone",un.PHONE_SIGN_IN_METHOD="phone";class dn extends De{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $e(e,this._buildIdpRequest())}_linkToIdToken(e,t){return $e(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return $e(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function fn(e){return ht(e.auth,new dn(e),e.bypassAuthState)}function pn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),ut(n,new dn(e),e.bypassAuthState)}async function gn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),ct(n,new dn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t,n,r,s=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:s,error:i,type:o}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fn;case"linkViaPopup":case"linkViaRedirect":return gn;case"reauthViaPopup":case"reauthViaRedirect":return pn;default:f(this.auth,"internal-error")}}resolve(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new A(2e3,1e4);class yn extends mn{constructor(e,t,n,r,s){super(e,t,r,s),this.provider=n,this.authWindow=null,this.pollId=null,yn.currentPopupAction&&yn.currentPopupAction.cancel(),yn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const e=Dt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,vn.get())};e()}}yn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wn="pendingRedirect",bn=new Map;class _n extends mn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=bn.get(this.auth._key());if(!e){try{const t=await En(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}bn.set(this.auth._key(),e)}return this.bypassAuthState||bn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function En(e,t){const n=Cn(t),r=Sn(e);if(!await r._isAvailable())return!1;const s="true"===await r._get(n);return await r._remove(n),s}function Tn(e,t){bn.set(e._key(),t)}function Sn(e){return _(e._redirectPersistence)}function Cn(e){return le(wn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(e,t,n=!1){const r=Ie(e),s=hn(r,t),i=new _n(r,s,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kn=6e5;class xn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Rn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!On(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kn&&this.cachedEventUids.clear(),this.cachedEventUids.has(An(e))}saveEventToCache(e){this.cachedEventUids.add(An(e)),this.lastProcessedEventTime=Date.now()}}function An(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function On({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Rn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return On(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nn(e,t={}){return L(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pn=/^https?/;async function Ln(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Nn(e);for(const r of t)try{if(Mn(r))return}catch(n){}f(e,"unauthorized-domain")}function Mn(e){const t=S(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!Pn.test(n))return!1;if(Dn.test(e))return r===e;const s=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+s+"|"+s+")$","i");return i.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new A(3e4,6e4);function Un(){const e=Lt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function $n(e){return new Promise(((t,n)=>{var r,s,i;function o(){Un(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Un(),n(p(e,"network-request-failed"))},timeout:Fn.get()})}if(null===(s=null===(r=Lt().gapi)||void 0===r?void 0:r.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=Lt().gapi)||void 0===i?void 0:i.load)){const t=an("iframefcb");return Lt()[t]=()=>{gapi.load?o():n(p(e,"network-request-failed"))},on(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Vn=null,e}))}let Vn=null;function jn(e){return Vn=Vn||$n(e),Vn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new A(5e3,15e3),qn="__/auth/iframe",zn="emulator/auth/iframe",Gn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wn(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?O(t,zn):`https://${e.config.authDomain}/${qn}`,i={apiKey:t.apiKey,appName:e.name,v:s.Jn},o=Hn.get(e.config.apiHost);o&&(i.eid=o);const a=e._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${(0,r.xO)(i).slice(1)}`}async function Kn(e){const t=await jn(e),n=Lt().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:Wn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const s=p(e,"network-request-failed"),i=Lt().setTimeout((()=>{r(s)}),Bn.get());function o(){Lt().clearTimeout(i),n(t)}t.ping(o).then(o,(()=>{r(s)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qn=500,Xn=600,Yn="_blank",Zn="http://localhost";class er{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function tr(e,t,n,s=Qn,i=Xn){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Jn),{width:s.toString(),height:i.toString(),top:o,left:a}),u=(0,r.z$)().toLowerCase();n&&(l=fe(u)?Yn:n),he(u)&&(t=t||Zn,c.scrollbars="yes");const h=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(we(u)&&"_self"!==l)return nr(t||"",l),new er(null);const d=window.open(t||"",l,h);v(d,e,"popup-blocked");try{d.focus()}catch(f){}return new er(d)}function nr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr="__/auth/handler",sr="emulator/auth/handler";function ir(e,t,n,i,o,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:s.Jn,eventId:o};if(t instanceof Ye){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof Ze){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const r of Object.keys(c))void 0===c[r]&&delete c[r];return`${or(e)}?${(0,r.xO)(c).slice(1)}`}function or({config:e}){return e.emulator?O(e,sr):`https://${e.authDomain}/${rr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar="webStorageSupport";class lr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ot,this._completeRedirectFn=In,this._overrideRedirectResult=Tn}async _openPopup(e,t,n,r){var s;w(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");const i=ir(e,t,n,S(),r);return tr(e,i,Dt())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Mt(ir(e,t,n,S(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Kn(e),n=new xn(e);return t.register("authEvent",(t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(ar,{type:ar},(n=>{var r;const s=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[ar];void 0!==s&&t(!!s),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ln(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _e()||de()||ye()}}const cr=lr;class ur{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class hr extends ur{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new hr(e)}_finalizeEnroll(e,t,n){return _t(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return rn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class dr{constructor(){}static assertion(e){return hr._fromCredential(e)}}dr.FACTOR_ID="phone";var fr="@firebase/auth",pr="0.21.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vr(e){(0,s.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((t,r)=>{v(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const s={apiKey:i,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Te(e)},a=new Ce(t,r,s);return T(a,n),a})(r,s)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,s.Xd)(new a.wA("auth-internal",(e=>{const t=Ie(e.getProvider("auth").getImmediate());return(e=>new gr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.KN)(fr,pr,mr(e)),(0,s.KN)(fr,pr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=300,wr=(0,r.Pz)("authIdTokenMaxAge")||yr;let br=null;const _r=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wr)return;const s=null===n||void 0===n?void 0:n.token;br!==s&&(br=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Er(e=(0,s.Mq)()){const t=(0,s.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=E(e,{popupRedirectResolver:cr,persistence:[tn,xt,Ot]}),i=(0,r.Pz)("authTokenSyncURL");if(i){const e=_r(i);vt(n,e,(()=>e(n.currentUser))),mt(n,(t=>e(t)))}const o=(0,r.q4)("auth");return o&&xe(n,`http://${o}`),n}vr("Browser")},36:function(e,t,n){"use strict";n.d(t,{hJ:function(){return mu},oe:function(){return Ph},JU:function(){return vu},QT:function(){return Ah},PL:function(){return Rh},ad:function(){return Ou},b9:function(){return mh},vh:function(){return vh},Xo:function(){return ph},IO:function(){return uh},pl:function(){return Nh},r7:function(){return Dh}});n(7658),n(2801);var r,s=n(7077),i=n(7142),o=n(5168),a=n(223),l=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{}),c={},u=u||{},h=l||self;function d(){}function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function g(e){return Object.prototype.hasOwnProperty.call(e,m)&&e[m]||(e[m]=++v)}var m="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(e,t,n){return e.call.apply(e.bind,arguments)}function w(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function b(e,t,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:w,b.apply(null,arguments)}function _(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function E(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}function T(){this.s=this.s,this.o=this.o}var S=0;T.prototype.s=!1,T.prototype.na=function(){this.s||(this.s=!0,this.M(),0==S)||g(this)},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const C=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function I(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function k(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(f(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let s=0;s<r;s++)e[n+s]=t[s]}else e.push(t)}}function x(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",d,t),h.removeEventListener("test",d,t)}catch(n){}return e}();function O(e){return/^[\s\xa0]*$/.test(e)}var R=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function N(e,t){return e<t?-1:e>t?1:0}function D(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function P(e){return-1!=D().indexOf(e)}function L(e){return L[" "](e),e}function M(e){var t=J;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}L[" "]=d;var F,U=P("Opera"),$=P("Trident")||P("MSIE"),V=P("Edge"),j=V||$,B=P("Gecko")&&!(-1!=D().toLowerCase().indexOf("webkit")&&!P("Edge"))&&!(P("Trident")||P("MSIE"))&&!P("Edge"),q=-1!=D().toLowerCase().indexOf("webkit")&&!P("Edge");function z(){var e=h.document;return e?e.documentMode:void 0}e:{var G="",H=function(){var e=D();return B?/rv:([^\);]+)(\)|;)/.exec(e):V?/Edge\/([\d\.]+)/.exec(e):$?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):q?/WebKit\/(\S+)/.exec(e):U?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(H&&(G=H?H[1]:""),$){var W=z();if(null!=W&&W>parseFloat(G)){F=String(W);break e}}F=G}var K,J={};function Q(){return M((function(){let e=0;const t=R(String(F)).split("."),n=R("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var s=t[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;e=N(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||N(0==s[2].length,0==i[2].length)||N(s[2],i[2]),s=s[3],i=i[3]}while(0==e)}return 0<=e}))}if(h.document&&$){var X=z();K=X||(parseInt(F,10)||void 0)}else K=void 0;var Y=K;function Z(e,t){if(x.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(B){e:{try{L(t.nodeName);var s=!0;break e}catch(i){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.X.h.call(this)}}E(Z,x);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ne=0;function re(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=s,this.key=++ne,this.ba=this.ea=!1}function se(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ie(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function oe(e){const t={};for(const n in e)t[n]=e[n];return t}const ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function le(e,t){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)e[n]=r[n];for(let t=0;t<ae.length;t++)n=ae[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ce(e){this.src=e,this.g={},this.h=0}function ue(e,t){var n=t.type;if(n in e.g){var r,s=e.g[n],i=C(s,t);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(se(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function he(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.ba&&i.listener==t&&i.capture==!!n&&i.ha==r)return s}return-1}ce.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=he(e,t,r,s);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new re(t,this.src,i,!!r,s),t.ea=n,e.push(t)),t};var de="closure_lm_"+(1e6*Math.random()|0),fe={};function pe(e,t,n,r,s){if(r&&r.once)return ve(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)pe(e,t[i],n,r,s);return null}return n=Se(n),e&&e[te]?e.N(t,n,p(r)?!!r.capture:!!r,s):ge(e,t,n,!1,r,s)}function ge(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=p(s)?!!s.capture:!!s,a=Ee(e);if(a||(e[de]=a=new ce(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=me(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)A||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(be(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function me(){function e(n){return t.call(e.src,e.listener,n)}const t=_e;return e}function ve(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)ve(e,t[i],n,r,s);return null}return n=Se(n),e&&e[te]?e.O(t,n,p(r)?!!r.capture:!!r,s):ge(e,t,n,!0,r,s)}function ye(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)ye(e,t[i],n,r,s);else r=p(r)?!!r.capture:!!r,n=Se(n),e&&e[te]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=he(i,n,r,s),-1<n&&(se(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=Ee(e))&&(t=e.g[t.toString()],e=-1,t&&(e=he(t,n,r,s)),(n=-1<e?t[e]:null)&&we(n))}function we(e){if("number"!==typeof e&&e&&!e.ba){var t=e.src;if(t&&t[te])ue(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(be(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ee(t))?(ue(n,e),0==n.h&&(n.src=null,t[de]=null)):se(e)}}}function be(e){return e in fe?fe[e]:fe[e]="on"+e}function _e(e,t){if(e.ba)e=!0;else{t=new Z(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&we(e),e=n.call(r,t)}return e}function Ee(e){return e=e[de],e instanceof ce?e:null}var Te="__closure_events_fn_"+(1e9*Math.random()>>>0);function Se(e){return"function"===typeof e?e:(e[Te]||(e[Te]=function(t){return e.handleEvent(t)}),e[Te])}function Ce(){T.call(this),this.i=new ce(this),this.P=this,this.I=null}function Ie(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new x(t,e);else if(t instanceof x)t.target=t.target||e;else{var s=t;t=new x(r,e),le(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=ke(o,r,!0,t)&&s}if(o=t.g=e,s=ke(o,r,!0,t)&&s,s=ke(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=ke(o,r,!1,t)&&s}function ke(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&ue(e.i,o),s=!1!==a.call(l,r)&&s}}return s&&!r.defaultPrevented}E(Ce,T),Ce.prototype[te]=!0,Ce.prototype.removeEventListener=function(e,t,n,r){ye(this,e,t,n,r)},Ce.prototype.M=function(){if(Ce.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)se(n[r]);delete t.g[e],t.h--}}this.I=null},Ce.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ce.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var xe=h.JSON.stringify;function Ae(){var e=Ue;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Oe{constructor(){this.h=this.g=null}add(e,t){const n=Ne.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Re,Ne=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new De),(e=>e.reset()));class De{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Pe(e){h.setTimeout((()=>{throw e}),0)}function Le(e,t){Re||Me(),Fe||(Re(),Fe=!0),Ue.add(e,t)}function Me(){var e=h.Promise.resolve(void 0);Re=function(){e.then($e)}}var Fe=!1,Ue=new Oe;function $e(){for(var e;e=Ae();){try{e.h.call(e.g)}catch(n){Pe(n)}var t=Ne;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Fe=!1}function Ve(e,t){Ce.call(this),this.h=e||1,this.g=t||h,this.j=b(this.lb,this),this.l=Date.now()}function je(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Be(e,t,n){if("function"===typeof e)n&&(e=b(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=b(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function qe(e){e.g=Be((()=>{e.g=null,e.i&&(e.i=!1,qe(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}E(Ve,Ce),r=Ve.prototype,r.ca=!1,r.R=null,r.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ie(this,"tick"),this.ca&&(je(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Ve.X.M.call(this),je(this),delete this.g};class ze extends T{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:qe(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ge(e){T.call(this),this.h=e,this.g={}}E(Ge,T);var He=[];function We(e,t,n,r){Array.isArray(n)||(n&&(He[0]=n.toString()),n=He);for(var s=0;s<n.length;s++){var i=pe(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Ke(e){ie(e.g,(function(e,t){this.g.hasOwnProperty(t)&&we(e)}),e),e.g={}}function Je(){this.g=!0}function Qe(e,t,n,r,s,i){e.info((function(){if(e.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}function Xe(e,t,n,r,s,i,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+i+" "+o}))}function Ye(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+et(e,n)+(r?" "+r:"")}))}function Ze(e,t){e.info((function(){return"TIMEOUT: "+t}))}function et(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return xe(n)}catch(a){return t}}Ge.prototype.M=function(){Ge.X.M.call(this),Ke(this)},Ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Je.prototype.Aa=function(){this.g=!1},Je.prototype.info=function(){};var tt={},nt=null;function rt(){return nt=nt||new Ce}function st(e){x.call(this,tt.Pa,e)}function it(e){const t=rt();Ie(t,new st(t))}function ot(e,t){x.call(this,tt.STAT_EVENT,e),this.stat=t}function at(e){const t=rt();Ie(t,new ot(t,e))}function lt(e,t){x.call(this,tt.Qa,e),this.size=t}function ct(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}tt.Pa="serverreachability",E(st,x),tt.STAT_EVENT="statevent",E(ot,x),tt.Qa="timingevent",E(lt,x);var ut={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ht={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function dt(){}function ft(e){return e.h||(e.h=e.i())}function pt(){}dt.prototype.h=null;var gt,mt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function vt(){x.call(this,"d")}function yt(){x.call(this,"c")}function wt(){}function bt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Ge(this),this.O=Et,e=j?125:void 0,this.T=new Ve(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _t}function _t(){this.i=null,this.g="",this.h=!1}E(vt,x),E(yt,x),E(wt,dt),wt.prototype.g=function(){return new XMLHttpRequest},wt.prototype.i=function(){return{}},gt=new wt;var Et=45e3,Tt={},St={};function Ct(e,t,n){e.K=1,e.v=Wt(Bt(t)),e.s=n,e.P=!0,It(e,null)}function It(e,t){e.F=Date.now(),Ot(e),e.A=Bt(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),an(n.i,"t",r),e.C=0,n=e.l.H,e.h=new _t,e.g=hr(e.l,n?t:null,!e.s),0<e.N&&(e.L=new ze(b(e.La,e,e.g),e.N)),We(e.S,e.g,"readystatechange",e.ib),t=e.H?oe(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),it(),Qe(e.j,e.u,e.A,e.m,e.U,e.s)}function kt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function xt(e,t,n){let r,s=!0;for(;!e.I&&e.C<n.length;){if(r=At(e,n),r==St){4==t&&(e.o=4,at(14),s=!1),Ye(e.j,e.m,null,"[Incomplete Response]");break}if(r==Tt){e.o=4,at(15),Ye(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}Ye(e.j,e.m,r,null),Lt(e,r)}kt(e)&&r!=St&&r!=Tt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,at(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rr(t),t.K=!0,at(11))):(Ye(e.j,e.m,n,"[Invalid Chunked Response]"),Pt(e),Dt(e))}function At(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?St:(n=Number(t.substring(n,r)),isNaN(n)?Tt:(r+=1,r+n>t.length?St:(t=t.substr(r,n),e.C=r+n,t)))}function Ot(e){e.V=Date.now()+e.O,Rt(e,e.O)}function Rt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ct(b(e.gb,e),t)}function Nt(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function Dt(e){0==e.l.G||e.I||or(e.l,e)}function Pt(e){Nt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,je(e.T),Ke(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Lt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||gn(n.h,e)))if(!e.J&&gn(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(c){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;ir(n),Kn(n)}nr(n),at(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&0==n.A&&!n.v&&(n.v=ct(b(n.cb,n),6e3));if(1>=pn(n.h)&&n.ja){try{n.ja()}catch(c){}n.ja=void 0}}else lr(n,11)}else if((e.J||n.g==e)&&ir(n),!O(t))for(s=n.Fa.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const t=c[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const s=c[4];null!=s&&(n.Ca=s,n.j.info("SVER="+n.Ca));const u=c[5];null!=u&&"number"===typeof u&&0<u&&(r=1.5*u,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.h;i.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(mn(i,i.h),i.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,Ht(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=e;if(r.sa=ur(r,r.H?r.ka:null,r.V),o.J){vn(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Nt(a),Ot(a)),r.g=o}else tr(r);0<n.i.length&&Qn(n)}else"stop"!=c[0]&&"close"!=c[0]||lr(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?lr(n,7):Wn(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}it(4)}catch(c){}}function Mt(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Ft(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(f(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Ut(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Ft(e),r=Mt(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}r=bt.prototype,r.setTimeout=function(e){this.O=e},r.ib=function(e){e=e.target;const t=this.L;t&&3==jn(e)?t.l():this.La(e)},r.La=function(e){try{if(e==this.g)e:{const u=jn(this.g);var t=this.g.Ea();const d=this.g.aa();if(!(3>u)&&(3!=u||j||this.g&&(this.h.h||this.g.fa()||Bn(this.g)))){this.I||4!=u||7==t||it(8==t||0>=d?3:2),Nt(this);var n=this.g.aa();this.Y=n;t:if(kt(this)){var r=Bn(this.g);e="";var s=r.length,i=4==jn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Pt(this),Dt(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Xe(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(a)){var c=a;break t}}c=null}if(!(n=c)){this.i=!1,this.o=3,at(12),Pt(this),Dt(this);break e}Ye(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Lt(this,n)}this.P?(xt(this,u,o),j&&this.i&&3==u&&(We(this.S,this.T,"tick",this.hb),this.T.start())):(Ye(this.j,this.m,o,null),Lt(this,o)),4==u&&Pt(this),this.i&&!this.I&&(4==u?or(this.l,this):(this.i=!1,Ot(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),Pt(this),Dt(this)}}}catch(u){}},r.hb=function(){if(this.g){var e=jn(this.g),t=this.g.fa();this.C<t.length&&(Nt(this),xt(this,e,t),this.i&&4!=e&&Ot(this))}},r.cancel=function(){this.I=!0,Pt(this)},r.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Ze(this.j,this.A),2!=this.K&&(it(),at(17)),Pt(this),this.o=2,Dt(this)):Rt(this,this.V-e)};var $t=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function jt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof jt){this.h=void 0!==t?t:e.h,qt(this,e.j),this.s=e.s,this.g=e.g,zt(this,e.m),this.l=e.l,t=e.i;var n=new nn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Gt(this,n),this.o=e.o}else e&&(n=String(e).match($t))?(this.h=!!t,qt(this,n[1]||"",!0),this.s=Kt(n[2]||""),this.g=Kt(n[3]||"",!0),zt(this,n[4]),this.l=Kt(n[5]||"",!0),Gt(this,n[6]||"",!0),this.o=Kt(n[7]||"")):(this.h=!!t,this.i=new nn(null,this.h))}function Bt(e){return new jt(e)}function qt(e,t,n){e.j=n?Kt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function zt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Gt(e,t,n){t instanceof nn?(e.i=t,cn(e.i,e.h)):(n||(t=Jt(t,en)),e.i=new nn(t,e.h))}function Ht(e,t,n){e.i.set(t,n)}function Wt(e){return Ht(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Kt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Jt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Qt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Qt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}jt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Jt(t,Xt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Jt(t,Xt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Jt(n,"/"==n.charAt(0)?Zt:Yt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Jt(n,tn)),e.join("")};var Xt=/[#\/\?@]/g,Yt=/[#\?:]/g,Zt=/[#\?]/g,en=/[#\?@]/g,tn=/#/g;function nn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function rn(e){e.g||(e.g=new Map,e.h=0,e.i&&Vt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function sn(e,t){rn(e),t=ln(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function on(e,t){return rn(e),t=ln(e,t),e.g.has(t)}function an(e,t,n){sn(e,t),0<n.length&&(e.i=null,e.g.set(ln(e,t),I(n)),e.h+=n.length)}function ln(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function cn(e,t){t&&!e.j&&(rn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(sn(this,t),an(this,n,e))}),e)),e.j=t}r=nn.prototype,r.add=function(e,t){rn(this),this.i=null,e=ln(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){rn(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.oa=function(){rn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let e=0;e<s.length;e++)n.push(t[r])}return n},r.W=function(e){rn(this);let t=[];if("string"===typeof e)on(this,e)&&(t=t.concat(this.g.get(ln(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return rn(this),this.i=null,e=ln(this,e),on(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;""!==o[r]&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};var un=class{constructor(e,t){this.h=e,this.g=t}};function hn(e){this.l=e||dn,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dn=10;function fn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function pn(e){return e.h?1:e.g?e.g.size:0}function gn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function mn(e,t){e.g?e.g.add(t):e.h=t}function vn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function yn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return I(e.i)}function wn(){}function bn(){this.g=new wn}function _n(e,t,n){const r=n||"";try{Ut(e,(function(e,n){let s=e;p(e)&&(s=xe(e)),t.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function En(e,t){const n=new Je;if(h.Image){const r=new Image;r.onload=_(Tn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=_(Tn,n,r,"TestLoadImage: error",!1,t),r.onabort=_(Tn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=_(Tn,n,r,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Tn(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch(i){}}function Sn(e){this.l=e.ac||null,this.j=e.jb||!1}function Cn(e,t){Ce.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=In,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn.prototype.cancel=function(){if(this.i=yn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},wn.prototype.stringify=function(e){return h.JSON.stringify(e,void 0)},wn.prototype.parse=function(e){return h.JSON.parse(e,void 0)},E(Sn,dt),Sn.prototype.g=function(){return new Cn(this.l,this.j)},Sn.prototype.i=function(e){return function(){return e}}({}),E(Cn,Ce);var In=0;function kn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function xn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,An(e)}function An(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=Cn.prototype,r.open=function(e,t){if(this.readyState!=In)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,An(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||h).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,xn(this)),this.readyState=In},r.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?xn(this):An(this),3==this.readyState&&kn(this)}},r.Va=function(e){this.g&&(this.response=this.responseText=e,xn(this))},r.Ua=function(e){this.g&&(this.response=e,xn(this))},r.ga=function(){this.g&&xn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Cn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var On=h.JSON.parse;function Rn(e){Ce.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Nn,this.K=this.L=!1}E(Rn,Ce);var Nn="",Dn=/^https?$/i,Pn=["POST","PUT"];function Ln(e){return $&&Q()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Mn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Fn(e),$n(e)}function Fn(e){e.D||(e.D=!0,Ie(e,"complete"),Ie(e,"error"))}function Un(e){if(e.h&&"undefined"!=typeof u&&(!e.C[1]||4!=jn(e)||2!=e.aa()))if(e.v&&4==jn(e))Be(e.Ha,0,e);else if(Ie(e,"readystatechange"),4==jn(e)){e.h=!1;try{const l=e.aa();e:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===l){var s=String(e.H).match($t)[1]||null;if(!s&&h.self&&h.self.location){var i=h.self.location.protocol;s=i.substr(0,i.length-1)}r=!Dn.test(s?s.toLowerCase():"")}n=r}if(n)Ie(e,"complete"),Ie(e,"success");else{e.m=6;try{var o=2<jn(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.aa()+"]",Fn(e)}}finally{$n(e)}}}function $n(e,t){if(e.g){Vn(e);const r=e.g,s=e.C[0]?d:null;e.g=null,e.C=null,t||Ie(e,"ready");try{r.onreadystatechange=s}catch(n){}}}function Vn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function jn(e){return e.g?e.g.readyState:0}function Bn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Nn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(kr){return null}}function qn(e){let t="";return ie(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function zn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=qn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Ht(e,t,n))}function Gn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Hn(e){this.Ca=0,this.i=[],this.j=new Je,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Gn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Gn("baseRetryDelayMs",5e3,e),this.bb=Gn("retryDelaySeedMs",1e4,e),this.$a=Gn("forwardChannelMaxRetries",2,e),this.ta=Gn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new hn(e&&e.concurrentRequestLimit),this.Fa=new bn,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Wn(e){if(Jn(e),3==e.G){var t=e.U++,n=Bt(e.F);Ht(n,"SID",e.I),Ht(n,"RID",t),Ht(n,"TYPE","terminate"),Zn(e,n),t=new bt(e,e.j,t,void 0),t.K=2,t.v=Wt(Bt(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(t.v.toString(),"")),!n&&h.Image&&((new Image).src=t.v,n=!0),n||(t.g=hr(t.l,null),t.g.da(t.v)),t.F=Date.now(),Ot(t)}cr(e)}function Kn(e){e.g&&(rr(e),e.g.cancel(),e.g=null)}function Jn(e){Kn(e),e.u&&(h.clearTimeout(e.u),e.u=null),ir(e),e.h.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Qn(e){fn(e.h)||e.m||(e.m=!0,Le(e.Ja,e),e.C=0)}function Xn(e,t){return!(pn(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Za?0:e.$a))&&(e.m=ct(b(e.Ja,e,t),ar(e,e.C)),e.C++,!0))}function Yn(e,t){var n;n=t?t.m:e.U++;const r=Bt(e.F);Ht(r,"SID",e.I),Ht(r,"RID",n),Ht(r,"AID",e.T),Zn(e,r),e.o&&e.s&&zn(r,e.o,e.s),n=new bt(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=er(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),mn(e.h,n),Ct(n,r,t)}function Zn(e,t){e.ia&&ie(e.ia,(function(e,n){Ht(t,n,e)})),e.l&&Ut({},(function(e,n){Ht(t,n,e)}))}function er(e,t,n){n=Math.min(e.i.length,n);var r=e.l?b(e.l.Ra,e.l,e):null;e:{var s=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=s[a].h;const l=s[a].g;if(n-=t,0>n)t=Math.max(0,s[a].h-100),o=!1;else try{_n(l,e,"req"+n+"_")}catch(i){r&&r(l)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function tr(e){e.g||e.u||(e.Z=1,Le(e.Ia,e),e.A=0)}function nr(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=ct(b(e.Ia,e),ar(e,e.A)),e.A++,!0)}function rr(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function sr(e){e.g=new bt(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=Bt(e.sa);Ht(t,"RID","rpc"),Ht(t,"SID",e.I),Ht(t,"CI",e.L?"0":"1"),Ht(t,"AID",e.T),Ht(t,"TYPE","xmlhttp"),Zn(e,t),e.o&&e.s&&zn(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Wt(Bt(t)),n.s=null,n.P=!0,It(n,e)}function ir(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function or(e,t){var n=null;if(e.g==t){ir(e),rr(e),e.g=null;var r=2}else{if(!gn(e.h,t))return;n=t.D,vn(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;r=rt(),Ie(r,new lt(r,n)),Qn(e)}else tr(e);else if(s=t.o,3==s||0==s&&0<e.pa||!(1==r&&Xn(e,t)||2==r&&nr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),s){case 1:lr(e,5);break;case 4:lr(e,10);break;case 3:lr(e,6);break;default:lr(e,2)}}function ar(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function lr(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=b(e.kb,e);n||(n=new jt("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||qt(n,"https"),Wt(n)),En(n.toString(),r)}else at(2);e.G=0,e.l&&e.l.va(t),cr(e),Jn(e)}function cr(e){if(e.G=0,e.la=[],e.l){const t=yn(e.h);0==t.length&&0==e.i.length||(k(e.la,t),k(e.la,e.i),e.h.i.length=0,I(e.i),e.i.length=0),e.l.ua()}}function ur(e,t,n){var r=n instanceof jt?Bt(n):new jt(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),zt(r,r.m);else{var s=h.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new jt(null,void 0);r&&qt(i,r),t&&(i.g=t),s&&zt(i,s),n&&(i.l=n),r=i}return n=e.D,t=e.za,n&&t&&Ht(r,n,t),Ht(r,"VER",e.ma),Zn(e,r),r}function hr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new Rn(new Sn({jb:!0})):new Rn(e.ra),t.Ka(e.H),t}function dr(){}function fr(){if($&&!(10<=Number(Y)))throw Error("Environmental error: no available transport.")}function pr(e,t){Ce.call(this),this.g=new Hn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!O(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!O(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new vr(this)}function gr(e){vt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function mr(){yt.call(this),this.status=1}function vr(e){this.g=e}r=Rn.prototype,r.Ka=function(e){this.L=e},r.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gt.g(),this.C=this.u?ft(this.u):ft(gt),this.g.onreadystatechange=b(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){return void Mn(this,i)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=h.FormData&&e instanceof h.FormData,!(0<=C(Pn,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Vn(this),0<this.B&&((this.K=Ln(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.qa,this)):this.A=Be(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Mn(this,i)}},r.qa=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ie(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ie(this,"complete"),Ie(this,"abort"),$n(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$n(this,!0)),Rn.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?Un(this):this.fb())},r.fb=function(){Un(this)},r.aa=function(){try{return 2<jn(this)?this.g.status:-1}catch(e){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),On(t)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Hn.prototype,r.ma=8,r.G=1,r.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const s=new bt(this,this.j,e,void 0);let i=this.s;if(this.S&&(i?(i=oe(i),le(i,this.S)):i=this.S),null!==this.o||this.N||(s.H=i,i=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=er(this,s,t),n=Bt(this.F),Ht(n,"RID",e),Ht(n,"CVER",22),this.D&&Ht(n,"X-HTTP-Session-Id",this.D),Zn(this,n),i&&(this.N?t="headers="+encodeURIComponent(String(qn(i)))+"&"+t:this.o&&zn(n,this.o,i)),mn(this.h,s),this.Ya&&Ht(n,"TYPE","init"),this.O?(Ht(n,"$req",t),Ht(n,"SID","null"),s.Z=!0,Ct(s,n,null)):Ct(s,n,t),this.G=2}}else 3==this.G&&(e?Yn(this,e):0==this.i.length||fn(this.h)||Yn(this))},r.Ia=function(){if(this.u=null,sr(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=ct(b(this.eb,this),e)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,at(10),Kn(this),sr(this))},r.cb=function(){null!=this.v&&(this.v=null,Kn(this),nr(this),at(19))},r.kb=function(e){e?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))},r=dr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},fr.prototype.g=function(e,t){return new pr(e,t)},E(pr,Ce),pr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;at(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=ur(e,null,e.V),Qn(e)},pr.prototype.close=function(){Wn(this.g)},pr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=xe(e),e=n);t.i.push(new un(t.ab++,e)),3==t.G&&Qn(t)},pr.prototype.M=function(){this.g.l=null,delete this.j,Wn(this.g),delete this.g,pr.X.M.call(this)},E(gr,vt),E(mr,yt),E(vr,dr),vr.prototype.xa=function(){Ie(this.g,"a")},vr.prototype.wa=function(e){Ie(this.g,new gr(e))},vr.prototype.va=function(e){Ie(this.g,new mr)},vr.prototype.ua=function(){Ie(this.g,"b")},fr.prototype.createWebChannel=fr.prototype.g,pr.prototype.send=pr.prototype.u,pr.prototype.open=pr.prototype.m,pr.prototype.close=pr.prototype.close,ut.NO_ERROR=0,ut.TIMEOUT=8,ut.HTTP_ERROR=6,ht.COMPLETE="complete",pt.EventType=mt,mt.OPEN="a",mt.CLOSE="b",mt.ERROR="c",mt.MESSAGE="d",Ce.prototype.listen=Ce.prototype.N,Rn.prototype.listenOnce=Rn.prototype.O,Rn.prototype.getLastError=Rn.prototype.Oa,Rn.prototype.getLastErrorCode=Rn.prototype.Ea,Rn.prototype.getStatus=Rn.prototype.aa,Rn.prototype.getResponseJson=Rn.prototype.Sa,Rn.prototype.getResponseText=Rn.prototype.fa,Rn.prototype.send=Rn.prototype.da,Rn.prototype.setWithCredentials=Rn.prototype.Ka;var yr=c.createWebChannelTransport=function(){return new fr},wr=c.getStatEventTarget=function(){return rt()},br=c.ErrorCode=ut,_r=c.EventType=ht,Er=c.Event=tt,Tr=c.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Sr=c.FetchXmlHttpFactory=Sn,Cr=c.WebChannel=pt,Ir=c.XhrIo=Rn;const kr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xr.UNAUTHENTICATED=new xr(null),xr.GOOGLE_CREDENTIALS=new xr("google-credentials-uid"),xr.FIRST_PARTY=new xr("first-party-uid"),xr.MOCK_USER=new xr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ar="9.15.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new o.Yd("@firebase/firestore");function Rr(){return Or.logLevel}function Nr(e,...t){if(Or.logLevel<=o["in"].DEBUG){const n=t.map(Lr);Or.debug(`Firestore (${Ar}): ${e}`,...n)}}function Dr(e,...t){if(Or.logLevel<=o["in"].ERROR){const n=t.map(Lr);Or.error(`Firestore (${Ar}): ${e}`,...n)}}function Pr(e,...t){if(Or.logLevel<=o["in"].WARN){const n=t.map(Lr);Or.warn(`Firestore (${Ar}): ${e}`,...n)}}function Lr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(e="Unexpected state"){const t=`FIRESTORE (${Ar}) INTERNAL ASSERTION FAILED: `+e;throw Dr(t),new Error(t)}function Fr(e,t){e||Mr()}function Ur(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Vr extends a.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(xr.UNAUTHENTICATED)))}shutdown(){}}class zr{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Gr{constructor(e){this.t=e,this.currentUser=xr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new jr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new jr,e.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Nr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Nr("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new jr)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Nr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Fr("string"==typeof t.accessToken),new Br(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Fr(null===e||"string"==typeof e),new xr(e)}}class Hr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=xr.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Fr(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Wr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new Hr(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t(xr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Kr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jr{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const n=e=>{null!=e.error&&Nr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.A;return this.A=e.token,Nr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Nr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?r(e):Nr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Fr("string"==typeof e.token),this.A=e.token,new Kr(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qr(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Qr(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%e.length))}return n}}function Yr(e,t){return e<t?-1:e>t?1:0}function Zr(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class es{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Vr($r.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Vr($r.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Vr($r.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Vr($r.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return es.fromMillis(Date.now())}static fromDate(e){return es.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new es(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Yr(this.nanoseconds,e.nanoseconds):Yr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ts(e)}static min(){return new ts(new es(0,0))}static max(){return new ts(new es(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t,n){void 0===t?t=0:t>e.length&&Mr(),void 0===n?n=e.length-t:n>e.length-t&&Mr(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ns.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ns?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),s=t.get(r);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class rs extends ns{construct(e,t,n){return new rs(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Vr($r.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new rs(t)}static emptyPath(){return new rs([])}}const ss=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class is extends ns{construct(e,t,n){return new is(e,t,n)}static isValidIdentifier(e){return ss.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),is.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new is(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(0===n.length)throw new Vr($r.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Vr($r.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Vr($r.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new Vr($r.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new is(t)}static emptyPath(){return new is([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.path=e}static fromPath(e){return new os(rs.fromString(e))}static fromName(e){return new os(rs.fromString(e).popFirst(5))}static empty(){return new os(rs.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===rs.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return rs.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new os(new rs(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}as.UNKNOWN_ID=-1;function ls(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=ts.fromTimestamp(1e9===r?new es(n+1,0):new es(n,r));return new us(s,os.empty(),t)}function cs(e){return new us(e.readTime,e.key,-1)}class us{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new us(ts.min(),os.empty(),-1)}static max(){return new us(ts.max(),os.empty(),-1)}}function hs(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=os.comparator(e.documentKey,t.documentKey),0!==n?n:Yr(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fs{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(e){if(e.code!==$r.FAILED_PRECONDITION||e.message!==ds)throw e;Nr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Mr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new gs(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof gs?t:gs.resolve(t)}catch(e){return gs.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):gs.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):gs.reject(t)}static resolve(e){return new gs(((t,n)=>{t(e)}))}static reject(e){return new gs(((t,n)=>{n(e)}))}static waitFor(e){return new gs(((t,n)=>{let r=0,s=0,i=!1;e.forEach((e=>{++r,e.next((()=>{++s,i&&s===r&&t()}),(e=>n(e)))})),i=!0,s===r&&t()}))}static or(e){let t=gs.resolve(!1);for(const n of e)t=t.next((e=>e?gs.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new gs(((n,r)=>{const s=e.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const l=a;t(e[l]).next((e=>{i[l]=e,++o,o===s&&n(i)}),(e=>r(e)))}}))}static doWhile(e,t){return new gs(((n,r)=>{const s=()=>{!0===e()?t().next((()=>{s()}),r):n()};s()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}vs.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ys{constructor(e,t,n,r,s,i,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class ws{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ws("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ws&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function _s(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Es(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(e){return null==e}function Ss(e){return 0===e&&1/e==-1/0}function Cs(e){return"number"==typeof e&&Number.isInteger(e)&&!Ss(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Is{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Is(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Is(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Yr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Is.EMPTY_BYTE_STRING=new Is("");const ks=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xs(e){if(Fr(!!e),"string"==typeof e){let t=0;const n=ks.exec(e);if(Fr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:As(e.seconds),nanos:As(e.nanos)}}function As(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Os(e){return"string"==typeof e?Is.fromBase64String(e):Is.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ns(e){const t=e.mapValue.fields.__previous_value__;return Rs(t)?Ns(t):t}function Ds(e){const t=xs(e.mapValue.fields.__local_write_time__.timestampValue);return new es(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ls(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Rs(e)?4:Js(e)?9007199254740991:10:Mr()}function Ms(e,t){if(e===t)return!0;const n=Ls(e);if(n!==Ls(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ds(e).isEqual(Ds(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=xs(e.timestampValue),r=xs(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Os(e.bytesValue).isEqual(Os(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return As(e.geoPointValue.latitude)===As(t.geoPointValue.latitude)&&As(e.geoPointValue.longitude)===As(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return As(e.integerValue)===As(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=As(e.doubleValue),r=As(t.doubleValue);return n===r?Ss(n)===Ss(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Zr(e.arrayValue.values||[],t.arrayValue.values||[],Ms);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(bs(n)!==bs(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!Ms(n[s],r[s])))return!1;return!0}(e,t);default:return Mr()}}function Fs(e,t){return void 0!==(e.values||[]).find((e=>Ms(e,t)))}function Us(e,t){if(e===t)return 0;const n=Ls(e),r=Ls(t);if(n!==r)return Yr(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Yr(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=As(e.integerValue||e.doubleValue),r=As(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return $s(e.timestampValue,t.timestampValue);case 4:return $s(Ds(e),Ds(t));case 5:return Yr(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Os(e),r=Os(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let s=0;s<n.length&&s<r.length;s++){const e=Yr(n[s],r[s]);if(0!==e)return e}return Yr(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Yr(As(e.latitude),As(t.latitude));return 0!==n?n:Yr(As(e.longitude),As(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const e=Us(n[s],r[s]);if(e)return e}return Yr(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Ps.mapValue&&t===Ps.mapValue)return 0;if(e===Ps.mapValue)return 1;if(t===Ps.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const e=Yr(r[o],i[o]);if(0!==e)return e;const t=Us(n[r[o]],s[i[o]]);if(0!==t)return t}return Yr(r.length,i.length)}(e.mapValue,t.mapValue);default:throw Mr()}}function $s(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Yr(e,t);const n=xs(e),r=xs(t),s=Yr(n.seconds,r.seconds);return 0!==s?s:Yr(n.nanos,r.nanos)}function Vs(e){return js(e)}function js(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=xs(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Os(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,os.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=js(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${js(e.fields[s])}`;return n+"}"}(e.mapValue):Mr();var t,n}function Bs(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function qs(e){return!!e&&"integerValue"in e}function zs(e){return!!e&&"arrayValue"in e}function Gs(e){return!!e&&"nullValue"in e}function Hs(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ws(e){return!!e&&"mapValue"in e}function Ks(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return _s(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Ks(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ks(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Js(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qs{constructor(e,t){this.position=e,this.inclusive=t}}function Xs(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(r=i.field.isKeyField()?os.comparator(os.fromName(o.referenceValue),n.key):Us(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Ys(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ms(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{}class ei extends Zs{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new li(e,t,n):"array-contains"===t?new di(e,n):"in"===t?new fi(e,n):"not-in"===t?new pi(e,n):"array-contains-any"===t?new gi(e,n):new ei(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new ci(e,n):new ui(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Us(t,this.value)):null!==t&&Ls(this.value)===Ls(t)&&this.matchesComparison(Us(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Mr()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ti extends Zs{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new ti(e,t)}matches(e){return ni(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function ni(e){return"and"===e.op}function ri(e){return si(e)&&ni(e)}function si(e){for(const t of e.filters)if(t instanceof ti)return!1;return!0}function ii(e){if(e instanceof ei)return e.field.canonicalString()+e.op.toString()+Vs(e.value);{const t=e.filters.map((e=>ii(e))).join(",");return`${e.op}(${t})`}}function oi(e,t){return e instanceof ei?function(e,t){return t instanceof ei&&e.op===t.op&&e.field.isEqual(t.field)&&Ms(e.value,t.value)}(e,t):e instanceof ti?function(e,t){return t instanceof ti&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&oi(n,t.filters[r])),!0)}(e,t):void Mr()}function ai(e){return e instanceof ei?function(e){return`${e.field.canonicalString()} ${e.op} ${Vs(e.value)}`}(e):e instanceof ti?function(e){return e.op.toString()+" {"+e.getFilters().map(ai).join(" ,")+"}"}(e):"Filter"}class li extends ei{constructor(e,t,n){super(e,t,n),this.key=os.fromName(n.referenceValue)}matches(e){const t=os.comparator(e.key,this.key);return this.matchesComparison(t)}}class ci extends ei{constructor(e,t){super(e,"in",t),this.keys=hi("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ui extends ei{constructor(e,t){super(e,"not-in",t),this.keys=hi("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function hi(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>os.fromName(e.referenceValue)))}class di extends ei{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return zs(t)&&Fs(t.arrayValue,this.value)}}class fi extends ei{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Fs(this.value.arrayValue,t)}}class pi extends ei{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Fs(this.value.arrayValue,t)}}class gi extends ei{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!zs(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Fs(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t="asc"){this.field=e,this.dir=t}}function vi(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t){this.comparator=e,this.root=t||bi.EMPTY}insert(e,t){return new yi(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,bi.BLACK,null,null))}remove(e){return new yi(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bi.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wi(this.root,e,this.comparator,!1)}getReverseIterator(){return new wi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wi(this.root,e,this.comparator,!0)}}class wi{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bi{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:bi.RED,this.left=null!=r?r:bi.EMPTY,this.right=null!=s?s:bi.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new bi(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return bi.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return bi.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Mr();if(this.right.isRed())throw Mr();const e=this.left.check();if(e!==this.right.check())throw Mr();return e+(this.isRed()?0:1)}}bi.EMPTY=null,bi.RED=!0,bi.BLACK=!1,bi.EMPTY=new class{constructor(){this.size=0}get key(){throw Mr()}get value(){throw Mr()}get color(){throw Mr()}get left(){throw Mr()}get right(){throw Mr()}copy(e,t,n,r,s){return this}insert(e,t,n){return new bi(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _i{constructor(e){this.comparator=e,this.data=new yi(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ei(this.data.getIterator())}getIteratorFrom(e){return new Ei(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof _i))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new _i(this.comparator);return t.data=e,t}}class Ei{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ti{constructor(e){this.fields=e,e.sort(is.comparator)}static empty(){return new Ti([])}unionWith(e){let t=new _i(is.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ti(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zr(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this.value=e}static empty(){return new Si({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ws(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ks(t)}setAll(e){let t=is.emptyPath(),n={},r=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=Ks(e):r.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());Ws(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ms(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Ws(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){_s(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Si(Ks(this.value))}}function Ci(e){const t=[];return _s(e.fields,((e,n)=>{const r=new is([e]);if(Ws(n)){const e=Ci(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Ti(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ii{constructor(e,t,n,r,s,i,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ii(e,0,ts.min(),ts.min(),ts.min(),Si.empty(),0)}static newFoundDocument(e,t,n,r){return new Ii(e,1,t,ts.min(),n,r,0)}static newNoDocument(e,t){return new Ii(e,2,t,ts.min(),ts.min(),Si.empty(),0)}static newUnknownDocument(e,t){return new Ii(e,3,t,ts.min(),ts.min(),Si.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ts.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Si.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Si.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ts.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ii&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ii(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t=null,n=[],r=[],s=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ft=null}}function xi(e,t=null,n=[],r=[],s=null,i=null,o=null){return new ki(e,t,n,r,s,i,o)}function Ai(e){const t=Ur(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>ii(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Ts(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Vs(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Vs(e))).join(",")),t.ft=e}return t.ft}function Oi(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!vi(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!oi(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ys(e.startAt,t.startAt)&&Ys(e.endAt,t.endAt)}function Ri(e){return os.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ni{constructor(e,t=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function Di(e,t,n,r,s,i,o,a){return new Ni(e,t,n,r,s,i,o,a)}function Pi(e){return new Ni(e)}function Li(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Mi(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Fi(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Ui(e){return null!==e.collectionGroup}function $i(e){const t=Ur(e);if(null===t.dt){t.dt=[];const e=Fi(t),n=Mi(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new mi(e)),t.dt.push(new mi(is.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new mi(is.keyField(),e))}}}return t.dt}function Vi(e){const t=Ur(e);if(!t._t)if("F"===t.limitType)t._t=xi(t.path,t.collectionGroup,$i(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const s of $i(t)){const t="desc"===s.dir?"asc":"desc";e.push(new mi(s.field,t))}const n=t.endAt?new Qs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Qs(t.startAt.position,t.startAt.inclusive):null;t._t=xi(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function ji(e,t){t.getFirstInequalityField(),Fi(e);const n=e.filters.concat([t]);return new Ni(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Bi(e,t,n){return new Ni(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function qi(e,t){return Oi(Vi(e),Vi(t))&&e.limitType===t.limitType}function zi(e){return`${Ai(Vi(e))}|lt:${e.limitType}`}function Gi(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>ai(e))).join(", ")}]`),Ts(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Vs(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Vs(e))).join(",")),`Target(${t})`}(Vi(e))}; limitType=${e.limitType})`}function Hi(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):os.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of $i(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Xs(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,$i(e),t))&&!(e.endAt&&!function(e,t,n){const r=Xs(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,$i(e),t))}(e,t)}function Wi(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ki(e){return(t,n)=>{let r=!1;for(const s of $i(e)){const e=Ji(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function Ji(e,t,n){const r=e.field.isKeyField()?os.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?Us(r,s):Mr()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Mr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ss(t)?"-0":t}}function Xi(e){return{integerValue:""+e}}function Yi(e,t){return Cs(t)?Xi(t):Qi(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(){this._=void 0}}function eo(e,t,n){return e instanceof ro?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof so?io(e,t):e instanceof oo?ao(e,t):function(e,t){const n=no(e,t),r=co(n)+co(e.gt);return qs(n)&&qs(e.gt)?Xi(r):Qi(e.yt,r)}(e,t)}function to(e,t,n){return e instanceof so?io(e,t):e instanceof oo?ao(e,t):n}function no(e,t){return e instanceof lo?qs(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class ro extends Zi{}class so extends Zi{constructor(e){super(),this.elements=e}}function io(e,t){const n=uo(t);for(const r of e.elements)n.some((e=>Ms(e,r)))||n.push(r);return{arrayValue:{values:n}}}class oo extends Zi{constructor(e){super(),this.elements=e}}function ao(e,t){let n=uo(t);for(const r of e.elements)n=n.filter((e=>!Ms(e,r)));return{arrayValue:{values:n}}}class lo extends Zi{constructor(e,t){super(),this.yt=e,this.gt=t}}function co(e){return As(e.integerValue||e.doubleValue)}function uo(e){return zs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof so&&t instanceof so||e instanceof oo&&t instanceof oo?Zr(e.elements,t.elements,Ms):e instanceof lo&&t instanceof lo?Ms(e.gt,t.gt):e instanceof ro&&t instanceof ro}(e.transform,t.transform)}class fo{constructor(e,t){this.version=e,this.transformResults=t}}class po{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new po}static exists(e){return new po(void 0,e)}static updateTime(e){return new po(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function go(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class mo{}function vo(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new ko(e.key,po.none()):new Eo(e.key,e.data,po.none());{const n=e.data,r=Si.empty();let s=new _i(is.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),s=s.add(e)}return new To(e.key,r,new Ti(s.toArray()),po.none())}}function yo(e,t,n){e instanceof Eo?function(e,t,n){const r=e.value.clone(),s=Co(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof To?function(e,t,n){if(!go(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Co(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(So(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function wo(e,t,n,r){return e instanceof Eo?function(e,t,n,r){if(!go(e.precondition,t))return n;const s=e.value.clone(),i=Io(e.fieldTransforms,r,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,r):e instanceof To?function(e,t,n,r){if(!go(e.precondition,t))return n;const s=Io(e.fieldTransforms,r,t),i=t.data;return i.setAll(So(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return go(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function bo(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=no(r.transform,e||null);null!=s&&(null===n&&(n=Si.empty()),n.set(r.field,s))}return n||null}function _o(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Zr(e,t,((e,t)=>ho(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Eo extends mo{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class To extends mo{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function So(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Co(e,t,n){const r=new Map;Fr(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,to(o,a,n[s]))}return r}function Io(e,t,n){const r=new Map;for(const s of e){const e=s.transform,i=n.data.field(s.field);r.set(s.field,eo(e,i,t))}return r}class ko extends mo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xo extends mo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oo,Ro;function No(e){switch(e){default:return Mr();case $r.CANCELLED:case $r.UNKNOWN:case $r.DEADLINE_EXCEEDED:case $r.RESOURCE_EXHAUSTED:case $r.INTERNAL:case $r.UNAVAILABLE:case $r.UNAUTHENTICATED:return!1;case $r.INVALID_ARGUMENT:case $r.NOT_FOUND:case $r.ALREADY_EXISTS:case $r.PERMISSION_DENIED:case $r.FAILED_PRECONDITION:case $r.ABORTED:case $r.OUT_OF_RANGE:case $r.UNIMPLEMENTED:case $r.DATA_LOSS:return!0}}function Do(e){if(void 0===e)return Dr("GRPC error has no .code"),$r.UNKNOWN;switch(e){case Oo.OK:return $r.OK;case Oo.CANCELLED:return $r.CANCELLED;case Oo.UNKNOWN:return $r.UNKNOWN;case Oo.DEADLINE_EXCEEDED:return $r.DEADLINE_EXCEEDED;case Oo.RESOURCE_EXHAUSTED:return $r.RESOURCE_EXHAUSTED;case Oo.INTERNAL:return $r.INTERNAL;case Oo.UNAVAILABLE:return $r.UNAVAILABLE;case Oo.UNAUTHENTICATED:return $r.UNAUTHENTICATED;case Oo.INVALID_ARGUMENT:return $r.INVALID_ARGUMENT;case Oo.NOT_FOUND:return $r.NOT_FOUND;case Oo.ALREADY_EXISTS:return $r.ALREADY_EXISTS;case Oo.PERMISSION_DENIED:return $r.PERMISSION_DENIED;case Oo.FAILED_PRECONDITION:return $r.FAILED_PRECONDITION;case Oo.ABORTED:return $r.ABORTED;case Oo.OUT_OF_RANGE:return $r.OUT_OF_RANGE;case Oo.UNIMPLEMENTED:return $r.UNIMPLEMENTED;case Oo.DATA_LOSS:return $r.DATA_LOSS;default:return Mr()}}(Ro=Oo||(Oo={}))[Ro.OK=0]="OK",Ro[Ro.CANCELLED=1]="CANCELLED",Ro[Ro.UNKNOWN=2]="UNKNOWN",Ro[Ro.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ro[Ro.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ro[Ro.NOT_FOUND=5]="NOT_FOUND",Ro[Ro.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ro[Ro.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ro[Ro.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ro[Ro.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ro[Ro.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ro[Ro.ABORTED=10]="ABORTED",Ro[Ro.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ro[Ro.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ro[Ro.INTERNAL=13]="INTERNAL",Ro[Ro.UNAVAILABLE=14]="UNAVAILABLE",Ro[Ro.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Po{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){_s(this.inner,((t,n)=>{for(const[r,s]of n)e(r,s)}))}isEmpty(){return Es(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=new yi(os.comparator);function Mo(){return Lo}const Fo=new yi(os.comparator);function Uo(...e){let t=Fo;for(const n of e)t=t.insert(n.key,n);return t}function $o(e){let t=Fo;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Vo(){return Bo()}function jo(){return Bo()}function Bo(){return new Po((e=>e.toString()),((e,t)=>e.isEqual(t)))}const qo=new yi(os.comparator),zo=new _i(os.comparator);function Go(...e){let t=zo;for(const n of e)t=t.add(n);return t}const Ho=new _i(Yr);function Wo(){return Ho}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Jo.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ko(ts.min(),r,Wo(),Mo(),Go())}}class Jo{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Jo(n,t,Go(),Go(),Go())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,t,n,r){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=r}}class Xo{constructor(e,t){this.targetId=e,this.Et=t}}class Yo{constructor(e,t,n=Is.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Zo{constructor(){this.At=0,this.Rt=na(),this.bt=Is.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=Go(),t=Go(),n=Go();return this.Rt.forEach(((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Mr()}})),new Jo(this.bt,this.Pt,e,t,n)}xt(){this.vt=!1,this.Rt=na()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class ea{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Mo(),this.qt=ta(),this.Ut=new _i(Yr)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,(t=>{const n=this.Wt(t);switch(e.state){case 0:this.zt(t)&&n.Dt(e.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(n.Ft(),n.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:Mr()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach(((e,n)=>{this.zt(n)&&t(n)}))}Jt(e){const t=e.targetId,n=e.Et.count,r=this.Yt(t);if(r){const e=r.target;if(Ri(e))if(0===n){const n=new os(e.path);this.Qt(t,n,Ii.newNoDocument(n,ts.min()))}else Fr(1===n);else this.Xt(t)!==n&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){const t=new Map;this.Bt.forEach(((n,r)=>{const s=this.Yt(r);if(s){if(n.current&&Ri(s.target)){const t=new os(s.target.path);null!==this.Lt.get(t)||this.te(r,t)||this.Qt(r,t,Ii.newNoDocument(t,e))}n.St&&(t.set(r,n.Ct()),n.xt())}}));let n=Go();this.qt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Yt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Lt.forEach(((t,n)=>n.setReadTime(e)));const r=new Ko(e,t,this.Ut,this.Lt,n);return this.Lt=Mo(),this.qt=ta(),this.Ut=new _i(Yr),r}Gt(e,t){if(!this.zt(e))return;const n=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Xt(e){const t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new Zo,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new _i(Yr),this.qt=this.qt.insert(e,t)),t}zt(e){const t=null!==this.Yt(e);return t||Nr("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Zo),this.$t.getRemoteKeysForTarget(e).forEach((t=>{this.Qt(e,t,null)}))}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function ta(){return new yi(os.comparator)}function na(){return new yi(os.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),sa=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),ia=(()=>{const e={and:"AND",or:"OR"};return e})();class oa{constructor(e,t){this.databaseId=e,this.wt=t}}function aa(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function la(e,t){return e.wt?t.toBase64():t.toUint8Array()}function ca(e,t){return aa(e,t.toTimestamp())}function ua(e){return Fr(!!e),ts.fromTimestamp(function(e){const t=xs(e);return new es(t.seconds,t.nanos)}(e))}function ha(e,t){return function(e){return new rs(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function da(e){const t=rs.fromString(e);return Fr(La(t)),t}function fa(e,t){return ha(e.databaseId,t.path)}function pa(e,t){const n=da(t);if(n.get(1)!==e.databaseId.projectId)throw new Vr($r.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Vr($r.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new os(ya(n))}function ga(e,t){return ha(e.databaseId,t)}function ma(e){const t=da(e);return 4===t.length?rs.emptyPath():ya(t)}function va(e){return new rs(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ya(e){return Fr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function wa(e,t,n){return{name:fa(e,t),fields:n.value.mapValue.fields}}function ba(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Mr()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(e,t){return e.wt?(Fr(void 0===t||"string"==typeof t),Is.fromBase64String(t||"")):(Fr(void 0===t||t instanceof Uint8Array),Is.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?$r.UNKNOWN:Do(e.code);return new Vr(t,e.message||"")}(o);n=new Yo(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=pa(e,r.document.name),i=ua(r.document.updateTime),o=r.document.createTime?ua(r.document.createTime):ts.min(),a=new Si({mapValue:{fields:r.document.fields}}),l=Ii.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Qo(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=pa(e,r.document),i=r.readTime?ua(r.readTime):ts.min(),o=Ii.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Qo([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=pa(e,r.document),i=r.removedTargetIds||[];n=new Qo([],i,s,null)}else{if(!("filter"in t))return Mr();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,s=new Ao(r),i=e.targetId;n=new Xo(i,s)}}return n}function _a(e,t){let n;if(t instanceof Eo)n={update:wa(e,t.key,t.value)};else if(t instanceof ko)n={delete:fa(e,t.key)};else if(t instanceof To)n={update:wa(e,t.key,t.data),updateMask:Pa(t.fieldMask)};else{if(!(t instanceof xo))return Mr();n={verify:fa(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof ro)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof so)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof oo)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof lo)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw Mr()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:ca(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Mr()}(e,t.precondition)),n}function Ea(e,t){return e&&e.length>0?(Fr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?ua(e.updateTime):ua(t);return n.isEqual(ts.min())&&(n=ua(t)),new fo(n,e.transformResults||[])}(e,t)))):[]}function Ta(e,t){return{documents:[ga(e,t.path)]}}function Sa(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=ga(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ga(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(e){if(0!==e.length)return Da(ti.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const i=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Ra(e.field),direction:xa(e.dir)}}(e)))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(e,t){return e.wt||Ts(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Ca(e){let t=ma(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Fr(1===r);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=function(e){const t=ka(e);return t instanceof ti&&ri(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new mi(Na(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Ts(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new Qs(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new Qs(n,t)}(n.endAt)),Di(t,s,o,i,a,"F",l,c)}function Ia(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Mr()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function ka(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Na(e.unaryFilter.field);return ei.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Na(e.unaryFilter.field);return ei.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Na(e.unaryFilter.field);return ei.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Na(e.unaryFilter.field);return ei.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Mr()}}(e):void 0!==e.fieldFilter?function(e){return ei.create(Na(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Mr()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return ti.create(e.compositeFilter.filters.map((e=>ka(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Mr()}}(e.compositeFilter.op))}(e):Mr()}function xa(e){return ra[e]}function Aa(e){return sa[e]}function Oa(e){return ia[e]}function Ra(e){return{fieldPath:e.canonicalString()}}function Na(e){return is.fromServerFormat(e.fieldPath)}function Da(e){return e instanceof ei?function(e){if("=="===e.op){if(Hs(e.value))return{unaryFilter:{field:Ra(e.field),op:"IS_NAN"}};if(Gs(e.value))return{unaryFilter:{field:Ra(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Hs(e.value))return{unaryFilter:{field:Ra(e.field),op:"IS_NOT_NAN"}};if(Gs(e.value))return{unaryFilter:{field:Ra(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ra(e.field),op:Aa(e.op),value:e.value}}}(e):e instanceof ti?function(e){const t=e.getFilters().map((e=>Da(e)));return 1===t.length?t[0]:{compositeFilter:{op:Oa(e.op),filters:t}}}(e):Mr()}function Pa(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function La(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Fa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ua=Fa;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $a{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&yo(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=wo(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=wo(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=jo();return this.mutations.forEach((r=>{const s=e.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=t.has(r.key)?null:o;const a=vo(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(ts.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Go())}isEqual(e){return this.batchId===e.batchId&&Zr(this.mutations,e.mutations,((e,t)=>_o(e,t)))&&Zr(this.baseMutations,e.baseMutations,((e,t)=>_o(e,t)))}}class Va{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Fr(e.mutations.length===n.length);let r=qo;const s=e.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new Va(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t,n,r,s=ts.min(),i=ts.min(),o=Is.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(e){return new Ba(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Ba(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ba(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e){this.ie=e}}function za(e){const t=Ca({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Bi(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(As(e.integerValue));else if("doubleValue"in e){const n=As(e.doubleValue);isNaN(n)?this.he(t,13):(this.he(t,15),Ss(n)?t.le(0):t.le(n))}else if("timestampValue"in e){const n=e.timestampValue;this.he(t,20),"string"==typeof n?t.fe(n):(t.fe(`${n.seconds||""}`),t.le(n.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(Os(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.he(t,45),t.le(n.latitude||0),t.le(n.longitude||0)}else"mapValue"in e?Js(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):Mr()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){const n=e.fields||{};this.he(t,55);for(const r of Object.keys(n))this.de(r,t),this.ce(n[r],t)}ye(e,t){const n=e.values||[];this.he(t,50);for(const r of n)this.ce(r,t)}me(e,t){this.he(t,37),os.fromName(e).path.forEach((e=>{this.he(t,60),this.pe(e,t)}))}he(e,t){e.le(t)}_e(e){e.le(2)}}Ga.Ie=new Ga;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ha{constructor(){this.Je=new Wa}addToCollectionParentIndex(e,t){return this.Je.add(t),gs.resolve()}getCollectionParents(e,t){return gs.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return gs.resolve()}deleteFieldIndex(e,t){return gs.resolve()}getDocumentsMatchingTarget(e,t){return gs.resolve(null)}getIndexType(e,t){return gs.resolve(0)}getFieldIndexes(e,t){return gs.resolve([])}getNextCollectionGroupToUpdate(e){return gs.resolve(null)}getMinOffset(e,t){return gs.resolve(us.min())}getMinOffsetFromCollectionGroup(e,t){return gs.resolve(us.min())}updateCollectionGroup(e,t,n){return gs.resolve()}updateIndexEntries(e,t){return gs.resolve()}}class Wa{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new _i(rs.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new _i(rs.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Ka{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Ka(e,Ka.DEFAULT_COLLECTION_PERCENTILE,Ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ka.DEFAULT_COLLECTION_PERCENTILE=10,Ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ka.DEFAULT=new Ka(41943040,Ka.DEFAULT_COLLECTION_PERCENTILE,Ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ka.DISABLED=new Ka(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ja{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ja(0)}static vn(){return new Ja(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qa{constructor(){this.changes=new Po((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ii.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?gs.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xa{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&wo(n.mutation,e,Ti.empty(),es.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Go()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Go()){const r=Vo();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Uo();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Vo();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Go())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let s=Mo();const i=Bo(),o=Bo();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof To)?s=s.insert(t.key,t):void 0!==o&&(i.set(t.key,o.mutation.getFieldMask()),wo(o.mutation,t,o.mutation.getFieldMask(),es.now()))})),this.recalculateAndSaveOverlays(e,s).next((e=>(e.forEach(((e,t)=>i.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Xa(t,null!==(n=i.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Bo();let r=new yi(((e,t)=>e-t)),s=Go();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const s of e)s.keys().forEach((e=>{const i=t.get(e);if(null===i)return;let o=n.get(e)||Ti.empty();o=s.applyToLocalView(i,o),n.set(e,o);const a=(r.get(s.batchId)||Go()).add(e);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,l=r.value,c=jo();l.forEach((e=>{if(!s.has(e)){const r=vo(t.get(e),n.get(e));null!==r&&c.set(e,r),s=s.add(e)}})),i.push(this.documentOverlayCache.saveOverlays(e,a,c))}return gs.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return os.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ui(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):gs.resolve(Vo());let o=-1,a=s;return i.next((t=>gs.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?gs.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,s))).next((()=>this.computeViews(e,a,t,Go()))).next((e=>({batchId:o,changes:$o(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new os(t)).next((e=>{let t=Uo();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let s=Uo();return this.indexManager.getCollectionParents(e,r).next((i=>gs.forEach(i,(i=>{const o=function(e,t){return new Ni(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,i.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((s=>(r=s,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,Ii.newInvalidDocument(n)))}));let n=Uo();return r.forEach(((r,s)=>{const i=e.get(r);void 0!==i&&wo(i.mutation,s,Ti.empty(),es.now()),Hi(t,s)&&(n=n.insert(r,s))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return gs.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:ua(n.createTime)}),gs.resolve()}getNamedQuery(e,t){return gs.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(e){return{name:e.name,query:za(e.bundledQuery),readTime:ua(e.readTime)}}(t)),gs.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.overlays=new yi(os.comparator),this.es=new Map}getOverlay(e,t){return gs.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Vo();return gs.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.oe(e,t,r)})),gs.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.es.delete(n)),gs.resolve()}getOverlaysForCollection(e,t,n){const r=Vo(),s=t.length+1,i=new os(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return gs.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new yi(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=Vo(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Vo(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return gs.resolve(o)}oe(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new ja(t,n));let s=this.es.get(t);void 0===s&&(s=Go(),this.es.set(t,s)),this.es.set(t,s.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this.ns=new _i(nl.ss),this.rs=new _i(nl.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const n=new nl(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.cs(new nl(e,t))}hs(e,t){e.forEach((e=>this.removeReference(e,t)))}ls(e){const t=new os(new rs([])),n=new nl(t,e),r=new nl(t,e+1),s=[];return this.rs.forEachInRange([n,r],(e=>{this.cs(e),s.push(e.key)})),s}fs(){this.ns.forEach((e=>this.cs(e)))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new os(new rs([])),n=new nl(t,e),r=new nl(t,e+1);let s=Go();return this.rs.forEachInRange([n,r],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new nl(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class nl{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return os.comparator(e.key,t.key)||Yr(e._s,t._s)}static os(e,t){return Yr(e._s,t._s)||os.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new _i(nl.ss)}checkEmpty(e){return gs.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new $a(s,t,n,r);this.mutationQueue.push(i);for(const o of r)this.gs=this.gs.add(new nl(o.key,s)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return gs.resolve(i)}lookupMutationBatch(e,t){return gs.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ps(n),s=r<0?0:r;return gs.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return gs.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return gs.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new nl(t,0),r=new nl(t,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([n,r],(e=>{const t=this.ys(e._s);s.push(t)})),gs.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new _i(Yr);return t.forEach((e=>{const t=new nl(e,0),r=new nl(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],(e=>{n=n.add(e._s)}))})),gs.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;os.isDocumentKey(s)||(s=s.child(""));const i=new nl(new os(s),0);let o=new _i(Yr);return this.gs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e._s)),!0)}),i),gs.resolve(this.Is(o))}Is(e){const t=[];return e.forEach((e=>{const n=this.ys(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Fr(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return gs.forEach(t.mutations,(r=>{const s=new nl(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.gs=n}))}An(e){}containsKey(e,t){const n=new nl(t,0),r=this.gs.firstAfterOrEqual(n);return gs.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,gs.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this.Es=e,this.docs=new yi(os.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return gs.resolve(n?n.document.mutableCopy():Ii.newInvalidDocument(t))}getEntries(e,t){let n=Mo();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Ii.newInvalidDocument(e))})),gs.resolve(n)}getAllFromCollection(e,t,n){let r=Mo();const s=new os(t.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:e,value:{document:s}}=i.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||hs(cs(s),n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return gs.resolve(r)}getAllFromCollectionGroup(e,t,n,r){Mr()}As(e,t){return gs.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new il(this)}getSize(e){return gs.resolve(this.size)}}class il extends Qa{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)})),gs.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){this.persistence=e,this.Rs=new Po((e=>Ai(e)),Oi),this.lastRemoteSnapshotVersion=ts.min(),this.highestTargetId=0,this.bs=0,this.Ps=new tl,this.targetCount=0,this.vs=Ja.Pn()}forEachTarget(e,t){return this.Rs.forEach(((e,n)=>t(n))),gs.resolve()}getLastRemoteSnapshotVersion(e){return gs.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return gs.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),gs.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),gs.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new Ja(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,gs.resolve()}updateTargetData(e,t){return this.Dn(t),gs.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,gs.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.Rs.forEach(((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Rs.delete(i),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),gs.waitFor(s).next((()=>r))}getTargetCount(e){return gs.resolve(this.targetCount)}getTargetData(e,t){const n=this.Rs.get(t)||null;return gs.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),gs.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach((t=>{s.push(r.markPotentiallyOrphaned(e,t))})),gs.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),gs.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ps.ds(t);return gs.resolve(n)}containsKey(e,t){return gs.resolve(this.Ps.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new vs(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new ol(this),this.indexManager=new Ha,this.remoteDocumentCache=function(e){return new sl(e)}((e=>this.referenceDelegate.xs(e))),this.yt=new qa(t),this.Ns=new Za(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new el,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new rl(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){Nr("MemoryPersistence","Starting transaction:",e);const r=new ll(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((e=>this.referenceDelegate.Os(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ms(e,t){return gs.or(Object.values(this.Vs).map((n=>()=>n.containsKey(e,t))))}}class ll extends fs{constructor(e){super(),this.currentSequenceNumber=e}}class cl{constructor(e){this.persistence=e,this.Fs=new tl,this.$s=null}static Bs(e){return new cl(e)}get Ls(){if(this.$s)return this.$s;throw Mr()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),gs.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),gs.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),gs.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach((e=>this.Ls.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ls.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return gs.forEach(this.Ls,(n=>{const r=os.fromPath(n);return this.qs(e,r).next((e=>{e||t.removeEntry(r,ts.min())}))})).next((()=>(this.$s=null,t.apply(e))))}updateLimboDocument(e,t){return this.qs(e,t).next((e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())}))}xs(e){return 0}qs(e,t){return gs.or([()=>gs.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ul{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=Go(),r=Go();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new ul(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next((s=>s||this.Oi(e,t,r,n))).next((n=>n||this.Mi(e,t)))}ki(e,t){if(Li(t))return gs.resolve(null);let n=Vi(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Bi(t,null,"F"),n=Vi(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const s=Go(...r);return this.Ni.getDocuments(e,s).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const i=this.Fi(t,r);return this.$i(t,i,s,n.readTime)?this.ki(e,Bi(t,null,"F")):this.Bi(e,i,t,n)}))))})))))}Oi(e,t,n,r){return Li(t)||r.isEqual(ts.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next((s=>{const i=this.Fi(t,s);return this.$i(t,i,n,r)?this.Mi(e,t):(Rr()<=o["in"].DEBUG&&Nr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Gi(t)),this.Bi(e,i,t,ls(r,-1)))}))}Fi(e,t){let n=new _i(Ki(e));return t.forEach(((t,r)=>{Hi(e,r)&&(n=n.add(r))})),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Mi(e,t){return Rr()<=o["in"].DEBUG&&Nr("QueryEngine","Using full collection scan to execute query:",Gi(t)),this.Ni.getDocumentsMatchingQuery(e,t,us.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.yt=r,this.qi=new yi(Yr),this.Ui=new Po((e=>Ai(e)),Oi),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ya(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qi)))}}function fl(e,t,n,r){return new dl(e,t,n,r)}async function pl(e,t){const n=Ur(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((s=>(r=s,n.Qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const s=[],i=[];let o=Go();for(const e of r){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({ji:e,removedBatchIds:s,addedBatchIds:i})))}))}))}function gl(e,t){const n=Ur(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const s=n.batch,i=s.keys();let o=gs.resolve();return i.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);Fr(null!==i),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Go();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function ml(e){const t=Ur(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Cs.getLastRemoteSnapshotVersion(e)))}function vl(e,t){const n=Ur(e),r=t.snapshotVersion;let s=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.qi;const o=[];t.targetChanges.forEach(((i,a)=>{const l=s.get(a);if(!l)return;o.push(n.Cs.removeMatchingKeys(e,i.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(e,i.addedDocuments,a))));let c=l.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?c=c.withResumeToken(Is.EMPTY_BYTE_STRING,ts.min()).withLastLimboFreeSnapshotVersion(ts.min()):i.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(i.resumeToken,r)),s=s.insert(a,c),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(l,c,i)&&o.push(n.Cs.updateTargetData(e,c))}));let a=Mo(),l=Go();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(yl(e,i,t.documentUpdates).next((e=>{a=e.Wi,l=e.zi}))),!r.isEqual(ts.min())){const t=n.Cs.getLastRemoteSnapshotVersion(e).next((t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return gs.waitFor(o).next((()=>i.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,l))).next((()=>a))})).then((e=>(n.qi=s,e)))}function yl(e,t,n){let r=Go(),s=Go();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Mo();return n.forEach(((n,i)=>{const o=e.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(ts.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):Nr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Wi:r,zi:s}}))}function wl(e,t){const n=Ur(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function bl(e,t){const n=Ur(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Cs.getTargetData(e,t).next((s=>s?(r=s,gs.resolve(r)):n.Cs.allocateTargetId(e).next((s=>(r=new Ba(t,s,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.qi.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(e.targetId,e),n.Ui.set(t,e.targetId)),e}))}async function _l(e,t,n){const r=Ur(e),s=r.qi.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(e=>r.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!ms(e))throw e;Nr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qi=r.qi.remove(t),r.Ui.delete(s.target)}function El(e,t,n){const r=Ur(e);let s=ts.min(),i=Go();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Ur(e),s=r.Ui.get(n);return void 0!==s?gs.resolve(r.qi.get(s)):r.Cs.getTargetData(t,n)}(r,e,Vi(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>r.Li.getDocumentsMatchingQuery(e,t,n?s:ts.min(),n?i:Go()))).next((e=>(Tl(r,Wi(t),e),{documents:e,Hi:i})))))}function Tl(e,t,n){let r=e.Ki.get(t)||ts.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ki.set(t,r)}class Sl{constructor(){this.activeTargetIds=Wo()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Cl{constructor(){this.Lr=new Sl,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Sl,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{Ur(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Nr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){Nr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,r,s){const i=this.ho(e,t);Nr("RestConnection","Sending: ",i,n);const o={};return this.lo(o,r,s),this.fo(e,i,o,n).then((e=>(Nr("RestConnection","Received: ",e),e)),(t=>{throw Pr("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t}))}_o(e,t,n,r,s,i){return this.ao(e,t,n,r,s)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ar,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ho(e,t){const n=xl[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise(((s,i)=>{const o=new Ir;o.setWithCredentials(!0),o.listenOnce(_r.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case br.NO_ERROR:const t=o.getResponseJson();Nr("Connection","XHR received:",JSON.stringify(t)),s(t);break;case br.TIMEOUT:Nr("Connection",'RPC "'+e+'" timed out'),i(new Vr($r.DEADLINE_EXCEEDED,"Request time out"));break;case br.HTTP_ERROR:const n=o.getStatus();if(Nr("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values($r).indexOf(t)>=0?t:$r.UNKNOWN}(t.status);i(new Vr(e,t.message))}else i(new Vr($r.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new Vr($r.UNAVAILABLE,"Connection failed."));break;default:Mr()}}finally{Nr("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}wo(e,t,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=yr(),i=wr(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Sr({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const a=r.join("");Nr("Connection","Creating WebChannel: "+a,o);const l=s.createWebChannel(a,o);let c=!1,u=!1;const h=new Al({Hr:e=>{u?Nr("Connection","Not sending because WebChannel is closed:",e):(c||(Nr("Connection","Opening WebChannel transport."),l.open(),c=!0),Nr("Connection","WebChannel sending:",e),l.send(e))},Jr:()=>l.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(l,Cr.EventType.OPEN,(()=>{u||Nr("Connection","WebChannel transport opened.")})),d(l,Cr.EventType.CLOSE,(()=>{u||(u=!0,Nr("Connection","WebChannel transport closed"),h.io())})),d(l,Cr.EventType.ERROR,(e=>{u||(u=!0,Pr("Connection","WebChannel transport errored:",e),h.io(new Vr($r.UNAVAILABLE,"The operation could not be completed")))})),d(l,Cr.EventType.MESSAGE,(e=>{var t;if(!u){const n=e.data[0];Fr(!!n);const r=n,s=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(s){Nr("Connection","WebChannel received error:",s);const e=s.status;let t=function(e){const t=Oo[e];if(void 0!==t)return Do(t)}(e),n=s.message;void 0===t&&(t=$r.INTERNAL,n="Unknown error status: "+e+" with message "+s.message),u=!0,h.io(new Vr(t,n)),l.close()}else Nr("Connection","WebChannel received:",n),h.ro(n)}})),d(i,Er.STAT_EVENT,(e=>{e.stat===Tr.PROXY?Nr("Connection","Detected buffering proxy"):e.stat===Tr.NOPROXY&&Nr("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(e){return new oa(e,!0)}class Dl{constructor(e,t,n=1e3,r=1.5,s=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=r,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&Nr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),e()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,t,n,r,s,i,o,a){this.Hs=e,this.vo=n,this.Vo=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Dl(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===$r.RESOURCE_EXHAUSTED?(Dr(t.toString()),Dr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===$r.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.So===t&&this.Go(e,n)}),(t=>{e((()=>{const e=new Vr($r.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)}))}))}Go(e,t){const n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((e=>{n((()=>this.Qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(e){return Nr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget((()=>this.So===e?t():(Nr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ll extends Pl{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.yt=s}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=ba(this.yt,e),n=function(e){if(!("targetChange"in e))return ts.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?ts.min():t.readTime?ua(t.readTime):ts.min()}(e);return this.listener.Wo(t,n)}zo(e){const t={};t.database=va(this.yt),t.addTarget=function(e,t){let n;const r=t.target;return n=Ri(r)?{documents:Ta(e,r)}:{query:Sa(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=la(e,t.resumeToken):t.snapshotVersion.compareTo(ts.min())>0&&(n.readTime=aa(e,t.snapshotVersion.toTimestamp())),n}(this.yt,e);const n=Ia(this.yt,e);n&&(t.labels=n),this.Bo(t)}Ho(e){const t={};t.database=va(this.yt),t.removeTarget=e,this.Bo(t)}}class Ml extends Pl{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(Fr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=Ea(e.writeResults,e.commitTime),n=ua(e.commitTime);return this.listener.Zo(n,t)}return Fr(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=va(this.yt),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>_a(this.yt,e)))};this.Bo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.yt=r,this.nu=!1}su(){if(this.nu)throw new Vr($r.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.ao(e,t,n,r,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===$r.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Vr($r.UNKNOWN,e.toString())}))}_o(e,t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection._o(e,t,n,s,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===$r.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Vr($r.UNKNOWN,e.toString())}))}terminate(){this.nu=!0}}class Ul{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Dr(t),this.ou=!1):Nr("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur((e=>{n.enqueueAndForget((async()=>{Kl(this)&&(Nr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Ur(e);t._u.add(4),await jl(t),t.gu.set("Unknown"),t._u.delete(4),await Vl(t)}(this))}))})),this.gu=new Ul(n,r)}}async function Vl(e){if(Kl(e))for(const t of e.wu)await t(!0)}async function jl(e){for(const t of e.wu)await t(!1)}function Bl(e,t){const n=Ur(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Wl(n)?Hl(n):dc(n).ko()&&zl(n,t))}function ql(e,t){const n=Ur(e),r=dc(n);n.du.delete(t),r.ko()&&Gl(n,t),0===n.du.size&&(r.ko()?r.Fo():Kl(n)&&n.gu.set("Unknown"))}function zl(e,t){e.yu.Ot(t.targetId),dc(e).zo(t)}function Gl(e,t){e.yu.Ot(t),dc(e).Ho(t)}function Hl(e){e.yu=new ea({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),dc(e).start(),e.gu.uu()}function Wl(e){return Kl(e)&&!dc(e).No()&&e.du.size>0}function Kl(e){return 0===Ur(e)._u.size}function Jl(e){e.yu=void 0}async function Ql(e){e.du.forEach(((t,n)=>{zl(e,t)}))}async function Xl(e,t){Jl(e),Wl(e)?(e.gu.hu(t),Hl(e)):e.gu.set("Unknown")}async function Yl(e,t,n){if(e.gu.set("Online"),t instanceof Yo&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.du.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.du.delete(r),e.yu.removeTarget(r))}(e,t)}catch(n){Nr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Zl(e,n)}else if(t instanceof Qo?e.yu.Kt(t):t instanceof Xo?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(ts.min()))try{const t=await ml(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.yu.Zt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.du.get(r);s&&e.du.set(r,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(Is.EMPTY_BYTE_STRING,n.snapshotVersion)),Gl(e,t);const r=new Ba(n.target,t,1,n.sequenceNumber);zl(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Nr("RemoteStore","Failed to raise snapshot:",t),await Zl(e,t)}}async function Zl(e,t,n){if(!ms(t))throw t;e._u.add(1),await jl(e),e.gu.set("Offline"),n||(n=()=>ml(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Nr("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await Vl(e)}))}function ec(e,t){return t().catch((n=>Zl(e,n,t)))}async function tc(e){const t=Ur(e),n=fc(t);let r=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;nc(t);)try{const e=await wl(t.localStore,r);if(null===e){0===t.fu.length&&n.Fo();break}r=e.batchId,rc(t,e)}catch(e){await Zl(t,e)}sc(t)&&ic(t)}function nc(e){return Kl(e)&&e.fu.length<10}function rc(e,t){e.fu.push(t);const n=fc(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function sc(e){return Kl(e)&&!fc(e).No()&&e.fu.length>0}function ic(e){fc(e).start()}async function oc(e){fc(e).eu()}async function ac(e){const t=fc(e);for(const n of e.fu)t.Xo(n.mutations)}async function lc(e,t,n){const r=e.fu.shift(),s=Va.from(r,t,n);await ec(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await tc(e)}async function cc(e,t){t&&fc(e).Yo&&await async function(e,t){if(n=t.code,No(n)&&n!==$r.ABORTED){const n=e.fu.shift();fc(e).Mo(),await ec(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await tc(e)}var n}(e,t),sc(e)&&ic(e)}async function uc(e,t){const n=Ur(e);n.asyncQueue.verifyOperationInProgress(),Nr("RemoteStore","RemoteStore received new credentials");const r=Kl(n);n._u.add(3),await jl(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await Vl(n)}async function hc(e,t){const n=Ur(e);t?(n._u.delete(2),await Vl(n)):t||(n._u.add(2),await jl(n),n.gu.set("Unknown"))}function dc(e){return e.pu||(e.pu=function(e,t,n){const r=Ur(e);return r.su(),new Ll(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Yr:Ql.bind(null,e),Zr:Xl.bind(null,e),Wo:Yl.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Mo(),Wl(e)?Hl(e):e.gu.set("Unknown")):(await e.pu.stop(),Jl(e))}))),e.pu}function fc(e){return e.Iu||(e.Iu=function(e,t,n){const r=Ur(e);return r.su(),new Ml(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)}(e.datastore,e.asyncQueue,{Yr:oc.bind(null,e),Zr:cc.bind(null,e),tu:ac.bind(null,e),Zo:lc.bind(null,e)}),e.wu.push((async t=>{t?(e.Iu.Mo(),await tc(e)):(await e.Iu.stop(),e.fu.length>0&&(Nr("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))}))),e.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class pc{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,o=new pc(e,t,i,r,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Vr($r.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gc(e,t){if(Dr("AsyncQueue",`${t}: ${e}`),ms(e))return new Vr($r.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e){this.comparator=e?(t,n)=>e(t,n)||os.comparator(t.key,n.key):(e,t)=>os.comparator(e.key,t.key),this.keyedMap=Uo(),this.sortedSet=new yi(this.comparator)}static emptySet(e){return new mc(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof mc))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new mc;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(){this.Tu=new yi(os.comparator)}track(e){const t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):Mr():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class yc{constructor(e,t,n,r,s,i,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,s){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new yc(e,t,mc.emptySet(t),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this.Au=void 0,this.listeners=[]}}class bc{constructor(){this.queries=new Po((e=>zi(e)),qi),this.onlineState="Unknown",this.Ru=new Set}}async function _c(e,t){const n=Ur(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new wc),s)try{i.Au=await n.onListen(r)}catch(e){const n=gc(e,`Initialization of query '${Gi(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,i),i.listeners.push(t),t.bu(n.onlineState),i.Au&&t.Pu(i.Au)&&Cc(n)}async function Ec(e,t){const n=Ur(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Tc(e,t){const n=Ur(e);let r=!1;for(const s of t){const e=s.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Pu(s)&&(r=!0);t.Au=s}}r&&Cc(n)}function Sc(e,t,n){const r=Ur(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function Cc(e){e.Ru.forEach((e=>{e.next()}))}class Ic{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new yc(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Nu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=yc.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kc{constructor(e){this.key=e}}class xc{constructor(e){this.key=e}}class Ac{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Go(),this.mutatedKeys=Go(),this.Gu=Ki(e),this.Qu=new mc(this.Gu)}get ju(){return this.qu}Wu(e,t){const n=t?t.zu:new vc,r=t?t.Qu:this.Qu;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const c=r.get(e),u=Hi(this.query,t)?t:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Hu(c,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Gu(u,a)>0||l&&this.Gu(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(a||l)&&(o=!0)),f&&(u?(i=i.add(u),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{Qu:i,zu:n,$i:o,mutatedKeys:s}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Mr()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Gu(e.doc,t.doc))),this.Ju(n);const i=t?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==s.length||a?{snapshot:new yc(this.query,e.Qu,r,s,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:i}:{Xu:i}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new vc,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach((e=>this.qu=this.qu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.qu=this.qu.delete(e))),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Go(),this.Qu.forEach((e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))}));const t=[];return e.forEach((e=>{this.Ku.has(e)||t.push(new xc(e))})),this.Ku.forEach((n=>{e.has(n)||t.push(new kc(n))})),t}tc(e){this.qu=e.Hi,this.Ku=Go();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return yc.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class Oc{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Rc{constructor(e){this.key=e,this.nc=!1}}class Nc{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.sc={},this.ic=new Po((e=>zi(e)),qi),this.rc=new Map,this.oc=new Set,this.uc=new yi(os.comparator),this.cc=new Map,this.ac=new tl,this.hc={},this.lc=new Map,this.fc=Ja.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function Dc(e,t){const n=Yc(e);let r,s;const i=n.ic.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ec();else{const e=await bl(n.localStore,Vi(t));n.isPrimaryClient&&Bl(n.remoteStore,e);const i=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,s=await Pc(n,t,r,"current"===i,e.resumeToken)}return s}async function Pc(e,t,n,r,s){e._c=(t,n,r)=>async function(e,t,n,r){let s=t.view.Wu(n);s.$i&&(s=await El(e.localStore,t.query,!1).then((({documents:e})=>t.view.Wu(e,s))));const i=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,i);return Hc(e,t.targetId,o.Xu),o.snapshot}(e,t,n,r);const i=await El(e.localStore,t,!0),o=new Ac(t,i.Hi),a=o.Wu(i.documents),l=Jo.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,s),c=o.applyChanges(a,e.isPrimaryClient,l);Hc(e,n,c.Xu);const u=new Oc(t,n,o);return e.ic.set(t,u),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),c.snapshot}async function Lc(e,t){const n=Ur(e),r=n.ic.get(t),s=n.rc.get(r.targetId);if(s.length>1)return n.rc.set(r.targetId,s.filter((e=>!qi(e,t)))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await _l(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),ql(n.remoteStore,r.targetId),zc(n,r.targetId)})).catch(ps)):(zc(n,r.targetId),await _l(n.localStore,r.targetId,!0))}async function Mc(e,t,n){const r=Zc(e);try{const e=await function(e,t){const n=Ur(e),r=es.now(),s=t.reduce(((e,t)=>e.add(t.key)),Go());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Mo(),l=Go();return n.Gi.getEntries(e,s).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((s=>{i=s;const o=[];for(const e of t){const t=bo(e,i.get(e.key).overlayedDocument);null!=t&&o.push(new To(e.key,t,Ci(t.value.mapValue),po.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(i,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:$o(i)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.hc[e.currentUser.toKey()];r||(r=new yi(Yr)),r=r.insert(t,n),e.hc[e.currentUser.toKey()]=r}(r,e.batchId,n),await Jc(r,e.changes),await tc(r.remoteStore)}catch(e){const t=gc(e,"Failed to persist write");n.reject(t)}}async function Fc(e,t){const n=Ur(e);try{const e=await vl(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.cc.get(t);r&&(Fr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.nc=!0:e.modifiedDocuments.size>0?Fr(r.nc):e.removedDocuments.size>0&&(Fr(r.nc),r.nc=!1))})),await Jc(n,e,t)}catch(e){await ps(e)}}function Uc(e,t,n){const r=Ur(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ic.forEach(((n,r)=>{const s=r.view.bu(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=Ur(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const s of n.listeners)s.bu(t)&&(r=!0)})),r&&Cc(n)}(r.eventManager,t),e.length&&r.sc.Wo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function $c(e,t,n){const r=Ur(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.cc.get(t),i=s&&s.key;if(i){let e=new yi(os.comparator);e=e.insert(i,Ii.newNoDocument(i,ts.min()));const n=Go().add(i),s=new Ko(ts.min(),new Map,new _i(Yr),e,n);await Fc(r,s),r.uc=r.uc.remove(i),r.cc.delete(t),Kc(r)}else await _l(r.localStore,t,!1).then((()=>zc(r,t,n))).catch(ps)}async function Vc(e,t){const n=Ur(e),r=t.batch.batchId;try{const e=await gl(n.localStore,t);qc(n,r,null),Bc(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Jc(n,e)}catch(e){await ps(e)}}async function jc(e,t,n){const r=Ur(e);try{const e=await function(e,t){const n=Ur(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Fr(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);qc(r,t,n),Bc(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Jc(r,e)}catch(n){await ps(n)}}function Bc(e,t){(e.lc.get(t)||[]).forEach((e=>{e.resolve()})),e.lc.delete(t)}function qc(e,t,n){const r=Ur(e);let s=r.hc[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.hc[r.currentUser.toKey()]=s}}function zc(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.rc.get(t))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach((t=>{e.ac.containsKey(t)||Gc(e,t)}))}function Gc(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);null!==n&&(ql(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),Kc(e))}function Hc(e,t,n){for(const r of n)r instanceof kc?(e.ac.addReference(r.key,t),Wc(e,r)):r instanceof xc?(Nr("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||Gc(e,r.key)):Mr()}function Wc(e,t){const n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(Nr("SyncEngine","New document in limbo: "+n),e.oc.add(r),Kc(e))}function Kc(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new os(rs.fromString(t)),r=e.fc.next();e.cc.set(r,new Rc(n)),e.uc=e.uc.insert(n,r),Bl(e.remoteStore,new Ba(Vi(Pi(n.path)),r,2,vs.at))}}async function Jc(e,t,n){const r=Ur(e),s=[],i=[],o=[];r.ic.isEmpty()||(r.ic.forEach(((e,a)=>{o.push(r._c(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){s.push(e);const t=ul.Ci(a.targetId,e);i.push(t)}})))})),await Promise.all(o),r.sc.Wo(s),await async function(e,t){const n=Ur(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>gs.forEach(t,(t=>gs.forEach(t.Si,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>gs.forEach(t.Di,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!ms(e))throw e;Nr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.qi.get(e),r=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(r);n.qi=n.qi.insert(e,s)}}}(r.localStore,i))}async function Qc(e,t){const n=Ur(e);if(!n.currentUser.isEqual(t)){Nr("SyncEngine","User change. New user:",t.toKey());const e=await pl(n.localStore,t);n.currentUser=t,function(e,t){e.lc.forEach((e=>{e.forEach((e=>{e.reject(new Vr($r.CANCELLED,t))}))})),e.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Jc(n,e.ji)}}function Xc(e,t){const n=Ur(e),r=n.cc.get(t);if(r&&r.nc)return Go().add(r.key);{let e=Go();const r=n.rc.get(t);if(!r)return e;for(const t of r){const r=n.ic.get(t);e=e.unionWith(r.view.ju)}return e}}function Yc(e){const t=Ur(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Fc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xc.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=$c.bind(null,t),t.sc.Wo=Tc.bind(null,t.eventManager),t.sc.wc=Sc.bind(null,t.eventManager),t}function Zc(e){const t=Ur(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Vc.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=jc.bind(null,t),t}class eu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Nl(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return fl(this.persistence,new hl,e.initialUser,this.yt)}yc(e){return new al(cl.Bs,this.yt)}gc(e){return new Cl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tu{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Uc(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qc.bind(null,this.syncEngine),await hc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new bc}createDatastore(e){const t=Nl(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Ol(r));var r;return function(e,t,n,r){return new Fl(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,s=e=>Uc(this.syncEngine,e,0),i=kl.C()?new kl:new Il,new $l(t,n,r,s,i);var t,n,r,s,i}createSyncEngine(e,t){return function(e,t,n,r,s,i,o){const a=new Nc(e,t,n,r,s,i);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Ur(e);Nr("RemoteStore","RemoteStore shutting down."),t._u.add(5),await jl(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(e,t,n){if(!n)throw new Vr($r.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ru(e,t,n,r){if(!0===t&&!0===r)throw new Vr($r.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function su(e){if(!os.isDocumentKey(e))throw new Vr($r.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function iu(e){if(os.isDocumentKey(e))throw new Vr($r.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ou(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Mr()}function au(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Vr($r.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ou(e);throw new Vr($r.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function lu(e,t){if(t<=0)throw new Vr($r.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=new Map;class uu{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Vr($r.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Vr($r.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ru("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Vr($r.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Vr($r.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uu(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new qr;switch(e.type){case"gapi":const t=e.client;return new Wr(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Vr($r.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=cu.get(e);t&&(Nr("ComponentProvider","Removing Datastore"),cu.delete(e),t.terminate())}(this),Promise.resolve()}}function du(e,t,n,r={}){var s;const i=(e=au(e,hu))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==t&&Pr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=xr.MOCK_USER;else{t=(0,a.Sg)(r.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new Vr($r.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new xr(i)}e._authCredentials=new zr(new Br(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fu(this.firestore,e,this._key)}}class pu{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new pu(this.firestore,e,this._query)}}class gu extends pu{constructor(e,t,n){super(e,t,Pi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fu(this.firestore,null,new os(e))}withConverter(e){return new gu(this.firestore,e,this._path)}}function mu(e,t,...n){if(e=(0,a.m9)(e),nu("collection","path",t),e instanceof hu){const r=rs.fromString(t,...n);return iu(r),new gu(e,null,r)}{if(!(e instanceof fu||e instanceof gu))throw new Vr($r.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(rs.fromString(t,...n));return iu(r),new gu(e.firestore,null,r)}}function vu(e,t,...n){if(e=(0,a.m9)(e),1===arguments.length&&(t=Xr.R()),nu("doc","path",t),e instanceof hu){const r=rs.fromString(t,...n);return su(r),new fu(e,null,new os(r))}{if(!(e instanceof fu||e instanceof gu))throw new Vr($r.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(rs.fromString(t,...n));return su(r),new fu(e.firestore,e instanceof gu?e.converter:null,new os(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Dr("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wu{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=xr.UNAUTHENTICATED,this.clientId=Xr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Nr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Nr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Vr($r.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=gc(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function bu(e,t){e.asyncQueue.verifyOperationInProgress(),Nr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await pl(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function _u(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Eu(e);Nr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>uc(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>uc(t.remoteStore,n))),e.onlineComponents=t}async function Eu(e){return e.offlineComponents||(Nr("FirestoreClient","Using default OfflineComponentProvider"),await bu(e,new eu)),e.offlineComponents}async function Tu(e){return e.onlineComponents||(Nr("FirestoreClient","Using default OnlineComponentProvider"),await _u(e,new tu)),e.onlineComponents}function Su(e){return Tu(e).then((e=>e.syncEngine))}async function Cu(e){const t=await Tu(e),n=t.eventManager;return n.onListen=Dc.bind(null,t.syncEngine),n.onUnlisten=Lc.bind(null,t.syncEngine),n}function Iu(e,t,n={}){const r=new jr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new yu({next:i=>{t.enqueueAndForget((()=>Ec(e,o)));const a=i.docs.has(n);!a&&i.fromCache?s.reject(new Vr($r.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new Vr($r.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:e=>s.reject(e)}),o=new Ic(Pi(n.path),i,{includeMetadataChanges:!0,Nu:!0});return _c(e,o)}(await Cu(e),e.asyncQueue,t,n,r))),r.promise}function ku(e,t,n={}){const r=new jr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new yu({next:n=>{t.enqueueAndForget((()=>Ec(e,o))),n.fromCache&&"server"===r.source?s.reject(new Vr($r.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new Ic(n,i,{includeMetadataChanges:!0,Nu:!0});return _c(e,o)}(await Cu(e),e.asyncQueue,t,n,r))),r.promise}class xu{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Dl(this,"async_queue_retry"),this.Wc=()=>{const e=Rl();e&&Nr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};const e=Rl();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const t=Rl();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise((()=>{}));const t=new jr;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Lc.push(e),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(E){if(!ms(E))throw E;Nr("AsyncQueue","Operation failed with retryable error: "+E)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(e){const t=this.Bc.then((()=>(this.Gc=!0,e().catch((e=>{this.Kc=e,this.Gc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Dr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Gc=!1,e))))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const r=pc.createAndSchedule(this,e,t,n,(e=>this.Yc(e)));return this.Uc.push(r),r}zc(){this.Kc&&Mr()}verifyOperationInProgress(){}async Xc(){let e;do{e=this.Bc,await e}while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then((()=>{this.Uc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Uc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()}))}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}class Au extends hu{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new xu,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Nu(this),this._firestoreClient.terminate()}}function Ou(e,t){const n="object"==typeof e?e:(0,s.Mq)(),r="string"==typeof e?e:t||"(default)",i=(0,s.qX)(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const e=(0,a.P0)("firestore");e&&du(i,...e)}return i}function Ru(e){return e._firestoreClient||Nu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Nu(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new ys(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new wu(e._authCredentials,e._appCheckCredentials,e._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Du{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Du(Is.fromBase64String(e))}catch(e){throw new Vr($r.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Du(Is.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Vr($r.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new is(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lu{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Vr($r.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Vr($r.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Yr(this._lat,e._lat)||Yr(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=/^__.*__$/;class Uu{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new To(e,this.data,this.fieldMask,t,this.fieldTransforms):new Eo(e,this.data,t,this.fieldTransforms)}}class $u{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new To(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Vu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Mr()}}class ju{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.yt=n,this.ignoreUndefinedProperties=r,void 0===s&&this.na(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new ju(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}ca(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return nh(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(Vu(this.sa)&&Fu.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Bu{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=n||Nl(e)}da(e,t,n,r=!1){return new ju({sa:e,methodName:t,fa:n,path:is.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function qu(e){const t=e._freezeSettings(),n=Nl(e._databaseId);return new Bu(e._databaseId,!!t.ignoreUndefinedProperties,n)}function zu(e,t,n,r,s,i={}){const o=e.da(i.merge||i.mergeFields?2:0,t,n,s);Yu("Data must be an object, but it was:",o,r);const a=Qu(r,o);let l,c;if(i.merge)l=new Ti(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=Zu(t,r,n);if(!o.contains(s))throw new Vr($r.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);rh(e,s)||e.push(s)}l=new Ti(e),c=o.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,c=o.fieldTransforms;return new Uu(new Si(a),l,c)}class Gu extends Lu{_toFieldTransform(e){if(2!==e.sa)throw 1===e.sa?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gu}}function Hu(e,t,n,r){const s=e.da(1,t,n);Yu("Data must be an object, but it was:",s,r);const i=[],o=Si.empty();_s(r,((e,r)=>{const l=th(t,e,n);r=(0,a.m9)(r);const c=s.ca(l);if(r instanceof Gu)i.push(l);else{const e=Ju(r,c);null!=e&&(i.push(l),o.set(l,e))}}));const l=new Ti(i);return new $u(o,l,s.fieldTransforms)}function Wu(e,t,n,r,s,i){const o=e.da(1,t,n),l=[Zu(t,r,n)],c=[s];if(i.length%2!=0)throw new Vr($r.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<i.length;a+=2)l.push(Zu(t,i[a])),c.push(i[a+1]);const u=[],h=Si.empty();for(let f=l.length-1;f>=0;--f)if(!rh(u,l[f])){const e=l[f];let t=c[f];t=(0,a.m9)(t);const n=o.ca(e);if(t instanceof Gu)u.push(e);else{const r=Ju(t,n);null!=r&&(u.push(e),h.set(e,r))}}const d=new Ti(u);return new $u(h,d,o.fieldTransforms)}function Ku(e,t,n,r=!1){return Ju(n,e.da(r?4:3,t))}function Ju(e,t){if(Xu(e=(0,a.m9)(e)))return Yu("Unsupported field value:",t,e),Qu(e,t);if(e instanceof Lu)return function(e,t){if(!Vu(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const s of e){let e=Ju(s,t.aa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Yi(t.yt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=es.fromDate(e);return{timestampValue:aa(t.yt,n)}}if(e instanceof es){const n=new es(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:aa(t.yt,n)}}if(e instanceof Mu)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Du)return{bytesValue:la(t.yt,e._byteString)};if(e instanceof fu){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ha(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${ou(e)}`)}(e,t)}function Qu(e,t){const n={};return Es(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):_s(e,((e,r)=>{const s=Ju(r,t.ra(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function Xu(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof es||e instanceof Mu||e instanceof Du||e instanceof fu||e instanceof Lu)}function Yu(e,t,n){if(!Xu(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=ou(n);throw"an object"===r?t.ha(e+" a custom object"):t.ha(e+" "+r)}}function Zu(e,t,n){if((t=(0,a.m9)(t))instanceof Pu)return t._internalPath;if("string"==typeof t)return th(e,t);throw nh("Field path arguments must be of type string or ",e,!1,void 0,n)}const eh=new RegExp("[~\\*/\\[\\]]");function th(e,t,n){if(t.search(eh)>=0)throw nh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Pu(...t.split("."))._internalPath}catch(r){throw nh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function nh(e,t,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Vr($r.INVALID_ARGUMENT,a+e+l)}function rh(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new fu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new ih(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(oh("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class ih extends sh{data(){return super.data()}}function oh(e,t){return"string"==typeof t?th(e,t):t instanceof Pu?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Vr($r.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lh{}class ch extends lh{}function uh(e,t,...n){let r=[];t instanceof lh&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof dh)).length,n=e.filter((e=>e instanceof hh)).length;if(t>1||t>0&&n>0)throw new Vr($r.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const s of r)e=s._apply(e);return e}class hh extends ch{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new hh(e,t,n)}_apply(e){const t=this._parse(e);return bh(e._query,t),new pu(e.firestore,e.converter,ji(e._query,t))}_parse(e){const t=qu(e.firestore),n=function(e,t,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new Vr($r.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){wh(o,i);const t=[];for(const n of o)t.push(yh(r,e,n));a={arrayValue:{values:t}}}else a=yh(r,e,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||wh(o,i),a=Ku(n,t,o,"in"===i||"not-in"===i);return ei.create(s,i,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}class dh extends lh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new dh(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:ti.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const s of r)bh(n,s),n=ji(n,s)}(e._query,t),new pu(e.firestore,e.converter,ji(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class fh extends ch{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new fh(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new Vr($r.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new Vr($r.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new mi(t,n);return function(e,t){if(null===Mi(e)){const n=Fi(e);null!==n&&_h(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new pu(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Ni(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function ph(e,t="asc"){const n=t,r=oh("orderBy",e);return fh._create(r,n)}class gh extends ch{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new gh(e,t,n)}_apply(e){return new pu(e.firestore,e.converter,Bi(e._query,this._limit,this._limitType))}}function mh(e){return lu("limit",e),gh._create("limit",e,"F")}function vh(e){return lu("limitToLast",e),gh._create("limitToLast",e,"L")}function yh(e,t,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new Vr($r.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ui(t)&&-1!==n.indexOf("/"))throw new Vr($r.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(rs.fromString(n));if(!os.isDocumentKey(r))throw new Vr($r.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Bs(e,new os(r))}if(n instanceof fu)return Bs(e,n._key);throw new Vr($r.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ou(n)}.`)}function wh(e,t){if(!Array.isArray(e)||0===e.length)throw new Vr($r.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new Vr($r.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function bh(e,t){if(t.isInequality()){const n=Fi(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new Vr($r.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const s=Mi(e);null!==s&&_h(e,r,s)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Vr($r.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Vr($r.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function _h(e,t,n){if(!n.isEqual(t))throw new Vr($r.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Eh{convertValue(e,t="none"){switch(Ls(e)){case 0:return null;case 1:return e.booleanValue;case 2:return As(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Mr()}}convertObject(e,t){const n={};return _s(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Mu(As(e.latitude),As(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ns(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ds(e));default:return null}}convertTimestamp(e){const t=xs(e);return new es(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=rs.fromString(e);Fr(La(n));const r=new ws(n.get(1),n.get(3)),s=new os(n.popFirst(5));return r.isEqual(t)||Dr(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sh{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ch extends sh{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ih(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(oh("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Ih extends Ch{data(e={}){return super.data(e)}}class kh{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Sh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Ih(this._firestore,this._userDataWriter,n.key,n,new Sh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Vr($r.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new Ih(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Sh(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Ih(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Sh(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:xh(t.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function xh(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Mr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ah(e){e=au(e,fu);const t=au(e.firestore,Au);return Iu(Ru(t),e._key).then((n=>Mh(t,e,n)))}class Oh extends Eh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Du(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new fu(this.firestore,null,t)}}function Rh(e){e=au(e,pu);const t=au(e.firestore,Au),n=Ru(t),r=new Oh(t);return ah(e._query),ku(n,e._query).then((n=>new kh(t,r,e,n)))}function Nh(e,t,n){e=au(e,fu);const r=au(e.firestore,Au),s=Th(e.converter,t,n);return Lh(r,[zu(qu(r),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,po.none())])}function Dh(e,t,n,...r){e=au(e,fu);const s=au(e.firestore,Au),i=qu(s);let o;return o="string"==typeof(t=(0,a.m9)(t))||t instanceof Pu?Wu(i,"updateDoc",e._key,t,n,r):Hu(i,"updateDoc",e._key,t),Lh(s,[o.toMutation(e._key,po.exists(!0))])}function Ph(e){return Lh(au(e.firestore,Au),[new ko(e._key,po.none())])}function Lh(e,t){return function(e,t){const n=new jr;return e.asyncQueue.enqueueAndForget((async()=>Mc(await Su(e),t,n))),n.promise}(Ru(e),t)}function Mh(e,t,n){const r=n.docs.get(t._key),s=new Oh(e);return new Ch(e,s,t._key,r,new Sh(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){Ar=e}(s.Jn),(0,s.Xd)(new i.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new Au(new Gr(e.getProvider("auth-internal")),new Jr(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Vr($r.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ws(e.options.projectId,t)}(s,n),s);return r=Object.assign({useFetchStreams:t},r),i._setSettings(r),i}),"PUBLIC").setMultipleInstances(!0)),(0,s.KN)(kr,"3.8.0",e),(0,s.KN)(kr,"3.8.0","esm2017")}()},1294:function(e,t,n){"use strict";n.d(t,{oq:function(){return it},Jt:function(){return st},cF:function(){return at},iH:function(){return ot},KV:function(){return rt}});n(2801),n(7658);var r=n(7077),s=n(223),i=n(7142);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",l=12e4,c=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u extends s.ZR{constructor(e,t,n=0){super(h(e),`Firebase Storage: ${t} (${h(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,u.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return h(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function h(e){return"storage/"+e}function d(){const e="An unknown error occurred, please check the error payload for server response.";return new u("unknown",e)}function f(e){return new u("object-not-found","Object '"+e+"' does not exist.")}function p(e){return new u("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function g(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new u("unauthenticated",e)}function m(){return new u("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function v(e){return new u("unauthorized","User does not have permission to access '"+e+"'.")}function y(){return new u("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function w(){return new u("canceled","User canceled the upload/download.")}function b(e){return new u("invalid-url","Invalid URL '"+e+"'.")}function _(e){return new u("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function E(){return new u("no-default-bucket","No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function T(){return new u("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function S(){return new u("no-download-url","The given file does not have any download URLs.")}function C(e){return new u("unsupported-environment",`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function I(e){return new u("invalid-argument",e)}function k(){return new u("app-deleted","The Firebase app was deleted.")}function x(e){return new u("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function A(e,t){return new u("invalid-format","String does not match format '"+e+"': "+t)}function O(e){throw new u("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=R.makeFromUrl(e,t)}catch(r){return new R(e,"")}if(""===n.path)return n;throw _(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function s(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+r+i,"i"),l={bucket:1,path:3};function c(e){e.path_=decodeURIComponent(e.path)}const u="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},g=t===o?"(?:storage.googleapis.com|storage.cloud.google.com)":t,m="([^?#]*)",v=new RegExp(`^https?://${g}/${r}/${m}`,"i"),y={bucket:1,path:2},w=[{regex:a,indices:l,postModify:s},{regex:f,indices:p,postModify:c},{regex:v,indices:y,postModify:c}];for(let o=0;o<w.length;o++){const t=w[o],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let s=r[t.indices.path];s||(s=""),n=new R(e,s),t.postModify(n);break}}if(null==n)throw b(e);return n}}class N{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return 2===a}let c=!1;function u(...e){c||(c=!0,t.apply(null,e))}function h(t){s=setTimeout((()=>{s=null,e(f,l())}),t)}function d(){i&&clearTimeout(i)}function f(e,...t){if(c)return void d();if(e)return d(),void u.call(null,e,...t);const n=l()||o;if(n)return d(),void u.call(null,e,...t);let s;r<64&&(r*=2),1===a?(a=2,s=0):s=1e3*(r+Math.random()),h(s)}let p=!1;function g(e){p||(p=!0,d(),c||(null!==s?(e||(a=2),clearTimeout(s),h(0)):e||(a=1)))}return h(0),i=setTimeout((()=>{o=!0,g(!0)}),n),g}function P(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){return void 0!==e}function M(e){return"object"===typeof e&&!Array.isArray(e)}function F(e){return"string"===typeof e||e instanceof String}function U(e){return $()&&e instanceof Blob}function $(){return"undefined"!==typeof Blob&&!(0,s.UG)()}function V(e,t,n,r){if(r<t)throw I(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw I(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function B(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const s=t(r)+"="+t(e[r]);n=n+s+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(e,t){const n=e>=500&&e<600,r=[408,429],s=-1!==r.indexOf(e),i=-1!==t.indexOf(e);return n||s||i}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(q||(q={}));class G{constructor(e,t,n,r,s,i,o,a,l,c,u,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=i,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new H(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===q.NO_ERROR,s=n.getStatus();if((!t||z(s,this.additionalRetryCodes_))&&this.retry){const t=n.getErrorCode()===q.ABORT;return void e(!1,new H(!1,null,t))}const i=-1!==this.successCodes_.indexOf(s);e(!0,new H(i,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,s=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(s,s.getResponse());L(e)?n(e):n()}catch(i){r(i)}else if(null!==s){const e=d();e.serverResponse=s.getErrorText(),this.errorCallback_?r(this.errorCallback_(s,e)):r(e)}else if(t.canceled){const e=this.appDelete_?k():w();r(e)}else{const e=y();r(e)}};this.canceled_?t(!1,new H(!1,null,!0)):this.backoffId_=D(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&P(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class H{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function W(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function K(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function J(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Q(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function X(e,t,n,r,s,i,o=!0){const a=B(e.urlParams),l=e.url+a,c=Object.assign({},e.headers);return J(c,t),W(c,n),K(c,i),Q(c,r),new G(l,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Z(...e){const t=Y();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if($())return new Blob(e);throw new u("unsupported-environment","This browser doesn't seem to support creating Blobs")}function ee(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){if("undefined"===typeof atob)throw C("base-64");return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class re{constructor(e,t){this.data=e,this.contentType=t||null}}function se(e,t){switch(e){case ne.RAW:return new re(ie(t));case ne.BASE64:case ne.BASE64URL:return new re(ae(e,t));case ne.DATA_URL:return new re(ce(t),ue(t))}throw d()}function ie(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const s=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(s){const s=r,i=e.charCodeAt(++n);r=65536|(1023&s)<<10|1023&i,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function oe(e){let t;try{t=decodeURIComponent(e)}catch(n){throw A(ne.DATA_URL,"Malformed data URL.")}return ie(t)}function ae(e,t){switch(e){case ne.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){const t=n?"-":"_";throw A(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case ne.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){const t=n?"+":"/";throw A(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=te(t)}catch(s){if(s.message.includes("polyfill"))throw s;throw A(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class le{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw A(ne.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=he(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}function ce(e){const t=new le(e);return t.base64?ae(ne.BASE64,t.rest):oe(t.rest)}function ue(e){const t=new le(e);return t.contentType}function he(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t){let n=0,r="";U(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(U(this.data_)){const n=this.data_,r=ee(n,e,t);return null===r?null:new de(r)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new de(n,!0)}}static getBlob(...e){if($()){const t=e.map((e=>e instanceof de?e.data_:e));return new de(Z.apply(null,t))}{const t=e.map((e=>F(e)?se(ne.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let s=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[s++]=e[t]})),new de(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e){let t;try{t=JSON.parse(e)}catch(n){return null}return M(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function ge(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}function me(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e,t){return t}class ye{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||ve}}let we=null;function be(e){return!F(e)||e.length<2?e:me(e)}function _e(){if(we)return we;const e=[];function t(e,t){return be(t)}e.push(new ye("bucket")),e.push(new ye("generation")),e.push(new ye("metageneration")),e.push(new ye("name","fullPath",!0));const n=new ye("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const s=new ye("size");return s.xform=r,e.push(s),e.push(new ye("timeCreated")),e.push(new ye("updated")),e.push(new ye("md5Hash",null,!0)),e.push(new ye("cacheControl",null,!0)),e.push(new ye("contentDisposition",null,!0)),e.push(new ye("contentEncoding",null,!0)),e.push(new ye("contentLanguage",null,!0)),e.push(new ye("contentType",null,!0)),e.push(new ye("metadata","customMetadata",!0)),we=e,we}function Ee(e,t){function n(){const n=e["bucket"],r=e["fullPath"],s=new R(n,r);return t._makeStorageReference(s)}Object.defineProperty(e,"ref",{get:n})}function Te(e,t,n){const r={type:"file"},s=n.length;for(let i=0;i<s;i++){const e=n[i];r[e.local]=e.xform(r,t[e.server])}return Ee(r,e),r}function Se(e,t,n){const r=fe(t);if(null===r)return null;const s=r;return Te(e,s,n)}function Ce(e,t,n,r){const s=fe(t);if(null===s)return null;if(!F(s["downloadTokens"]))return null;const i=s["downloadTokens"];if(0===i.length)return null;const o=encodeURIComponent,a=i.split(","),l=a.map((t=>{const s=e["bucket"],i=e["fullPath"],a="/b/"+o(s)+"/o/"+o(i),l=j(a,n,r),c=B({alt:"media",token:t});return l+c}));return l[0]}function Ie(e,t){const n={},r=t.length;for(let s=0;s<r;s++){const r=t[s];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(e){if(!e)throw d()}function Ae(e,t){function n(n,r){const s=Se(e,r,t);return xe(null!==s),s}return n}function Oe(e,t){function n(n,r){const s=Se(e,r,t);return xe(null!==s),Ce(s,r,e.host,e._protocol)}return n}function Re(e){function t(t,n){let r;return r=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?m():g():402===t.getStatus()?p(e.bucket):403===t.getStatus()?v(e.path):n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}return t}function Ne(e){const t=Re(e);function n(n,r){let s=t(n,r);return 404===n.getStatus()&&(s=f(e.path)),s.serverResponse=r.serverResponse,s}return n}function De(e,t,n){const r=t.fullServerUrl(),s=j(r,e.host,e._protocol),i="GET",o=e.maxOperationRetryTime,a=new ke(s,i,Oe(e,n),o);return a.errorHandler=Ne(t),a}function Pe(e,t){const n=t.fullServerUrl(),r=j(n,e.host,e._protocol),s="DELETE",i=e.maxOperationRetryTime;function o(e,t){}const a=new ke(r,s,o,i);return a.successCodes=[200,204],a.errorHandler=Ne(t),a}function Le(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function Me(e,t,n){const r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=Le(null,t)),r}function Fe(e,t,n,r,s){const i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=Me(t,r,s),u=Ie(c,n),h="--"+l+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+l+"\r\nContent-Type: "+c["contentType"]+"\r\n\r\n",d="\r\n--"+l+"--",f=de.getBlob(h,r,d);if(null===f)throw T();const p={name:c["fullPath"]},g=j(i,e.host,e._protocol),m="POST",v=e.maxUploadRetryTime,y=new ke(g,m,Ae(e,n),v);return y.urlParams=p,y.headers=o,y.body=f.uploadData(),y.errorHandler=Re(t),y}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ue=null;class $e{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=q.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=q.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=q.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw O("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const s in r)r.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,r[s].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw O("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw O("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw O("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw O("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class Ve extends $e{initXhr(){this.xhr_.responseType="text"}}function je(){return Ue?Ue():new Ve}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Be{constructor(e,t){this._service=e,this._location=t instanceof R?t:R.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Be(e,t)}get root(){const e=new R(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return me(this._location.path)}get storage(){return this._service}get parent(){const e=pe(this._location.path);if(null===e)return null;const t=new R(this._location.bucket,e);return new Be(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw x(e)}}function qe(e,t,n){e._throwIfRoot("uploadBytes");const r=Fe(e.storage,e._location,_e(),new de(t,!0),n);return e.storage.makeRequestWithTokens(r,je).then((t=>({metadata:t,ref:e})))}function ze(e){e._throwIfRoot("getDownloadURL");const t=De(e.storage,e._location,_e());return e.storage.makeRequestWithTokens(t,je).then((e=>{if(null===e)throw S();return e}))}function Ge(e){e._throwIfRoot("deleteObject");const t=Pe(e.storage,e._location);return e.storage.makeRequestWithTokens(t,je)}function He(e,t){const n=ge(e._location.path,t),r=new R(e._location.bucket,n);return new Be(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(e){return/^[A-Za-z]+:\/\//.test(e)}function Ke(e,t){return new Be(e,t)}function Je(e,t){if(e instanceof Ze){const n=e;if(null==n._bucket)throw E();const r=new Be(n,n._bucket);return null!=t?Je(r,t):r}return void 0!==t?He(e,t):e}function Qe(e,t){if(t&&We(t)){if(e instanceof Ze)return Ke(e,t);throw I("To use ref(service, url), the first argument must be a Storage instance.")}return Je(e,t)}function Xe(e,t){const n=null===t||void 0===t?void 0:t[a];return null==n?null:R.makeFromBucketSpec(n,e)}function Ye(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"===typeof i?i:(0,s.Sg)(i,e.app.options.projectId))}class Ze{constructor(e,t,n,r,s){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=l,this._maxUploadRetryTime=c,this._requests=new Set,this._bucket=null!=r?R.makeFromBucketSpec(r,this._host):Xe(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=R.makeFromBucketSpec(this._url,e):this._bucket=Xe(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){V("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){V("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Be(this,e)}_makeRequest(e,t,n,r,s=!0){if(this._deleted)return new N(k());{const i=X(e,this._appId,n,r,t,this._firebaseVersion,s);return this._requests.add(i),i.getPromise().then((()=>this._requests.delete(i)),(()=>this._requests.delete(i))),i}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const et="@firebase/storage",tt="0.10.0",nt="storage";function rt(e,t,n){return e=(0,s.m9)(e),qe(e,t,n)}function st(e){return e=(0,s.m9)(e),ze(e)}function it(e){return e=(0,s.m9)(e),Ge(e)}function ot(e,t){return e=(0,s.m9)(e),Qe(e,t)}function at(e=(0,r.Mq)(),t){e=(0,s.m9)(e);const n=(0,r.qX)(e,nt),i=n.getImmediate({identifier:t}),o=(0,s.P0)("storage");return o&&lt(i,...o),i}function lt(e,t,n,r={}){Ye(e,t,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new Ze(n,s,i,t,r.Jn)}function ut(){(0,r.Xd)(new i.wA(nt,ct,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(et,tt,""),(0,r.KN)(et,tt,"esm2017")}ut()},4191:function(e,t,n){"use strict";n.d(t,{s5:function(){return qt},xW:function(){return Wt},W_:function(){return $t},tl:function(){return jt},LW:function(){return Bt},ZP:function(){return Ft}});n(7658);function r(e){return null!==e&&"object"===typeof e&&"constructor"in e&&e.constructor===Object}function s(e={},t={}){Object.keys(t).forEach((n=>{"undefined"===typeof e[n]?e[n]=t[n]:r(t[n])&&r(e[n])&&Object.keys(t[n]).length>0&&s(e[n],t[n])}))}const i={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function o(){const e="undefined"!==typeof document?document:{};return s(e,i),e}const a={document:i,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return"undefined"===typeof setTimeout?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){"undefined"!==typeof setTimeout&&clearTimeout(e)}};function l(){const e="undefined"!==typeof window?window:{};return s(e,a),e}n(541);function c(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get(){return t},set(e){t.__proto__=e}})}class u extends Array{constructor(e){"number"===typeof e?super(e):(super(...e||[]),c(this))}}function h(e=[]){const t=[];return e.forEach((e=>{Array.isArray(e)?t.push(...h(e)):t.push(e)})),t}function d(e,t){return Array.prototype.filter.call(e,t)}function f(e){const t=[];for(let n=0;n<e.length;n+=1)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function p(e,t){if("string"!==typeof e)return[e];const n=[],r=t.querySelectorAll(e);for(let s=0;s<r.length;s+=1)n.push(r[s]);return n}function g(e,t){const n=l(),r=o();let s=[];if(!t&&e instanceof u)return e;if(!e)return new u(s);if("string"===typeof e){const n=e.trim();if(n.indexOf("<")>=0&&n.indexOf(">")>=0){let e="div";0===n.indexOf("<li")&&(e="ul"),0===n.indexOf("<tr")&&(e="tbody"),0!==n.indexOf("<td")&&0!==n.indexOf("<th")||(e="tr"),0===n.indexOf("<tbody")&&(e="table"),0===n.indexOf("<option")&&(e="select");const t=r.createElement(e);t.innerHTML=n;for(let n=0;n<t.childNodes.length;n+=1)s.push(t.childNodes[n])}else s=p(e.trim(),t||r)}else if(e.nodeType||e===n||e===r)s.push(e);else if(Array.isArray(e)){if(e instanceof u)return e;s=e}return new u(f(s))}function m(...e){const t=h(e.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.add(...t)})),this}function v(...e){const t=h(e.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.remove(...t)})),this}function y(...e){const t=h(e.map((e=>e.split(" "))));this.forEach((e=>{t.forEach((t=>{e.classList.toggle(t)}))}))}function w(...e){const t=h(e.map((e=>e.split(" "))));return d(this,(e=>t.filter((t=>e.classList.contains(t))).length>0)).length>0}function b(e,t){if(1===arguments.length&&"string"===typeof e)return this[0]?this[0].getAttribute(e):void 0;for(let n=0;n<this.length;n+=1)if(2===arguments.length)this[n].setAttribute(e,t);else for(const t in e)this[n][t]=e[t],this[n].setAttribute(t,e[t]);return this}function _(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this}function E(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this}function T(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!==typeof e?`${e}ms`:e;return this}function S(...e){let[t,n,r,s]=e;function i(e){const t=e.target;if(!t)return;const s=e.target.dom7EventData||[];if(s.indexOf(e)<0&&s.unshift(e),g(t).is(n))r.apply(t,s);else{const e=g(t).parents();for(let t=0;t<e.length;t+=1)g(e[t]).is(n)&&r.apply(e[t],s)}}function o(e){const t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),r.apply(this,t)}"function"===typeof e[1]&&([t,r,s]=e,n=void 0),s||(s=!1);const a=t.split(" ");let l;for(let c=0;c<this.length;c+=1){const e=this[c];if(n)for(l=0;l<a.length;l+=1){const t=a[l];e.dom7LiveListeners||(e.dom7LiveListeners={}),e.dom7LiveListeners[t]||(e.dom7LiveListeners[t]=[]),e.dom7LiveListeners[t].push({listener:r,proxyListener:i}),e.addEventListener(t,i,s)}else for(l=0;l<a.length;l+=1){const t=a[l];e.dom7Listeners||(e.dom7Listeners={}),e.dom7Listeners[t]||(e.dom7Listeners[t]=[]),e.dom7Listeners[t].push({listener:r,proxyListener:o}),e.addEventListener(t,o,s)}}return this}function C(...e){let[t,n,r,s]=e;"function"===typeof e[1]&&([t,r,s]=e,n=void 0),s||(s=!1);const i=t.split(" ");for(let o=0;o<i.length;o+=1){const e=i[o];for(let t=0;t<this.length;t+=1){const i=this[t];let o;if(!n&&i.dom7Listeners?o=i.dom7Listeners[e]:n&&i.dom7LiveListeners&&(o=i.dom7LiveListeners[e]),o&&o.length)for(let t=o.length-1;t>=0;t-=1){const n=o[t];r&&n.listener===r||r&&n.listener&&n.listener.dom7proxy&&n.listener.dom7proxy===r?(i.removeEventListener(e,n.proxyListener,s),o.splice(t,1)):r||(i.removeEventListener(e,n.proxyListener,s),o.splice(t,1))}}}return this}function I(...e){const t=l(),n=e[0].split(" "),r=e[1];for(let s=0;s<n.length;s+=1){const i=n[s];for(let n=0;n<this.length;n+=1){const s=this[n];if(t.CustomEvent){const n=new t.CustomEvent(i,{detail:r,bubbles:!0,cancelable:!0});s.dom7EventData=e.filter(((e,t)=>t>0)),s.dispatchEvent(n),s.dom7EventData=[],delete s.dom7EventData}}}return this}function k(e){const t=this;function n(r){r.target===this&&(e.call(this,r),t.off("transitionend",n))}return e&&t.on("transitionend",n),this}function x(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null}function A(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null}function O(){if(this.length>0){const e=l(),t=o(),n=this[0],r=n.getBoundingClientRect(),s=t.body,i=n.clientTop||s.clientTop||0,a=n.clientLeft||s.clientLeft||0,c=n===e?e.scrollY:n.scrollTop,u=n===e?e.scrollX:n.scrollLeft;return{top:r.top+c-i,left:r.left+u-a}}return null}function R(){const e=l();return this[0]?e.getComputedStyle(this[0],null):{}}function N(e,t){const n=l();let r;if(1===arguments.length){if("string"!==typeof e){for(r=0;r<this.length;r+=1)for(const t in e)this[r].style[t]=e[t];return this}if(this[0])return n.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"===typeof e){for(r=0;r<this.length;r+=1)this[r].style[e]=t;return this}return this}function D(e){return e?(this.forEach(((t,n)=>{e.apply(t,[t,n])})),this):this}function P(e){const t=d(this,e);return g(t)}function L(e){if("undefined"===typeof e)return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this}function M(e){if("undefined"===typeof e)return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this}function F(e){const t=l(),n=o(),r=this[0];let s,i;if(!r||"undefined"===typeof e)return!1;if("string"===typeof e){if(r.matches)return r.matches(e);if(r.webkitMatchesSelector)return r.webkitMatchesSelector(e);if(r.msMatchesSelector)return r.msMatchesSelector(e);for(s=g(e),i=0;i<s.length;i+=1)if(s[i]===r)return!0;return!1}if(e===n)return r===n;if(e===t)return r===t;if(e.nodeType||e instanceof u){for(s=e.nodeType?[e]:e,i=0;i<s.length;i+=1)if(s[i]===r)return!0;return!1}return!1}function U(){let e,t=this[0];if(t){e=0;while(null!==(t=t.previousSibling))1===t.nodeType&&(e+=1);return e}}function $(e){if("undefined"===typeof e)return this;const t=this.length;if(e>t-1)return g([]);if(e<0){const n=t+e;return g(n<0?[]:[this[n]])}return g([this[e]])}function V(...e){let t;const n=o();for(let r=0;r<e.length;r+=1){t=e[r];for(let e=0;e<this.length;e+=1)if("string"===typeof t){const r=n.createElement("div");r.innerHTML=t;while(r.firstChild)this[e].appendChild(r.firstChild)}else if(t instanceof u)for(let n=0;n<t.length;n+=1)this[e].appendChild(t[n]);else this[e].appendChild(t)}return this}function j(e){const t=o();let n,r;for(n=0;n<this.length;n+=1)if("string"===typeof e){const s=t.createElement("div");for(s.innerHTML=e,r=s.childNodes.length-1;r>=0;r-=1)this[n].insertBefore(s.childNodes[r],this[n].childNodes[0])}else if(e instanceof u)for(r=0;r<e.length;r+=1)this[n].insertBefore(e[r],this[n].childNodes[0]);else this[n].insertBefore(e,this[n].childNodes[0]);return this}function B(e){return this.length>0?e?this[0].nextElementSibling&&g(this[0].nextElementSibling).is(e)?g([this[0].nextElementSibling]):g([]):this[0].nextElementSibling?g([this[0].nextElementSibling]):g([]):g([])}function q(e){const t=[];let n=this[0];if(!n)return g([]);while(n.nextElementSibling){const r=n.nextElementSibling;e?g(r).is(e)&&t.push(r):t.push(r),n=r}return g(t)}function z(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&g(t.previousElementSibling).is(e)?g([t.previousElementSibling]):g([]):t.previousElementSibling?g([t.previousElementSibling]):g([])}return g([])}function G(e){const t=[];let n=this[0];if(!n)return g([]);while(n.previousElementSibling){const r=n.previousElementSibling;e?g(r).is(e)&&t.push(r):t.push(r),n=r}return g(t)}function H(e){const t=[];for(let n=0;n<this.length;n+=1)null!==this[n].parentNode&&(e?g(this[n].parentNode).is(e)&&t.push(this[n].parentNode):t.push(this[n].parentNode));return g(t)}function W(e){const t=[];for(let n=0;n<this.length;n+=1){let r=this[n].parentNode;while(r)e?g(r).is(e)&&t.push(r):t.push(r),r=r.parentNode}return g(t)}function K(e){let t=this;return"undefined"===typeof e?g([]):(t.is(e)||(t=t.parents(e).eq(0)),t)}function J(e){const t=[];for(let n=0;n<this.length;n+=1){const r=this[n].querySelectorAll(e);for(let e=0;e<r.length;e+=1)t.push(r[e])}return g(t)}function Q(e){const t=[];for(let n=0;n<this.length;n+=1){const r=this[n].children;for(let n=0;n<r.length;n+=1)e&&!g(r[n]).is(e)||t.push(r[n])}return g(t)}function X(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}g.fn=u.prototype;const Y="resize scroll".split(" ");function Z(e){function t(...t){if("undefined"===typeof t[0]){for(let t=0;t<this.length;t+=1)Y.indexOf(e)<0&&(e in this[t]?this[t][e]():g(this[t]).trigger(e));return this}return this.on(e,...t)}return t}Z("click"),Z("blur"),Z("focus"),Z("focusin"),Z("focusout"),Z("keyup"),Z("keydown"),Z("keypress"),Z("submit"),Z("change"),Z("mousedown"),Z("mousemove"),Z("mouseup"),Z("mouseenter"),Z("mouseleave"),Z("mouseout"),Z("mouseover"),Z("touchstart"),Z("touchend"),Z("touchmove"),Z("resize"),Z("scroll");const ee={addClass:m,removeClass:v,hasClass:w,toggleClass:y,attr:b,removeAttr:_,transform:E,transition:T,on:S,off:C,trigger:I,transitionEnd:k,outerWidth:x,outerHeight:A,styles:R,offset:O,css:N,each:D,html:L,text:M,is:F,index:U,eq:$,append:V,prepend:j,next:B,nextAll:q,prev:z,prevAll:G,parent:H,parents:W,closest:K,find:J,children:Q,filter:P,remove:X};Object.keys(ee).forEach((e=>{Object.defineProperty(g.fn,e,{value:ee[e],writable:!0})}));var te=g;function ne(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(n){}try{delete t[e]}catch(n){}}))}function re(e,t=0){return setTimeout(e,t)}function se(){return Date.now()}function ie(e){const t=l();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function oe(e,t="x"){const n=l();let r,s,i;const o=ie(e,null);return n.WebKitCSSMatrix?(s=o.transform||o.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map((e=>e.replace(",","."))).join(", ")),i=new n.WebKitCSSMatrix("none"===s?"":s)):(i=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=i.toString().split(",")),"x"===t&&(s=n.WebKitCSSMatrix?i.m41:16===r.length?parseFloat(r[12]):parseFloat(r[4])),"y"===t&&(s=n.WebKitCSSMatrix?i.m42:16===r.length?parseFloat(r[13]):parseFloat(r[5])),s||0}function ae(e){return"object"===typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function le(e){return"undefined"!==typeof window&&"undefined"!==typeof window.HTMLElement?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)}function ce(...e){const t=Object(e[0]),n=["__proto__","constructor","prototype"];for(let r=1;r<e.length;r+=1){const s=e[r];if(void 0!==s&&null!==s&&!le(s)){const e=Object.keys(Object(s)).filter((e=>n.indexOf(e)<0));for(let n=0,r=e.length;n<r;n+=1){const r=e[n],i=Object.getOwnPropertyDescriptor(s,r);void 0!==i&&i.enumerable&&(ae(t[r])&&ae(s[r])?s[r].__swiper__?t[r]=s[r]:ce(t[r],s[r]):!ae(t[r])&&ae(s[r])?(t[r]={},s[r].__swiper__?t[r]=s[r]:ce(t[r],s[r])):t[r]=s[r])}}}return t}function ue(e,t,n){e.style.setProperty(t,n)}function he({swiper:e,targetPosition:t,side:n}){const r=l(),s=-e.translate;let i,o=null;const a=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const c=t>s?"next":"prev",u=(e,t)=>"next"===c&&e>=t||"prev"===c&&e<=t,h=()=>{i=(new Date).getTime(),null===o&&(o=i);const l=Math.max(Math.min((i-o)/a,1),0),c=.5-Math.cos(l*Math.PI)/2;let d=s+c*(t-s);if(u(d,t)&&(d=t),e.wrapperEl.scrollTo({[n]:d}),u(d,t))return e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout((()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:d})})),void r.cancelAnimationFrame(e.cssModeFrameID);e.cssModeFrameID=r.requestAnimationFrame(h)};h()}let de,fe,pe;function ge(){const e=l(),t=o();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let t=!1;try{const n=Object.defineProperty({},"passive",{get(){t=!0}});e.addEventListener("testPassiveListener",null,n)}catch(n){}return t}(),gestures:function(){return"ongesturestart"in e}()}}function me(){return de||(de=ge()),de}function ve({userAgent:e}={}){const t=me(),n=l(),r=n.navigator.platform,s=e||n.navigator.userAgent,i={ios:!1,android:!1},o=n.screen.width,a=n.screen.height,c=s.match(/(Android);?[\s\/]+([\d.]+)?/);let u=s.match(/(iPad).*OS\s([\d_]+)/);const h=s.match(/(iPod)(.*OS\s([\d_]+))?/),d=!u&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f="Win32"===r;let p="MacIntel"===r;const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&p&&t.touch&&g.indexOf(`${o}x${a}`)>=0&&(u=s.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),p=!1),c&&!f&&(i.os="android",i.android=!0),(u||d||h)&&(i.os="ios",i.ios=!0),i}function ye(e={}){return fe||(fe=ve(e)),fe}function we(){const e=l();function t(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}return{isSafari:t(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}function be(){return pe||(pe=we()),pe}function _e({swiper:e,on:t,emit:n}){const r=l();let s=null,i=null;const o=()=>{e&&!e.destroyed&&e.initialized&&(n("beforeResize"),n("resize"))},a=()=>{e&&!e.destroyed&&e.initialized&&(s=new ResizeObserver((t=>{i=r.requestAnimationFrame((()=>{const{width:n,height:r}=e;let s=n,i=r;t.forEach((({contentBoxSize:t,contentRect:n,target:r})=>{r&&r!==e.el||(s=n?n.width:(t[0]||t).inlineSize,i=n?n.height:(t[0]||t).blockSize)})),s===n&&i===r||o()}))})),s.observe(e.el))},c=()=>{i&&r.cancelAnimationFrame(i),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null)},u=()=>{e&&!e.destroyed&&e.initialized&&n("orientationchange")};t("init",(()=>{e.params.resizeObserver&&"undefined"!==typeof r.ResizeObserver?a():(r.addEventListener("resize",o),r.addEventListener("orientationchange",u))})),t("destroy",(()=>{c(),r.removeEventListener("resize",o),r.removeEventListener("orientationchange",u)}))}function Ee({swiper:e,extendParams:t,on:n,emit:r}){const s=[],i=l(),o=(e,t={})=>{const n=i.MutationObserver||i.WebkitMutationObserver,o=new n((e=>{if(1===e.length)return void r("observerUpdate",e[0]);const t=function(){r("observerUpdate",e[0])};i.requestAnimationFrame?i.requestAnimationFrame(t):i.setTimeout(t,0)}));o.observe(e,{attributes:"undefined"===typeof t.attributes||t.attributes,childList:"undefined"===typeof t.childList||t.childList,characterData:"undefined"===typeof t.characterData||t.characterData}),s.push(o)},a=()=>{if(e.params.observer){if(e.params.observeParents){const t=e.$el.parents();for(let e=0;e<t.length;e+=1)o(t[e])}o(e.$el[0],{childList:e.params.observeSlideChildren}),o(e.$wrapperEl[0],{attributes:!1})}},c=()=>{s.forEach((e=>{e.disconnect()})),s.splice(0,s.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",a),n("destroy",c)}var Te={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed)return r;if("function"!==typeof t)return r;const s=n?"unshift":"push";return e.split(" ").forEach((e=>{r.eventsListeners[e]||(r.eventsListeners[e]=[]),r.eventsListeners[e][s](t)})),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed)return r;if("function"!==typeof t)return r;function s(...n){r.off(e,s),s.__emitterProxy&&delete s.__emitterProxy,t.apply(r,n)}return s.__emitterProxy=t,r.on(e,s,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!==typeof e)return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed?n:n.eventsListeners?(e.split(" ").forEach((e=>{"undefined"===typeof t?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach(((r,s)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&n.eventsListeners[e].splice(s,1)}))})),n):n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsListeners)return t;let n,r,s;"string"===typeof e[0]||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),s=t):(n=e[0].events,r=e[0].data,s=e[0].context||t),r.unshift(s);const i=Array.isArray(n)?n:n.split(" ");return i.forEach((e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach((t=>{t.apply(s,[e,...r])})),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach((e=>{e.apply(s,r)}))})),t}};function Se(){const e=this;let t,n;const r=e.$el;t="undefined"!==typeof e.params.width&&null!==e.params.width?e.params.width:r[0].clientWidth,n="undefined"!==typeof e.params.height&&null!==e.params.height?e.params.height:r[0].clientHeight,0===t&&e.isHorizontal()||0===n&&e.isVertical()||(t=t-parseInt(r.css("padding-left")||0,10)-parseInt(r.css("padding-right")||0,10),n=n-parseInt(r.css("padding-top")||0,10)-parseInt(r.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function Ce(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function n(e,n){return parseFloat(e.getPropertyValue(t(n))||0)}const r=e.params,{$wrapperEl:s,size:i,rtlTranslate:o,wrongRTL:a}=e,l=e.virtual&&r.virtual.enabled,c=l?e.virtual.slides.length:e.slides.length,u=s.children(`.${e.params.slideClass}`),h=l?e.virtual.slides.length:u.length;let d=[];const f=[],p=[];let g=r.slidesOffsetBefore;"function"===typeof g&&(g=r.slidesOffsetBefore.call(e));let m=r.slidesOffsetAfter;"function"===typeof m&&(m=r.slidesOffsetAfter.call(e));const v=e.snapGrid.length,y=e.slidesGrid.length;let w=r.spaceBetween,b=-g,_=0,E=0;if("undefined"===typeof i)return;"string"===typeof w&&w.indexOf("%")>=0&&(w=parseFloat(w.replace("%",""))/100*i),e.virtualSize=-w,o?u.css({marginLeft:"",marginBottom:"",marginTop:""}):u.css({marginRight:"",marginBottom:"",marginTop:""}),r.centeredSlides&&r.cssMode&&(ue(e.wrapperEl,"--swiper-centered-offset-before",""),ue(e.wrapperEl,"--swiper-centered-offset-after",""));const T=r.grid&&r.grid.rows>1&&e.grid;let S;T&&e.grid.initSlides(h);const C="auto"===r.slidesPerView&&r.breakpoints&&Object.keys(r.breakpoints).filter((e=>"undefined"!==typeof r.breakpoints[e].slidesPerView)).length>0;for(let I=0;I<h;I+=1){S=0;const s=u.eq(I);if(T&&e.grid.updateSlide(I,s,h,t),"none"!==s.css("display")){if("auto"===r.slidesPerView){C&&(u[I].style[t("width")]="");const i=getComputedStyle(s[0]),o=s[0].style.transform,a=s[0].style.webkitTransform;if(o&&(s[0].style.transform="none"),a&&(s[0].style.webkitTransform="none"),r.roundLengths)S=e.isHorizontal()?s.outerWidth(!0):s.outerHeight(!0);else{const e=n(i,"width"),t=n(i,"padding-left"),r=n(i,"padding-right"),o=n(i,"margin-left"),a=n(i,"margin-right"),l=i.getPropertyValue("box-sizing");if(l&&"border-box"===l)S=e+o+a;else{const{clientWidth:n,offsetWidth:i}=s[0];S=e+t+r+o+a+(i-n)}}o&&(s[0].style.transform=o),a&&(s[0].style.webkitTransform=a),r.roundLengths&&(S=Math.floor(S))}else S=(i-(r.slidesPerView-1)*w)/r.slidesPerView,r.roundLengths&&(S=Math.floor(S)),u[I]&&(u[I].style[t("width")]=`${S}px`);u[I]&&(u[I].swiperSlideSize=S),p.push(S),r.centeredSlides?(b=b+S/2+_/2+w,0===_&&0!==I&&(b=b-i/2-w),0===I&&(b=b-i/2-w),Math.abs(b)<.001&&(b=0),r.roundLengths&&(b=Math.floor(b)),E%r.slidesPerGroup===0&&d.push(b),f.push(b)):(r.roundLengths&&(b=Math.floor(b)),(E-Math.min(e.params.slidesPerGroupSkip,E))%e.params.slidesPerGroup===0&&d.push(b),f.push(b),b=b+S+w),e.virtualSize+=S+w,_=S,E+=1}}if(e.virtualSize=Math.max(e.virtualSize,i)+m,o&&a&&("slide"===r.effect||"coverflow"===r.effect)&&s.css({width:`${e.virtualSize+r.spaceBetween}px`}),r.setWrapperSize&&s.css({[t("width")]:`${e.virtualSize+r.spaceBetween}px`}),T&&e.grid.updateWrapperSize(S,d,t),!r.centeredSlides){const t=[];for(let n=0;n<d.length;n+=1){let s=d[n];r.roundLengths&&(s=Math.floor(s)),d[n]<=e.virtualSize-i&&t.push(s)}d=t,Math.floor(e.virtualSize-i)-Math.floor(d[d.length-1])>1&&d.push(e.virtualSize-i)}if(0===d.length&&(d=[0]),0!==r.spaceBetween){const n=e.isHorizontal()&&o?"marginLeft":t("marginRight");u.filter(((e,t)=>!r.cssMode||t!==u.length-1)).css({[n]:`${w}px`})}if(r.centeredSlides&&r.centeredSlidesBounds){let e=0;p.forEach((t=>{e+=t+(r.spaceBetween?r.spaceBetween:0)})),e-=r.spaceBetween;const t=e-i;d=d.map((e=>e<0?-g:e>t?t+m:e))}if(r.centerInsufficientSlides){let e=0;if(p.forEach((t=>{e+=t+(r.spaceBetween?r.spaceBetween:0)})),e-=r.spaceBetween,e<i){const t=(i-e)/2;d.forEach(((e,n)=>{d[n]=e-t})),f.forEach(((e,n)=>{f[n]=e+t}))}}if(Object.assign(e,{slides:u,snapGrid:d,slidesGrid:f,slidesSizesGrid:p}),r.centeredSlides&&r.cssMode&&!r.centeredSlidesBounds){ue(e.wrapperEl,"--swiper-centered-offset-before",-d[0]+"px"),ue(e.wrapperEl,"--swiper-centered-offset-after",e.size/2-p[p.length-1]/2+"px");const t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+n))}if(h!==c&&e.emit("slidesLengthChange"),d.length!==v&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),f.length!==y&&e.emit("slidesGridLengthChange"),r.watchSlidesProgress&&e.updateSlidesOffset(),!l&&!r.cssMode&&("slide"===r.effect||"fade"===r.effect)){const t=`${r.containerModifierClass}backface-hidden`,n=e.$el.hasClass(t);h<=r.maxBackfaceHiddenSlides?n||e.$el.addClass(t):n&&e.$el.removeClass(t)}}function Ie(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let s,i=0;"number"===typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const o=e=>r?t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"),10)===e))[0]:t.slides.eq(e)[0];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||te([])).each((e=>{n.push(e)}));else for(s=0;s<Math.ceil(t.params.slidesPerView);s+=1){const e=t.activeIndex+s;if(e>t.slides.length&&!r)break;n.push(o(e))}else n.push(o(t.activeIndex));for(s=0;s<n.length;s+=1)if("undefined"!==typeof n[s]){const e=n[s].offsetHeight;i=e>i?e:i}(i||0===i)&&t.$wrapperEl.css("height",`${i}px`)}function ke(){const e=this,t=e.slides;for(let n=0;n<t.length;n+=1)t[n].swiperSlideOffset=e.isHorizontal()?t[n].offsetLeft:t[n].offsetTop}function xe(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:s,snapGrid:i}=t;if(0===r.length)return;"undefined"===typeof r[0].swiperSlideOffset&&t.updateSlidesOffset();let o=-e;s&&(o=e),r.removeClass(n.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let a=0;a<r.length;a+=1){const e=r[a];let l=e.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(l-=r[0].swiperSlideOffset);const c=(o+(n.centeredSlides?t.minTranslate():0)-l)/(e.swiperSlideSize+n.spaceBetween),u=(o-i[0]+(n.centeredSlides?t.minTranslate():0)-l)/(e.swiperSlideSize+n.spaceBetween),h=-(o-l),d=h+t.slidesSizesGrid[a],f=h>=0&&h<t.size-1||d>1&&d<=t.size||h<=0&&d>=t.size;f&&(t.visibleSlides.push(e),t.visibleSlidesIndexes.push(a),r.eq(a).addClass(n.slideVisibleClass)),e.progress=s?-c:c,e.originalProgress=s?-u:u}t.visibleSlides=te(t.visibleSlides)}function Ae(e){const t=this;if("undefined"===typeof e){const n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:s,isBeginning:i,isEnd:o}=t;const a=i,l=o;0===r?(s=0,i=!0,o=!0):(s=(e-t.minTranslate())/r,i=s<=0,o=s>=1),Object.assign(t,{progress:s,isBeginning:i,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),i&&!a&&t.emit("reachBeginning toEdge"),o&&!l&&t.emit("reachEnd toEdge"),(a&&!i||l&&!o)&&t.emit("fromEdge"),t.emit("progress",s)}function Oe(){const e=this,{slides:t,params:n,$wrapperEl:r,activeIndex:s,realIndex:i}=e,o=e.virtual&&n.virtual.enabled;let a;t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`),a=o?e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${s}"]`):t.eq(s),a.addClass(n.slideActiveClass),n.loop&&(a.hasClass(n.slideDuplicateClass)?r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${i}"]`).addClass(n.slideDuplicateActiveClass):r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${i}"]`).addClass(n.slideDuplicateActiveClass));let l=a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);n.loop&&0===l.length&&(l=t.eq(0),l.addClass(n.slideNextClass));let c=a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);n.loop&&0===c.length&&(c=t.eq(-1),c.addClass(n.slidePrevClass)),n.loop&&(l.hasClass(n.slideDuplicateClass)?r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass):r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass),c.hasClass(n.slideDuplicateClass)?r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass):r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)),e.emitSlidesClasses()}function Re(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:r,snapGrid:s,params:i,activeIndex:o,realIndex:a,snapIndex:l}=t;let c,u=e;if("undefined"===typeof u){for(let e=0;e<r.length;e+=1)"undefined"!==typeof r[e+1]?n>=r[e]&&n<r[e+1]-(r[e+1]-r[e])/2?u=e:n>=r[e]&&n<r[e+1]&&(u=e+1):n>=r[e]&&(u=e);i.normalizeSlideIndex&&(u<0||"undefined"===typeof u)&&(u=0)}if(s.indexOf(n)>=0)c=s.indexOf(n);else{const e=Math.min(i.slidesPerGroupSkip,u);c=e+Math.floor((u-e)/i.slidesPerGroup)}if(c>=s.length&&(c=s.length-1),u===o)return void(c!==l&&(t.snapIndex=c,t.emit("snapIndexChange")));const h=parseInt(t.slides.eq(u).attr("data-swiper-slide-index")||u,10);Object.assign(t,{snapIndex:c,realIndex:h,previousIndex:o,activeIndex:u}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),a!==h&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}function Ne(e){const t=this,n=t.params,r=te(e).closest(`.${n.slideClass}`)[0];let s,i=!1;if(r)for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===r){i=!0,s=o;break}if(!r||!i)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(te(r).attr("data-swiper-slide-index"),10):t.clickedIndex=s,n.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var De={updateSize:Se,updateSlides:Ce,updateAutoHeight:Ie,updateSlidesOffset:ke,updateSlidesProgress:xe,updateProgress:Ae,updateSlidesClasses:Oe,updateActiveIndex:Re,updateClickedSlide:Ne};function Pe(e=(this.isHorizontal()?"x":"y")){const t=this,{params:n,rtlTranslate:r,translate:s,$wrapperEl:i}=t;if(n.virtualTranslate)return r?-s:s;if(n.cssMode)return s;let o=oe(i[0],e);return r&&(o=-o),o||0}function Le(e,t){const n=this,{rtlTranslate:r,params:s,$wrapperEl:i,wrapperEl:o,progress:a}=n;let l=0,c=0;const u=0;let h;n.isHorizontal()?l=r?-e:e:c=e,s.roundLengths&&(l=Math.floor(l),c=Math.floor(c)),s.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-c:s.virtualTranslate||i.transform(`translate3d(${l}px, ${c}px, ${u}px)`),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:c;const d=n.maxTranslate()-n.minTranslate();h=0===d?0:(e-n.minTranslate())/d,h!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function Me(){return-this.snapGrid[0]}function Fe(){return-this.snapGrid[this.snapGrid.length-1]}function Ue(e=0,t=this.params.speed,n=!0,r=!0,s){const i=this,{params:o,wrapperEl:a}=i;if(i.animating&&o.preventInteractionOnTransition)return!1;const l=i.minTranslate(),c=i.maxTranslate();let u;if(u=r&&e>l?l:r&&e<c?c:e,i.updateProgress(u),o.cssMode){const e=i.isHorizontal();if(0===t)a[e?"scrollLeft":"scrollTop"]=-u;else{if(!i.support.smoothScroll)return he({swiper:i,targetPosition:-u,side:e?"left":"top"}),!0;a.scrollTo({[e?"left":"top"]:-u,behavior:"smooth"})}return!0}return 0===t?(i.setTransition(0),i.setTranslate(u),n&&(i.emit("beforeTransitionStart",t,s),i.emit("transitionEnd"))):(i.setTransition(t),i.setTranslate(u),n&&(i.emit("beforeTransitionStart",t,s),i.emit("transitionStart")),i.animating||(i.animating=!0,i.onTranslateToWrapperTransitionEnd||(i.onTranslateToWrapperTransitionEnd=function(e){i&&!i.destroyed&&e.target===this&&(i.$wrapperEl[0].removeEventListener("transitionend",i.onTranslateToWrapperTransitionEnd),i.$wrapperEl[0].removeEventListener("webkitTransitionEnd",i.onTranslateToWrapperTransitionEnd),i.onTranslateToWrapperTransitionEnd=null,delete i.onTranslateToWrapperTransitionEnd,n&&i.emit("transitionEnd"))}),i.$wrapperEl[0].addEventListener("transitionend",i.onTranslateToWrapperTransitionEnd),i.$wrapperEl[0].addEventListener("webkitTransitionEnd",i.onTranslateToWrapperTransitionEnd))),!0}var $e={getTranslate:Pe,setTranslate:Le,minTranslate:Me,maxTranslate:Fe,translateTo:Ue};function Ve(e,t){const n=this;n.params.cssMode||n.$wrapperEl.transition(e),n.emit("setTransition",e,t)}function je({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:s,previousIndex:i}=e;let o=n;if(o||(o=s>i?"next":s<i?"prev":"reset"),e.emit(`transition${r}`),t&&s!==i){if("reset"===o)return void e.emit(`slideResetTransition${r}`);e.emit(`slideChangeTransition${r}`),"next"===o?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`)}}function Be(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),je({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function qe(e=!0,t){const n=this,{params:r}=n;n.animating=!1,r.cssMode||(n.setTransition(0),je({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var ze={setTransition:Ve,transitionStart:Be,transitionEnd:qe};function Ge(e=0,t=this.params.speed,n=!0,r,s){if("number"!==typeof e&&"string"!==typeof e)throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if("string"===typeof e){const t=parseInt(e,10),n=isFinite(t);if(!n)throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const i=this;let o=e;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:h,rtlTranslate:d,wrapperEl:f,enabled:p}=i;if(i.animating&&a.preventInteractionOnTransition||!p&&!r&&!s)return!1;const g=Math.min(i.params.slidesPerGroupSkip,o);let m=g+Math.floor((o-g)/i.params.slidesPerGroup);m>=l.length&&(m=l.length-1);const v=-l[m];if(a.normalizeSlideIndex)for(let w=0;w<c.length;w+=1){const e=-Math.floor(100*v),t=Math.floor(100*c[w]),n=Math.floor(100*c[w+1]);"undefined"!==typeof c[w+1]?e>=t&&e<n-(n-t)/2?o=w:e>=t&&e<n&&(o=w+1):e>=t&&(o=w)}if(i.initialized&&o!==h){if(!i.allowSlideNext&&v<i.translate&&v<i.minTranslate())return!1;if(!i.allowSlidePrev&&v>i.translate&&v>i.maxTranslate()&&(h||0)!==o)return!1}let y;if(o!==(u||0)&&n&&i.emit("beforeSlideChangeStart"),i.updateProgress(v),y=o>h?"next":o<h?"prev":"reset",d&&-v===i.translate||!d&&v===i.translate)return i.updateActiveIndex(o),a.autoHeight&&i.updateAutoHeight(),i.updateSlidesClasses(),"slide"!==a.effect&&i.setTranslate(v),"reset"!==y&&(i.transitionStart(n,y),i.transitionEnd(n,y)),!1;if(a.cssMode){const e=i.isHorizontal(),n=d?v:-v;if(0===t){const t=i.virtual&&i.params.virtual.enabled;t&&(i.wrapperEl.style.scrollSnapType="none",i._immediateVirtual=!0),f[e?"scrollLeft":"scrollTop"]=n,t&&requestAnimationFrame((()=>{i.wrapperEl.style.scrollSnapType="",i._swiperImmediateVirtual=!1}))}else{if(!i.support.smoothScroll)return he({swiper:i,targetPosition:n,side:e?"left":"top"}),!0;f.scrollTo({[e?"left":"top"]:n,behavior:"smooth"})}return!0}return i.setTransition(t),i.setTranslate(v),i.updateActiveIndex(o),i.updateSlidesClasses(),i.emit("beforeTransitionStart",t,r),i.transitionStart(n,y),0===t?i.transitionEnd(n,y):i.animating||(i.animating=!0,i.onSlideToWrapperTransitionEnd||(i.onSlideToWrapperTransitionEnd=function(e){i&&!i.destroyed&&e.target===this&&(i.$wrapperEl[0].removeEventListener("transitionend",i.onSlideToWrapperTransitionEnd),i.$wrapperEl[0].removeEventListener("webkitTransitionEnd",i.onSlideToWrapperTransitionEnd),i.onSlideToWrapperTransitionEnd=null,delete i.onSlideToWrapperTransitionEnd,i.transitionEnd(n,y))}),i.$wrapperEl[0].addEventListener("transitionend",i.onSlideToWrapperTransitionEnd),i.$wrapperEl[0].addEventListener("webkitTransitionEnd",i.onSlideToWrapperTransitionEnd)),!0}function He(e=0,t=this.params.speed,n=!0,r){if("string"===typeof e){const t=parseInt(e,10),n=isFinite(t);if(!n)throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const s=this;let i=e;return s.params.loop&&(i+=s.loopedSlides),s.slideTo(i,t,n,r)}function We(e=this.params.speed,t=!0,n){const r=this,{animating:s,enabled:i,params:o}=r;if(!i)return r;let a=o.slidesPerGroup;"auto"===o.slidesPerView&&1===o.slidesPerGroup&&o.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<o.slidesPerGroupSkip?1:a;if(o.loop){if(s&&o.loopPreventsSlide)return!1;r.loopFix(),r._clientLeft=r.$wrapperEl[0].clientLeft}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}function Ke(e=this.params.speed,t=!0,n){const r=this,{params:s,animating:i,snapGrid:o,slidesGrid:a,rtlTranslate:l,enabled:c}=r;if(!c)return r;if(s.loop){if(i&&s.loopPreventsSlide)return!1;r.loopFix(),r._clientLeft=r.$wrapperEl[0].clientLeft}const u=l?r.translate:-r.translate;function h(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const d=h(u),f=o.map((e=>h(e)));let p=o[f.indexOf(d)-1];if("undefined"===typeof p&&s.cssMode){let e;o.forEach(((t,n)=>{d>=t&&(e=n)})),"undefined"!==typeof e&&(p=o[e>0?e-1:e])}let g=0;if("undefined"!==typeof p&&(g=a.indexOf(p),g<0&&(g=r.activeIndex-1),"auto"===s.slidesPerView&&1===s.slidesPerGroup&&s.slidesPerGroupAuto&&(g=g-r.slidesPerViewDynamic("previous",!0)+1,g=Math.max(g,0))),s.rewind&&r.isBeginning){const s=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(s,e,t,n)}return r.slideTo(g,e,t,n)}function Je(e=this.params.speed,t=!0,n){const r=this;return r.slideTo(r.activeIndex,e,t,n)}function Qe(e=this.params.speed,t=!0,n,r=.5){const s=this;let i=s.activeIndex;const o=Math.min(s.params.slidesPerGroupSkip,i),a=o+Math.floor((i-o)/s.params.slidesPerGroup),l=s.rtlTranslate?s.translate:-s.translate;if(l>=s.snapGrid[a]){const e=s.snapGrid[a],t=s.snapGrid[a+1];l-e>(t-e)*r&&(i+=s.params.slidesPerGroup)}else{const e=s.snapGrid[a-1],t=s.snapGrid[a];l-e<=(t-e)*r&&(i-=s.params.slidesPerGroup)}return i=Math.max(i,0),i=Math.min(i,s.slidesGrid.length-1),s.slideTo(i,e,t,n)}function Xe(){const e=this,{params:t,$wrapperEl:n}=e,r="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let s,i=e.clickedIndex;if(t.loop){if(e.animating)return;s=parseInt(te(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=n.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),re((()=>{e.slideTo(i)}))):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=n.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),re((()=>{e.slideTo(i)}))):e.slideTo(i)}else e.slideTo(i)}var Ye={slideTo:Ge,slideToLoop:He,slideNext:We,slidePrev:Ke,slideReset:Je,slideToClosest:Qe,slideToClickedSlide:Xe};function Ze(){const e=this,t=o(),{params:n,$wrapperEl:r}=e,s=r.children().length>0?te(r.children()[0].parentNode):r;s.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();let i=s.children(`.${n.slideClass}`);if(n.loopFillGroupWithBlank){const e=n.slidesPerGroup-i.length%n.slidesPerGroup;if(e!==n.slidesPerGroup){for(let r=0;r<e;r+=1){const e=te(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);s.append(e)}i=s.children(`.${n.slideClass}`)}}"auto"!==n.slidesPerView||n.loopedSlides||(n.loopedSlides=i.length),e.loopedSlides=Math.ceil(parseFloat(n.loopedSlides||n.slidesPerView,10)),e.loopedSlides+=n.loopAdditionalSlides,e.loopedSlides>i.length&&e.params.loopedSlidesLimit&&(e.loopedSlides=i.length);const a=[],l=[];i.each(((e,t)=>{const n=te(e);n.attr("data-swiper-slide-index",t)}));for(let o=0;o<e.loopedSlides;o+=1){const e=o-Math.floor(o/i.length)*i.length;l.push(i.eq(e)[0]),a.unshift(i.eq(i.length-e-1)[0])}for(let o=0;o<l.length;o+=1)s.append(te(l[o].cloneNode(!0)).addClass(n.slideDuplicateClass));for(let o=a.length-1;o>=0;o-=1)s.prepend(te(a[o].cloneNode(!0)).addClass(n.slideDuplicateClass))}function et(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:n,loopedSlides:r,allowSlidePrev:s,allowSlideNext:i,snapGrid:o,rtlTranslate:a}=e;let l;e.allowSlidePrev=!0,e.allowSlideNext=!0;const c=-o[t],u=c-e.getTranslate();if(t<r){l=n.length-3*r+t,l+=r;const s=e.slideTo(l,0,!1,!0);s&&0!==u&&e.setTranslate((a?-e.translate:e.translate)-u)}else if(t>=n.length-r){l=-n.length+t+r,l+=r;const s=e.slideTo(l,0,!1,!0);s&&0!==u&&e.setTranslate((a?-e.translate:e.translate)-u)}e.allowSlidePrev=s,e.allowSlideNext=i,e.emit("loopFix")}function tt(){const e=this,{$wrapperEl:t,params:n,slides:r}=e;t.children(`.${n.slideClass}.${n.slideDuplicateClass},.${n.slideClass}.${n.slideBlankClass}`).remove(),r.removeAttr("data-swiper-slide-index")}var nt={loopCreate:Ze,loopFix:et,loopDestroy:tt};function rt(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;n.style.cursor="move",n.style.cursor=e?"grabbing":"grab"}function st(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="")}var it={setGrabCursor:rt,unsetGrabCursor:st};function ot(e,t=this){function n(t){if(!t||t===o()||t===l())return null;t.assignedSlot&&(t=t.assignedSlot);const r=t.closest(e);return r||t.getRootNode?r||n(t.getRootNode().host):null}return n(t)}function at(e){const t=this,n=o(),r=l(),s=t.touchEventsData,{params:i,touches:a,enabled:c}=t;if(!c)return;if(t.animating&&i.preventInteractionOnTransition)return;!t.animating&&i.cssMode&&i.loop&&t.loopFix();let u=e;u.originalEvent&&(u=u.originalEvent);let h=te(u.target);if("wrapper"===i.touchEventsTarget&&!h.closest(t.wrapperEl).length)return;if(s.isTouchEvent="touchstart"===u.type,!s.isTouchEvent&&"which"in u&&3===u.which)return;if(!s.isTouchEvent&&"button"in u&&u.button>0)return;if(s.isTouched&&s.isMoved)return;const d=!!i.noSwipingClass&&""!==i.noSwipingClass,f=e.composedPath?e.composedPath():e.path;d&&u.target&&u.target.shadowRoot&&f&&(h=te(f[0]));const p=i.noSwipingSelector?i.noSwipingSelector:`.${i.noSwipingClass}`,g=!(!u.target||!u.target.shadowRoot);if(i.noSwiping&&(g?ot(p,h[0]):h.closest(p)[0]))return void(t.allowClick=!0);if(i.swipeHandler&&!h.closest(i.swipeHandler)[0])return;a.currentX="touchstart"===u.type?u.targetTouches[0].pageX:u.pageX,a.currentY="touchstart"===u.type?u.targetTouches[0].pageY:u.pageY;const m=a.currentX,v=a.currentY,y=i.edgeSwipeDetection||i.iOSEdgeSwipeDetection,w=i.edgeSwipeThreshold||i.iOSEdgeSwipeThreshold;if(y&&(m<=w||m>=r.innerWidth-w)){if("prevent"!==y)return;e.preventDefault()}if(Object.assign(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=m,a.startY=v,s.touchStartTime=se(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,i.threshold>0&&(s.allowThresholdMove=!1),"touchstart"!==u.type){let e=!0;h.is(s.focusableElements)&&(e=!1,"SELECT"===h[0].nodeName&&(s.isTouched=!1)),n.activeElement&&te(n.activeElement).is(s.focusableElements)&&n.activeElement!==h[0]&&n.activeElement.blur();const r=e&&t.allowTouchMove&&i.touchStartPreventDefault;!i.touchStartForcePreventDefault&&!r||h[0].isContentEditable||u.preventDefault()}t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!i.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",u)}function lt(e){const t=o(),n=this,r=n.touchEventsData,{params:s,touches:i,rtlTranslate:a,enabled:l}=n;if(!l)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),!r.isTouched)return void(r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",c));if(r.isTouchEvent&&"touchmove"!==c.type)return;const u="touchmove"===c.type&&c.targetTouches&&(c.targetTouches[0]||c.changedTouches[0]),h="touchmove"===c.type?u.pageX:c.pageX,d="touchmove"===c.type?u.pageY:c.pageY;if(c.preventedByNestedSwiper)return i.startX=h,void(i.startY=d);if(!n.allowTouchMove)return te(c.target).is(r.focusableElements)||(n.allowClick=!1),void(r.isTouched&&(Object.assign(i,{startX:h,startY:d,currentX:h,currentY:d}),r.touchStartTime=se()));if(r.isTouchEvent&&s.touchReleaseOnEdges&&!s.loop)if(n.isVertical()){if(d<i.startY&&n.translate<=n.maxTranslate()||d>i.startY&&n.translate>=n.minTranslate())return r.isTouched=!1,void(r.isMoved=!1)}else if(h<i.startX&&n.translate<=n.maxTranslate()||h>i.startX&&n.translate>=n.minTranslate())return;if(r.isTouchEvent&&t.activeElement&&c.target===t.activeElement&&te(c.target).is(r.focusableElements))return r.isMoved=!0,void(n.allowClick=!1);if(r.allowTouchCallbacks&&n.emit("touchMove",c),c.targetTouches&&c.targetTouches.length>1)return;i.currentX=h,i.currentY=d;const f=i.currentX-i.startX,p=i.currentY-i.startY;if(n.params.threshold&&Math.sqrt(f**2+p**2)<n.params.threshold)return;if("undefined"===typeof r.isScrolling){let e;n.isHorizontal()&&i.currentY===i.startY||n.isVertical()&&i.currentX===i.startX?r.isScrolling=!1:f*f+p*p>=25&&(e=180*Math.atan2(Math.abs(p),Math.abs(f))/Math.PI,r.isScrolling=n.isHorizontal()?e>s.touchAngle:90-e>s.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",c),"undefined"===typeof r.startMoving&&(i.currentX===i.startX&&i.currentY===i.startY||(r.startMoving=!0)),r.isScrolling)return void(r.isTouched=!1);if(!r.startMoving)return;n.allowClick=!1,!s.cssMode&&c.cancelable&&c.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&c.stopPropagation(),r.isMoved||(s.loop&&!s.cssMode&&n.loopFix(),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating&&n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),r.allowMomentumBounce=!1,!s.grabCursor||!0!==n.allowSlideNext&&!0!==n.allowSlidePrev||n.setGrabCursor(!0),n.emit("sliderFirstMove",c)),n.emit("sliderMove",c),r.isMoved=!0;let g=n.isHorizontal()?f:p;i.diff=g,g*=s.touchRatio,a&&(g=-g),n.swipeDirection=g>0?"prev":"next",r.currentTranslate=g+r.startTranslate;let m=!0,v=s.resistanceRatio;if(s.touchReleaseOnEdges&&(v=0),g>0&&r.currentTranslate>n.minTranslate()?(m=!1,s.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+g)**v)):g<0&&r.currentTranslate<n.maxTranslate()&&(m=!1,s.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-g)**v)),m&&(c.preventedByNestedSwiper=!0),!n.allowSlideNext&&"next"===n.swipeDirection&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&"prev"===n.swipeDirection&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),n.allowSlidePrev||n.allowSlideNext||(r.currentTranslate=r.startTranslate),s.threshold>0){if(!(Math.abs(g)>s.threshold||r.allowThresholdMove))return void(r.currentTranslate=r.startTranslate);if(!r.allowThresholdMove)return r.allowThresholdMove=!0,i.startX=i.currentX,i.startY=i.currentY,r.currentTranslate=r.startTranslate,void(i.diff=n.isHorizontal()?i.currentX-i.startX:i.currentY-i.startY)}s.followFinger&&!s.cssMode&&((s.freeMode&&s.freeMode.enabled&&n.freeMode||s.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),n.params.freeMode&&s.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function ct(e){const t=this,n=t.touchEventsData,{params:r,touches:s,rtlTranslate:i,slidesGrid:o,enabled:a}=t;if(!a)return;let l=e;if(l.originalEvent&&(l=l.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",l),n.allowTouchCallbacks=!1,!n.isTouched)return n.isMoved&&r.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,void(n.startMoving=!1);r.grabCursor&&n.isMoved&&n.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const c=se(),u=c-n.touchStartTime;if(t.allowClick){const e=l.path||l.composedPath&&l.composedPath();t.updateClickedSlide(e&&e[0]||l.target),t.emit("tap click",l),u<300&&c-n.lastClickTime<300&&t.emit("doubleTap doubleClick",l)}if(n.lastClickTime=se(),re((()=>{t.destroyed||(t.allowClick=!0)})),!n.isTouched||!n.isMoved||!t.swipeDirection||0===s.diff||n.currentTranslate===n.startTranslate)return n.isTouched=!1,n.isMoved=!1,void(n.startMoving=!1);let h;if(n.isTouched=!1,n.isMoved=!1,n.startMoving=!1,h=r.followFinger?i?t.translate:-t.translate:-n.currentTranslate,r.cssMode)return;if(t.params.freeMode&&r.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});let d=0,f=t.slidesSizesGrid[0];for(let y=0;y<o.length;y+=y<r.slidesPerGroupSkip?1:r.slidesPerGroup){const e=y<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;"undefined"!==typeof o[y+e]?h>=o[y]&&h<o[y+e]&&(d=y,f=o[y+e]-o[y]):h>=o[y]&&(d=y,f=o[o.length-1]-o[o.length-2])}let p=null,g=null;r.rewind&&(t.isBeginning?g=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(p=0));const m=(h-o[d])/f,v=d<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(u>r.longSwipesMs){if(!r.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(m>=r.longSwipesRatio?t.slideTo(r.rewind&&t.isEnd?p:d+v):t.slideTo(d)),"prev"===t.swipeDirection&&(m>1-r.longSwipesRatio?t.slideTo(d+v):null!==g&&m<0&&Math.abs(m)>r.longSwipesRatio?t.slideTo(g):t.slideTo(d))}else{if(!r.shortSwipes)return void t.slideTo(t.activeIndex);const e=t.navigation&&(l.target===t.navigation.nextEl||l.target===t.navigation.prevEl);e?l.target===t.navigation.nextEl?t.slideTo(d+v):t.slideTo(d):("next"===t.swipeDirection&&t.slideTo(null!==p?p:d+v),"prev"===t.swipeDirection&&t.slideTo(null!==g?g:d))}}function ut(){const e=this,{params:t,el:n}=e;if(n&&0===n.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:s,snapGrid:i}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=s,e.allowSlideNext=r,e.params.watchOverflow&&i!==e.snapGrid&&e.checkOverflow()}function ht(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function dt(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;let s;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const i=e.maxTranslate()-e.minTranslate();s=0===i?0:(e.translate-e.minTranslate())/i,s!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let ft=!1;function pt(){}const gt=(e,t)=>{const n=o(),{params:r,touchEvents:s,el:i,wrapperEl:a,device:l,support:c}=e,u=!!r.nested,h="on"===t?"addEventListener":"removeEventListener",d=t;if(c.touch){const t=!("touchstart"!==s.start||!c.passiveListener||!r.passiveListeners)&&{passive:!0,capture:!1};i[h](s.start,e.onTouchStart,t),i[h](s.move,e.onTouchMove,c.passiveListener?{passive:!1,capture:u}:u),i[h](s.end,e.onTouchEnd,t),s.cancel&&i[h](s.cancel,e.onTouchEnd,t)}else i[h](s.start,e.onTouchStart,!1),n[h](s.move,e.onTouchMove,u),n[h](s.end,e.onTouchEnd,!1);(r.preventClicks||r.preventClicksPropagation)&&i[h]("click",e.onClick,!0),r.cssMode&&a[h]("scroll",e.onScroll),r.updateOnWindowResize?e[d](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",ut,!0):e[d]("observerUpdate",ut,!0)};function mt(){const e=this,t=o(),{params:n,support:r}=e;e.onTouchStart=at.bind(e),e.onTouchMove=lt.bind(e),e.onTouchEnd=ct.bind(e),n.cssMode&&(e.onScroll=dt.bind(e)),e.onClick=ht.bind(e),r.touch&&!ft&&(t.addEventListener("touchstart",pt),ft=!0),gt(e,"on")}function vt(){const e=this;gt(e,"off")}var yt={attachEvents:mt,detachEvents:vt};const wt=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function bt(){const e=this,{activeIndex:t,initialized:n,loopedSlides:r=0,params:s,$el:i}=e,o=s.breakpoints;if(!o||o&&0===Object.keys(o).length)return;const a=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(!a||e.currentBreakpoint===a)return;const l=a in o?o[a]:void 0,c=l||e.originalParams,u=wt(e,s),h=wt(e,c),d=s.enabled;u&&!h?(i.removeClass(`${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`),e.emitContainerClasses()):!u&&h&&(i.addClass(`${s.containerModifierClass}grid`),(c.grid.fill&&"column"===c.grid.fill||!c.grid.fill&&"column"===s.grid.fill)&&i.addClass(`${s.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const n=s[t]&&s[t].enabled,r=c[t]&&c[t].enabled;n&&!r&&e[t].disable(),!n&&r&&e[t].enable()}));const f=c.direction&&c.direction!==s.direction,p=s.loop&&(c.slidesPerView!==s.slidesPerView||f);f&&n&&e.changeDirection(),ce(e.params,c);const g=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),d&&!g?e.disable():!d&&g&&e.enable(),e.currentBreakpoint=a,e.emit("_beforeBreakpoint",c),p&&n&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-r+e.loopedSlides,0,!1)),e.emit("breakpoint",c)}function _t(e,t="window",n){if(!e||"container"===t&&!n)return;let r=!1;const s=l(),i="window"===t?s.innerHeight:n.clientHeight,o=Object.keys(e).map((e=>{if("string"===typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1)),n=i*t;return{value:n,point:e}}return{value:e,point:e}}));o.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let a=0;a<o.length;a+=1){const{point:e,value:i}=o[a];"window"===t?s.matchMedia(`(min-width: ${i}px)`).matches&&(r=e):i<=n.clientWidth&&(r=e)}return r||"max"}var Et={setBreakpoint:bt,getBreakpoint:_t};function Tt(e,t){const n=[];return e.forEach((e=>{"object"===typeof e?Object.keys(e).forEach((r=>{e[r]&&n.push(t+r)})):"string"===typeof e&&n.push(t+e)})),n}function St(){const e=this,{classNames:t,params:n,rtl:r,$el:s,device:i,support:o}=e,a=Tt(["initialized",n.direction,{"pointer-events":!o.touch},{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&"column"===n.grid.fill},{android:i.android},{ios:i.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),s.addClass([...t].join(" ")),e.emitContainerClasses()}function Ct(){const e=this,{$el:t,classNames:n}=e;t.removeClass(n.join(" ")),e.emitContainerClasses()}var It={addClasses:St,removeClasses:Ct};function kt(e,t,n,r,s,i){const o=l();let a;function c(){i&&i()}const u=te(e).parent("picture")[0];u||e.complete&&s?c():t?(a=new o.Image,a.onload=c,a.onerror=c,r&&(a.sizes=r),n&&(a.srcset=n),t&&(a.src=t)):c()}function xt(){const e=this;function t(){"undefined"!==typeof e&&null!==e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(let n=0;n<e.imagesToLoad.length;n+=1){const r=e.imagesToLoad[n];e.loadImage(r,r.currentSrc||r.getAttribute("src"),r.srcset||r.getAttribute("srcset"),r.sizes||r.getAttribute("sizes"),!0,t)}}var At={loadImage:kt,preloadImages:xt};function Ot(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*r;e.isLocked=e.size>n}else e.isLocked=1===e.snapGrid.length;!0===n.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===n.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var Rt={checkOverflow:Ot},Nt={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopedSlidesLimit:!0,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function Dt(e,t){return function(n={}){const r=Object.keys(n)[0],s=n[r];"object"===typeof s&&null!==s?(["navigation","pagination","scrollbar"].indexOf(r)>=0&&!0===e[r]&&(e[r]={auto:!0}),r in e&&"enabled"in s?(!0===e[r]&&(e[r]={enabled:!0}),"object"!==typeof e[r]||"enabled"in e[r]||(e[r].enabled=!0),e[r]||(e[r]={enabled:!1}),ce(t,n)):ce(t,n)):ce(t,n)}}const Pt={eventsEmitter:Te,update:De,translate:$e,transition:ze,slide:Ye,loop:nt,grabCursor:it,events:yt,breakpoints:Et,checkOverflow:Rt,classes:It,images:At},Lt={};class Mt{constructor(...e){let t,n;if(1===e.length&&e[0].constructor&&"Object"===Object.prototype.toString.call(e[0]).slice(8,-1)?n=e[0]:[t,n]=e,n||(n={}),n=ce({},n),t&&!n.el&&(n.el=t),n.el&&te(n.el).length>1){const e=[];return te(n.el).each((t=>{const r=ce({},n,{el:t});e.push(new Mt(r))})),e}const r=this;r.__swiper__=!0,r.support=me(),r.device=ye({userAgent:n.userAgent}),r.browser=be(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],n.modules&&Array.isArray(n.modules)&&r.modules.push(...n.modules);const s={};r.modules.forEach((e=>{e({swiper:r,extendParams:Dt(n,s),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})}));const i=ce({},Nt,s);return r.params=ce({},i,Lt,n),r.originalParams=ce({},r.params),r.passedParams=ce({},n),r.params&&r.params.on&&Object.keys(r.params.on).forEach((e=>{r.on(e,r.params.on[e])})),r.params&&r.params.onAny&&r.onAny(r.params.onAny),r.$=te,Object.assign(r,{enabled:r.params.enabled,el:t,classNames:[],slides:te(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return"horizontal"===r.params.direction},isVertical(){return"vertical"===r.params.direction},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:function(){const e=["touchstart","touchmove","touchend","touchcancel"],t=["pointerdown","pointermove","pointerup"];return r.touchEventsTouch={start:e[0],move:e[1],end:e[2],cancel:e[3]},r.touchEventsDesktop={start:t[0],move:t[1],end:t[2]},r.support.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:se(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const r=n.minTranslate(),s=n.maxTranslate(),i=(s-r)*e+r;n.translateTo(i,"undefined"===typeof t?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.each((n=>{const r=e.getSlideClasses(n);t.push({slideEl:n,classNames:r}),e.emit("_slideClass",n,r)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const n=this,{params:r,slides:s,slidesGrid:i,slidesSizesGrid:o,size:a,activeIndex:l}=n;let c=1;if(r.centeredSlides){let e,t=s[l].swiperSlideSize;for(let n=l+1;n<s.length;n+=1)s[n]&&!e&&(t+=s[n].swiperSlideSize,c+=1,t>a&&(e=!0));for(let n=l-1;n>=0;n-=1)s[n]&&!e&&(t+=s[n].swiperSlideSize,c+=1,t>a&&(e=!0))}else if("current"===e)for(let u=l+1;u<s.length;u+=1){const e=t?i[u]+o[u]-i[l]<a:i[u]-i[l]<a;e&&(c+=1)}else for(let u=l-1;u>=0;u-=1){const e=i[l]-i[u]<a;e&&(c+=1)}return c}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;function r(){const t=e.rtlTranslate?-1*e.translate:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let s;n.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(r(),e.params.autoHeight&&e.updateAutoHeight()):(s=("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),s||r()),n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const n=this,r=n.params.direction;return e||(e="horizontal"===r?"vertical":"horizontal"),e===r||"horizontal"!==e&&"vertical"!==e||(n.$el.removeClass(`${n.params.containerModifierClass}${r}`).addClass(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.each((t=>{"vertical"===e?t.style.width="":t.style.height=""})),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.$el.addClass(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.$el.removeClass(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;const n=te(e||t.params.el);if(e=n[0],!e)return!1;e.swiper=t;const r=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,s=()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){const t=te(e.shadowRoot.querySelector(r()));return t.children=e=>n.children(e),t}return n.children?n.children(r()):te(n).children(r())};let i=s();if(0===i.length&&t.params.createElements){const e=o(),r=e.createElement("div");i=te(r),r.className=t.params.wrapperClass,n.append(r),n.children(`.${t.params.slideClass}`).each((e=>{i.append(e)}))}return Object.assign(t,{$el:n,el:e,$wrapperEl:i,wrapperEl:i[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===n.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===n.css("direction")),wrongRTL:"-webkit-box"===i.css("display")}),!0}init(e){const t=this;if(t.initialized)return t;const n=t.mount(e);return!1===n||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e=!0,t=!0){const n=this,{params:r,$el:s,$wrapperEl:i,slides:o}=n;return"undefined"===typeof n.params||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),r.loop&&n.loopDestroy(),t&&(n.removeClasses(),s.removeAttr("style"),i.removeAttr("style"),o&&o.length&&o.removeClass([r.slideVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),n.emit("destroy"),Object.keys(n.eventsListeners).forEach((e=>{n.off(e)})),!1!==e&&(n.$el[0].swiper=null,ne(n)),n.destroyed=!0),null}static extendDefaults(e){ce(Lt,e)}static get extendedDefaults(){return Lt}static get defaults(){return Nt}static installModule(e){Mt.prototype.__modules__||(Mt.prototype.__modules__=[]);const t=Mt.prototype.__modules__;"function"===typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>Mt.installModule(e))),Mt):(Mt.installModule(e),Mt)}}Object.keys(Pt).forEach((e=>{Object.keys(Pt[e]).forEach((t=>{Mt.prototype[t]=Pt[e][t]}))})),Mt.use([_e,Ee]);var Ft=Mt;function Ut(e,t,n,r){const s=o();return e.params.createElements&&Object.keys(r).forEach((i=>{if(!n[i]&&!0===n.auto){let o=e.$el.children(`.${r[i]}`)[0];o||(o=s.createElement("div"),o.className=r[i],e.$el.append(o)),n[i]=o,t[i]=o}})),n}function $t({swiper:e,extendParams:t,on:n,emit:r}){function s(t){let n;return t&&(n=te(t),e.params.uniqueNavElements&&"string"===typeof t&&n.length>1&&1===e.$el.find(t).length&&(n=e.$el.find(t))),n}function i(t,n){const r=e.params.navigation;t&&t.length>0&&(t[n?"addClass":"removeClass"](r.disabledClass),t[0]&&"BUTTON"===t[0].tagName&&(t[0].disabled=n),e.params.watchOverflow&&e.enabled&&t[e.isLocked?"addClass":"removeClass"](r.lockClass))}function o(){if(e.params.loop)return;const{$nextEl:t,$prevEl:n}=e.navigation;i(n,e.isBeginning&&!e.params.rewind),i(t,e.isEnd&&!e.params.rewind)}function a(t){t.preventDefault(),(!e.isBeginning||e.params.loop||e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function l(t){t.preventDefault(),(!e.isEnd||e.params.loop||e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function c(){const t=e.params.navigation;if(e.params.navigation=Ut(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!t.nextEl&&!t.prevEl)return;const n=s(t.nextEl),r=s(t.prevEl);n&&n.length>0&&n.on("click",l),r&&r.length>0&&r.on("click",a),Object.assign(e.navigation,{$nextEl:n,nextEl:n&&n[0],$prevEl:r,prevEl:r&&r[0]}),e.enabled||(n&&n.addClass(t.lockClass),r&&r.addClass(t.lockClass))}function u(){const{$nextEl:t,$prevEl:n}=e.navigation;t&&t.length&&(t.off("click",l),t.removeClass(e.params.navigation.disabledClass)),n&&n.length&&(n.off("click",a),n.removeClass(e.params.navigation.disabledClass))}t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null},n("init",(()=>{!1===e.params.navigation.enabled?d():(c(),o())})),n("toEdge fromEdge lock unlock",(()=>{o()})),n("destroy",(()=>{u()})),n("enable disable",(()=>{const{$nextEl:t,$prevEl:n}=e.navigation;t&&t[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),n&&n[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)})),n("click",((t,n)=>{const{$nextEl:s,$prevEl:i}=e.navigation,o=n.target;if(e.params.navigation.hideOnClick&&!te(o).is(i)&&!te(o).is(s)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===o||e.pagination.el.contains(o)))return;let t;s?t=s.hasClass(e.params.navigation.hiddenClass):i&&(t=i.hasClass(e.params.navigation.hiddenClass)),r(!0===t?"navigationShow":"navigationHide"),s&&s.toggleClass(e.params.navigation.hiddenClass),i&&i.toggleClass(e.params.navigation.hiddenClass)}}));const h=()=>{e.$el.removeClass(e.params.navigation.navigationDisabledClass),c(),o()},d=()=>{e.$el.addClass(e.params.navigation.navigationDisabledClass),u()};Object.assign(e.navigation,{enable:h,disable:d,update:o,init:c,destroy:u})}function Vt(e=""){return`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function jt({swiper:e,extendParams:t,on:n,emit:r}){const s="swiper-pagination";let i;t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),e.pagination={el:null,$el:null,bullets:[]};let o=0;function a(){return!e.params.pagination.el||!e.pagination.el||!e.pagination.$el||0===e.pagination.$el.length}function l(t,n){const{bulletActiveClass:r}=e.params.pagination;t[n]().addClass(`${r}-${n}`)[n]().addClass(`${r}-${n}-${n}`)}function c(){const t=e.rtl,n=e.params.pagination;if(a())return;const s=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,c=e.pagination.$el;let u;const h=e.params.loop?Math.ceil((s-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(u=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup),u>s-1-2*e.loopedSlides&&(u-=s-2*e.loopedSlides),u>h-1&&(u-=h),u<0&&"bullets"!==e.params.paginationType&&(u=h+u)):u="undefined"!==typeof e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===n.type&&e.pagination.bullets&&e.pagination.bullets.length>0){const r=e.pagination.bullets;let s,a,h;if(n.dynamicBullets&&(i=r.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),c.css(e.isHorizontal()?"width":"height",i*(n.dynamicMainBullets+4)+"px"),n.dynamicMainBullets>1&&void 0!==e.previousIndex&&(o+=u-(e.previousIndex-e.loopedSlides||0),o>n.dynamicMainBullets-1?o=n.dynamicMainBullets-1:o<0&&(o=0)),s=Math.max(u-o,0),a=s+(Math.min(r.length,n.dynamicMainBullets)-1),h=(a+s)/2),r.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${n.bulletActiveClass}${e}`)).join(" ")),c.length>1)r.each((e=>{const t=te(e),r=t.index();r===u&&t.addClass(n.bulletActiveClass),n.dynamicBullets&&(r>=s&&r<=a&&t.addClass(`${n.bulletActiveClass}-main`),r===s&&l(t,"prev"),r===a&&l(t,"next"))}));else{const t=r.eq(u),i=t.index();if(t.addClass(n.bulletActiveClass),n.dynamicBullets){const t=r.eq(s),o=r.eq(a);for(let e=s;e<=a;e+=1)r.eq(e).addClass(`${n.bulletActiveClass}-main`);if(e.params.loop)if(i>=r.length){for(let e=n.dynamicMainBullets;e>=0;e-=1)r.eq(r.length-e).addClass(`${n.bulletActiveClass}-main`);r.eq(r.length-n.dynamicMainBullets-1).addClass(`${n.bulletActiveClass}-prev`)}else l(t,"prev"),l(o,"next");else l(t,"prev"),l(o,"next")}}if(n.dynamicBullets){const s=Math.min(r.length,n.dynamicMainBullets+4),o=(i*s-i)/2-h*i,a=t?"right":"left";r.css(e.isHorizontal()?a:"top",`${o}px`)}}if("fraction"===n.type&&(c.find(Vt(n.currentClass)).text(n.formatFractionCurrent(u+1)),c.find(Vt(n.totalClass)).text(n.formatFractionTotal(h))),"progressbar"===n.type){let t;t=n.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";const r=(u+1)/h;let s=1,i=1;"horizontal"===t?s=r:i=r,c.find(Vt(n.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${s}) scaleY(${i})`).transition(e.params.speed)}"custom"===n.type&&n.renderCustom?(c.html(n.renderCustom(e,u+1,h)),r("paginationRender",c[0])):r("paginationUpdate",c[0]),e.params.watchOverflow&&e.enabled&&c[e.isLocked?"addClass":"removeClass"](n.lockClass)}function u(){const t=e.params.pagination;if(a())return;const n=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,s=e.pagination.$el;let i="";if("bullets"===t.type){let r=e.params.loop?Math.ceil((n-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&!e.params.loop&&r>n&&(r=n);for(let n=0;n<r;n+=1)t.renderBullet?i+=t.renderBullet.call(e,n,t.bulletClass):i+=`<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;s.html(i),e.pagination.bullets=s.find(Vt(t.bulletClass))}"fraction"===t.type&&(i=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`,s.html(i)),"progressbar"===t.type&&(i=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):`<span class="${t.progressbarFillClass}"></span>`,s.html(i)),"custom"!==t.type&&r("paginationRender",e.pagination.$el[0])}function h(){e.params.pagination=Ut(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let n=te(t.el);0!==n.length&&(e.params.uniqueNavElements&&"string"===typeof t.el&&n.length>1&&(n=e.$el.find(t.el),n.length>1&&(n=n.filter((t=>te(t).parents(".swiper")[0]===e.el)))),"bullets"===t.type&&t.clickable&&n.addClass(t.clickableClass),n.addClass(t.modifierClass+t.type),n.addClass(e.isHorizontal()?t.horizontalClass:t.verticalClass),"bullets"===t.type&&t.dynamicBullets&&(n.addClass(`${t.modifierClass}${t.type}-dynamic`),o=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&n.addClass(t.progressbarOppositeClass),t.clickable&&n.on("click",Vt(t.bulletClass),(function(t){t.preventDefault();let n=te(this).index()*e.params.slidesPerGroup;e.params.loop&&(n+=e.loopedSlides),e.slideTo(n)})),Object.assign(e.pagination,{$el:n,el:n[0]}),e.enabled||n.addClass(t.lockClass))}function d(){const t=e.params.pagination;if(a())return;const n=e.pagination.$el;n.removeClass(t.hiddenClass),n.removeClass(t.modifierClass+t.type),n.removeClass(e.isHorizontal()?t.horizontalClass:t.verticalClass),e.pagination.bullets&&e.pagination.bullets.removeClass&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&n.off("click",Vt(t.bulletClass))}n("init",(()=>{!1===e.params.pagination.enabled?p():(h(),u(),c())})),n("activeIndexChange",(()=>{(e.params.loop||"undefined"===typeof e.snapIndex)&&c()})),n("snapIndexChange",(()=>{e.params.loop||c()})),n("slidesLengthChange",(()=>{e.params.loop&&(u(),c())})),n("snapGridLengthChange",(()=>{e.params.loop||(u(),c())})),n("destroy",(()=>{d()})),n("enable disable",(()=>{const{$el:t}=e.pagination;t&&t[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)})),n("lock unlock",(()=>{c()})),n("click",((t,n)=>{const s=n.target,{$el:i}=e.pagination;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&i&&i.length>0&&!te(s).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&s===e.navigation.nextEl||e.navigation.prevEl&&s===e.navigation.prevEl))return;const t=i.hasClass(e.params.pagination.hiddenClass);r(!0===t?"paginationShow":"paginationHide"),i.toggleClass(e.params.pagination.hiddenClass)}}));const f=()=>{e.$el.removeClass(e.params.pagination.paginationDisabledClass),e.pagination.$el&&e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass),h(),u(),c()},p=()=>{e.$el.addClass(e.params.pagination.paginationDisabledClass),e.pagination.$el&&e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass),d()};Object.assign(e.pagination,{enable:f,disable:p,render:u,update:c,init:h,destroy:d})}function Bt({swiper:e,extendParams:t,on:n,emit:r}){const s=o();let i,a,l,c,u=!1,h=null,d=null;function f(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:t,rtlTranslate:n,progress:r}=e,{$dragEl:s,$el:i}=t,o=e.params.scrollbar;let c=a,u=(l-a)*r;n?(u=-u,u>0?(c=a-u,u=0):-u+a>l&&(c=l+u)):u<0?(c=a+u,u=0):u+a>l&&(c=l-u),e.isHorizontal()?(s.transform(`translate3d(${u}px, 0, 0)`),s[0].style.width=`${c}px`):(s.transform(`translate3d(0px, ${u}px, 0)`),s[0].style.height=`${c}px`),o.hide&&(clearTimeout(h),i[0].style.opacity=1,h=setTimeout((()=>{i[0].style.opacity=0,i.transition(400)}),1e3))}function p(t){e.params.scrollbar.el&&e.scrollbar.el&&e.scrollbar.$dragEl.transition(t)}function g(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:t}=e,{$dragEl:n,$el:r}=t;n[0].style.width="",n[0].style.height="",l=e.isHorizontal()?r[0].offsetWidth:r[0].offsetHeight,c=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),a="auto"===e.params.scrollbar.dragSize?l*c:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?n[0].style.width=`${a}px`:n[0].style.height=`${a}px`,r[0].style.display=c>=1?"none":"",e.params.scrollbar.hide&&(r[0].style.opacity=0),e.params.watchOverflow&&e.enabled&&t.$el[e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}function m(t){return e.isHorizontal()?"touchstart"===t.type||"touchmove"===t.type?t.targetTouches[0].clientX:t.clientX:"touchstart"===t.type||"touchmove"===t.type?t.targetTouches[0].clientY:t.clientY}function v(t){const{scrollbar:n,rtlTranslate:r}=e,{$el:s}=n;let o;o=(m(t)-s.offset()[e.isHorizontal()?"left":"top"]-(null!==i?i:a/2))/(l-a),o=Math.max(Math.min(o,1),0),r&&(o=1-o);const c=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*o;e.updateProgress(c),e.setTranslate(c),e.updateActiveIndex(),e.updateSlidesClasses()}function y(t){const n=e.params.scrollbar,{scrollbar:s,$wrapperEl:o}=e,{$el:a,$dragEl:l}=s;u=!0,i=t.target===l[0]||t.target===l?m(t)-t.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,t.preventDefault(),t.stopPropagation(),o.transition(100),l.transition(100),v(t),clearTimeout(d),a.transition(0),n.hide&&a.css("opacity",1),e.params.cssMode&&e.$wrapperEl.css("scroll-snap-type","none"),r("scrollbarDragStart",t)}function w(t){const{scrollbar:n,$wrapperEl:s}=e,{$el:i,$dragEl:o}=n;u&&(t.preventDefault?t.preventDefault():t.returnValue=!1,v(t),s.transition(0),i.transition(0),o.transition(0),r("scrollbarDragMove",t))}function b(t){const n=e.params.scrollbar,{scrollbar:s,$wrapperEl:i}=e,{$el:o}=s;u&&(u=!1,e.params.cssMode&&(e.$wrapperEl.css("scroll-snap-type",""),i.transition("")),n.hide&&(clearTimeout(d),d=re((()=>{o.css("opacity",0),o.transition(400)}),1e3)),r("scrollbarDragEnd",t),n.snapOnRelease&&e.slideToClosest())}function _(t){const{scrollbar:n,touchEventsTouch:r,touchEventsDesktop:i,params:o,support:a}=e,l=n.$el;if(!l)return;const c=l[0],u=!(!a.passiveListener||!o.passiveListeners)&&{passive:!1,capture:!1},h=!(!a.passiveListener||!o.passiveListeners)&&{passive:!0,capture:!1};if(!c)return;const d="on"===t?"addEventListener":"removeEventListener";a.touch?(c[d](r.start,y,u),c[d](r.move,w,u),c[d](r.end,b,h)):(c[d](i.start,y,u),s[d](i.move,w,u),s[d](i.end,b,h))}function E(){e.params.scrollbar.el&&e.scrollbar.el&&_("on")}function T(){e.params.scrollbar.el&&e.scrollbar.el&&_("off")}function S(){const{scrollbar:t,$el:n}=e;e.params.scrollbar=Ut(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const r=e.params.scrollbar;if(!r.el)return;let s=te(r.el);e.params.uniqueNavElements&&"string"===typeof r.el&&s.length>1&&1===n.find(r.el).length&&(s=n.find(r.el)),s.addClass(e.isHorizontal()?r.horizontalClass:r.verticalClass);let i=s.find(`.${e.params.scrollbar.dragClass}`);0===i.length&&(i=te(`<div class="${e.params.scrollbar.dragClass}"></div>`),s.append(i)),Object.assign(t,{$el:s,el:s[0],$dragEl:i,dragEl:i[0]}),r.draggable&&E(),s&&s[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)}function C(){const t=e.params.scrollbar,n=e.scrollbar.$el;n&&n.removeClass(e.isHorizontal()?t.horizontalClass:t.verticalClass),T()}t({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null},n("init",(()=>{!1===e.params.scrollbar.enabled?k():(S(),g(),f())})),n("update resize observerUpdate lock unlock",(()=>{g()})),n("setTranslate",(()=>{f()})),n("setTransition",((e,t)=>{p(t)})),n("enable disable",(()=>{const{$el:t}=e.scrollbar;t&&t[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)})),n("destroy",(()=>{C()}));const I=()=>{e.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass),e.scrollbar.$el&&e.scrollbar.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass),S(),g(),f()},k=()=>{e.$el.addClass(e.params.scrollbar.scrollbarDisabledClass),e.scrollbar.$el&&e.scrollbar.$el.addClass(e.params.scrollbar.scrollbarDisabledClass),C()};Object.assign(e.scrollbar,{enable:I,disable:k,updateSize:g,setTranslate:f,init:S,destroy:C})}function qt({swiper:e,extendParams:t,on:n}){t({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),e.a11y={clicked:!1};let r=null;function s(e){const t=r;0!==t.length&&(t.html(""),t.html(e))}function i(e=16){const t=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(e).replace(/x/g,t)}function o(e){e.attr("tabIndex","0")}function a(e){e.attr("tabIndex","-1")}function l(e,t){e.attr("role",t)}function c(e,t){e.attr("aria-roledescription",t)}function u(e,t){e.attr("aria-controls",t)}function h(e,t){e.attr("aria-label",t)}function d(e,t){e.attr("id",t)}function f(e,t){e.attr("aria-live",t)}function p(e){e.attr("aria-disabled",!0)}function g(e){e.attr("aria-disabled",!1)}function m(t){if(13!==t.keyCode&&32!==t.keyCode)return;const n=e.params.a11y,r=te(t.target);e.navigation&&e.navigation.$nextEl&&r.is(e.navigation.$nextEl)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?s(n.lastSlideMessage):s(n.nextSlideMessage)),e.navigation&&e.navigation.$prevEl&&r.is(e.navigation.$prevEl)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?s(n.firstSlideMessage):s(n.prevSlideMessage)),e.pagination&&r.is(Vt(e.params.pagination.bulletClass))&&r[0].click()}function v(){if(e.params.loop||e.params.rewind||!e.navigation)return;const{$nextEl:t,$prevEl:n}=e.navigation;n&&n.length>0&&(e.isBeginning?(p(n),a(n)):(g(n),o(n))),t&&t.length>0&&(e.isEnd?(p(t),a(t)):(g(t),o(t)))}function y(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function w(){return y()&&e.params.pagination.clickable}function b(){const t=e.params.a11y;y()&&e.pagination.bullets.each((n=>{const r=te(n);e.params.pagination.clickable&&(o(r),e.params.pagination.renderBullet||(l(r,"button"),h(r,t.paginationBulletMessage.replace(/\{\{index\}\}/,r.index()+1)))),r.is(`.${e.params.pagination.bulletActiveClass}`)?r.attr("aria-current","true"):r.removeAttr("aria-current")}))}const _=(e,t,n)=>{o(e),"BUTTON"!==e[0].tagName&&(l(e,"button"),e.on("keydown",m)),h(e,n),u(e,t)},E=()=>{e.a11y.clicked=!0},T=()=>{requestAnimationFrame((()=>{requestAnimationFrame((()=>{e.destroyed||(e.a11y.clicked=!1)}))}))},S=t=>{if(e.a11y.clicked)return;const n=t.target.closest(`.${e.params.slideClass}`);if(!n||!e.slides.includes(n))return;const r=e.slides.indexOf(n)===e.activeIndex,s=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes(n);r||s||t.sourceCapabilities&&t.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,e.slideTo(e.slides.indexOf(n),0))},C=()=>{const t=e.params.a11y;t.itemRoleDescriptionMessage&&c(te(e.slides),t.itemRoleDescriptionMessage),t.slideRole&&l(te(e.slides),t.slideRole);const n=e.params.loop?e.slides.filter((t=>!t.classList.contains(e.params.slideDuplicateClass))).length:e.slides.length;t.slideLabelMessage&&e.slides.each(((r,s)=>{const i=te(r),o=e.params.loop?parseInt(i.attr("data-swiper-slide-index"),10):s,a=t.slideLabelMessage.replace(/\{\{index\}\}/,o+1).replace(/\{\{slidesLength\}\}/,n);h(i,a)}))},I=()=>{const t=e.params.a11y;e.$el.append(r);const n=e.$el;t.containerRoleDescriptionMessage&&c(n,t.containerRoleDescriptionMessage),t.containerMessage&&h(n,t.containerMessage);const s=e.$wrapperEl,o=t.id||s.attr("id")||`swiper-wrapper-${i(16)}`,a=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";let l,u;d(s,o),f(s,a),C(),e.navigation&&e.navigation.$nextEl&&(l=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(u=e.navigation.$prevEl),l&&l.length&&_(l,o,t.nextSlideMessage),u&&u.length&&_(u,o,t.prevSlideMessage),w()&&e.pagination.$el.on("keydown",Vt(e.params.pagination.bulletClass),m),e.$el.on("focus",S,!0),e.$el.on("pointerdown",E,!0),e.$el.on("pointerup",T,!0)};function k(){let t,n;r&&r.length>0&&r.remove(),e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(n=e.navigation.$prevEl),t&&t.off("keydown",m),n&&n.off("keydown",m),w()&&e.pagination.$el.off("keydown",Vt(e.params.pagination.bulletClass),m),e.$el.off("focus",S,!0),e.$el.off("pointerdown",E,!0),e.$el.off("pointerup",T,!0)}n("beforeInit",(()=>{r=te(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)})),n("afterInit",(()=>{e.params.a11y.enabled&&I()})),n("slidesLengthChange snapGridLengthChange slidesGridLengthChange",(()=>{e.params.a11y.enabled&&C()})),n("fromEdge toEdge afterInit lock unlock",(()=>{e.params.a11y.enabled&&v()})),n("paginationUpdate",(()=>{e.params.a11y.enabled&&b()})),n("destroy",(()=>{e.params.a11y.enabled&&k()}))}function zt(e){const{effect:t,swiper:n,on:r,setTranslate:s,setTransition:i,overwriteParams:o,perspective:a,recreateShadows:l,getEffectParams:c}=e;let u;r("beforeInit",(()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),a&&a()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const e=o?o():{};Object.assign(n.params,e),Object.assign(n.originalParams,e)})),r("setTranslate",(()=>{n.params.effect===t&&s()})),r("setTransition",((e,r)=>{n.params.effect===t&&i(r)})),r("transitionEnd",(()=>{if(n.params.effect===t&&l){if(!c||!c().slideShadows)return;n.slides.each((e=>{const t=n.$(e);t.find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()})),l()}})),r("virtualUpdate",(()=>{n.params.effect===t&&(n.slides.length||(u=!0),requestAnimationFrame((()=>{u&&n.slides&&n.slides.length&&(s(),u=!1)})))}))}function Gt(e,t){return e.transformEl?t.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t}function Ht({swiper:e,duration:t,transformEl:n,allSlides:r}){const{slides:s,activeIndex:i,$wrapperEl:o}=e;if(e.params.virtualTranslate&&0!==t){let t,a=!1;t=r?n?s.find(n):s:n?s.eq(i).find(n):s.eq(i),t.transitionEnd((()=>{if(a)return;if(!e||e.destroyed)return;a=!0,e.animating=!1;const t=["webkitTransitionEnd","transitionend"];for(let e=0;e<t.length;e+=1)o.trigger(t[e])}))}}function Wt({swiper:e,extendParams:t,on:n}){t({fadeEffect:{crossFade:!1,transformEl:null}});const r=()=>{const{slides:t}=e,n=e.params.fadeEffect;for(let r=0;r<t.length;r+=1){const t=e.slides.eq(r),s=t[0].swiperSlideOffset;let i=-s;e.params.virtualTranslate||(i-=e.translate);let o=0;e.isHorizontal()||(o=i,i=0);const a=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(t[0].progress),0):1+Math.min(Math.max(t[0].progress,-1),0),l=Gt(n,t);l.css({opacity:a}).transform(`translate3d(${i}px, ${o}px, 0px)`)}},s=t=>{const{transformEl:n}=e.params.fadeEffect,r=n?e.slides.find(n):e.slides;r.transition(t),Ht({swiper:e,duration:t,transformEl:n,allSlides:!0})};zt({effect:"fade",swiper:e,on:n,setTranslate:r,setTransition:s,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}},1415:function(e,t,n){"use strict";n.d(t,{tq:function(){return E},o5:function(){return T},oc:function(){return S}});var r=n(4870),s=n(3396),i=n(4191);n(7658);function o(e){return"object"===typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function a(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter((e=>n.indexOf(e)<0)).forEach((n=>{"undefined"===typeof e[n]?e[n]=t[n]:o(t[n])&&o(e[n])&&Object.keys(t[n]).length>0?t[n].__swiper__?e[n]=t[n]:a(e[n],t[n]):e[n]=t[n]}))}function l(e={}){return e.navigation&&"undefined"===typeof e.navigation.nextEl&&"undefined"===typeof e.navigation.prevEl}function c(e={}){return e.pagination&&"undefined"===typeof e.pagination.el}function u(e={}){return e.scrollbar&&"undefined"===typeof e.scrollbar.el}function h(e=""){const t=e.split(" ").map((e=>e.trim())).filter((e=>!!e)),n=[];return t.forEach((e=>{n.indexOf(e)<0&&n.push(e)})),n.join(" ")}const d=["modules","init","_direction","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_preloadImages","updateOnImagesReady","_loop","_loopAdditionalSlides","_loopedSlides","_loopedSlidesLimit","_loopFillGroupWithBlank","loopPreventsSlide","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideBlankClass","slideActiveClass","slideDuplicateActiveClass","slideVisibleClass","slideDuplicateClass","slideNextClass","slideDuplicateNextClass","slidePrevClass","slideDuplicatePrevClass","wrapperClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","lazy","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom"];function f(e={},t=!0){const n={on:{}},r={},s={};a(n,i.ZP.defaults),a(n,i.ZP.extendedDefaults),n._emitClasses=!0,n.init=!1;const l={},c=d.map((e=>e.replace(/_/,""))),u=Object.assign({},e);return Object.keys(u).forEach((i=>{"undefined"!==typeof e[i]&&(c.indexOf(i)>=0?o(e[i])?(n[i]={},s[i]={},a(n[i],e[i]),a(s[i],e[i])):(n[i]=e[i],s[i]=e[i]):0===i.search(/on[A-Z]/)&&"function"===typeof e[i]?t?r[`${i[2].toLowerCase()}${i.substr(3)}`]=e[i]:n.on[`${i[2].toLowerCase()}${i.substr(3)}`]=e[i]:l[i]=e[i])})),["navigation","pagination","scrollbar"].forEach((e=>{!0===n[e]&&(n[e]={}),!1===n[e]&&delete n[e]})),{params:n,passedParams:s,rest:l,events:r}}function p({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:s,swiper:i},o){l(o)&&t&&n&&(i.params.navigation.nextEl=t,i.originalParams.navigation.nextEl=t,i.params.navigation.prevEl=n,i.originalParams.navigation.prevEl=n),c(o)&&r&&(i.params.pagination.el=r,i.originalParams.pagination.el=r),u(o)&&s&&(i.params.scrollbar.el=s,i.originalParams.scrollbar.el=s),i.init(e)}n(541);const g=(e,t)=>{let n=t.slidesPerView;if(t.breakpoints){const e=i.ZP.prototype.getBreakpoint(t.breakpoints),r=e in t.breakpoints?t.breakpoints[e]:void 0;r&&r.slidesPerView&&(n=r.slidesPerView)}let r=Math.ceil(parseFloat(t.loopedSlides||n,10));return r+=t.loopAdditionalSlides,r>e.length&&t.loopedSlidesLimit&&(r=e.length),r};function m(e,t,n){const r=t.map(((t,n)=>(t.props||(t.props={}),t.props.swiperRef=e,t.props["data-swiper-slide-index"]=n,t)));function i(e,t,r){return e.props||(e.props={}),(0,s.h)(e.type,{...e.props,key:`${e.key}-duplicate-${t}-${r}`,class:`${e.props.className||""} ${n.slideDuplicateClass} ${e.props.class||""}`},e.children)}if(n.loopFillGroupWithBlank){const e=n.slidesPerGroup-r.length%n.slidesPerGroup;if(e!==n.slidesPerGroup)for(let t=0;t<e;t+=1){const e=(0,s.h)("div",{class:`${n.slideClass} ${n.slideBlankClass}`});r.push(e)}}"auto"!==n.slidesPerView||n.loopedSlides||(n.loopedSlides=r.length);const o=g(r,n),a=[],l=[];for(let s=0;s<o;s+=1){const e=s-Math.floor(s/r.length)*r.length;l.push(i(r[e],s,"append")),a.unshift(i(r[r.length-e-1],s,"prepend"))}return e.value&&(e.value.loopedSlides=o),[...a,...r,...l]}function v(e,t,n,r,s){const i=[];if(!t)return i;const a=e=>{i.indexOf(e)<0&&i.push(e)};if(n&&r){const e=r.map(s),t=n.map(s);e.join("")!==t.join("")&&a("children"),r.length!==n.length&&a("children")}const l=d.filter((e=>"_"===e[0])).map((e=>e.replace(/_/,"")));return l.forEach((n=>{if(n in e&&n in t)if(o(e[n])&&o(t[n])){const r=Object.keys(e[n]),s=Object.keys(t[n]);r.length!==s.length?a(n):(r.forEach((r=>{e[n][r]!==t[n][r]&&a(n)})),s.forEach((r=>{e[n][r]!==t[n][r]&&a(n)})))}else e[n]!==t[n]&&a(n)})),i}function y(e,t,n){void 0===e&&(e={});const r=[],s={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},i=(e,t)=>{Array.isArray(e)&&e.forEach((e=>{const n="symbol"===typeof e.type;"default"===t&&(t="container-end"),n&&e.children?i(e.children,"default"):!e.type||"SwiperSlide"!==e.type.name&&"AsyncComponentWrapper"!==e.type.name?s[t]&&s[t].push(e):r.push(e)}))};return Object.keys(e).forEach((t=>{if("function"!==typeof e[t])return;const n=e[t]();i(n,t)})),n.value=t.value,t.value=r,{slides:r,slots:s}}function w({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:s,prevEl:i,scrollbarEl:l,paginationEl:c}){const u=r.filter((e=>"children"!==e&&"direction"!==e)),{params:h,pagination:d,navigation:f,scrollbar:p,virtual:g,thumbs:m}=e;let v,y,w,b,_;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&h.thumbs&&!h.thumbs.swiper&&(v=!0),r.includes("controller")&&n.controller&&n.controller.control&&h.controller&&!h.controller.control&&(y=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||c)&&(h.pagination||!1===h.pagination)&&d&&!d.el&&(w=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||l)&&(h.scrollbar||!1===h.scrollbar)&&p&&!p.el&&(b=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||i)&&(n.navigation.nextEl||s)&&(h.navigation||!1===h.navigation)&&f&&!f.prevEl&&!f.nextEl&&(_=!0);const E=t=>{e[t]&&(e[t].destroy(),"navigation"===t?(h[t].prevEl=void 0,h[t].nextEl=void 0,e[t].prevEl=void 0,e[t].nextEl=void 0):(h[t].el=void 0,e[t].el=void 0))};if(u.forEach((e=>{if(o(h[e])&&o(n[e]))a(h[e],n[e]);else{const t=n[e];!0!==t&&!1!==t||"navigation"!==e&&"pagination"!==e&&"scrollbar"!==e?h[e]=n[e]:!1===t&&E(e)}})),u.includes("controller")&&!y&&e.controller&&e.controller.control&&h.controller&&h.controller.control&&(e.controller.control=h.controller.control),r.includes("children")&&t&&g&&h.virtual.enabled?(g.slides=t,g.update(!0)):r.includes("children")&&e.lazy&&e.params.lazy.enabled&&e.lazy.load(),v){const e=m.init();e&&m.update(!0)}y&&(e.controller.control=h.controller.control),w&&(c&&(h.pagination.el=c),d.init(),d.render(),d.update()),b&&(l&&(h.scrollbar.el=l),p.init(),p.updateSize(),p.setTranslate()),_&&(s&&(h.navigation.nextEl=s),i&&(h.navigation.prevEl=i),f.init(),f.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),e.update()}function b(e,t,n){if(!n)return null;const r=e.value.isHorizontal()?{[e.value.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`};return t.filter(((e,t)=>t>=n.from&&t<=n.to)).map((t=>(t.props||(t.props={}),t.props.style||(t.props.style={}),t.props.swiperRef=e,t.props.style=r,(0,s.h)(t.type,{...t.props},t.children))))}const _=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())},E={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},spaceBetween:{type:Number,default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},preloadImages:{type:Boolean,default:void 0},updateOnImagesReady:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopAdditionalSlides:{type:Number,default:void 0},loopedSlides:{type:Number,default:void 0},loopedSlidesLimit:{type:Boolean,default:!0},loopFillGroupWithBlank:{type:Boolean,default:void 0},loopPreventsSlide:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideBlankClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideDuplicateActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideDuplicateClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slideDuplicateNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},slideDuplicatePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},lazy:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0},enabled:{type:Boolean,default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","_freeModeNoMomentumRelease","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","imagesReady","init","keyPress","lazyImageLoad","lazyImageReady","lock","loopFix","momentumBounce","navigationHide","navigationShow","navigationPrev","navigationNext","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","virtualUpdate","zoomChange"],setup(e,t){let{slots:n,emit:o}=t;const{tag:d,wrapperTag:E}=e,T=(0,r.iH)("swiper"),S=(0,r.iH)(null),C=(0,r.iH)(!1),I=(0,r.iH)(!1),k=(0,r.iH)(null),x=(0,r.iH)(null),A=(0,r.iH)(null),O={value:[]},R={value:[]},N=(0,r.iH)(null),D=(0,r.iH)(null),P=(0,r.iH)(null),L=(0,r.iH)(null),{params:M,passedParams:F}=f(e,!1);y(n,O,R),A.value=F,R.value=O.value;const U=()=>{y(n,O,R),C.value=!0};if(M.onAny=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];o(e,...n)},Object.assign(M.on,{_beforeBreakpoint:U,_containerClasses(e,t){T.value=t}}),x.value=new i.ZP(M),x.value.loopCreate=()=>{},x.value.loopDestroy=()=>{},M.loop&&(x.value.loopedSlides=g(O.value,M)),x.value.virtual&&x.value.params.virtual.enabled){x.value.virtual.slides=O.value;const e={cache:!1,slides:O.value,renderExternal:e=>{S.value=e},renderExternalUpdate:!1};a(x.value.params.virtual,e),a(x.value.originalParams.virtual,e)}function $(e){return M.virtual?b(x,e,S.value):!M.loop||x.value&&x.value.destroyed?(e.forEach((e=>{e.props||(e.props={}),e.props.swiperRef=x})),e):m(x,e,M)}return(0,s.ic)((()=>{!I.value&&x.value&&(x.value.emitSlidesClasses(),I.value=!0);const{passedParams:t}=f(e,!1),n=v(t,A.value,O.value,R.value,(e=>e.props&&e.props.key));A.value=t,(n.length||C.value)&&x.value&&!x.value.destroyed&&w({swiper:x.value,slides:O.value,passedParams:t,changedParams:n,nextEl:N.value,prevEl:D.value,scrollbarEl:L.value,paginationEl:P.value}),C.value=!1})),(0,s.JJ)("swiper",x),(0,s.YP)(S,(()=>{(0,s.Y3)((()=>{_(x.value)}))})),(0,s.bv)((()=>{k.value&&(p({el:k.value,nextEl:N.value,prevEl:D.value,paginationEl:P.value,scrollbarEl:L.value,swiper:x.value},M),o("swiper",x.value))})),(0,s.Jd)((()=>{x.value&&!x.value.destroyed&&x.value.destroy(!0,!1)})),()=>{const{slides:t,slots:r}=y(n,O,R);return(0,s.h)(d,{ref:k,class:h(T.value)},[r["container-start"],(0,s.h)(E,{class:"swiper-wrapper"},[r["wrapper-start"],$(t),r["wrapper-end"]]),l(e)&&[(0,s.h)("div",{ref:D,class:"swiper-button-prev"}),(0,s.h)("div",{ref:N,class:"swiper-button-next"})],u(e)&&(0,s.h)("div",{ref:L,class:"swiper-scrollbar"}),c(e)&&(0,s.h)("div",{ref:P,class:"swiper-pagination"}),r["container-end"]])}}},T={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},zoom:{type:Boolean,default:void 0},virtualIndex:{type:[String,Number],default:void 0}},setup(e,t){let{slots:n}=t,i=!1;const{swiperRef:o}=e,a=(0,r.iH)(null),l=(0,r.iH)("swiper-slide");function c(e,t,n){t===a.value&&(l.value=n)}(0,s.bv)((()=>{o&&o.value&&(o.value.on("_slideClass",c),i=!0)})),(0,s.Xn)((()=>{!i&&o&&o.value&&(o.value.on("_slideClass",c),i=!0)})),(0,s.ic)((()=>{a.value&&o&&o.value&&o.value.destroyed&&"swiper-slide"!==l.value&&(l.value="swiper-slide")})),(0,s.Jd)((()=>{o&&o.value&&o.value.off("_slideClass",c)}));const u=(0,s.Fl)((()=>({isActive:l.value.indexOf("swiper-slide-active")>=0||l.value.indexOf("swiper-slide-duplicate-active")>=0,isVisible:l.value.indexOf("swiper-slide-visible")>=0,isDuplicate:l.value.indexOf("swiper-slide-duplicate")>=0,isPrev:l.value.indexOf("swiper-slide-prev")>=0||l.value.indexOf("swiper-slide-duplicate-prev")>=0,isNext:l.value.indexOf("swiper-slide-next")>=0||l.value.indexOf("swiper-slide-duplicate-next")>=0})));return(0,s.JJ)("swiperSlide",u),()=>(0,s.h)(e.tag,{class:h(`${l.value}`),ref:a,"data-swiper-slide-index":e.virtualIndex},e.zoom?(0,s.h)("div",{class:"swiper-zoom-container","data-swiper-zoom":"number"===typeof e.zoom?e.zoom:void 0},n.default&&n.default(u.value)):n.default&&n.default(u.value))}},S=()=>(0,s.f3)("swiper")},2483:function(e,t,n){"use strict";n.d(t,{p7:function(){return nt},r5:function(){return V},yj:function(){return it}});n(7658),n(541);var r=n(3396),s=n(4870);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const i="undefined"!==typeof window;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function l(e,t){const n={};for(const r in t){const s=t[r];n[r]=u(s)?s.map(e):e(s)}return n}const c=()=>{},u=Array.isArray;const h=/\/$/,d=e=>e.replace(h,"");function f(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=_(null!=r?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function g(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function m(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&v(t.matched[r],n.matched[s])&&y(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function v(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function y(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!w(e[n],t[n]))return!1;return!0}function w(e,t){return u(e)?b(e,t):u(t)?b(t,e):e===t}function b(e,t){return u(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function _(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s,i,o=n.length-1;for(s=0;s<r.length;s++)if(i=r[s],"."!==i){if(".."!==i)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var E,T;(function(e){e["pop"]="pop",e["push"]="push"})(E||(E={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(T||(T={}));function S(e){if(!e)if(i){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),d(e)}const C=/^[^#]+#/;function I(e,t){return e.replace(C,"#")+t}function k(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const x=()=>({left:window.pageXOffset,top:window.pageYOffset});function A(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const s="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=k(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function O(e,t){const n=history.state?history.state.position-t:-1;return n+e}const R=new Map;function N(e,t){R.set(e,t)}function D(e){const t=R.get(e);return R.delete(e),t}let P=()=>location.protocol+"//"+location.host;function L(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let t=s.includes(e.slice(i))?e.slice(i).length:1,n=s.slice(t);return"/"!==n[0]&&(n="/"+n),g(n,"")}const o=g(n,e);return o+r+s}function M(e,t,n,r){let s=[],i=[],o=null;const l=({state:i})=>{const a=L(e,location),l=n.value,c=t.value;let u=0;if(i){if(n.value=a,t.value=i,o&&o===l)return void(o=null);u=c?i.position-c.position:0}else r(a);s.forEach((e=>{e(n.value,l,{delta:u,type:E.pop,direction:u?u>0?T.forward:T.back:T.unknown})}))};function c(){o=n.value}function u(e){s.push(e);const t=()=>{const t=s.indexOf(e);t>-1&&s.splice(t,1)};return i.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:x()}),"")}function d(){for(const e of i)e();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",h),{pauseListeners:c,listen:u,destroy:d}}function F(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?x():null}}function U(e){const{history:t,location:n}=window,r={value:L(e,n)},s={value:t.state};function i(r,i,o){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:P()+e+r;try{t[o?"replaceState":"pushState"](i,"",l),s.value=i}catch(c){console.error(c),n[o?"replace":"assign"](l)}}function o(e,n){const o=a({},t.state,F(s.value.back,e,s.value.forward,!0),n,{position:s.value.position});i(e,o,!0),r.value=e}function l(e,n){const o=a({},s.value,t.state,{forward:e,scroll:x()});i(o.current,o,!0);const l=a({},F(r.value,e,null),{position:o.position+1},n);i(e,l,!1),r.value=e}return s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:s,push:l,replace:o}}function $(e){e=S(e);const t=U(e),n=M(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const s=a({location:"",base:e,go:r,createHref:I.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function V(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),$(e)}function j(e){return"string"===typeof e||e&&"object"===typeof e}function B(e){return"string"===typeof e||"symbol"===typeof e}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},z=Symbol("");var G;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(G||(G={}));function H(e,t){return a(new Error,{type:e,[z]:!0},t)}function W(e,t){return e instanceof Error&&z in e&&(null==t||!!(e.type&t))}const K="[^/]+?",J={sensitive:!1,strict:!1,start:!0,end:!0},Q=/[.+*?^${}()[\]/\\]/g;function X(e,t){const n=a({},J,t),r=[];let s=n.start?"^":"";const i=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(s+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(s+="/"),s+=r.value.replace(Q,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:c}=r;i.push({name:e,repeatable:n,optional:l});const u=c||K;if(u!==K){o+=10;try{new RegExp(`(${u})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+h.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;t||(d=l&&a.length<2?`(?:/${d})`:"/"+d),l&&(d+="?"),s+=d,o+=20,l&&(o+=-8),n&&(o+=-20),".*"===u&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",s=i[r-1];n[s.name]=e&&s.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const s of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of s)if(0===e.type)n+=e.value;else if(1===e.type){const{value:i,repeatable:o,optional:a}=e,l=i in t?t[i]:"";if(u(l)&&!o)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const c=u(l)?l.join("/"):l;if(!c){if(!a)throw new Error(`Missing required param "${i}"`);s.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=c}}return n||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function Y(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Z(e,t){let n=0;const r=e.score,s=t.score;while(n<r.length&&n<s.length){const e=Y(r[n],s[n]);if(e)return e;n++}if(1===Math.abs(s.length-r.length)){if(ee(r))return 1;if(ee(s))return-1}return s.length-r.length}function ee(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const te={type:0,value:""},ne=/[a-zA-Z0-9_]/;function re(e){if(!e)return[[]];if("/"===e)return[[te]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${c}": ${e}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a,l=0,c="",u="";function h(){c&&(0===n?i.push({type:0,value:c}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),c="")}function d(){c+=a}while(l<e.length)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ne.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function se(e,t,n){const r=X(re(e.path),n);const s=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf===!t.record.aliasOf&&t.children.push(s),s}function ie(e,t){const n=[],r=new Map;function s(e){return r.get(e)}function i(e,n,r){const s=!r,l=ae(e);l.aliasOf=r&&r.record;const h=he(t,e),d=[l];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},l,{components:r?r.record.components:l.components,path:e,aliasOf:r?r.record:l}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=se(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),s&&e.name&&!ce(f)&&o(e.name)),l.children){const e=l.children;for(let t=0;t<e.length;t++)i(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&u(f)}return p?()=>{o(p)}:c}function o(e){if(B(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function l(){return n}function u(e){let t=0;while(t<n.length&&Z(e,n[t])>=0&&(e.record.path!==n[t].record.path||!de(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ce(e)&&r.set(e.record.name,e)}function h(e,t){let s,i,o,l={};if("name"in e&&e.name){if(s=r.get(e.name),!s)throw H(1,{location:e});0,o=s.record.name,l=a(oe(t.params,s.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&oe(e.params,s.keys.map((e=>e.name)))),i=s.stringify(l)}else if("path"in e)i=e.path,s=n.find((e=>e.re.test(i))),s&&(l=s.parse(i),o=s.record.name);else{if(s=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!s)throw H(1,{location:e,currentLocation:t});o=s.record.name,l=a({},t.params,e.params),i=s.stringify(l)}const c=[];let u=s;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:i,params:l,matched:c,meta:ue(c)}}return t=he({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:h,removeRoute:o,getRoutes:l,getRecordMatcher:s}}function oe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ae(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:le(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function le(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function ce(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ue(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function he(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function de(e,t){return t.children.some((t=>t===e||de(e,t)))}const fe=/#/g,pe=/&/g,ge=/\//g,me=/=/g,ve=/\?/g,ye=/\+/g,we=/%5B/g,be=/%5D/g,_e=/%5E/g,Ee=/%60/g,Te=/%7B/g,Se=/%7C/g,Ce=/%7D/g,Ie=/%20/g;function ke(e){return encodeURI(""+e).replace(Se,"|").replace(we,"[").replace(be,"]")}function xe(e){return ke(e).replace(Te,"{").replace(Ce,"}").replace(_e,"^")}function Ae(e){return ke(e).replace(ye,"%2B").replace(Ie,"+").replace(fe,"%23").replace(pe,"%26").replace(Ee,"`").replace(Te,"{").replace(Ce,"}").replace(_e,"^")}function Oe(e){return Ae(e).replace(me,"%3D")}function Re(e){return ke(e).replace(fe,"%23").replace(ve,"%3F")}function Ne(e){return null==e?"":Re(e).replace(ge,"%2F")}function De(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Pe(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const e=r[s].replace(ye," "),n=e.indexOf("="),i=De(n<0?e:e.slice(0,n)),o=n<0?null:De(e.slice(n+1));if(i in t){let e=t[i];u(e)||(e=t[i]=[e]),e.push(o)}else t[i]=o}return t}function Le(e){let t="";for(let n in e){const r=e[n];if(n=Oe(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const s=u(r)?r.map((e=>e&&Ae(e))):[r&&Ae(r)];s.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Me(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=u(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Fe=Symbol(""),Ue=Symbol(""),$e=Symbol(""),Ve=Symbol(""),je=Symbol("");function Be(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function qe(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise(((o,a)=>{const l=e=>{!1===e?a(H(4,{from:n,to:t})):e instanceof Error?a(e):j(e)?a(H(2,{from:t,to:e})):(i&&r.enterCallbacks[s]===i&&"function"===typeof e&&i.push(e),o())},c=e.call(r&&r.instances[s],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch((e=>a(e)))}))}function ze(e,t,n,r){const s=[];for(const i of e){0;for(const e in i.components){let a=i.components[e];if("beforeRouteEnter"===t||i.instances[e])if(Ge(a)){const o=a.__vccOpts||a,l=o[t];l&&s.push(qe(l,n,r,i,e))}else{let l=a();0,s.push((()=>l.then((s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${i.path}"`));const a=o(s)?s.default:s;i.components[e]=a;const l=a.__vccOpts||a,c=l[t];return c&&qe(c,n,r,i,e)()}))))}}}return s}function Ge(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function He(e){const t=(0,r.f3)($e),n=(0,r.f3)(Ve),i=(0,r.Fl)((()=>t.resolve((0,s.SU)(e.to)))),o=(0,r.Fl)((()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],s=n.matched;if(!r||!s.length)return-1;const o=s.findIndex(v.bind(null,r));if(o>-1)return o;const a=Xe(e[t-2]);return t>1&&Xe(r)===a&&s[s.length-1].path!==a?s.findIndex(v.bind(null,e[t-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Qe(n.params,i.value.params))),l=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&y(n.params,i.value.params)));function u(n={}){return Je(n)?t[(0,s.SU)(e.replace)?"replace":"push"]((0,s.SU)(e.to)).catch(c):Promise.resolve()}return{route:i,href:(0,r.Fl)((()=>i.value.href)),isActive:a,isExactActive:l,navigate:u}}const We=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:He,setup(e,{slots:t}){const n=(0,s.qj)(He(e)),{options:i}=(0,r.f3)($e),o=(0,r.Fl)((()=>({[Ye(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const s=t.default&&t.default(n);return e.custom?s:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),Ke=We;function Je(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Qe(e,t){for(const n in t){const r=t[n],s=e[n];if("string"===typeof r){if(r!==s)return!1}else if(!u(s)||s.length!==r.length||r.some(((e,t)=>e!==s[t])))return!1}return!0}function Xe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=(0,r.f3)(je),o=(0,r.Fl)((()=>e.route||i.value)),l=(0,r.f3)(Ue,0),c=(0,r.Fl)((()=>{let e=(0,s.SU)(l);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),u=(0,r.Fl)((()=>o.value.matched[c.value]));(0,r.JJ)(Ue,(0,r.Fl)((()=>c.value+1))),(0,r.JJ)(Fe,u),(0,r.JJ)(je,o);const h=(0,s.iH)();return(0,r.YP)((()=>[h.value,u.value,e.name]),(([e,t,n],[r,s,i])=>{t&&(t.instances[n]=e,s&&s!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=s.leaveGuards),t.updateGuards.size||(t.updateGuards=s.updateGuards))),!e||!t||s&&v(t,s)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const s=o.value,i=e.name,l=u.value,c=l&&l.components[i];if(!c)return et(n.default,{Component:c,route:s});const d=l.props[i],f=d?!0===d?s.params:"function"===typeof d?d(s):d:null,p=e=>{e.component.isUnmounted&&(l.instances[i]=null)},g=(0,r.h)(c,a({},f,t,{onVnodeUnmounted:p,ref:h}));return et(n.default,{Component:g,route:s})||g}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Ze;function nt(e){const t=ie(e.routes,e),n=e.parseQuery||Pe,o=e.stringifyQuery||Le,h=e.history;const d=Be(),g=Be(),v=Be(),y=(0,s.XI)(q);let w=q;i&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=l.bind(null,(e=>""+e)),_=l.bind(null,Ne),T=l.bind(null,De);function S(e,n){let r,s;return B(e)?(r=t.getRecordMatcher(e),s=n):s=e,t.addRoute(s,r)}function C(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function I(){return t.getRoutes().map((e=>e.record))}function k(e){return!!t.getRecordMatcher(e)}function R(e,r){if(r=a({},r||y.value),"string"===typeof e){const s=f(n,e,r.path),i=t.resolve({path:s.path},r),o=h.createHref(s.fullPath);return a(s,i,{params:T(i.params),hash:De(s.hash),redirectedFrom:void 0,href:o})}let s;if("path"in e)s=a({},e,{path:f(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];s=a({},e,{params:_(e.params)}),r.params=_(r.params)}const i=t.resolve(s,r),l=e.hash||"";i.params=b(T(i.params));const c=p(o,a({},e,{hash:xe(l),path:i.path})),u=h.createHref(c);return a({fullPath:c,hash:l,query:o===Le?Me(e.query):e.query||{}},i,{redirectedFrom:void 0,href:u})}function P(e){return"string"===typeof e?f(n,e,y.value.path):a({},e)}function L(e,t){if(w!==e)return H(8,{from:t,to:e})}function M(e){return $(e)}function F(e){return M(a(P(e),{replace:!0}))}function U(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=P(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function $(e,t){const n=w=R(e),r=y.value,s=e.state,i=e.force,l=!0===e.replace,c=U(n);if(c)return $(a(P(c),{state:"object"===typeof c?a({},s,c.state):s,force:i,replace:l}),t||n);const u=n;let h;return u.redirectedFrom=t,!i&&m(o,r,n)&&(h=H(16,{to:u,from:r}),ne(r,r,!0,!1)),(h?Promise.resolve(h):j(u,r)).catch((e=>W(e)?W(e,2)?e:te(e):Z(e,u,r))).then((e=>{if(e){if(W(e,2))return $(a({replace:l},P(e.to),{state:"object"===typeof e.to?a({},s,e.to.state):s,force:i}),t||u)}else e=G(u,r,!0,l,s);return z(u,r,e),e}))}function V(e,t){const n=L(e,t);return n?Promise.reject(n):Promise.resolve()}function j(e,t){let n;const[r,s,i]=st(e,t);n=ze(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(qe(r,e,t))}));const o=V.bind(null,e,t);return n.push(o),rt(n).then((()=>{n=[];for(const r of d.list())n.push(qe(r,e,t));return n.push(o),rt(n)})).then((()=>{n=ze(s,"beforeRouteUpdate",e,t);for(const r of s)r.updateGuards.forEach((r=>{n.push(qe(r,e,t))}));return n.push(o),rt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(u(r.beforeEnter))for(const s of r.beforeEnter)n.push(qe(s,e,t));else n.push(qe(r.beforeEnter,e,t));return n.push(o),rt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=ze(i,"beforeRouteEnter",e,t),n.push(o),rt(n)))).then((()=>{n=[];for(const r of g.list())n.push(qe(r,e,t));return n.push(o),rt(n)})).catch((e=>W(e,8)?e:Promise.reject(e)))}function z(e,t,n){for(const r of v.list())r(e,t,n)}function G(e,t,n,r,s){const o=L(e,t);if(o)return o;const l=t===q,c=i?history.state:{};n&&(r||l?h.replace(e.fullPath,a({scroll:l&&c&&c.scroll},s)):h.push(e.fullPath,s)),y.value=e,ne(e,t,n,l),te()}let K;function J(){K||(K=h.listen(((e,t,n)=>{if(!ae.listening)return;const r=R(e),s=U(r);if(s)return void $(a(s,{replace:!0}),r).catch(c);w=r;const o=y.value;i&&N(O(o.fullPath,n.delta),x()),j(r,o).catch((e=>W(e,12)?e:W(e,2)?($(e.to,r).then((e=>{W(e,20)&&!n.delta&&n.type===E.pop&&h.go(-1,!1)})).catch(c),Promise.reject()):(n.delta&&h.go(-n.delta,!1),Z(e,r,o)))).then((e=>{e=e||G(r,o,!1),e&&(n.delta&&!W(e,8)?h.go(-n.delta,!1):n.type===E.pop&&W(e,20)&&h.go(-1,!1)),z(r,o,e)})).catch(c)})))}let Q,X=Be(),Y=Be();function Z(e,t,n){te(e);const r=Y.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ee(){return Q&&y.value!==q?Promise.resolve():new Promise(((e,t)=>{X.add([e,t])}))}function te(e){return Q||(Q=!e,J(),X.list().forEach((([t,n])=>e?n(e):t())),X.reset()),e}function ne(t,n,s,o){const{scrollBehavior:a}=e;if(!i||!a)return Promise.resolve();const l=!s&&D(O(t.fullPath,0))||(o||!s)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,l))).then((e=>e&&A(e))).catch((e=>Z(e,t,n)))}const re=e=>h.go(e);let se;const oe=new Set,ae={currentRoute:y,listening:!0,addRoute:S,removeRoute:C,hasRoute:k,getRoutes:I,resolve:R,options:e,push:M,replace:F,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:d.add,beforeResolve:g.add,afterEach:v.add,onError:Y.add,isReady:ee,install(e){const t=this;e.component("RouterLink",Ke),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,s.SU)(y)}),i&&!se&&y.value===q&&(se=!0,M(h.location).catch((e=>{0})));const n={};for(const s in q)n[s]=(0,r.Fl)((()=>y.value[s]));e.provide($e,t),e.provide(Ve,(0,s.qj)(n)),e.provide(je,y);const o=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(w=q,K&&K(),K=null,y.value=q,se=!1,Q=!1),o()}}};return ae}function rt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function st(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const i=t.matched[o];i&&(e.matched.find((e=>v(e,i)))?r.push(i):n.push(i));const a=e.matched[o];a&&(t.matched.find((e=>v(e,a)))||s.push(a))}return[n,r,s]}function it(){return(0,r.f3)(Ve)}}}]);
//# sourceMappingURL=chunk-vendors.d8e5a9b2.js.map