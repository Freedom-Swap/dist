(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58a54d06"],{"17a9":function(e,t,n){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var a=n("e330"),r=n("1d80"),i=n("577e"),s=n("5899"),u=a("".replace),o="["+s+"]",d=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),p=function(e){return function(t){var n=i(r(t));return 1&e&&(n=u(n,d,"")),2&e&&(n=u(n,c,"")),n}};e.exports={start:p(1),end:p(2),trim:p(3)}},"943b":function(e,t,n){"use strict";n.r(t);n("a9e3");var a=n("7a23"),r={class:"user-box"},i={class:"nft-box"},s={class:"title"},u={class:"desc"},o={class:"btn-box"},d={class:"children-num"},c={class:"tip"},p={class:"intro-box"},l={class:"title"},y={class:"list"},f={class:"item"};function m(e,t,n,m,b,v){var w=Object(a["L"])("HeadTop"),O=Object(a["L"])("van-button");return Object(a["E"])(),Object(a["j"])("div",r,[Object(a["n"])(w,{title:"IDO",isShowTop:!0,isSubHeader:!1}),Object(a["k"])("div",i,[Object(a["k"])("div",s,Object(a["P"])(e.$t("index.加入合伙人获取自由联盟勋章NFT")),1),Object(a["k"])("div",u,Object(a["P"])(e.$t("index.直接邀请至少个用户",{introNum:e.introNum,buyNftAmount:e.buyNftAmount})),1),Object(a["k"])("div",o,[Number(e.usdtAllowance)>0?(Object(a["E"])(),Object(a["h"])(O,{key:0,disabled:e.isBuyNft,type:"primary",size:"large",onClick:e.buyNft},{default:Object(a["V"])((function(){return[Object(a["m"])(Object(a["P"])(e.$t("index.加入合伙人")),1)]})),_:1},8,["disabled","onClick"])):(Object(a["E"])(),Object(a["h"])(O,{key:1,type:"primary",size:"large",onClick:e.approveUsdt},{default:Object(a["V"])((function(){return[Object(a["m"])(Object(a["P"])(e.$t("index.授权"))+" USDT",1)]})),_:1},8,["onClick"]))]),Object(a["k"])("div",d,Object(a["P"])(e.$t("index.ido直推有效人数："))+Object(a["P"])(e.childrenNum),1),Object(a["k"])("div",c,Object(a["P"])(e.$t("index.花费USDT获得NFT",{buyNftAmount:e.buyNftAmount,introNum:e.introNum}))+","+Object(a["P"])(e.$t("index.质押成功，免费获得")),1)]),Object(a["k"])("div",p,[Object(a["k"])("div",l,Object(a["P"])(e.$t("index.我的IDO直推")),1),Object(a["k"])("div",y,[(Object(a["E"])(!0),Object(a["j"])(a["a"],null,Object(a["K"])(e.children,(function(e){return Object(a["E"])(),Object(a["j"])("div",f,Object(a["P"])(e),1)})),256))])])])}var b=n("5530"),v=n("1da1"),w=(n("b680"),n("96cf"),n("1a2e")),O=n("5502"),h=n("01ea"),N=n("a4a5"),j=n("901e"),x=n.n(j),T=n("722f"),g=n("98b3"),A=n("47e2"),I=n("9d56"),k=n("626a"),M={components:{HeadTop:w["a"]},setup:function(){var e=Object(O["b"])(),t=Object(A["b"])(),n=t.t,r=Object(a["I"])({address:Object(a["f"])((function(){return e.state.accounts[0]})),web3:Object(a["f"])((function(){return e.state.provider})),idoContract:null,usdtContract:null,usdtBalance:"0.00",idoAmount:"0.00",buyNftAmount:"0.00",usdtAllowance:"",introNum:0,intro:g["a"].get()||h["a"].rootAddress,isBuyNft:!1,isGetNft:!1,isIdo:!1,childrenNum:0,children:[],initContract:function(){r.idoContract=new r.web3.eth.Contract(N,h["a"].idoAddress),r.usdtContract=new r.web3.eth.Contract(T,h["a"].usdtAddress),r.initData()},initData:function(){r.getBalance(),r.getIdoInfo(),r.getUsdtAllowance(),r.getUserInfo()},getUserInfo:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.idoContract.methods.userInfo(r.address).call();case 2:return t=e.sent,e.next=5,r.idoContract.methods.getChildren(r.address).call();case 5:n=e.sent,r.isBuyNft=t.isGetNft,r.isGetNft=t.isGetNft,r.isIdo=t.isIdo,r.childrenNum=n.length,r.children=n;case 11:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),getBalance:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.usdtContract.methods.balanceOf(r.address).call();case 2:t=e.sent,r.usdtBalance=new x.a(t).dividedBy(Math.pow(10,18)).toFixed(2,1);case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),getIdoInfo:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){var t,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.idoContract.methods.idoAmount().call();case 2:return t=e.sent,e.next=5,r.idoContract.methods.buyNftAmount().call();case 5:return n=e.sent,e.next=8,r.idoContract.methods.introNum().call();case 8:a=e.sent,r.idoAmount=new x.a(t).dividedBy(Math.pow(10,18)).toFixed(2,1),r.buyNftAmount=new x.a(n).dividedBy(Math.pow(10,18)).toFixed(2,1),r.introNum=a;case 12:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),getUsdtAllowance:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.usdtContract.methods.allowance(r.address,h["a"].idoAddress).call();case 2:t=e.sent,r.usdtAllowance=t;case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),approveUsdt:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.usdtContract.methods.approve(h["a"].idoAddress,I["a"]).send({from:r.address});case 3:r.getUsdtAllowance(),e.next=8;break;case 6:e.prev=6,e.t0=e["catch"](0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));function t(){return e.apply(this,arguments)}return t}(),buyNft:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(Number(r.usdtBalance)<Number(r.buyNftAmount))){e.next=3;break}return Object(k["a"])(n("index.USDT余额不足")),e.abrupt("return");case 3:return e.prev=3,e.next=6,r.idoContract.methods.buyNft(r.intro).send({from:r.address});case 6:Object(k["a"])(n("index.操作成功")),r.initData(),e.next=12;break;case 10:e.prev=10,e.t0=e["catch"](3);case 12:case"end":return e.stop()}}),e,null,[[3,10]])})));function t(){return e.apply(this,arguments)}return t}(),ido:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(Number(r.usdtBalance)<Number(r.buyNftAmount))){e.next=3;break}return Object(k["a"])(n("index.USDT余额不足")),e.abrupt("return");case 3:return e.prev=3,e.next=6,r.idoContract.methods.ido(r.intro).send({from:r.address});case 6:Object(k["a"])(n("index.操作成功")),r.initData(),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](3);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));function t(){return e.apply(this,arguments)}return t}()});r.address&&r.initContract(),Object(a["T"])((function(){return r.address}),(function(e){e&&r.initContract()}));var i=Object(a["Q"])(r);return Object(b["a"])({},i)}},C=(n("d4ed"),n("6b0d")),E=n.n(C);const R=E()(M,[["render",m],["__scopeId","data-v-cc5c4adc"]]);t["default"]=R},a4a5:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"intro","type":"address"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"BindIntroLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"BuyNftLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"IdoLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"FreeDom","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_intro","type":"address"}],"name":"buyNft","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"buyNftAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"freeNftAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getChildren","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_intro","type":"address"}],"name":"ido","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"idoAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"introNum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxNft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"receiveAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rootAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_freeDom","type":"address"}],"name":"setFreeDom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_usdt","type":"address"}],"name":"setUsdt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"total","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"intro","type":"address"},{"internalType":"bool","name":"isGetNft","type":"bool"},{"internalType":"bool","name":"isBuyNft","type":"bool"},{"internalType":"bool","name":"isIdo","type":"bool"},{"internalType":"bool","name":"isExist","type":"bool"}],"stateMutability":"view","type":"function"}]')},a9e3:function(e,t,n){"use strict";var a=n("83ab"),r=n("da84"),i=n("e330"),s=n("94ca"),u=n("6eeb"),o=n("1a2d"),d=n("7156"),c=n("3a9b"),p=n("d9b5"),l=n("c04e"),y=n("d039"),f=n("241c").f,m=n("06cf").f,b=n("9bf2").f,v=n("408a"),w=n("58a8").trim,O="Number",h=r[O],N=h.prototype,j=r.TypeError,x=i("".slice),T=i("".charCodeAt),g=function(e){var t=l(e,"number");return"bigint"==typeof t?t:A(t)},A=function(e){var t,n,a,r,i,s,u,o,d=l(e,"number");if(p(d))throw j("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=w(d),t=T(d,0),43===t||45===t){if(n=T(d,2),88===n||120===n)return NaN}else if(48===t){switch(T(d,1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+d}for(i=x(d,2),s=i.length,u=0;u<s;u++)if(o=T(i,u),o<48||o>r)return NaN;return parseInt(i,a)}return+d};if(s(O,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var I,k=function(e){var t=arguments.length<1?0:h(g(e)),n=this;return c(N,n)&&y((function(){v(n)}))?d(Object(t),n,k):t},M=a?f(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),C=0;M.length>C;C++)o(h,I=M[C])&&!o(k,I)&&b(k,I,m(h,I));k.prototype=N,N.constructor=k,u(r,O,k)}},d4ed:function(e,t,n){"use strict";n("17a9")}}]);
//# sourceMappingURL=chunk-58a54d06.2c95632f.js.map