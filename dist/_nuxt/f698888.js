(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{151:function(n,t,e){var content=e(211);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(62).default)("1239d49d",content,!0,{sourceMap:!1})},165:function(n,t,e){"use strict";var r={components:{AppHeader:e(166).default}},o=(e(210),e(27)),component=Object(o.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("AppHeader"),n._v(" "),e("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports},166:function(n,t,e){"use strict";e.r(t);e(36),e(20);var r={name:"AppHeader",components:{},data:function(){return{navigation:[{name:"Home",href:"/",current:!0},{name:"Products",href:"/products",current:!1}]}},methods:{onClick:function(n){this.navigation=this.navigation.map((function(i){return i.current=!1})),this.navigation=this.navigation.map((function(i){return i.name===n.name?i.current=!0:null}))}}},o=e(27),component=Object(o.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"bg-gray-800",attrs:{as:"nav"}},[e("div",{staticClass:"mx-auto px-2 sm:px-6 lg:px-8"},[e("div",{staticClass:"relative flex items-center justify-between h-16"},[e("div",{staticClass:"\n          flex-1 flex\n          items-center\n          justify-center\n          sm:items-stretch\n          sm:justify-start\n        "},[e("div",{staticClass:"hidden sm:block sm:ml-6"},[e("div",{staticClass:"flex space-x-4"},n._l(n.navigation,(function(t){return e("div",{key:t.name},[e("NuxtLink",{class:[(t.current,"bg-gray-900 text-white"),"px-3 py-2 rounded-md text-sm font-medium"],attrs:{to:t.href,"aria-current":t.current?"page":void 0},on:{click:function(e){return n.onClick(t)}}},[n._v(n._s(t.name))])],1)})),0)])])])]),n._v(" "),e("div",{staticClass:"sm:hidden"},[e("div",{staticClass:"px-2 pt-2 pb-3 space-y-1"},n._l(n.navigation,(function(t){return e("div",{key:t.name},[e("NuxtLink",{class:[(t.current,"bg-gray-900 text-white"),"px-3 py-2 rounded-md text-sm font-medium"],attrs:{to:t.href,"aria-current":t.current?"page":void 0},on:{click:function(e){return n.onClick(t)}}},[n._v(n._s(t.name))])],1)})),0)])])}),[],!1,null,null,null);t.default=component.exports},169:function(n,t,e){e(170),n.exports=e(171)},210:function(n,t,e){"use strict";e(151)},211:function(n,t,e){var r=e(61)((function(i){return i[1]}));r.push([n.i,'html{\n  font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n  font-size:16px;\n  word-spacing:1px;\n  -ms-text-size-adjust:100%;\n  -webkit-text-size-adjust:100%;\n  -moz-osx-font-smoothing:grayscale;\n  -webkit-font-smoothing:antialiased;\n  box-sizing:border-box\n}\n*,:after,:before{\n  box-sizing:border-box;\n  margin:0\n}\n.button--green{\n  display:inline-block;\n  border-radius:4px;\n  border:1px solid #3b8070;\n  color:#3b8070;\n  text-decoration:none;\n  padding:10px 30px\n}\n.button--green:hover{\n  color:#fff;\n  background-color:#3b8070\n}\n.button--grey{\n  display:inline-block;\n  border-radius:4px;\n  border:1px solid #35495e;\n  color:#35495e;\n  text-decoration:none;\n  padding:10px 30px;\n  margin-left:15px\n}\n.button--grey:hover{\n  color:#fff;\n  background-color:#35495e\n}',""]),n.exports=r}},[[169,12,2,13]]]);