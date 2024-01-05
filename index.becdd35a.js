!function(){let t;function e(t){return t&&t.__esModule?t.default:t}function n(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},a=r.parcelRequireb835;null==a&&((a=function(t){if(t in o)return o[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return o[t]=n,e.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){i[t]=e},r.parcelRequireb835=a);var u=a.register;u("eEQKy",function(t,r){Object.defineProperty(t.exports,"__esModule",{value:!0,configurable:!0}),n(t.exports,"default",function(){return l});var o=a("78Yly"),i=a("dF19c"),u=a("5NGi4"),l=(0,o.defineComponent)({__name:"App",setup(t,{expose:n}){n();let r=(0,o.ref)(),a=(0,o.ref)(),l=(0,o.ref)(),c=(0,o.ref)(),s=(0,o.ref)(!1),f=(0,o.reactive)({action:"d",name:"",params:"",paramPlaceholder:"/Download/manual",downloadFileName:""});function d(t){return/^[A-Za-z0-9.\/]+$/.test(t)}function h(t){return/^.+\.[A-Za-z]+$/.test(t)}function p(t){try{return new URL(t),!0}catch(t){return!1}}let g=(0,o.computed)(()=>{if(!f.params)return!1;if("u"===f.action){if(!p(f.params))return f.paramInvalidText="Please enter a valid URL.",!0;if(!h(f.downloadFileName))return f.paramInvalidText="Please enter the file name in the format “fileName.extension”.",!0}else{if(!d(f.params))return f.paramInvalidText="Please use only uppercase and lowercase letters, numbers, .(dot), and / for the path",!0;if(!f.params.startsWith("/")||f.params.endsWith("/"))return f.paramInvalidText="The path must start with / and cannot end with /",!0}return!1}),m=null;(0,o.watch)(f,()=>{if(m&&(clearTimeout(m),s.value=!1),f.action&&f.name&&f.params&&!g.value)s.value=!0,m=setTimeout(()=>{w()},250);else{let t=r.value?.getContext("2d"),e=a.value?.getContext("2d");t.clearRect(0,0,440,440),e.clearRect(0,0,500,60)}});let x=(0,o.computed)(()=>!!g.value||!f.action||!f.name||!f.params);async function w(){if(!r.value)return;let t=(f.action??"")+"|"+(f.params??"")+(f.downloadFileName?`|${f.downloadFileName}`:"");console.log(t),await new Promise((n,o)=>{e(u).toCanvas(r.value,t,{errorCorrectionLevel:"M",width:440,margin:1,scale:1},t=>{t?o(t):n()})});let n=r.value?.getContext("2d").getImageData(0,0,500,500).data,o=0,i=500;for(let t=0;t<500;t++)for(let e=0;e<500;e++){let r=(500*e+t)*4,a=n[r],u=n[r+1],l=n[r+2];0===a&&0===u&&0===l&&(e>o&&(o=e),t<i&&(i=t))}if(f.name){let t=a.value?.getContext("2d");t.fillStyle="white",t.fillRect(0,0,500,60),t.fillStyle="black",t.textAlign="center",t.font="bold 40px Verdana",t.fillText(f.name,250,40)}s.value=!1}async function E(){if(f.name)try{y(f.name)}catch(t){console.log(t)}}function y(t){if(!c.value||!r.value)return;let e=l.value?.getContext("2d"),n=r.value?.getContext("2d"),o=a.value?.getContext("2d");e.fillStyle="white",e.fillRect(0,0,500,500),e.drawImage(n.canvas,30,0),e.drawImage(o.canvas,0,440);let i=l.value.toDataURL("image/png").replace("image/png","image/octet-stream");c.value.setAttribute("href",i),c.value.setAttribute("download",`${t}.png`),c.value.click()}let N={qrCanvas:r,strCanvas:a,mergedCanvas:l,downloadDom:c,loader:s,formData:f,isValidFilePathChar:d,isValidFileName:h,isValidUrl:p,validParams:g,actionChange:function(t){f.name="",f.params="",f.paramInvalidText=void 0,f.downloadFileName="","f"===t?f.paramPlaceholder="/Download/manual/manual.pdf":"d"===t?f.paramPlaceholder="/Download/manual":"u"===t&&(f.paramPlaceholder="http://globaleco.kr/theme/basic/images/common/logo.png")},downloadUrlChange:function(t){if("u"==f.action&&p(t)){let e=new URL(t).pathname.split("/"),n=e[e.length-1];h(n)&&(f.downloadFileName=n)}},get debounceTimer(){return m},set debounceTimer(v){m=v},showEmpty:x,generateQRCode:w,openDownloadModal:E,qrImageDownload:y,get ElAlert(){return i.ElAlert},get ElEmpty(){return i.ElEmpty},get ElInput(){return i.ElInput},get ElOption(){return i.ElOption},get ElSelect(){return i.ElSelect}};return Object.defineProperty(N,"__isScriptSetup",{enumerable:!1,value:!0}),N}})}),u("78Yly",function(t,e){t.exports=Vue}),u("dF19c",function(t,e){t.exports=ElementPlus}),u("5NGi4",function(t,e){n(t.exports,"create",function(){return r},function(t){return r=t}),n(t.exports,"toCanvas",function(){return o},function(t){return o=t}),n(t.exports,"toDataURL",function(){return i},function(t){return i=t}),n(t.exports,"toString",function(){return u},function(t){return u=t});var r,o,i,u,l=a("4tdcG"),c=a("eX2MD"),s=a("iYk40"),f=a("feezu");function d(t,e,n,r,o){let i=[].slice.call(arguments,1),a=i.length,u="function"==typeof i[a-1];if(!u&&!l())throw Error("Callback required as last argument");if(u){if(a<2)throw Error("Too few arguments provided");2===a?(o=n,n=e,e=r=void 0):3===a&&(e.getContext&&void 0===o?(o=r,r=void 0):(o=r,r=n,n=e,e=void 0))}else{if(a<1)throw Error("Too few arguments provided");return 1===a?(n=e,e=r=void 0):2!==a||e.getContext||(r=n,n=e,e=void 0),new Promise(function(o,i){try{let i=c.create(n,r);o(t(i,e,r))}catch(t){i(t)}})}try{let i=c.create(n,r);o(null,t(i,e,r))}catch(t){o(t)}}r=c.create,o=d.bind(null,s.render),i=d.bind(null,s.renderToDataURL),u=d.bind(null,function(t,e,n){return f.render(t,n)})}),u("4tdcG",function(t,e){t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}}),u("eX2MD",function(t,e){n(t.exports,"create",function(){return r},function(t){return r=t});var r,o=a("lTZQZ"),i=a("3qoRT"),u=a("lH211"),l=a("1OUre"),c=a("4y3xN"),s=a("hnwCd"),f=a("cwycv"),d=a("d6tI7"),h=a("56VZv"),p=a("idYjR"),g=a("g0jCC"),m=a("hQaWB"),x=a("bDADS");function w(t,e,n){let r,o;let i=t.size,a=g.getEncodedBits(e,n);for(r=0;r<15;r++)o=(a>>r&1)==1,r<6?t.set(r,8,o,!0):r<8?t.set(r+1,8,o,!0):t.set(i-15+r,8,o,!0),r<8?t.set(8,i-r-1,o,!0):r<9?t.set(8,15-r-1+1,o,!0):t.set(8,15-r-1,o,!0);t.set(i-8,8,1,!0)}r=function(t,e){let n,r;if(void 0===t||""===t)throw Error("No input text");let a=i.M;return void 0!==e&&(a=i.from(e.errorCorrectionLevel,i.M),n=p.from(e.version),r=f.from(e.maskPattern),e.toSJISFunc&&o.setToSJISFunction(e.toSJISFunc)),function(t,e,n,r){let i;if(Array.isArray(t))i=x.fromArray(t);else if("string"==typeof t){let r=e;if(!r){let e=x.rawSplit(t);r=p.getBestVersionForData(e,n)}i=x.fromString(t,r||40)}else throw Error("Invalid data");let a=p.getBestVersionForData(i,n);if(!a)throw Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<a)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+a+".\n")}else e=a;let g=function(t,e,n){let r=new u;n.forEach(function(e){r.put(e.mode.bit,4),r.put(e.getLength(),m.getCharCountIndicator(e.mode,t)),e.write(r)});let i=(o.getSymbolTotalCodewords(t)-d.getTotalCodewordsCount(t,e))*8;for(r.getLengthInBits()+4<=i&&r.put(0,4);r.getLengthInBits()%8!=0;)r.putBit(0);let a=(i-r.getLengthInBits())/8;for(let t=0;t<a;t++)r.put(t%2?17:236,8);return function(t,e,n){let r,i;let a=o.getSymbolTotalCodewords(e),u=a-d.getTotalCodewordsCount(e,n),l=d.getBlocksCount(e,n),c=a%l,s=l-c,f=Math.floor(a/l),p=Math.floor(u/l),g=p+1,m=f-p,x=new h(m),w=0,E=Array(l),y=Array(l),N=0,b=new Uint8Array(t.buffer);for(let t=0;t<l;t++){let e=t<s?p:g;E[t]=b.slice(w,w+e),y[t]=x.encode(E[t]),w+=e,N=Math.max(N,e)}let C=new Uint8Array(a),T=0;for(r=0;r<N;r++)for(i=0;i<l;i++)r<E[i].length&&(C[T++]=E[i][r]);for(r=0;r<m;r++)for(i=0;i<l;i++)C[T++]=y[i][r];return C}(r,t,e)}(e,n,i),E=new l(o.getSymbolSize(e));return function(t,e){let n=t.size,r=s.getPositions(e);for(let e=0;e<r.length;e++){let o=r[e][0],i=r[e][1];for(let e=-1;e<=7;e++)if(!(o+e<=-1)&&!(n<=o+e))for(let r=-1;r<=7;r++)i+r<=-1||n<=i+r||(e>=0&&e<=6&&(0===r||6===r)||r>=0&&r<=6&&(0===e||6===e)||e>=2&&e<=4&&r>=2&&r<=4?t.set(o+e,i+r,!0,!0):t.set(o+e,i+r,!1,!0))}}(E,e),function(t){let e=t.size;for(let n=8;n<e-8;n++){let e=n%2==0;t.set(n,6,e,!0),t.set(6,n,e,!0)}}(E),function(t,e){let n=c.getPositions(e);for(let e=0;e<n.length;e++){let r=n[e][0],o=n[e][1];for(let e=-2;e<=2;e++)for(let n=-2;n<=2;n++)-2===e||2===e||-2===n||2===n||0===e&&0===n?t.set(r+e,o+n,!0,!0):t.set(r+e,o+n,!1,!0)}}(E,e),w(E,n,0),e>=7&&function(t,e){let n,r,o;let i=t.size,a=p.getEncodedBits(e);for(let e=0;e<18;e++)n=Math.floor(e/3),r=e%3+i-8-3,o=(a>>e&1)==1,t.set(n,r,o,!0),t.set(r,n,o,!0)}(E,e),function(t,e){let n=t.size,r=-1,o=n-1,i=7,a=0;for(let u=n-1;u>0;u-=2)for(6===u&&u--;;){for(let n=0;n<2;n++)if(!t.isReserved(o,u-n)){let r=!1;a<e.length&&(r=(e[a]>>>i&1)==1),t.set(o,u-n,r),-1==--i&&(a++,i=7)}if((o+=r)<0||n<=o){o-=r,r=-r;break}}}(E,g),isNaN(r)&&(r=f.getBestMask(E,w.bind(null,E,n))),f.applyMask(r,E),w(E,n,r),{modules:E,version:e,errorCorrectionLevel:n,maskPattern:r,segments:i}}(t,n,a,r)}}),u("lTZQZ",function(t,e){var r,o,i,a,u,l;let c;n(t.exports,"getSymbolSize",function(){return r},function(t){return r=t}),n(t.exports,"getSymbolTotalCodewords",function(){return o},function(t){return o=t}),n(t.exports,"getBCHDigit",function(){return i},function(t){return i=t}),n(t.exports,"setToSJISFunction",function(){return a},function(t){return a=t}),n(t.exports,"isKanjiModeEnabled",function(){return u},function(t){return u=t}),n(t.exports,"toSJIS",function(){return l},function(t){return l=t});let s=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];r=function(t){if(!t)throw Error('"version" cannot be null or undefined');if(t<1||t>40)throw Error('"version" should be in range from 1 to 40');return 4*t+17},o=function(t){return s[t]},i=function(t){let e=0;for(;0!==t;)e++,t>>>=1;return e},a=function(t){if("function"!=typeof t)throw Error('"toSJISFunc" is not a valid function.');c=t},u=function(){return void 0!==c},l=function(t){return c(t)}}),u("3qoRT",function(t,e){var r,o,i,a,u,l;n(t.exports,"L",function(){return r},function(t){return r=t}),n(t.exports,"M",function(){return o},function(t){return o=t}),n(t.exports,"Q",function(){return i},function(t){return i=t}),n(t.exports,"H",function(){return a},function(t){return a=t}),n(t.exports,"isValid",function(){return u},function(t){return u=t}),n(t.exports,"from",function(){return l},function(t){return l=t}),r={bit:1},o={bit:0},i={bit:3},a={bit:2},u=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},l=function(t,e){if(u(t))return t;try{return function(t){if("string"!=typeof t)throw Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return r;case"m":case"medium":return o;case"q":case"quartile":return i;case"h":case"high":return a;default:throw Error("Unknown EC Level: "+t)}}(t)}catch(t){return e}}}),u("lH211",function(t,e){function n(){this.buffer=[],this.length=0}n.prototype={get:function(t){return(this.buffer[Math.floor(t/8)]>>>7-t%8&1)==1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(t){let e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=n}),u("1OUre",function(t,e){function n(t){if(!t||t<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}n.prototype.set=function(t,e,n,r){let o=t*this.size+e;this.data[o]=n,r&&(this.reservedBit[o]=!0)},n.prototype.get=function(t,e){return this.data[t*this.size+e]},n.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n},n.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=n}),u("4y3xN",function(t,e){n(t.exports,"getRowColCoords",function(){return r},function(t){return r=t}),n(t.exports,"getPositions",function(){return o},function(t){return o=t});var r,o,i=a("lTZQZ").getSymbolSize;r=function(t){if(1===t)return[];let e=Math.floor(t/7)+2,n=i(t),r=145===n?26:2*Math.ceil((n-13)/(2*e-2)),o=[n-7];for(let t=1;t<e-1;t++)o[t]=o[t-1]-r;return o.push(6),o.reverse()},o=function(t){let e=[],n=r(t),o=n.length;for(let t=0;t<o;t++)for(let r=0;r<o;r++)(0!==t||0!==r)&&(0!==t||r!==o-1)&&(t!==o-1||0!==r)&&e.push([n[t],n[r]]);return e}}),u("hnwCd",function(t,e){n(t.exports,"getPositions",function(){return r},function(t){return r=t});var r,o=a("lTZQZ").getSymbolSize;r=function(t){let e=o(t);return[[0,0],[e-7,0],[0,e-7]]}}),u("cwycv",function(t,e){var r,o,i,a,u,l,c,s,f;n(t.exports,"Patterns",function(){return r},function(t){return r=t}),n(t.exports,"isValid",function(){return o},function(t){return o=t}),n(t.exports,"from",function(){return i},function(t){return i=t}),n(t.exports,"getPenaltyN1",function(){return a},function(t){return a=t}),n(t.exports,"getPenaltyN2",function(){return u},function(t){return u=t}),n(t.exports,"getPenaltyN3",function(){return l},function(t){return l=t}),n(t.exports,"getPenaltyN4",function(){return c},function(t){return c=t}),n(t.exports,"applyMask",function(){return s},function(t){return s=t}),n(t.exports,"getBestMask",function(){return f},function(t){return f=t}),r={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let d={N1:3,N2:3,N3:40,N4:10};o=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},i=function(t){return o(t)?parseInt(t,10):void 0},a=function(t){let e=t.size,n=0,r=0,o=0,i=null,a=null;for(let u=0;u<e;u++){r=o=0,i=a=null;for(let l=0;l<e;l++){let e=t.get(u,l);e===i?r++:(r>=5&&(n+=d.N1+(r-5)),i=e,r=1),(e=t.get(l,u))===a?o++:(o>=5&&(n+=d.N1+(o-5)),a=e,o=1)}r>=5&&(n+=d.N1+(r-5)),o>=5&&(n+=d.N1+(o-5))}return n},u=function(t){let e=t.size,n=0;for(let r=0;r<e-1;r++)for(let o=0;o<e-1;o++){let e=t.get(r,o)+t.get(r,o+1)+t.get(r+1,o)+t.get(r+1,o+1);(4===e||0===e)&&n++}return n*d.N2},l=function(t){let e=t.size,n=0,r=0,o=0;for(let i=0;i<e;i++){r=o=0;for(let a=0;a<e;a++)r=r<<1&2047|t.get(i,a),a>=10&&(1488===r||93===r)&&n++,o=o<<1&2047|t.get(a,i),a>=10&&(1488===o||93===o)&&n++}return n*d.N3},c=function(t){let e=0,n=t.data.length;for(let r=0;r<n;r++)e+=t.data[r];return Math.abs(Math.ceil(100*e/n/5)-10)*d.N4},s=function(t,e){let n=e.size;for(let o=0;o<n;o++)for(let i=0;i<n;i++)e.isReserved(i,o)||e.xor(i,o,function(t,e,n){switch(t){case r.PATTERN000:return(e+n)%2==0;case r.PATTERN001:return e%2==0;case r.PATTERN010:return n%3==0;case r.PATTERN011:return(e+n)%3==0;case r.PATTERN100:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case r.PATTERN101:return e*n%2+e*n%3==0;case r.PATTERN110:return(e*n%2+e*n%3)%2==0;case r.PATTERN111:return(e*n%3+(e+n)%2)%2==0;default:throw Error("bad maskPattern:"+t)}}(t,i,o))},f=function(t,e){let n=Object.keys(r).length,o=0,i=1/0;for(let r=0;r<n;r++){e(r),s(r,t);let n=a(t)+u(t)+l(t)+c(t);s(r,t),n<i&&(i=n,o=r)}return o}}),u("d6tI7",function(t,e){n(t.exports,"getBlocksCount",function(){return r},function(t){return r=t}),n(t.exports,"getTotalCodewordsCount",function(){return o},function(t){return o=t});var r,o,i=a("3qoRT");let u=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],l=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];r=function(t,e){switch(e){case i.L:return u[(t-1)*4+0];case i.M:return u[(t-1)*4+1];case i.Q:return u[(t-1)*4+2];case i.H:return u[(t-1)*4+3];default:return}},o=function(t,e){switch(e){case i.L:return l[(t-1)*4+0];case i.M:return l[(t-1)*4+1];case i.Q:return l[(t-1)*4+2];case i.H:return l[(t-1)*4+3];default:return}}}),u("56VZv",function(t,e){var n=a("aew4j");function r(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}r.prototype.initialize=function(t){this.degree=t,this.genPoly=n.generateECPolynomial(this.degree)},r.prototype.encode=function(t){if(!this.genPoly)throw Error("Encoder not initialized");let e=new Uint8Array(t.length+this.degree);e.set(t);let r=n.mod(e,this.genPoly),o=this.degree-r.length;if(o>0){let t=new Uint8Array(this.degree);return t.set(r,o),t}return r},t.exports=r}),u("aew4j",function(t,e){n(t.exports,"mul",function(){return r},function(t){return r=t}),n(t.exports,"mod",function(){return o},function(t){return o=t}),n(t.exports,"generateECPolynomial",function(){return i},function(t){return i=t});var r,o,i,u=a("iue91");r=function(t,e){let n=new Uint8Array(t.length+e.length-1);for(let r=0;r<t.length;r++)for(let o=0;o<e.length;o++)n[r+o]^=u.mul(t[r],e[o]);return n},o=function(t,e){let n=new Uint8Array(t);for(;n.length-e.length>=0;){let t=n[0];for(let r=0;r<e.length;r++)n[r]^=u.mul(e[r],t);let r=0;for(;r<n.length&&0===n[r];)r++;n=n.slice(r)}return n},i=function(t){let e=new Uint8Array([1]);for(let n=0;n<t;n++)e=r(e,new Uint8Array([1,u.exp(n)]));return e}}),u("iue91",function(t,e){var r,o;n(t.exports,"exp",function(){return r},function(t){return r=t}),n(t.exports,"mul",function(){return o},function(t){return o=t});let i=new Uint8Array(512),a=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)i[e]=t,a[t]=e,256&(t<<=1)&&(t^=285);for(let t=255;t<512;t++)i[t]=i[t-255]})(),r=function(t){return i[t]},o=function(t,e){return 0===t||0===e?0:i[a[t]+a[e]]}}),u("idYjR",function(t,e){n(t.exports,"getCapacity",function(){return o},function(t){return o=t}),n(t.exports,"from",function(){return r},function(t){return r=t}),n(t.exports,"getBestVersionForData",function(){return i},function(t){return i=t}),n(t.exports,"getEncodedBits",function(){return u},function(t){return u=t});var r,o,i,u,l=a("lTZQZ"),c=a("d6tI7"),s=a("3qoRT"),f=a("hQaWB"),d=a("2fctb");let h=l.getBCHDigit(7973);function p(t,e){return f.getCharCountIndicator(t,e)+4}r=function(t,e){return d.isValid(t)?parseInt(t,10):e},o=function(t,e,n){if(!d.isValid(t))throw Error("Invalid QR Code version");void 0===n&&(n=f.BYTE);let r=(l.getSymbolTotalCodewords(t)-c.getTotalCodewordsCount(t,e))*8;if(n===f.MIXED)return r;let o=r-p(n,t);switch(n){case f.NUMERIC:return Math.floor(o/10*3);case f.ALPHANUMERIC:return Math.floor(o/11*2);case f.KANJI:return Math.floor(o/13);case f.BYTE:default:return Math.floor(o/8)}},i=function(t,e){let n;let r=s.from(e,s.M);if(Array.isArray(t)){if(t.length>1)return function(t,e){for(let n=1;n<=40;n++)if(function(t,e){let n=0;return t.forEach(function(t){let r=p(t.mode,e);n+=r+t.getBitsLength()}),n}(t,n)<=o(n,e,f.MIXED))return n}(t,r);if(0===t.length)return 1;n=t[0]}else n=t;return function(t,e,n){for(let r=1;r<=40;r++)if(e<=o(r,n,t))return r}(n.mode,n.getLength(),r)},u=function(t){if(!d.isValid(t)||t<7)throw Error("Invalid QR Code version");let e=t<<12;for(;l.getBCHDigit(e)-h>=0;)e^=7973<<l.getBCHDigit(e)-h;return t<<12|e}}),u("hQaWB",function(t,e){n(t.exports,"NUMERIC",function(){return r},function(t){return r=t}),n(t.exports,"ALPHANUMERIC",function(){return o},function(t){return o=t}),n(t.exports,"BYTE",function(){return i},function(t){return i=t}),n(t.exports,"KANJI",function(){return u},function(t){return u=t}),n(t.exports,"MIXED",function(){return l},function(t){return l=t}),n(t.exports,"getCharCountIndicator",function(){return c},function(t){return c=t}),n(t.exports,"getBestModeForData",function(){return s},function(t){return s=t}),n(t.exports,"toString",function(){return f},function(t){return f=t}),n(t.exports,"isValid",function(){return d},function(t){return d=t}),n(t.exports,"from",function(){return h},function(t){return h=t});var r,o,i,u,l,c,s,f,d,h,p=a("2fctb"),g=a("eiZGp");r={id:"Numeric",bit:1,ccBits:[10,12,14]},o={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},i={id:"Byte",bit:4,ccBits:[8,16,16]},u={id:"Kanji",bit:8,ccBits:[8,10,12]},l={bit:-1},c=function(t,e){if(!t.ccBits)throw Error("Invalid mode: "+t);if(!p.isValid(e))throw Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},s=function(t){return g.testNumeric(t)?r:g.testAlphanumeric(t)?o:g.testKanji(t)?u:i},f=function(t){if(t&&t.id)return t.id;throw Error("Invalid mode")},d=function(t){return t&&t.bit&&t.ccBits},h=function(t,e){if(d(t))return t;try{return function(t){if("string"!=typeof t)throw Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return r;case"alphanumeric":return o;case"kanji":return u;case"byte":return i;default:throw Error("Unknown mode: "+t)}}(t)}catch(t){return e}}}),u("2fctb",function(t,e){var r;n(t.exports,"isValid",function(){return r},function(t){return r=t}),r=function(t){return!isNaN(t)&&t>=1&&t<=40}}),u("eiZGp",function(t,e){var r,o,i,a,u,l,c,s;n(t.exports,"KANJI",function(){return r},function(t){return r=t}),n(t.exports,"BYTE_KANJI",function(){return o},function(t){return o=t}),n(t.exports,"BYTE",function(){return i},function(t){return i=t}),n(t.exports,"NUMERIC",function(){return a},function(t){return a=t}),n(t.exports,"ALPHANUMERIC",function(){return u},function(t){return u=t}),n(t.exports,"testKanji",function(){return l},function(t){return l=t}),n(t.exports,"testNumeric",function(){return c},function(t){return c=t}),n(t.exports,"testAlphanumeric",function(){return s},function(t){return s=t});let f="[0-9]+",d="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",h="(?:(?![A-Z0-9 $%*+\\-./:]|"+(d=d.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";r=RegExp(d,"g"),o=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),i=RegExp(h,"g"),a=RegExp(f,"g"),u=RegExp("[A-Z $%*+\\-./:]+","g");let p=RegExp("^"+d+"$"),g=RegExp("^"+f+"$"),m=RegExp("^[A-Z0-9 $%*+\\-./:]+$");l=function(t){return p.test(t)},c=function(t){return g.test(t)},s=function(t){return m.test(t)}}),u("g0jCC",function(t,e){n(t.exports,"getEncodedBits",function(){return r},function(t){return r=t});var r,o=a("lTZQZ");let i=o.getBCHDigit(1335);r=function(t,e){let n=t.bit<<3|e,r=n<<10;for(;o.getBCHDigit(r)-i>=0;)r^=1335<<o.getBCHDigit(r)-i;return(n<<10|r)^21522}}),u("bDADS",function(t,e){n(t.exports,"fromArray",function(){return r},function(t){return r=t}),n(t.exports,"fromString",function(){return o},function(t){return o=t}),n(t.exports,"rawSplit",function(){return i},function(t){return i=t});var r,o,i,u=a("hQaWB"),l=a("1XPxd"),c=a("3tC2z"),s=a("9hPEA"),f=a("fn1cM"),d=a("eiZGp"),h=a("lTZQZ"),p=a("aKUNf");function g(t){return unescape(encodeURIComponent(t)).length}function m(t,e,n){let r;let o=[];for(;null!==(r=t.exec(n));)o.push({data:r[0],index:r.index,mode:e,length:r[0].length});return o}function x(t){let e,n;let r=m(d.NUMERIC,u.NUMERIC,t),o=m(d.ALPHANUMERIC,u.ALPHANUMERIC,t);return h.isKanjiModeEnabled()?(e=m(d.BYTE,u.BYTE,t),n=m(d.KANJI,u.KANJI,t)):(e=m(d.BYTE_KANJI,u.BYTE,t),n=[]),r.concat(o,e,n).sort(function(t,e){return t.index-e.index}).map(function(t){return{data:t.data,mode:t.mode,length:t.length}})}function w(t,e){switch(e){case u.NUMERIC:return l.getBitsLength(t);case u.ALPHANUMERIC:return c.getBitsLength(t);case u.KANJI:return f.getBitsLength(t);case u.BYTE:return s.getBitsLength(t)}}function E(t,e){let n;let r=u.getBestModeForData(t);if((n=u.from(e,r))!==u.BYTE&&n.bit<r.bit)throw Error('"'+t+'" cannot be encoded with mode '+u.toString(n)+".\n Suggested mode is: "+u.toString(r));switch(n!==u.KANJI||h.isKanjiModeEnabled()||(n=u.BYTE),n){case u.NUMERIC:return new l(t);case u.ALPHANUMERIC:return new c(t);case u.KANJI:return new f(t);case u.BYTE:return new s(t)}}r=function(t){return t.reduce(function(t,e){return"string"==typeof e?t.push(E(e,null)):e.data&&t.push(E(e.data,e.mode)),t},[])},o=function(t,e){let n=function(t,e){let n={},r={start:{}},o=["start"];for(let i=0;i<t.length;i++){let a=t[i],l=[];for(let t=0;t<a.length;t++){let c=a[t],s=""+i+t;l.push(s),n[s]={node:c,lastCount:0},r[s]={};for(let t=0;t<o.length;t++){let i=o[t];n[i]&&n[i].node.mode===c.mode?(r[i][s]=w(n[i].lastCount+c.length,c.mode)-w(n[i].lastCount,c.mode),n[i].lastCount+=c.length):(n[i]&&(n[i].lastCount=c.length),r[i][s]=w(c.length,c.mode)+4+u.getCharCountIndicator(c.mode,e))}}o=l}for(let t=0;t<o.length;t++)r[o[t]].end=0;return{map:r,table:n}}(function(t){let e=[];for(let n=0;n<t.length;n++){let r=t[n];switch(r.mode){case u.NUMERIC:e.push([r,{data:r.data,mode:u.ALPHANUMERIC,length:r.length},{data:r.data,mode:u.BYTE,length:r.length}]);break;case u.ALPHANUMERIC:e.push([r,{data:r.data,mode:u.BYTE,length:r.length}]);break;case u.KANJI:e.push([r,{data:r.data,mode:u.BYTE,length:g(r.data)}]);break;case u.BYTE:e.push([{data:r.data,mode:u.BYTE,length:g(r.data)}])}}return e}(x(t,h.isKanjiModeEnabled())),e),o=p.find_path(n.map,"start","end"),i=[];for(let t=1;t<o.length-1;t++)i.push(n.table[o[t]].node);return r(i.reduce(function(t,e){let n=t.length-1>=0?t[t.length-1]:null;return n&&n.mode===e.mode?t[t.length-1].data+=e.data:t.push(e),t},[]))},i=function(t){return r(x(t,h.isKanjiModeEnabled()))}}),u("1XPxd",function(t,e){var n=a("hQaWB");function r(t){this.mode=n.NUMERIC,this.data=t.toString()}r.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},r.prototype.getLength=function(){return this.data.length},r.prototype.getBitsLength=function(){return r.getBitsLength(this.data.length)},r.prototype.write=function(t){let e,n;for(e=0;e+3<=this.data.length;e+=3)n=parseInt(this.data.substr(e,3),10),t.put(n,10);let r=this.data.length-e;r>0&&(n=parseInt(this.data.substr(e),10),t.put(n,3*r+1))},t.exports=r}),u("3tC2z",function(t,e){var n=a("hQaWB");let r=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function o(t){this.mode=n.ALPHANUMERIC,this.data=t}o.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let n=45*r.indexOf(this.data[e]);n+=r.indexOf(this.data[e+1]),t.put(n,11)}this.data.length%2&&t.put(r.indexOf(this.data[e]),6)},t.exports=o}),u("9hPEA",function(t,e){var n=a("5h06m"),r=a("hQaWB");function o(t){this.mode=r.BYTE,"string"==typeof t&&(t=n(t)),this.data=new Uint8Array(t)}o.getBitsLength=function(t){return 8*t},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)},t.exports=o}),u("5h06m",function(t,e){t.exports=function(t){for(var e=[],n=t.length,r=0;r<n;r++){var o=t.charCodeAt(r);if(o>=55296&&o<=56319&&n>r+1){var i=t.charCodeAt(r+1);i>=56320&&i<=57343&&(o=(o-55296)*1024+i-56320+65536,r+=1)}if(o<128){e.push(o);continue}if(o<2048){e.push(o>>6|192),e.push(63&o|128);continue}if(o<55296||o>=57344&&o<65536){e.push(o>>12|224),e.push(o>>6&63|128),e.push(63&o|128);continue}if(o>=65536&&o<=1114111){e.push(o>>18|240),e.push(o>>12&63|128),e.push(o>>6&63|128),e.push(63&o|128);continue}e.push(239,191,189)}return new Uint8Array(e).buffer}}),u("fn1cM",function(t,e){var n=a("hQaWB"),r=a("lTZQZ");function o(t){this.mode=n.KANJI,this.data=t}o.getBitsLength=function(t){return 13*t},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=r.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");n=(n>>>8&255)*192+(255&n),t.put(n,13)}},t.exports=o}),u("aKUNf",function(t,e){var n={single_source_shortest_paths:function(t,e,r){var o,i,a,u,l,c,s,f={},d={};d[e]=0;var h=n.PriorityQueue.make();for(h.push(e,0);!h.empty();)for(a in i=(o=h.pop()).value,u=o.cost,l=t[i]||{})l.hasOwnProperty(a)&&(c=u+l[a],s=d[a],(void 0===d[a]||s>c)&&(d[a]=c,h.push(a,c),f[a]=i));if(void 0!==r&&void 0===d[r])throw Error(["Could not find a path from ",e," to ",r,"."].join(""));return f},extract_shortest_path_from_predecessor_list:function(t,e){for(var n=[],r=e;r;)n.push(r),t[r],r=t[r];return n.reverse(),n},find_path:function(t,e,r){var o=n.single_source_shortest_paths(t,e,r);return n.extract_shortest_path_from_predecessor_list(o,r)},PriorityQueue:{make:function(t){var e,r=n.PriorityQueue,o={};for(e in t=t||{},r)r.hasOwnProperty(e)&&(o[e]=r[e]);return o.queue=[],o.sorter=t.sorter||r.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){this.queue.push({value:t,cost:e}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=n}),u("iYk40",function(t,e){n(t.exports,"render",function(){return r},function(t){return r=t}),n(t.exports,"renderToDataURL",function(){return o},function(t){return o=t});var r,o,i=a("6oUZ1");r=function(t,e,n){var r;let o=n,a=e;void 0!==o||e&&e.getContext||(o=e,e=void 0),e||(a=function(){try{return document.createElement("canvas")}catch(t){throw Error("You need to specify a canvas element")}}()),o=i.getOptions(o);let u=i.getImageWidth(t.modules.size,o),l=a.getContext("2d"),c=l.createImageData(u,u);return i.qrToImageData(c.data,t,o),r=a,l.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=u,r.width=u,r.style.height=u+"px",r.style.width=u+"px",l.putImageData(c,0,0),a},o=function(t,e,n){let o=n;void 0!==o||e&&e.getContext||(o=e,e=void 0),o||(o={});let i=r(t,e,o),a=o.type||"image/png",u=o.rendererOpts||{};return i.toDataURL(a,u.quality)}}),u("6oUZ1",function(t,e){var r,o,i,a;function u(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw Error("Invalid hex color: "+t);(3===e.length||4===e.length)&&(e=Array.prototype.concat.apply([],e.map(function(t){return[t,t]}))),6===e.length&&e.push("F","F");let n=parseInt(e.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+e.slice(0,6).join("")}}n(t.exports,"getOptions",function(){return r},function(t){return r=t}),n(t.exports,"getScale",function(){return o},function(t){return o=t}),n(t.exports,"getImageWidth",function(){return i},function(t){return i=t}),n(t.exports,"qrToImageData",function(){return a},function(t){return a=t}),r=function(t){t||(t={}),t.color||(t.color={});let e=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,n=t.width&&t.width>=21?t.width:void 0,r=t.scale||4;return{width:n,scale:n?4:r,margin:e,color:{dark:u(t.color.dark||"#000000ff"),light:u(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},o=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},i=function(t,e){let n=o(t,e);return Math.floor((t+2*e.margin)*n)},a=function(t,e,n){let r=e.modules.size,i=e.modules.data,a=o(r,n),u=Math.floor((r+2*n.margin)*a),l=n.margin*a,c=[n.color.light,n.color.dark];for(let e=0;e<u;e++)for(let o=0;o<u;o++){let s=(e*u+o)*4,f=n.color.light;e>=l&&o>=l&&e<u-l&&o<u-l&&(f=c[i[Math.floor((e-l)/a)*r+Math.floor((o-l)/a)]?1:0]),t[s++]=f.r,t[s++]=f.g,t[s++]=f.b,t[s]=f.a}}}),u("feezu",function(t,e){n(t.exports,"render",function(){return r},function(t){return r=t});var r,o=a("6oUZ1");function i(t,e){let n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function u(t,e,n){let r=t+e;return void 0!==n&&(r+=" "+n),r}r=function(t,e,n){let r=o.getOptions(e),a=t.modules.size,l=t.modules.data,c=a+2*r.margin,s=r.color.light.a?"<path "+i(r.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",f="<path "+i(r.color.dark,"stroke")+' d="'+function(t,e,n){let r="",o=0,i=!1,a=0;for(let l=0;l<t.length;l++){let c=Math.floor(l%e),s=Math.floor(l/e);c||i||(i=!0),t[l]?(a++,l>0&&c>0&&t[l-1]||(r+=i?u("M",c+n,.5+s+n):u("m",o,0),o=0,i=!1),c+1<e&&t[l+1]||(r+=u("h",a),a=0)):o++}return r}(l,a,r.margin)+'"/>',d='<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+('viewBox="0 0 '+c)+" "+c+'" shape-rendering="crispEdges">'+s+f+"</svg>\n";return"function"==typeof n&&n(null,d),d}}),u("f0Gm7",function(t,r){n(t.exports,"render",function(){return S});var o=a("78Yly"),i=a("hczlT");let u={class:"flex flex-col justify-items-center items-center bg-green-200 h-screen gap-4 pt-4"},l=(0,o.createElementVNode)("img",{class:"max-w-md",src:e(i),alt:"Global Echo"},null,-1),c=(0,o.createElementVNode)("div",{class:"text-center p-3 mb-3 font-bold text-xl border rounded-lg bg-white"},"QR Code Generator",-1),s=(0,o.createElementVNode)("div",{class:"max-lg:block hidden"},[(0,o.createElementVNode)("p",{class:"text-red-700 font-bold"},"⚠️ Please use display with minimum 1024px")],-1),f={class:"flex w-full gap-2"},d={class:"basis-1/2 flex justify-end h-full"},h={class:"bg-white relative",style:{width:"500px",height:"500px"}},p={class:"absolute top-0 left-0"},g={ref:"qrCanvas",width:"440",height:"440",style:{"margin-left":"30px","margin-right":"30px"}},m={ref:"strCanvas",width:"500",height:"60"},x={ref:"mergedCanvas",width:"500",height:"500",style:{display:"none"}},w={class:"basis-1/2 max-w-lg flex flex-col gap-3"},E={class:"flex flex-col gap-1"},y=(0,o.createElementVNode)("code",{class:"bg-white p-1 align-middle border rounded text-[10px] text-black/75"},"Open File",-1),N=(0,o.createElementVNode)("br",null,null,-1),b=(0,o.createElementVNode)("code",{class:"bg-white p-1 align-middle border rounded text-[10px] text-black/75"},"Open Folder",-1),C=(0,o.createElementVNode)("br",null,null,-1),T=(0,o.createElementVNode)("code",{class:"bg-white p-1 align-middle border rounded text-[10px] text-black/75"},"Open Download URL",-1),A={class:"flex flex-col gap-1"},B=(0,o.createElementVNode)("br",null,null,-1),I={class:"flex flex-col gap-1"},R=(0,o.createElementVNode)("br",null,null,-1),P=(0,o.createElementVNode)("br",null,null,-1),V=(0,o.createElementVNode)("br",null,null,-1),M=(0,o.createElementVNode)("br",null,null,-1),U=(0,o.createElementVNode)("br",null,null,-1),D=["disabled"],L={ref:"downloadDom",hidden:""};function S(t,e,n,r,i,a){let S=(0,o.resolveDirective)("loading");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createElementVNode)("div",u,[l,c,s,(0,o.createElementVNode)("div",f,[(0,o.createElementVNode)("div",d,[(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("div",h,[(0,o.createElementVNode)("div",p,[(0,o.withDirectives)((0,o.createVNode)(r.ElEmpty,{description:"Please fill in the fields on the right.",style:{width:"500px",height:"500px"}},null,512),[[o.vShow,r.showEmpty]])]),(0,o.createElementVNode)("canvas",g,null,512),(0,o.createElementVNode)("canvas",m,null,512),(0,o.createElementVNode)("canvas",x,null,512)])),[[S,r.loader]])]),(0,o.createElementVNode)("div",w,[(0,o.createElementVNode)("div",E,[(0,o.createVNode)(r.ElAlert,{"show-icon":"",closable:!1,class:"leading-6"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)(" To open a file, please select "),y,N,(0,o.createTextVNode)(" To open a folder, select "),b,C,(0,o.createTextVNode)(" To open a Download URL, select "),T]),_:1}),(0,o.createVNode)(r.ElSelect,{modelValue:r.formData.action,"onUpdate:modelValue":e[0]||(e[0]=t=>r.formData.action=t),placeholder:"Action Type",onChange:r.actionChange},{default:(0,o.withCtx)(()=>[(0,o.createVNode)(r.ElOption,{value:"f",label:"Open File"}),(0,o.createVNode)(r.ElOption,{value:"d",label:"Open Folder"}),(0,o.createVNode)(r.ElOption,{value:"u",label:"Open Download URL"})]),_:1},8,["modelValue"])]),(0,o.createElementVNode)("div",A,[(0,o.createVNode)(r.ElAlert,{"show-icon":"",closable:!1,class:"leading-6"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)(" Please enter the name that will be displayed on the QR code."),B,(0,o.createTextVNode)(" Please enter an identifiable name. ")]),_:1}),(0,o.createVNode)(r.ElInput,{modelValue:r.formData.name,"onUpdate:modelValue":e[1]||(e[1]=t=>r.formData.name=t),placeholder:"Sample QR Code"},null,8,["modelValue"])]),(0,o.createElementVNode)("div",I,[(0,o.createVNode)(r.ElAlert,{"show-icon":"",closable:!1,class:"leading-6"},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)(" Please enter the file path that will be displayed in the QR code."),R,(0,o.createTextVNode)(" To open a file, please enter the file path."),P,(0,o.createTextVNode)(" To open a folder, enter the folder path."),V,(0,o.createTextVNode)(" To open a Download URL, enter the Download URL and file name."),M,(0,o.createTextVNode)(" The path must start with /"),U,(0,o.createTextVNode)(" Please use only uppercase and lowercase letters, numbers, .(dot), and / for the path ")]),_:1}),(0,o.createVNode)(r.ElInput,{modelValue:r.formData.params,"onUpdate:modelValue":e[2]||(e[2]=t=>r.formData.params=t),placeholder:r.formData.paramPlaceholder,onInput:r.downloadUrlChange},null,8,["modelValue","placeholder"]),"u"==r.formData.action?((0,o.openBlock)(),(0,o.createBlock)(r.ElInput,{key:0,modelValue:r.formData.downloadFileName,"onUpdate:modelValue":e[3]||(e[3]=t=>r.formData.downloadFileName=t),placeholder:"logo.png"},null,8,["modelValue"])):(0,o.createCommentVNode)("",!0),r.validParams?((0,o.openBlock)(),(0,o.createBlock)(r.ElAlert,{key:1,type:"error",closable:!1,"show-icon":""},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)(r.formData.paramInvalidText),1)]),_:1})):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:r.openDownloadModal,disabled:r.showEmpty}," Download ",8,D)])])]),(0,o.createElementVNode)("a",L,null,512)],64)}}),u("hczlT",function(t,e){t.exports=a("ai42B").getBundleURL("eTvXC")+"Global Echo.7dae770d.png"}),u("dFPTy",function(t,e){n(t.exports,"default",function(){return r});var r=t=>{}}),(t=a("eEQKy")).__esModule&&(t=t.default),t.render=a("f0Gm7").render,t.__cssModules={},a("dFPTy").default(t),t.__scopeId="data-v-946c85",t.__file="App.vue";var l=t,c=a("dF19c");let s=(0,a("78Yly").createApp)(l);s.use(e(c)),s.mount("#app")}();