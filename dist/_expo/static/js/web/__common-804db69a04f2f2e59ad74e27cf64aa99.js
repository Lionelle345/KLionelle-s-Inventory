__d(function(g,r,i,a,m,e,d){"use strict";function t(t,n){return Object.keys(t).forEach(function(c){"default"===c||Object.prototype.hasOwnProperty.call(n,c)||Object.defineProperty(n,c,{enumerable:!0,get:function(){return t[c]}})}),t}Object.defineProperty(e,"__esModule",{value:!0}),r(d[0]),t(r(d[1]),e),t(r(d[2]),e),t(r(d[3]),e),t(r(d[4]),e)},85,[86,87,780,781,783]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0})},86,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),(function(t,n){for(var u in n)Object.defineProperty(t,u,{enumerable:!0,get:Object.getOwnPropertyDescriptor(n,u).get})})(e,{get Badge(){return D.Badge},get DarkTheme(){return y.DarkTheme},get DefaultTheme(){return _.DefaultTheme},get ErrorBoundary(){return v.ErrorBoundary},get ExperimentalStack(){return U.ExperimentalStack},get ExpoRoot(){return c.ExpoRoot},get Icon(){return D.Icon},get IsWithinNativeNavigator(){return x.IsWithinNativeNavigator},get Label(){return D.Label},get LocaleProvider(){return I.LocaleProvider},get NativeStackView(){return E.NativeStackView},get NavigationAwareActivity(){return R.NavigationAwareActivity},get Navigator(){return t.Navigator},get RouterActionHandling(){return W.RouterActionHandling},get Sitemap(){return b.Sitemap},get Slot(){return t.Slot},get SplashScreen(){return S},get StackRouter(){return W.StackRouter},get SuspenseFallback(){return f.SuspenseFallback},get TabRouter(){return W.TabRouter},get Tabs(){return M.Tabs},get ThemeProvider(){return T.ThemeProvider},get Unmatched(){return l.Unmatched},get VectorIcon(){return D.VectorIcon},get attachRouteState(){return W.attachRouteState},get createBaseStackProps(){return C.createBaseStackProps},get createBaseTabProps(){return H.createBaseTabProps},get createNativeStackProps(){return j.createNativeStackProps},get createStandardRouterNavigator(){return x.createStandardRouterNavigator},get enableLegacyHeaderAppearance(){return F.enableLegacyHeaderAppearance},get extendRouter(){return W.extendRouter},get extendRouterActions(){return W.extendRouterActions},get integrateWithRouter(){return x.integrateWithRouter},get isActionHandled(){return W.isActionHandled},get router(){return u.router},get unstable_PerformanceObserver(){return G.unstable_PerformanceObserver},get unstable_createStandardRouterNavigator(){return x.unstable_createStandardRouterNavigator},get unstable_enablePerformanceIntegration(){return G.unstable_enablePerformanceIntegration},get unstable_integrateWithRouter(){return x.unstable_integrateWithRouter},get unstable_performance(){return G.unstable_performance},get unstable_useIsNavigating(){return o.useIsNavigating},get unstable_useReconcileTabHistory(){return B.useReconcileTabHistory},get useCanDismiss(){return n.useCanDismiss},get useCanGoBack(){return n.useCanGoBack},get useCurrentRouteInfo(){return n.useCurrentRouteInfo},get useFocusEffect(){return h.useFocusEffect},get useGlobalSearchParams(){return n.useGlobalSearchParams},get useIsFocused(){return N.useIsFocused},get useLoaderData(){return n.useLoaderData},get useLocalSearchParams(){return n.useLocalSearchParams},get useNavigation(){return P.useNavigation},get useNavigationContainerRef(){return n.useNavigationContainerRef},get usePathname(){return n.usePathname},get usePreventRemove(){return L.usePreventRemove},get useRootNavigation(){return n.useRootNavigation},get useRootNavigationState(){return n.useRootNavigationState},get useRoute(){return A.useRoute},get useRoutePath(){return O.useRoutePath},get useRouter(){return n.useRouter},get useScrollToTop(){return w.useScrollToTop},get useSegments(){return n.useSegments},get useSitemap(){return p.useSitemap},get useTheme(){return k.useTheme},get useUnstableGlobalHref(){return n.useUnstableGlobalHref},get withLayoutContext(){return s.withLayoutContext}});const t=r(d[0]),n=r(d[1]),u=r(d[2]),o=r(d[3]),s=r(d[4]),c=r(d[5]),l=r(d[6]),b=r(d[7]),p=r(d[8]),v=r(d[9]),f=r(d[10]),R=r(d[11]),S=q(r(d[12])),P=r(d[13]),h=r(d[14]),N=r(d[15]),y=r(d[16]),_=r(d[17]),T=r(d[18]),k=r(d[19]),I=r(d[20]),O=r(d[21]),w=r(d[22]),A=r(d[23]),L=r(d[24]),D=r(d[25]),x=r(d[26]),B=r(d[27]),C=r(d[28]),H=r(d[29]),j=r(d[30]),W=r(d[31]),E=r(d[32]),F=r(d[33]),G=r(d[34]),M=r(d[35]),U=r(d[36]);function V(t){if("function"!=typeof WeakMap)return null;var n=new WeakMap,u=new WeakMap;return(V=function(t){return t?u:n})(t)}function q(t,n){if(!n&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var u=V(n);if(u&&u.has(t))return u.get(t);var o={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in t)if("default"!==c&&Object.prototype.hasOwnProperty.call(t,c)){var l=s?Object.getOwnPropertyDescriptor(t,c):null;l&&(l.get||l.set)?Object.defineProperty(o,c,l):o[c]=t[c]}return o.default=t,u&&u.set(t,o),o}},87,[88,689,485,706,554,707,768,759,762,772,644,642,647,559,557,588,463,465,401,402,773,470,471,460,458,566,553,636,656,774,655,359,348,544,431,775,778]);
__d(function(g,r,i,a,m,e,d){"use strict";function n(){const t=r(d[0]);return n=function(){return t},t}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"useIsNavigating",{enumerable:!0,get:function(){return u}});const t=r(d[1]);function u(){return(0,n().use)(t.NavigationPendingContext)}},706,[39,409]);
__d(function(g,r,i,a,m,e,d){"use strict";function t(){const o=r(d[0]);return t=function(){return o},o}function o(){const t=r(d[1]);return o=function(){return t},t}function n(){const t=r(d[2]);return n=function(){return t},t}function l(){const t=r(d[3]);return l=function(){return t},t}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"ErrorBoundary",{enumerable:!0,get:function(){return f}});r(d[4]);const s=r(d[5]),c=r(d[6]),u=r(d[7]);function h({error:o}){return(0,t().jsxs)(n().View,{style:{marginBottom:12,gap:4,flexWrap:'wrap'},children:[(0,t().jsx)(n().Text,{role:"heading","aria-level":1,style:y.title,children:"Something went wrong"}),(0,t().jsxs)(n().Text,{testID:"router_error_message",role:"heading","aria-level":2,style:y.errorMessage,children:["Error: ",o.message]})]})}function f({error:f,retry:x}){const w=(0,o().use)(s.BottomTabBarHeightContext)?n().View:l().SafeAreaView,S=f instanceof c.ReactServerError;return(0,t().jsx)(n().View,{style:y.container,children:(0,t().jsxs)(w,{style:{flex:1,gap:8,maxWidth:720,marginHorizontal:'auto'},children:[S?(0,t().jsx)(b,{error:f}):(0,t().jsx)(h,{error:f}),(0,t().jsx)(n().View,{style:{flex:1}}),!1,(0,t().jsx)(u.Pressable,{testID:"router_error_retry",onPress:x,children:({hovered:o,pressed:l})=>(0,t().jsx)(n().View,{style:[y.buttonInner,(o||l)&&{backgroundColor:'white'}],children:(0,t().jsx)(n().Text,{style:[y.buttonText,{color:o||l?'black':'white'}],children:"Retry"})})})]})})}const x={404:'NOT_FOUND',500:'INTERNAL_SERVER_ERROR',503:'SERVICE_UNAVAILABLE',504:'GATEWAY_TIMEOUT'};function b({error:o}){let l=String(o.statusCode);l+=': '+(x[o.statusCode]??'Server Error');const s=o.headers.get('cf-ray'),c=o.headers.get('Date');return(0,t().jsxs)(n().View,{style:{padding:12,gap:8},children:[(0,t().jsx)(n().Text,{selectable:!0,allowFontScaling:!0,style:{fontSize:n().Platform.select({web:24,default:16}),fontWeight:'bold',marginBottom:4,color:'white'},children:l}),(0,t().jsx)(n().ScrollView,{style:{borderColor:'rgba(255,255,255,0.5)',borderTopWidth:n().StyleSheet.hairlineWidth,borderBottomWidth:n().StyleSheet.hairlineWidth,maxHeight:150},contentContainerStyle:{paddingVertical:4},children:(0,t().jsx)(n().Text,{testID:"router_error_message",selectable:!0,allowFontScaling:!0,style:{color:'white'},children:o.message})}),(0,t().jsx)(w,{title:"Code",right:o.statusCode}),s&&(0,t().jsx)(w,{title:"ID",right:s}),c&&(0,t().jsx)(w,{title:"Date",right:c}),o.url&&(0,t().jsx)(n().Text,{selectable:!0,allowFontScaling:!0,style:{fontSize:14,opacity:.5,color:'white'},children:o.url})]})}function w({title:o,right:l}){const s={fontSize:16,color:'white'};return(0,t().jsxs)(n().View,{style:{flexDirection:'row',justifyContent:'space-between'},children:[(0,t().jsx)(n().Text,{selectable:!0,allowFontScaling:!0,style:s,children:o}),l&&(0,t().jsx)(n().Text,{selectable:!0,allowFontScaling:!0,style:[s,y.code],children:l})]})}const y=n().StyleSheet.create({container:{flex:1,backgroundColor:'black',padding:24,alignItems:'stretch',justifyContent:'center'},title:{color:'white',fontSize:n().Platform.select({web:32,default:24}),fontWeight:'bold'},buttonText:{fontSize:18,fontWeight:'bold',color:'black',...n().Platform.select({web:{transitionDuration:'100ms'}})},buttonInner:{...n().Platform.select({web:{transitionDuration:'100ms'}}),paddingVertical:12,paddingHorizontal:24,borderColor:'white',borderWidth:2,marginLeft:8,justifyContent:'center',alignItems:'center'},code:{fontFamily:n().Platform.select({default:'Courier',ios:'Courier New',android:'monospace'}),fontWeight:'500'},errorMessage:{color:'white',fontSize:16},subtitle:{color:'white',fontSize:14,marginBottom:12},link:{color:'rgba(255,255,255,0.4)',textDecorationStyle:'solid',textDecorationLine:'underline',fontSize:14,textAlign:'center'}})},772,[2,39,91,897,724,591,646,761]);
__d(function(g,r,i,a,m,e,d){"use strict";function n(){const t=r(d[0]);return n=function(){return t},t}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"LocaleProvider",{enumerable:!0,get:function(){return o}});const t=r(d[1]);function o({direction:o,children:c}){return(0,n().jsx)(t.LocaleDirContext.Provider,{value:o,children:c})}},773,[2,355]);
__d(function(g,r,i,a,m,e,d){"use strict";function t({dispatch:t,isPreloaded:o,isRemovalPrevented:n,state:s}){return{isPreloaded:o,isRemovalPrevented:n,routeNames:s.routeNames,preload:o=>t({type:'PRELOAD',payload:{name:o}})}}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"createBaseTabProps",{enumerable:!0,get:function(){return t}})},774,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),(function(t,o){for(var n in o)Object.defineProperty(t,n,{enumerable:!0,get:Object.getOwnPropertyDescriptor(o,n).get})})(e,{get BottomTabBar(){return n.BottomTabBar},get BottomTabBarHeightCallbackContext(){return n.BottomTabBarHeightCallbackContext},get BottomTabBarHeightContext(){return n.BottomTabBarHeightContext},get BottomTabView(){return n.BottomTabView},get SceneStyleInterpolators(){return u},get Tabs(){return n.default},get TransitionPresets(){return c},get TransitionSpecs(){return f},get createJSTabsProps(){return n.createJSTabsProps},get createStandardBottomTabNavigator(){return n.createStandardBottomTabNavigator},get default(){return s},get useBottomTabBarHeight(){return n.useBottomTabBarHeight}});const t=r(d[0]),o=r(d[1]),n=b(r(d[2])),u=b(r(d[3])),c=b(r(d[4])),f=b(r(d[5]));function l(t){if("function"!=typeof WeakMap)return null;var o=new WeakMap,n=new WeakMap;return(l=function(t){return t?n:o})(t)}function b(t,o){if(!o&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var n=l(o);if(n&&n.has(t))return n.get(t);var u={__proto__:null},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in t)if("default"!==f&&Object.prototype.hasOwnProperty.call(t,f)){var b=c?Object.getOwnPropertyDescriptor(t,f):null;b&&(b.get||b.set)?Object.defineProperty(u,f,b):u[f]=t[f]}return u.default=t,n&&n.set(t,u),u}n.default.Screen=o.Screen,n.default.Protected=t.Protected;const s=n.default},775,[649,650,776,592,593,594]);
__d(function(g,r,i,a,m,e,d){"use strict";function t(){const n=r(d[0]);return t=function(){return n},n}function n(){const t=r(d[1]);return n=function(){return t},t}Object.defineProperty(e,"__esModule",{value:!0}),(function(t,n){for(var o in n)Object.defineProperty(t,o,{enumerable:!0,get:Object.getOwnPropertyDescriptor(n,o).get})})(e,{get createJSTabsProps(){return h},get default(){return y}});const o=r(d[2]),s=r(d[3]),c=r(d[4]),u=r(d[5]),p=r(d[6]),f=r(d[7]);var l,b;function h(t){const{dispatch:n,state:o}=t;return{...(0,f.createBaseTabProps)(t),popNestedStackToTop:t=>{const s=o.routes.find(n=>n.key===t)?.state;s?.key&&n({...c.StackActions.popToTop(),target:s.key})}}}l=r(d[8]),b=e,Object.keys(l).forEach(function(t){"default"===t||Object.prototype.hasOwnProperty.call(b,t)||Object.defineProperty(b,t,{enumerable:!0,get:function(){return l[t]}})});const y=(0,u.integrateWithRouter)(s.createStandardBottomTabNavigator,c.TabRouter,{activityDefaultThreshold:1,processDescriptors:p.appendMissingPlaceholderTabDescriptors,processState:p.appendMissingPlaceholderTabRoutes,createProps:h,processScreens:s=>s.map(s=>{if('function'!=typeof s.options&&void 0!==s.options?.href){const{href:c,...u}=s.options;if(u.tabBarButton)throw new Error('Cannot use `href` and `tabBarButton` together.');return null===c?{...s,options:{...u,hidden:!0}}:{...s,options:{...u,tabBarButton:s=>{const u='web'===n().Platform.OS?s.children:(0,t().jsx)(n().Pressable,{children:s.children});return(0,t().jsx)(o.Link,{...s,style:[{display:'flex'},s.style],href:c,asChild:'web'!==n().Platform.OS,children:u})}}}}return s})})},776,[2,91,724,632,353,553,777,774,591]);
__d(function(g,r,i,a,m,e,d){"use strict";function t(t,n,o){const s=n.routeNames.filter(t=>!n.routes.some(n=>n.name===t));if(0===s.length)return t;const u=s.reduce((t,n)=>(t[n]=o({key:void 0,name:n}),t),{});return{...t,...u}}function n(t,n){if(!t.routeNames.some(n=>!t.routes.some(t=>t.name===n)))return t;const s=t.routes[t.index]?.key,u=t.routeNames.map(s=>{const u=t.routes.find(t=>t.name===s);return u||o(s,n)}),c=Math.max(0,u.findIndex(t=>t.key===s));return{...t,index:c,routes:u}}function o(t,n){const o=n[t];if(!o)throw new Error(`Could not find a descriptor for route "${t}". This is most likely a bug in expo-router. Please report it at https://github.com/expo/expo/issues.`);return{...o.route,key:t,name:t}}Object.defineProperty(e,"__esModule",{value:!0}),(function(t,n){for(var o in n)Object.defineProperty(t,o,{enumerable:!0,get:Object.getOwnPropertyDescriptor(n,o).get})})(e,{get appendMissingPlaceholderTabDescriptors(){return t},get appendMissingPlaceholderTabRoutes(){return n}})},777,[]);
__d(function(g,r,i,a,m,e,d){"use strict";function t(){const n=r(d[0]);return t=function(){return n},n}Object.defineProperty(e,"__esModule",{value:!0}),(function(t,n){for(var u in n)Object.defineProperty(t,u,{enumerable:!0,get:Object.getOwnPropertyDescriptor(n,u).get})})(e,{get ExperimentalStack(){return c},get default(){return o}});const n=u(r(d[1]));function u(t){return t&&t.__esModule?t:{default:t}}const c=Object.assign(u=>(0,t().jsx)(n.default,{...u}),{Screen:n.default.Screen,Protected:n.default.Protected}),o=c},778,[2,779]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),(function(t,u){for(var n in u)Object.defineProperty(t,n,{enumerable:!0,get:Object.getOwnPropertyDescriptor(u,n).get})})(e,{get Stack(){return t.default},get default(){return l}});const t=c(r(d[0])),u=r(d[1]),n=r(d[2]);function c(t){return t&&t.__esModule?t:{default:t}}t.default.Screen=u.StackScreen,t.default.Header=u.StackHeader,t.default.Title=u.StackTitle,t.default.Toolbar=n.StackToolbar;const l=t.default},779,[338,659,664]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}});const t=o((n=r(d[0]),u=e,Object.keys(n).forEach(function(t){"default"===t||Object.prototype.hasOwnProperty.call(u,t)||Object.defineProperty(u,t,{enumerable:!0,get:function(){return n[t]}})}),n));var n,u;function o(t){return t&&t.__esModule?t:{default:t}}},780,[779]);
__d(function(g,r,i,a,m,e,d){"use strict";var t,n;Object.defineProperty(e,"__esModule",{value:!0}),(function(t,n){for(var o in n)Object.defineProperty(t,o,{enumerable:!0,get:Object.getOwnPropertyDescriptor(n,o).get})})(e,{get useIsPreview(){return s.useIsPreview},get usePreventZoomTransitionDismissal(){return o.usePreventZoomTransitionDismissal}}),t=r(d[0]),n=e,Object.keys(t).forEach(function(o){"default"===o||Object.prototype.hasOwnProperty.call(n,o)||Object.defineProperty(n,o,{enumerable:!0,get:function(){return t[o]}})});const o=r(d[1]),s=r(d[2])},781,[724,782,556]);
__d(function(g,r,i,a,m,e,d){"use strict";function n(n){}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"usePreventZoomTransitionDismissal",{enumerable:!0,get:function(){return n}})},782,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Color",{enumerable:!0,get:function(){return y}});r(d[0]);function t(t,n){return Object.keys(t).forEach(function(u){"default"===u||Object.prototype.hasOwnProperty.call(n,u)||Object.defineProperty(n,u,{enumerable:!0,get:function(){return t[u]}})}),t}t(r(d[1]),e),t(r(d[2]),e),t(r(d[3]),e),t(r(d[4]),e),t(r(d[5]),e);const n=new Proxy({},{get:(t,n)=>null}),u=new Proxy({},{get:(t,n)=>null}),o=new Proxy({},{get:(t,n)=>null}),l=new Proxy({},{get:(t,n)=>null}),c=new Proxy({get attr(){return u},get material(){return o},get dynamic(){return l}},{get:(t,n)=>n in t?t[n]:null}),y={get ios(){return n},get android(){return c}}},783,[784,785,786,787,788,789]);
__d(function(g,r,i,a,m,e,d){"use strict";function t(t){return null}function n(t){return null}Object.defineProperty(e,"__esModule",{value:!0}),(function(t,n){for(var o in n)Object.defineProperty(t,o,{enumerable:!0,get:Object.getOwnPropertyDescriptor(n,o).get})})(e,{get Material3Color(){return n},get Material3DynamicColor(){return t}})},784,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0})},785,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0})},786,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0})},787,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0})},788,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0})},789,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.AuthProvider=function({children:f}){const[h,c]=(0,t.useState)(null),[b,A]=(0,t.useState)(n.isFirebaseConfigured);(0,t.useEffect)(()=>{if(n.firebaseAuth)return(0,s.onAuthStateChanged)(n.firebaseAuth,t=>{c(t),A(!1)});A(!1)},[]);const w=(0,t.useMemo)(()=>({user:h,loading:b,configured:n.isFirebaseConfigured,async signIn(t,u){if(!n.firebaseAuth)throw new Error('Firebase is not configured.');await(0,s.signInWithEmailAndPassword)(n.firebaseAuth,t,u)},async signUp(t,u){if(!n.firebaseAuth)throw new Error('Firebase is not configured.');await(0,s.createUserWithEmailAndPassword)(n.firebaseAuth,t,u)},async signOutUser(){if(!n.firebaseAuth)throw new Error('Firebase is not configured.');await(0,s.signOut)(n.firebaseAuth)}}),[h,b]);return(0,u.jsx)(o.Provider,{value:w,children:f})},e.useAuth=function(){const s=(0,t.useContext)(o);if(!s)throw new Error('useAuth must be used within AuthProvider');return s};var t=r(d[0]),s=r(d[1]),n=r(d[2]),u=r(d[3]);const o=(0,t.createContext)(null)},793,[39,933,804,2]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),Object.defineProperty(e,"isFirebaseConfigured",{enumerable:!0,get:function(){return o}}),Object.defineProperty(e,"firebaseAuth",{enumerable:!0,get:function(){return l}}),r(d[0]);var t=r(d[1]),n=r(d[2]);r(d[3]);const u={apiKey:'',authDomain:'',projectId:'',storageBucket:'',messagingSenderId:'',appId:''},o=Object.values(u).every(Boolean);function c(t){return'object'==typeof t&&null!==t&&'code'in t&&'auth/already-initialized'===t.code}const s=o?(0,t.getApps)().length?(0,t.getApp)():(0,t.initializeApp)(u):null,l=s?(function(t){const u=n.browserLocalPersistence;try{return(0,n.initializeAuth)(t,{persistence:u})}catch(u){if(c(u))return(0,n.getAuth)(t);throw u}})(s):null},804,[943,947,933,29]);
__d(function(g,r,i,a,m,e,d){'use strict';const t=r(d[0]),{hasOwnProperty:n}=Object.prototype,{propertyIsEnumerable:o}=Object,c=(t,n,o)=>Object.defineProperty(t,n,{value:o,writable:!0,enumerable:!0,configurable:!0}),s=this,f={concatArrays:!1,ignoreUndefined:!1},l=t=>{const c=[];for(const o in t)n.call(t,o)&&c.push(o);if(Object.getOwnPropertySymbols){const n=Object.getOwnPropertySymbols(t);for(const s of n)o.call(t,s)&&c.push(s)}return c};function u(n){return Array.isArray(n)?y(n):t(n)?p(n):n}function y(t){const n=t.slice(0,0);return l(t).forEach(o=>{c(n,o,u(t[o]))}),n}function p(t){const n=null===Object.getPrototypeOf(t)?Object.create(null):{};return l(t).forEach(o=>{c(n,o,u(t[o]))}),n}const b=(t,n,o,s)=>(o.forEach(o=>{void 0===n[o]&&s.ignoreUndefined||(o in t&&t[o]!==Object.getPrototypeOf(t)?c(t,o,h(t[o],n[o],s)):c(t,o,u(n[o])))}),t),O=(t,o,s)=>{let f=t.slice(0,0),y=0;return[t,o].forEach(o=>{const p=[];for(let s=0;s<o.length;s++)n.call(o,s)&&(p.push(String(s)),c(f,y++,o===t?o[s]:u(o[s])));f=b(f,o,l(o).filter(t=>!p.includes(t)),s)}),f};function h(n,o,c){return c.concatArrays&&Array.isArray(n)&&Array.isArray(o)?O(n,o,c):t(o)&&t(n)?b(n,o,l(o),c):u(o)}m.exports=function(...n){const o=h(u(f),this!==s&&this||{},f);let c={_:{}};for(const s of n)if(void 0!==s){if(!t(s))throw new TypeError('`'+s+'` is not an Option Object');c=h(c,{_:s},o)}return c._}},807,[808]);
__d(function(g,r,i,a,m,e,d){'use strict';m.exports=t=>{if('[object Object]'!==Object.prototype.toString.call(t))return!1;const o=Object.getPrototypeOf(t);return null===o||o===Object.prototype}},808,[]);
__d(function(g,r,i,a,m,_e,d){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return B}});var t=r(d[0]),o=r(d[1]),n=r(d[2]),l=e(r(d[3])),s=e(r(d[4]));r(d[5]);var c=e(r(d[6])),u=e(r(d[7]));r(d[8]);var f=e(r(d[9])),h=e(r(d[10])),y=e(r(d[11])),x=e(r(d[12])),p=r(d[13]),b=e(r(d[14])),j=r(d[15]),C=r(d[16]);const S=['All items','Produce','Dairy','Pantry','Bakery','Drinks'],T={Produce:'\ud83e\udd6c',Dairy:'\ud83e\udd5b',Pantry:'\ud83e\uded9',Bakery:'\ud83e\udd56',Drinks:'\ud83e\uddc3'},v=e=>`$${e.toFixed(2)}`;function F(e){return e.quantity<=e.threshold}function B({screen:e}){const{items:l,setItems:s,storageError:f}=(0,p.useInventory)(),{user:B,signOutUser:D}=(0,j.useAuth)(),[W,L]=(0,n.useState)(''),[P,H]=(0,n.useState)('All items'),[N,O]=(0,n.useState)(!1),[q,V]=(0,n.useState)(null),[M,Y]=(0,n.useState)(null),[$,K]=(0,n.useState)({name:'',category:'Produce',quantity:'',unit:'pcs',price:'',threshold:''}),[U,_]=(0,n.useState)(''),[G,Q]=(0,n.useState)(''),J=(0,n.useMemo)(()=>l.filter(F),[l]),X=(0,n.useMemo)(()=>l.reduce((e,t)=>e+t.quantity,0),[l]),Z=(0,n.useMemo)(()=>l.reduce((e,t)=>e+t.quantity*t.price,0),[l]),ee=(0,n.useMemo)(()=>{const t=W.trim().toLowerCase();return l.filter(o=>{const n='All items'===P||o.category===P,l=!t||o.name.toLowerCase().includes(t)||o.category.toLowerCase().includes(t),s='alerts'!==e||F(o);return n&&l&&s})},[P,l,e,W]),te=()=>{V(null),K({name:'',category:'Produce',quantity:'',unit:'pcs',price:'',threshold:''}),_(''),O(!0)},oe=e=>{V(e),K({name:e.name,category:e.category,quantity:String(e.quantity),unit:e.unit,price:String(e.price),threshold:String(e.threshold)}),_(''),O(!0)},re=(e,t)=>{s(o=>o.map(o=>o.id===e?{...o,quantity:Math.max(0,o.quantity+t)}:o))},ne=e=>{L(''),H('All items'),o.router.navigate('overview'===e?'/(tabs)':`/(tabs)/${e}`)},ie='overview'===e?'Good morning, K\u2019Lionelle\u2019s':'alerts'===e?'Needs a restock':'debtors'===e?'Debtors':'Your inventory';return(0,C.jsxs)(x.default,{style:R.app,children:[(0,C.jsx)(t.StatusBar,{style:"dark"}),(0,C.jsxs)(x.default,{style:R.topBar,children:[(0,C.jsx)(x.default,{style:R.brandMark,children:(0,C.jsx)(h.default,{style:R.brandMarkText,children:"K"})}),(0,C.jsxs)(x.default,{style:R.brandCopy,children:[(0,C.jsx)(h.default,{style:R.brandName,children:"K\u2019LIONELLE\u2019S"}),(0,C.jsx)(h.default,{style:R.brandCaption,children:"GROCERY \xb7 INVENTORY"})]}),(0,C.jsx)(c.default,{style:R.accountButton,onPress:async()=>{if(Q(''),B)try{await D(),o.router.replace('/auth')}catch{Q('Could not sign out. Please try again.')}else o.router.push('/auth')},accessibilityLabel:B?'Sign out':'Log in',children:(0,C.jsx)(h.default,{style:R.accountButtonText,children:B?'Sign out':'Log in'})}),(0,C.jsx)(c.default,{style:R.avatar,onPress:()=>ne('overview'),accessibilityLabel:"Go to overview",children:(0,C.jsx)(h.default,{style:R.avatarText,children:"K"})})]}),(0,C.jsxs)(u.default,{style:R.scroll,contentContainerStyle:R.scrollContent,showsVerticalScrollIndicator:!1,keyboardShouldPersistTaps:"handled",children:['debtors'!==e?(0,C.jsxs)(x.default,{style:R.titleRow,children:[(0,C.jsxs)(x.default,{style:R.titleCopy,children:[(0,C.jsx)(h.default,{style:R.eyebrow,children:'alerts'===e?'STOCK CHECK':'DAILY STORE OVERVIEW'}),(0,C.jsx)(h.default,{style:R.pageTitle,children:ie}),(0,C.jsx)(h.default,{style:R.subtitle,children:'alerts'===e?'A few favorites are running low.':'inventory'===e?'Everything on your shelves, at a glance.':'Fresh shelves, happy customers.'})]}),(0,C.jsxs)(c.default,{style:R.addButton,onPress:te,accessibilityLabel:"Add inventory item",children:[(0,C.jsx)(h.default,{style:R.addButtonPlus,children:"\uff0b"}),(0,C.jsx)(h.default,{style:R.addButtonText,children:"Add item"})]})]}):null,'debtors'!==e&&f?(0,C.jsx)(x.default,{style:R.errorBanner,children:(0,C.jsx)(h.default,{style:R.errorText,children:f})}):null,G?(0,C.jsx)(x.default,{style:R.errorBanner,children:(0,C.jsx)(h.default,{style:R.errorText,children:G})}):null,'debtors'===e?(0,C.jsx)(b.default,{}):(0,C.jsxs)(C.Fragment,{children:['overview'===e?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(x.default,{style:R.heroCard,children:[(0,C.jsxs)(x.default,{style:R.heroTopLine,children:[(0,C.jsx)(x.default,{style:R.liveDot}),(0,C.jsx)(h.default,{style:R.heroKicker,children:"TODAY AT YOUR STORE"}),(0,C.jsx)(h.default,{style:R.heroSparkle,children:"\u2726"})]}),(0,C.jsxs)(h.default,{style:R.heroTitle,children:["A little more",'\n',"organized. A lot fresher."]}),(0,C.jsxs)(x.default,{style:R.heroBottom,children:[(0,C.jsx)(h.default,{style:R.heroCaption,children:"Your shelves are looking good today."}),(0,C.jsxs)(x.default,{style:R.heroIllustration,children:[(0,C.jsx)(h.default,{style:R.heroFruit,children:"\ud83e\udd51"}),(0,C.jsx)(h.default,{style:R.heroFruit,children:"\ud83c\udf4a"})]})]}),(0,C.jsx)(x.default,{style:R.heroDecorOne}),(0,C.jsx)(x.default,{style:R.heroDecorTwo})]}),(0,C.jsxs)(x.default,{style:R.statsRow,children:[(0,C.jsx)(w,{label:"ITEMS TRACKED",value:String(l.length).padStart(2,'0'),note:"unique products",icon:"\u25a6"}),(0,C.jsx)(w,{label:"ON HAND",value:String(X),note:"total units",icon:"\u2197"}),(0,C.jsx)(w,{label:"STOCK VALUE",value:v(Z),note:"at cost",icon:"$"})]}),(0,C.jsxs)(c.default,{style:R.alertCard,onPress:()=>ne('alerts'),children:[(0,C.jsx)(x.default,{style:R.alertIcon,children:(0,C.jsx)(h.default,{style:R.alertIconText,children:"!"})}),(0,C.jsxs)(x.default,{style:R.alertCopy,children:[(0,C.jsx)(h.default,{style:R.alertTitle,children:J.length?`${J.length} items need a little love`:'All shelves are looking good'}),(0,C.jsx)(h.default,{style:R.alertSubtitle,children:J.length?'Review your low-stock list before the next rush.':'No items are below their restock level.'})]}),(0,C.jsx)(h.default,{style:R.cardArrow,children:"\u203a"})]})]}):null,(0,C.jsxs)(x.default,{style:R.sectionHeader,children:[(0,C.jsxs)(x.default,{children:[(0,C.jsx)(h.default,{style:R.sectionTitle,children:'alerts'===e?'Restock list':'overview'===e?'A fresh look':'All items'}),(0,C.jsx)(h.default,{style:R.sectionHint,children:'alerts'===e?'Below your minimum stock level':'overview'===e?'Your most recent stock check':`${ee.length} products in your store`})]}),'overview'===e?(0,C.jsx)(c.default,{onPress:()=>ne('inventory'),children:(0,C.jsx)(h.default,{style:R.seeAll,children:"See all  \u2197"})}):null]}),'overview'!==e?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(x.default,{style:R.searchBox,children:[(0,C.jsx)(h.default,{style:R.searchIcon,children:"\u2315"}),(0,C.jsx)(y.default,{value:W,onChangeText:L,placeholder:"Search products or categories",placeholderTextColor:I.muted,style:R.searchInput,accessibilityLabel:"Search inventory",returnKeyType:"search"}),W?(0,C.jsx)(c.default,{onPress:()=>L(''),children:(0,C.jsx)(h.default,{style:R.clearSearch,children:"\xd7"})}):null]}),'inventory'===e?(0,C.jsx)(u.default,{horizontal:!0,showsHorizontalScrollIndicator:!1,contentContainerStyle:R.categoryRow,children:S.map(e=>{const t=P===e;return(0,C.jsx)(c.default,{onPress:()=>H(e),style:[R.categoryChip,t&&R.categoryChipSelected],children:(0,C.jsx)(h.default,{style:[R.categoryChipText,t&&R.categoryChipTextSelected],children:e})},e)})}):null]}):null,(0,C.jsx)(x.default,{style:R.itemList,children:ee.length?ee.map(e=>(0,C.jsx)(E,{item:e,onChangeQuantity:re,onEdit:oe,onDelete:()=>Y(e)},e.id)):(0,C.jsxs)(x.default,{style:R.emptyState,children:[(0,C.jsx)(h.default,{style:R.emptyEmoji,children:'alerts'===e?'\u2728':'\ud83e\uddfa'}),(0,C.jsx)(h.default,{style:R.emptyTitle,children:'alerts'===e?'Nothing to restock':'No items found'}),(0,C.jsx)(h.default,{style:R.emptySubtitle,children:'alerts'===e?'Everything is above its minimum level.':'Try a different search or add a new product.'}),'alerts'!==e?(0,C.jsx)(c.default,{onPress:te,children:(0,C.jsx)(h.default,{style:R.emptyAction,children:"Add your first item  \u2192"})}):null]})}),(0,C.jsxs)(x.default,{style:R.footerNote,children:[(0,C.jsx)(h.default,{style:R.footerStar,children:"\u2726"}),(0,C.jsx)(h.default,{style:R.footerText,children:"A little care goes a long way."})]})]})]}),(0,C.jsxs)(x.default,{style:R.bottomBar,children:[(0,C.jsx)(A,{label:"Today",icon:"\u2302",active:'overview'===e,onPress:()=>ne('overview')}),(0,C.jsx)(A,{label:"Inventory",icon:"\u25a6",active:'inventory'===e,onPress:()=>ne('inventory')}),(0,C.jsx)(A,{label:"Restock",icon:"\u2667",active:'alerts'===e,badge:J.length,onPress:()=>ne('alerts')}),(0,C.jsx)(A,{label:"Debtors",icon:"$",active:'debtors'===e,onPress:()=>ne('debtors')})]}),(0,C.jsx)(z,{visible:N,editing:Boolean(q),form:$,setForm:K,error:U,onClose:()=>O(!1),onSave:()=>{const e=Number($.quantity),t=Number($.price),o=Number($.threshold);if(!$.name.trim()||!$.unit.trim())return void _('Add an item name and unit to continue.');if(''===$.quantity.trim()||''===$.price.trim()||''===$.threshold.trim()||!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(o)||e<0||t<0||o<0)return void _('Enter valid, non-negative numbers for quantity, cost, and low-stock level.');const n={id:q?.id??String(Date.now()),name:$.name.trim(),category:$.category,quantity:e,unit:$.unit.trim(),price:t,threshold:o,emoji:q?.emoji??T[$.category]??'\ud83d\udecd\ufe0f'};s(e=>q?e.map(e=>e.id===q.id?n:e):[n,...e]),O(!1)},onDelete:()=>{q&&Y(q)}}),(0,C.jsx)(k,{item:M,onCancel:()=>Y(null),onConfirm:()=>{M&&(s(e=>e.filter(e=>e.id!==M.id)),q?.id===M.id&&O(!1),Y(null))}})]})}function w({label:e,value:t,note:o,icon:n}){return(0,C.jsxs)(x.default,{style:R.statCard,children:[(0,C.jsxs)(x.default,{style:R.statTop,children:[(0,C.jsx)(h.default,{style:R.statLabel,children:e}),(0,C.jsx)(h.default,{style:R.statIcon,children:n})]}),(0,C.jsx)(h.default,{style:R.statValue,numberOfLines:1,adjustsFontSizeToFit:!0,children:t}),(0,C.jsx)(h.default,{style:R.statNote,children:o})]})}function E({item:e,onChangeQuantity:t,onEdit:o,onDelete:n}){const l=F(e);return(0,C.jsxs)(x.default,{style:R.itemCard,children:[(0,C.jsxs)(c.default,{style:R.itemMain,onPress:()=>o(e),accessibilityLabel:`Edit name and details for ${e.name}`,children:[(0,C.jsx)(x.default,{style:[R.itemEmojiBox,l&&R.itemEmojiBoxLow],children:(0,C.jsx)(h.default,{style:R.itemEmoji,children:e.emoji})}),(0,C.jsxs)(x.default,{style:R.itemDetails,children:[(0,C.jsxs)(x.default,{style:R.itemNameLine,children:[(0,C.jsx)(h.default,{style:R.itemName,numberOfLines:1,children:e.name}),l?(0,C.jsx)(x.default,{style:R.lowPill,children:(0,C.jsx)(h.default,{style:R.lowPillText,children:"LOW"})}):null]}),(0,C.jsxs)(h.default,{style:R.itemMeta,children:[e.category,"  \xb7  ",v(e.price)," / ",e.unit.replace(/s$/,'')]}),(0,C.jsxs)(h.default,{style:R.itemValue,children:["Stock value  ",(0,C.jsx)(h.default,{style:R.itemValueStrong,children:v(e.quantity*e.price)})]})]}),(0,C.jsx)(h.default,{style:R.editArrow,children:"\u203a"})]}),(0,C.jsx)(x.default,{style:R.itemDivider}),(0,C.jsxs)(x.default,{style:R.itemStockLine,children:[(0,C.jsxs)(h.default,{style:R.stockLabel,children:["ON HAND ",(0,C.jsxs)(h.default,{style:R.stockLevel,children:["\xb7 Restock at ",e.threshold]})]}),(0,C.jsxs)(x.default,{style:R.stepper,children:[(0,C.jsx)(c.default,{style:[R.stepButton,0===e.quantity&&R.stepButtonDisabled],onPress:()=>t(e.id,-1),disabled:0===e.quantity,accessibilityLabel:`Remove one ${e.name}`,children:(0,C.jsx)(h.default,{style:R.stepButtonText,children:"\u2212"})}),(0,C.jsxs)(h.default,{style:[R.quantityText,l&&R.quantityTextLow],children:[e.quantity," ",(0,C.jsx)(h.default,{style:R.quantityUnit,children:e.unit})]}),(0,C.jsx)(c.default,{style:R.stepButtonAdd,onPress:()=>t(e.id,1),accessibilityLabel:`Add one ${e.name}`,children:(0,C.jsx)(h.default,{style:R.stepButtonAddText,children:"\uff0b"})})]})]}),0===e.quantity?(0,C.jsx)(c.default,{style:R.outOfStockDelete,onPress:n,accessibilityLabel:`Delete out-of-stock item ${e.name}`,children:(0,C.jsx)(h.default,{style:R.outOfStockDeleteText,children:"Remove out-of-stock item"})}):null]})}function k({item:e,onCancel:t,onConfirm:o}){return(0,C.jsx)(s.default,{visible:null!==e,transparent:!0,animationType:"fade",onRequestClose:t,children:(0,C.jsxs)(x.default,{style:R.confirmationLayer,children:[(0,C.jsx)(c.default,{style:R.confirmationScrim,onPress:t,accessibilityLabel:"Cancel delete"}),(0,C.jsxs)(x.default,{style:R.confirmationCard,accessibilityRole:"alert",children:[(0,C.jsx)(h.default,{style:R.confirmationEyebrow,children:"REMOVE FROM INVENTORY"}),(0,C.jsx)(h.default,{style:R.confirmationTitle,children:"Delete this item?"}),(0,C.jsx)(h.default,{style:R.confirmationMessage,children:e?`${e.name} will be permanently removed from your inventory.`:''}),(0,C.jsxs)(x.default,{style:R.confirmationActions,children:[(0,C.jsx)(c.default,{style:R.cancelDeleteButton,onPress:t,children:(0,C.jsx)(h.default,{style:R.cancelDeleteText,children:"Keep item"})}),(0,C.jsx)(c.default,{style:R.confirmDeleteButton,onPress:o,accessibilityLabel:"Confirm delete item",children:(0,C.jsx)(h.default,{style:R.confirmDeleteText,children:"Delete item"})})]})]})]})})}function A({label:e,icon:t,active:o,badge:n,onPress:l}){return(0,C.jsxs)(c.default,{style:R.navButton,onPress:l,children:[(0,C.jsxs)(x.default,{style:R.navIconWrap,children:[(0,C.jsx)(h.default,{style:[R.navIcon,o&&R.navIconActive],children:t}),n?(0,C.jsx)(x.default,{style:R.navBadge,children:(0,C.jsx)(h.default,{style:R.navBadgeText,children:n})}):null]}),(0,C.jsx)(h.default,{style:[R.navLabel,o&&R.navLabelActive],children:e})]})}function z({visible:e,editing:t,form:o,setForm:n,error:f,onClose:p,onSave:b,onDelete:j}){const v=e=>n({...o,...e});return(0,C.jsx)(s.default,{visible:e,animationType:"slide",transparent:!0,onRequestClose:p,children:(0,C.jsxs)(l.default,{style:R.modalLayer,behavior:void 0,children:[(0,C.jsx)(c.default,{style:R.modalScrim,onPress:p}),(0,C.jsxs)(x.default,{style:R.modalCard,children:[(0,C.jsx)(x.default,{style:R.modalHandle}),(0,C.jsxs)(x.default,{style:R.modalHeading,children:[(0,C.jsxs)(x.default,{children:[(0,C.jsx)(h.default,{style:R.modalEyebrow,children:t?'UPDATE YOUR SHELVES':'GROW YOUR INVENTORY'}),(0,C.jsx)(h.default,{style:R.modalTitle,children:t?'Edit item':'Add something fresh'})]}),(0,C.jsx)(c.default,{style:R.closeButton,onPress:p,children:(0,C.jsx)(h.default,{style:R.closeButtonText,children:"\xd7"})})]}),(0,C.jsxs)(u.default,{keyboardShouldPersistTaps:"handled",showsVerticalScrollIndicator:!1,children:[(0,C.jsx)(h.default,{style:R.inputLabel,children:"ITEM NAME"}),(0,C.jsx)(y.default,{value:o.name,onChangeText:e=>v({name:e}),placeholder:"e.g. Honeycrisp apples",placeholderTextColor:I.muted,style:R.formInput,accessibilityLabel:"Item name"}),(0,C.jsx)(h.default,{style:R.inputLabel,children:"CATEGORY"}),(0,C.jsx)(x.default,{style:R.formCategories,children:S.slice(1).map(e=>(0,C.jsx)(c.default,{onPress:()=>v({category:e}),style:[R.formCategory,o.category===e&&R.formCategorySelected],children:(0,C.jsxs)(h.default,{style:[R.formCategoryText,o.category===e&&R.formCategoryTextSelected],children:[T[e],"  ",e]})},e))}),(0,C.jsxs)(x.default,{style:R.formPair,children:[(0,C.jsx)(D,{label:"QUANTITY",value:o.quantity,onChange:e=>v({quantity:e}),placeholder:"0",numeric:!0}),(0,C.jsx)(D,{label:"UNIT",value:o.unit,onChange:e=>v({unit:e}),placeholder:"pcs"})]}),(0,C.jsxs)(x.default,{style:R.formPair,children:[(0,C.jsx)(D,{label:"COST PER UNIT ($)",value:o.price,onChange:e=>v({price:e}),placeholder:"0.00",numeric:!0}),(0,C.jsx)(D,{label:"RESTOCK AT",value:o.threshold,onChange:e=>v({threshold:e}),placeholder:"0",numeric:!0})]}),f?(0,C.jsx)(h.default,{style:R.formError,children:f}):null,(0,C.jsxs)(c.default,{style:R.saveButton,onPress:b,children:[(0,C.jsx)(h.default,{style:R.saveButtonText,children:t?'Save changes':'Add to inventory'}),(0,C.jsx)(h.default,{style:R.saveButtonArrow,children:"\u2192"})]}),t?(0,C.jsx)(c.default,{style:R.deleteButton,onPress:j,children:(0,C.jsx)(h.default,{style:R.deleteButtonText,children:"Remove from inventory"})}):null,(0,C.jsx)(x.default,{style:R.modalBottomSpace})]})]})]})})}function D({label:e,value:t,onChange:o,placeholder:n,numeric:l=!1}){return(0,C.jsxs)(x.default,{style:R.formField,children:[(0,C.jsx)(h.default,{style:R.inputLabel,children:e}),(0,C.jsx)(y.default,{value:t,onChangeText:o,placeholder:n,placeholderTextColor:I.muted,style:R.formInput,keyboardType:l?'decimal-pad':'default',accessibilityLabel:e})]})}const I={ink:'#183B35',green:'#285B4B',greenDark:'#1C433B',greenSoft:'#E8F0E7',cream:'#F8F7F1',white:'#FFFFFF',muted:'#8D9890',line:'#E9ECE5',orange:'#D87947',orangeLight:'#FFF0E8'},R=f.default.create({app:{flex:1,backgroundColor:I.cream,paddingTop:0},topBar:{height:74,paddingHorizontal:22,flexDirection:'row',alignItems:'center',backgroundColor:I.greenDark},brandMark:{width:42,height:42,borderRadius:15,backgroundColor:'#D9A16C',alignItems:'center',justifyContent:'center',transform:[{rotate:'-5deg'}]},brandMarkText:{color:I.greenDark,fontSize:24,fontWeight:'900',fontFamily:'serif'},brandCopy:{marginLeft:12,flex:1},brandName:{color:'#FFFDF7',fontSize:13,fontWeight:'800',letterSpacing:2.2},brandCaption:{color:'#BDD0BE',fontSize:9,fontWeight:'700',letterSpacing:1.7,marginTop:4},avatar:{width:36,height:36,borderRadius:18,borderWidth:1,borderColor:'#68816F',alignItems:'center',justifyContent:'center'},avatarText:{color:'#F4EADB',fontWeight:'700',fontSize:15},accountButton:{height:34,borderRadius:10,borderWidth:1,borderColor:'#68816F',paddingHorizontal:10,alignItems:'center',justifyContent:'center',marginRight:9},accountButtonText:{color:'#F4EADB',fontWeight:'700',fontSize:10},scroll:{flex:1},scrollContent:{paddingHorizontal:21,paddingTop:25,paddingBottom:94},titleRow:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:20},titleCopy:{flex:1,paddingRight:10},eyebrow:{color:I.orange,fontSize:9,letterSpacing:1.65,fontWeight:'800',marginBottom:7},pageTitle:{color:I.ink,fontSize:23,letterSpacing:-.8,fontWeight:'800'},subtitle:{color:'#77847B',fontSize:12,marginTop:5},addButton:{backgroundColor:I.green,height:40,borderRadius:12,paddingHorizontal:13,flexDirection:'row',alignItems:'center',gap:5},addButtonPlus:{color:'#F3D0A7',fontSize:17,fontWeight:'500',marginTop:-1},addButtonText:{color:'#FFFFFF',fontSize:11,fontWeight:'700'},errorBanner:{backgroundColor:'#FCE9E4',borderRadius:10,padding:11,marginBottom:14,borderColor:'#F3C8BA',borderWidth:1},errorText:{color:'#9B4532',fontSize:11,fontWeight:'600'},heroCard:{backgroundColor:'#315D4A',borderRadius:22,padding:20,minHeight:180,overflow:'hidden',marginBottom:13},heroTopLine:{flexDirection:'row',alignItems:'center'},liveDot:{width:6,height:6,borderRadius:3,backgroundColor:'#E7B57E',marginRight:7},heroKicker:{color:'#D7E3D4',fontSize:9,letterSpacing:1.6,fontWeight:'800'},heroSparkle:{color:'#E7B57E',fontSize:15,marginLeft:'auto'},heroTitle:{color:'#FFFDF7',fontSize:24,lineHeight:30,letterSpacing:-.7,fontWeight:'800',marginTop:14},heroBottom:{marginTop:13,flexDirection:'row',alignItems:'center',justifyContent:'space-between'},heroCaption:{color:'#CADACB',fontSize:11},heroIllustration:{flexDirection:'row',marginRight:9,gap:1},heroFruit:{fontSize:29},heroDecorOne:{position:'absolute',width:125,height:125,borderRadius:63,borderWidth:1,borderColor:'rgba(255,255,255,0.07)',right:-35,top:-50},heroDecorTwo:{position:'absolute',width:88,height:88,borderRadius:44,borderWidth:1,borderColor:'rgba(255,255,255,0.07)',right:-13,top:-28},statsRow:{flexDirection:'row',gap:9,marginBottom:13},statCard:{flex:1,backgroundColor:I.white,borderRadius:16,paddingHorizontal:11,paddingTop:12,paddingBottom:11,borderWidth:1,borderColor:'#F0F0E9',minHeight:91},statTop:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'},statLabel:{color:I.muted,fontSize:7,letterSpacing:1,fontWeight:'800'},statIcon:{color:'#8BA88F',fontSize:12,fontWeight:'800'},statValue:{color:I.ink,fontSize:20,fontWeight:'800',letterSpacing:-.6,marginTop:8},statNote:{color:'#96A098',fontSize:9,marginTop:3},alertCard:{flexDirection:'row',alignItems:'center',backgroundColor:'#FFF6EF',borderColor:'#F4E3D4',borderWidth:1,borderRadius:15,paddingHorizontal:13,paddingVertical:12,marginBottom:25},alertIcon:{width:29,height:29,borderRadius:10,backgroundColor:'#F6DFCC',alignItems:'center',justifyContent:'center',marginRight:10},alertIconText:{color:'#AA643A',fontSize:15,fontWeight:'800'},alertCopy:{flex:1},alertTitle:{color:'#704B36',fontSize:11,fontWeight:'800'},alertSubtitle:{color:'#A8876E',fontSize:9,marginTop:4},cardArrow:{color:'#B58668',fontSize:24,marginLeft:7,marginTop:-2},sectionHeader:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:13},sectionTitle:{color:I.ink,fontSize:18,letterSpacing:-.4,fontWeight:'800'},sectionHint:{color:I.muted,fontSize:10,marginTop:4},seeAll:{color:I.green,fontWeight:'800',fontSize:10},searchBox:{flexDirection:'row',alignItems:'center',height:44,borderRadius:13,paddingHorizontal:12,backgroundColor:I.white,borderWidth:1,borderColor:I.line,marginBottom:12},searchIcon:{color:'#73847A',fontSize:25,lineHeight:28,transform:[{rotate:'-20deg'}],marginRight:8},searchInput:{flex:1,paddingVertical:0,color:I.ink,fontSize:12},clearSearch:{color:I.muted,fontSize:21,paddingHorizontal:3},categoryRow:{paddingBottom:15,gap:7},categoryChip:{paddingHorizontal:13,height:31,borderRadius:11,alignItems:'center',justifyContent:'center',backgroundColor:'#F0F0E9',borderWidth:1,borderColor:'#ECEEE7'},categoryChipSelected:{backgroundColor:I.green,borderColor:I.green},categoryChipText:{color:'#77847B',fontSize:10,fontWeight:'700'},categoryChipTextSelected:{color:'#FFFFFF'},itemList:{gap:10},itemCard:{backgroundColor:I.white,borderRadius:16,paddingHorizontal:12,paddingTop:12,paddingBottom:10,borderWidth:1,borderColor:'#EFF0EA'},itemMain:{flexDirection:'row',alignItems:'center'},itemEmojiBox:{width:44,height:44,borderRadius:14,backgroundColor:'#F0F3EA',alignItems:'center',justifyContent:'center',marginRight:11},itemEmojiBoxLow:{backgroundColor:'#FFF0E8'},itemEmoji:{fontSize:23},itemDetails:{flex:1},itemNameLine:{flexDirection:'row',alignItems:'center',gap:6},itemName:{color:I.ink,fontSize:12,fontWeight:'800',maxWidth:'75%'},lowPill:{backgroundColor:I.orangeLight,borderRadius:5,paddingHorizontal:5,paddingVertical:3},lowPillText:{color:I.orange,fontSize:7,letterSpacing:.6,fontWeight:'900'},itemMeta:{color:I.muted,fontSize:9,marginTop:4},itemValue:{color:'#9BA39C',fontSize:8,marginTop:4},itemValueStrong:{color:I.green,fontWeight:'800'},editArrow:{color:'#A8B1A9',fontSize:21,paddingLeft:7},itemDivider:{height:1,backgroundColor:'#F1F1EC',marginTop:10,marginBottom:8},itemStockLine:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'},stockLabel:{color:'#78857C',fontSize:8,letterSpacing:.9,fontWeight:'800'},stockLevel:{color:'#A6ADA6',fontWeight:'500',letterSpacing:0},stepper:{flexDirection:'row',alignItems:'center',gap:8},stepButton:{width:25,height:25,borderRadius:8,backgroundColor:'#F3F4EF',alignItems:'center',justifyContent:'center'},stepButtonDisabled:{opacity:.45},stepButtonText:{color:I.green,fontSize:18,lineHeight:22,fontWeight:'500'},quantityText:{color:I.ink,fontSize:12,fontWeight:'800',minWidth:46,textAlign:'center'},quantityTextLow:{color:I.orange},quantityUnit:{color:'#929B92',fontSize:9,fontWeight:'600'},stepButtonAdd:{width:25,height:25,borderRadius:8,backgroundColor:I.green,alignItems:'center',justifyContent:'center'},stepButtonAddText:{color:I.white,fontSize:13,fontWeight:'600'},emptyState:{alignItems:'center',paddingHorizontal:20,paddingVertical:32,backgroundColor:I.white,borderRadius:18,borderColor:I.line,borderWidth:1},emptyEmoji:{fontSize:30,marginBottom:9},emptyTitle:{color:I.ink,fontSize:14,fontWeight:'800'},emptySubtitle:{color:I.muted,fontSize:10,textAlign:'center',marginTop:5,lineHeight:15},emptyAction:{color:I.green,fontSize:11,fontWeight:'800',marginTop:14},footerNote:{flexDirection:'row',alignItems:'center',justifyContent:'center',paddingVertical:22,gap:7},footerStar:{color:'#C79664',fontSize:11},footerText:{color:'#A1AAA0',fontSize:10,fontStyle:'italic'},bottomBar:{height:66,backgroundColor:'#FFFEFB',borderTopWidth:1,borderTopColor:'#E9ECE5',flexDirection:'row',justifyContent:'space-around',alignItems:'center',paddingBottom:2},navButton:{width:'25%',alignItems:'center',justifyContent:'center',gap:3},navIconWrap:{position:'relative'},navIcon:{color:'#A2ACA2',fontSize:19,lineHeight:21},navIconActive:{color:I.green},navBadge:{position:'absolute',backgroundColor:I.orange,top:-3,right:-9,minWidth:14,height:14,borderRadius:7,alignItems:'center',justifyContent:'center',paddingHorizontal:3},navBadgeText:{color:'#FFFFFF',fontSize:8,fontWeight:'800'},navLabel:{color:'#A2ACA2',fontSize:9,fontWeight:'600'},navLabelActive:{color:I.green,fontWeight:'800'},modalLayer:{flex:1,justifyContent:'flex-end'},modalScrim:{...f.default.absoluteFill,backgroundColor:'rgba(20,40,32,0.42)'},modalCard:{maxHeight:'91%',backgroundColor:I.cream,borderTopLeftRadius:25,borderTopRightRadius:25,paddingHorizontal:21,paddingTop:10},modalHandle:{width:38,height:4,borderRadius:2,backgroundColor:'#D8DED5',alignSelf:'center',marginBottom:18},modalHeading:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:19},modalEyebrow:{color:I.orange,fontSize:8,letterSpacing:1.4,fontWeight:'800',marginBottom:5},modalTitle:{color:I.ink,fontSize:21,fontWeight:'800',letterSpacing:-.5},closeButton:{width:32,height:32,borderRadius:11,backgroundColor:'#EEEFE9',alignItems:'center',justifyContent:'center'},closeButtonText:{color:'#65736A',fontSize:22,lineHeight:25},inputLabel:{color:'#77847B',fontSize:8,letterSpacing:1,fontWeight:'800',marginBottom:7},formInput:{height:43,borderRadius:11,borderWidth:1,borderColor:'#E5E9E0',backgroundColor:I.white,paddingHorizontal:12,color:I.ink,fontSize:12,marginBottom:15},formCategories:{flexDirection:'row',flexWrap:'wrap',gap:7,marginBottom:15},formCategory:{paddingHorizontal:10,height:30,borderRadius:9,backgroundColor:'#F0F1EA',alignItems:'center',justifyContent:'center'},formCategorySelected:{backgroundColor:I.green},formCategoryText:{color:'#708076',fontSize:9,fontWeight:'700'},formCategoryTextSelected:{color:'#FFFFFF'},formPair:{flexDirection:'row',gap:11},formField:{flex:1},formError:{color:'#A74733',fontSize:10,lineHeight:15,marginTop:-2,marginBottom:10},saveButton:{height:47,borderRadius:13,backgroundColor:I.green,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:3},saveButtonText:{color:'#FFFFFF',fontSize:12,fontWeight:'800'},saveButtonArrow:{color:'#E8BE8F',fontSize:17,marginLeft:8},deleteButton:{alignItems:'center',paddingVertical:13},deleteButtonText:{color:'#A74733',fontSize:10,fontWeight:'700'},outOfStockDelete:{alignSelf:'flex-start',marginTop:10,paddingVertical:5,paddingHorizontal:2},outOfStockDeleteText:{color:'#A74733',fontSize:10,fontWeight:'700'},confirmationLayer:{flex:1,justifyContent:'center',alignItems:'center',paddingHorizontal:24},confirmationScrim:{...f.default.absoluteFill,backgroundColor:'rgba(20,40,32,0.5)'},confirmationCard:{width:'100%',maxWidth:380,borderRadius:20,backgroundColor:I.cream,padding:21},confirmationEyebrow:{color:I.orange,fontSize:8,letterSpacing:1.4,fontWeight:'800',marginBottom:8},confirmationTitle:{color:I.ink,fontSize:20,fontWeight:'800'},confirmationMessage:{color:'#77847B',fontSize:12,lineHeight:18,marginTop:8},confirmationActions:{flexDirection:'row',gap:10,marginTop:20},cancelDeleteButton:{flex:1,height:43,borderRadius:11,backgroundColor:'#ECEFE8',alignItems:'center',justifyContent:'center'},cancelDeleteText:{color:I.green,fontSize:11,fontWeight:'700'},confirmDeleteButton:{flex:1,height:43,borderRadius:11,backgroundColor:'#A74733',alignItems:'center',justifyContent:'center'},confirmDeleteText:{color:'#FFFFFF',fontSize:11,fontWeight:'800'},modalBottomSpace:{height:22}})},812,[494,85,39,295,296,29,303,199,310,104,248,313,176,813,814,793,2]);
__d(function(g,r,i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),_e.InventoryProvider=function({children:e}){const[t,h]=(0,n.useState)(l),[f,v]=(0,n.useState)(''),[p,b]=(0,n.useState)([]),[S,j]=(0,n.useState)(''),[P,I]=(0,n.useState)(!1),[q,C]=(0,n.useState)(!1);(0,n.useEffect)(()=>{let e=!0;return o.default.getItem(u).then(t=>{if(e){if(t){const e=JSON.parse(t);Array.isArray(e)&&h(e)}I(!0)}}).catch(()=>{e&&v('Could not load saved inventory. Changes may not persist.')}),()=>{e=!1}},[]),(0,n.useEffect)(()=>{let e=!0;return o.default.getItem(c).then(t=>{if(e){if(t){const e=JSON.parse(t);Array.isArray(e)&&b(e)}C(!0)}}).catch(()=>{e&&j('Could not load saved debtor records. Changes may not persist.')}),()=>{e=!1}},[]),(0,n.useEffect)(()=>{P&&o.default.setItem(u,JSON.stringify(t)).then(()=>v(''),()=>v('Could not save your latest changes. Please check device storage.'))},[t,P]),(0,n.useEffect)(()=>{q&&o.default.setItem(c,JSON.stringify(p)).then(()=>j(''),()=>j('Could not save your latest debtor records. Please check device storage.'))},[p,q]);const k=(0,n.useMemo)(()=>({items:t,setItems:h,storageError:f,debtors:p,setDebtors:b,debtorStorageError:S}),[t,f,p,S]);return(0,s.jsx)(y.Provider,{value:k,children:e})},_e.useInventory=function(){const e=(0,n.useContext)(y);if(!e)throw new Error('useInventory must be used within InventoryProvider');return e};var e,t=r(d[0]),o=(e=t)&&e.__esModule?e:{default:e},n=r(d[1]),s=r(d[2]);const u='@klionelles/inventory-v1',c='@klionelles/debtors-v1',l=[{id:'1',name:'Avocados',category:'Produce',quantity:18,unit:'pcs',price:1.25,threshold:8,emoji:'\ud83e\udd51'},{id:'2',name:'Whole milk',category:'Dairy',quantity:5,unit:'gal',price:4.5,threshold:8,emoji:'\ud83e\udd5b'},{id:'3',name:'Sourdough loaf',category:'Bakery',quantity:12,unit:'loaves',price:5.25,threshold:4,emoji:'\ud83c\udf5e'},{id:'4',name:'Roma tomatoes',category:'Produce',quantity:6,unit:'lb',price:2.8,threshold:10,emoji:'\ud83c\udf45'},{id:'5',name:'Free-range eggs',category:'Dairy',quantity:24,unit:'dozen',price:6.75,threshold:6,emoji:'\ud83e\udd5a'},{id:'6',name:'Jasmine rice',category:'Pantry',quantity:9,unit:'bags',price:8.99,threshold:5,emoji:'\ud83c\udf5a'},{id:'7',name:'Orange juice',category:'Drinks',quantity:3,unit:'bottles',price:5.5,threshold:6,emoji:'\ud83c\udf4a'},{id:'8',name:'Baby spinach',category:'Produce',quantity:14,unit:'bags',price:3.25,threshold:5,emoji:'\ud83e\udd6c'}],y=(0,n.createContext)(null)},813,[943,39,2]);
__d(function(g,r,i,_a,m,_e,d){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return C}});var t=r(d[0]),o=e(r(d[1])),n=e(r(d[2]));r(d[3]);var a=e(r(d[4])),l=e(r(d[5])),s=e(r(d[6])),c=e(r(d[7])),u=e(r(d[8])),f=r(d[9]),h=r(d[10]);const y={ink:'#183B35',green:'#285B4B',greenDark:'#1C433B',cream:'#F8F7F1',white:'#FFFFFF',muted:'#8D9890',line:'#E9ECE5',orange:'#D87947'},b=e=>`$${e.toFixed(2)}`;function p(){const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,'0')}-${String(e.getDate()).padStart(2,'0')}`}function x(e){if(!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;const[t,o,n]=e.split('-').map(Number),a=new Date(t,o-1,n);return a.getFullYear()===t&&a.getMonth()===o-1&&a.getDate()===n}function j(e){const[t,o,n]=e.split('-').map(Number);return new Date(t,o-1,n).toLocaleDateString(void 0,{year:'numeric',month:'short',day:'numeric'})}function T(e){const t=e.payments.reduce((e,t)=>e+t.amount,0);return Math.max(0,Math.round(100*(e.amountOwed-t))/100)}function C(){const{debtors:e,setDebtors:l,debtorStorageError:j}=(0,f.useInventory)(),[C,A]=(0,t.useState)(!1),[z,D]=(0,t.useState)(null),[E,F]=(0,t.useState)(''),[R,v]=(0,t.useState)(''),[k,L]=(0,t.useState)(p()),[I,W]=(0,t.useState)(''),[P,M]=(0,t.useState)(''),N=(0,t.useMemo)(()=>e.reduce((e,t)=>e+T(t),0),[e]),H=(0,t.useMemo)(()=>{const t=P.trim().toLowerCase();return e.filter(e=>e.name.toLowerCase().includes(t))},[e,P]),O=()=>{F(''),v(''),W(''),A(!0)},$=e=>{D(e),v(''),L(p()),W('')};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(u.default,{style:w.heading,children:[(0,h.jsxs)(u.default,{style:w.headingCopy,children:[(0,h.jsx)(s.default,{style:w.eyebrow,children:"CUSTOMER ACCOUNTS"}),(0,h.jsx)(s.default,{style:w.title,children:"Debtors"}),(0,h.jsx)(s.default,{style:w.subtitle,children:"Track payments and what each customer still owes."})]}),(0,h.jsx)(a.default,{style:w.addButton,onPress:O,accessibilityLabel:"Add debtor",children:(0,h.jsx)(s.default,{style:w.addButtonText,children:"\uff0b Add debtor"})})]}),j?(0,h.jsx)(u.default,{style:w.errorBanner,children:(0,h.jsx)(s.default,{style:w.errorText,children:j})}):null,(0,h.jsxs)(u.default,{style:w.summaryCard,children:[(0,h.jsx)(u.default,{style:w.summaryIcon,children:(0,h.jsx)(s.default,{style:w.summaryIconText,children:"$"})}),(0,h.jsxs)(u.default,{style:w.summaryCopy,children:[(0,h.jsx)(s.default,{style:w.summaryLabel,children:"TOTAL OUTSTANDING"}),(0,h.jsx)(s.default,{style:w.summaryAmount,children:b(N)}),(0,h.jsxs)(s.default,{style:w.summaryNote,children:[e.length," ",1===e.length?'account':'accounts'," recorded"]})]})]}),(0,h.jsx)(u.default,{style:w.sectionHeader,children:(0,h.jsxs)(u.default,{children:[(0,h.jsx)(s.default,{style:w.sectionTitle,children:"Debtor list"}),(0,h.jsx)(s.default,{style:w.sectionHint,children:"Payments and balances by customer"})]})}),(0,h.jsxs)(u.default,{style:w.searchBox,children:[(0,h.jsx)(s.default,{style:w.searchIcon,children:"\u2315"}),(0,h.jsx)(c.default,{value:P,onChangeText:M,placeholder:"Search debtors",placeholderTextColor:y.muted,style:w.searchInput,accessibilityLabel:"Search debtors",returnKeyType:"search"}),P?(0,h.jsx)(a.default,{onPress:()=>M(''),children:(0,h.jsx)(s.default,{style:w.clearSearch,children:"\xd7"})}):null]}),(0,h.jsx)(u.default,{style:w.debtorList,children:H.length?H.map(e=>(0,h.jsx)(S,{debtor:e,onRecordPayment:()=>$(e)},e.id)):(0,h.jsxs)(u.default,{style:w.emptyState,children:[(0,h.jsx)(s.default,{style:w.emptyIcon,children:P?'\u2315':'\ud83e\uddfe'}),(0,h.jsx)(s.default,{style:w.emptyTitle,children:P?'No matching debtors':'No debtors yet'}),(0,h.jsx)(s.default,{style:w.emptySubtitle,children:P?'Try another name.':'Add a customer and amount owed to start keeping track.'}),P?null:(0,h.jsx)(a.default,{onPress:O,children:(0,h.jsx)(s.default,{style:w.emptyAction,children:"Add a debtor  \u2192"})})]})}),(0,h.jsx)(n.default,{visible:C,animationType:"slide",transparent:!0,onRequestClose:()=>A(!1),children:(0,h.jsxs)(o.default,{style:w.modalLayer,behavior:void 0,children:[(0,h.jsx)(a.default,{style:w.scrim,onPress:()=>A(!1)}),(0,h.jsxs)(u.default,{style:w.modalCard,children:[(0,h.jsx)(u.default,{style:w.modalHandle}),(0,h.jsx)(B,{eyebrow:"CUSTOMER ACCOUNT",title:"Add a debtor",onClose:()=>A(!1)}),(0,h.jsx)(s.default,{style:w.inputLabel,children:"DEBTOR NAME"}),(0,h.jsx)(c.default,{value:E,onChangeText:F,placeholder:"e.g. Alex Johnson",placeholderTextColor:y.muted,style:w.input,accessibilityLabel:"Debtor name",autoCapitalize:"words"}),(0,h.jsx)(s.default,{style:w.inputLabel,children:"TOTAL AMOUNT OWED ($)"}),(0,h.jsx)(c.default,{value:R,onChangeText:v,placeholder:"0.00",placeholderTextColor:y.muted,style:w.input,accessibilityLabel:"Total amount owed",keyboardType:"decimal-pad"}),I?(0,h.jsx)(s.default,{style:w.formError,children:I}):null,(0,h.jsxs)(a.default,{style:w.saveButton,onPress:()=>{const e=Number(R);if(!E.trim())return void W('Enter the debtor\u2019s name.');if(!R.trim()||!Number.isFinite(e)||e<=0)return void W('Enter an amount greater than zero.');const t={id:`${Date.now()}-${Math.random().toString(36).slice(2)}`,name:E.trim(),amountOwed:Math.round(100*e)/100,payments:[]};l(e=>[t,...e]),A(!1)},children:[(0,h.jsx)(s.default,{style:w.saveButtonText,children:"Save debtor"}),(0,h.jsx)(s.default,{style:w.saveArrow,children:"\u2192"})]})]})]})}),(0,h.jsx)(n.default,{visible:Boolean(z),animationType:"slide",transparent:!0,onRequestClose:()=>D(null),children:(0,h.jsxs)(o.default,{style:w.modalLayer,behavior:void 0,children:[(0,h.jsx)(a.default,{style:w.scrim,onPress:()=>D(null)}),(0,h.jsxs)(u.default,{style:w.modalCard,children:[(0,h.jsx)(u.default,{style:w.modalHandle}),(0,h.jsx)(B,{eyebrow:z?`BALANCE ${b(T(z))}`:'PAYMENT',title:"Record payment",onClose:()=>D(null)}),z?(0,h.jsxs)(s.default,{style:w.paymentFor,children:["Payment from ",z.name]}):null,(0,h.jsx)(s.default,{style:w.inputLabel,children:"PAYMENT AMOUNT ($)"}),(0,h.jsx)(c.default,{value:R,onChangeText:v,placeholder:"0.00",placeholderTextColor:y.muted,style:w.input,accessibilityLabel:"Payment amount",keyboardType:"decimal-pad"}),(0,h.jsx)(s.default,{style:w.inputLabel,children:"PAYMENT DATE"}),(0,h.jsx)(c.default,{value:k,onChangeText:L,placeholder:"YYYY-MM-DD",placeholderTextColor:y.muted,style:w.input,accessibilityLabel:"Payment date",keyboardType:"numbers-and-punctuation",maxLength:10}),I?(0,h.jsx)(s.default,{style:w.formError,children:I}):null,(0,h.jsxs)(a.default,{style:w.saveButton,onPress:()=>{if(!z)return;const e=Number(R);if(!R.trim()||!Number.isFinite(e)||e<=0)return void W('Enter a payment amount greater than zero.');if(!x(k))return void W('Enter a valid date in YYYY-MM-DD format.');const t=Math.round(100*e)/100,o=T(z);if(t>o)return void W(`Payment cannot be more than the remaining balance of ${b(o)}.`);const n={id:`${Date.now()}-${Math.random().toString(36).slice(2)}`,amount:t,date:k};l(e=>e.map(e=>e.id===z.id?{...e,payments:[...e.payments,n]}:e)),D(null)},children:[(0,h.jsx)(s.default,{style:w.saveButtonText,children:"Save payment"}),(0,h.jsx)(s.default,{style:w.saveArrow,children:"\u2192"})]})]})]})})]})}function S({debtor:e,onRecordPayment:t}){const o=T(e),n=Math.round(100*(e.amountOwed-o))/100,l=[...e.payments].sort((e,t)=>t.date.localeCompare(e.date));return(0,h.jsxs)(u.default,{style:w.debtorCard,children:[(0,h.jsxs)(u.default,{style:w.debtorTop,children:[(0,h.jsx)(u.default,{style:w.avatar,children:(0,h.jsx)(s.default,{style:w.avatarText,children:e.name.trim().charAt(0).toUpperCase()})}),(0,h.jsxs)(u.default,{style:w.debtorIdentity,children:[(0,h.jsx)(s.default,{style:w.debtorName,children:e.name}),(0,h.jsxs)(s.default,{style:w.debtorMeta,children:["Amount owed ",b(e.amountOwed)]})]}),(0,h.jsx)(u.default,{style:[w.statusPill,0===o&&w.paidPill],children:(0,h.jsx)(s.default,{style:[w.statusText,0===o&&w.paidText],children:0===o?'PAID':'OWES'})})]}),(0,h.jsxs)(u.default,{style:w.balanceRow,children:[(0,h.jsxs)(u.default,{children:[(0,h.jsx)(s.default,{style:w.balanceLabel,children:"BALANCE LEFT"}),(0,h.jsx)(s.default,{style:[w.balanceAmount,0===o&&w.balancePaid],children:b(o)})]}),(0,h.jsxs)(u.default,{style:w.paidTotal,children:[(0,h.jsx)(s.default,{style:w.balanceLabel,children:"PAID SO FAR"}),(0,h.jsx)(s.default,{style:w.paidAmount,children:b(n)})]})]}),l.length?(0,h.jsxs)(u.default,{style:w.paymentHistory,children:[(0,h.jsx)(s.default,{style:w.historyTitle,children:"PAYMENT HISTORY"}),l.map(e=>(0,h.jsxs)(u.default,{style:w.paymentRow,children:[(0,h.jsx)(s.default,{style:w.paymentDate,children:j(e.date)}),(0,h.jsxs)(s.default,{style:w.paymentAmount,children:["+ ",b(e.amount)]})]},e.id))]}):null,o>0?(0,h.jsx)(a.default,{style:w.paymentButton,onPress:t,accessibilityLabel:`Record payment for ${e.name}`,children:(0,h.jsx)(s.default,{style:w.paymentButtonText,children:"\uff0b Record payment"})}):null]})}function B({eyebrow:e,title:t,onClose:o}){return(0,h.jsxs)(u.default,{style:w.modalHeading,children:[(0,h.jsxs)(u.default,{children:[(0,h.jsx)(s.default,{style:w.modalEyebrow,children:e}),(0,h.jsx)(s.default,{style:w.modalTitle,children:t})]}),(0,h.jsx)(a.default,{style:w.closeButton,onPress:o,accessibilityLabel:"Close",children:(0,h.jsx)(s.default,{style:w.closeButtonText,children:"\xd7"})})]})}const w=l.default.create({heading:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:19},headingCopy:{flex:1,paddingRight:8},eyebrow:{color:y.orange,fontSize:9,letterSpacing:1.65,fontWeight:'800',marginBottom:7},title:{color:y.ink,fontSize:23,letterSpacing:-.8,fontWeight:'800'},subtitle:{color:'#77847B',fontSize:12,marginTop:5,lineHeight:17},addButton:{backgroundColor:y.green,minHeight:40,borderRadius:12,paddingHorizontal:12,alignItems:'center',justifyContent:'center'},addButtonText:{color:y.white,fontSize:11,fontWeight:'700'},errorBanner:{backgroundColor:'#FCE9E4',borderRadius:10,padding:11,marginBottom:14,borderColor:'#F3C8BA',borderWidth:1},errorText:{color:'#9B4532',fontSize:11,fontWeight:'600'},summaryCard:{flexDirection:'row',alignItems:'center',backgroundColor:y.greenDark,borderRadius:18,padding:17,marginBottom:23},summaryIcon:{width:43,height:43,borderRadius:14,backgroundColor:'#D9A16C',alignItems:'center',justifyContent:'center',marginRight:13},summaryIconText:{color:y.greenDark,fontSize:22,fontWeight:'800'},summaryCopy:{flex:1},summaryLabel:{color:'#BDD0BE',fontSize:8,letterSpacing:1.4,fontWeight:'800'},summaryAmount:{color:'#FFFDF7',fontSize:23,letterSpacing:-.5,fontWeight:'800',marginTop:4},summaryNote:{color:'#CADACB',fontSize:10,marginTop:3},sectionHeader:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:12},sectionTitle:{color:y.ink,fontSize:18,letterSpacing:-.4,fontWeight:'800'},sectionHint:{color:y.muted,fontSize:10,marginTop:4},searchBox:{flexDirection:'row',alignItems:'center',height:44,borderRadius:13,paddingHorizontal:12,backgroundColor:y.white,borderWidth:1,borderColor:y.line,marginBottom:12},searchIcon:{color:'#73847A',fontSize:25,lineHeight:28,transform:[{rotate:'-20deg'}],marginRight:8},searchInput:{flex:1,paddingVertical:0,color:y.ink,fontSize:12},clearSearch:{color:y.muted,fontSize:21,paddingHorizontal:3},debtorList:{gap:10},debtorCard:{backgroundColor:y.white,borderRadius:16,padding:14,borderWidth:1,borderColor:'#EFF0EA',marginBottom:10},debtorTop:{flexDirection:'row',alignItems:'center'},avatar:{width:40,height:40,borderRadius:14,backgroundColor:'#F0F3EA',alignItems:'center',justifyContent:'center',marginRight:10},avatarText:{color:y.green,fontSize:16,fontWeight:'800'},debtorIdentity:{flex:1},debtorName:{color:y.ink,fontSize:13,fontWeight:'800'},debtorMeta:{color:y.muted,fontSize:10,marginTop:4},statusPill:{backgroundColor:'#FFF0E8',borderRadius:7,paddingHorizontal:8,paddingVertical:5},statusText:{color:y.orange,fontSize:8,fontWeight:'900',letterSpacing:.6},paidPill:{backgroundColor:'#E8F0E7'},paidText:{color:y.green},balanceRow:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#F8F8F3',borderRadius:11,padding:11,marginTop:13},balanceLabel:{color:y.muted,fontSize:7,letterSpacing:1,fontWeight:'800'},balanceAmount:{color:y.orange,fontSize:18,fontWeight:'800',marginTop:4},balancePaid:{color:y.green},paidTotal:{alignItems:'flex-end'},paidAmount:{color:y.ink,fontSize:14,fontWeight:'700',marginTop:5},paymentHistory:{paddingTop:12},historyTitle:{color:y.muted,fontSize:8,letterSpacing:1,fontWeight:'800',marginBottom:6},paymentRow:{flexDirection:'row',justifyContent:'space-between',paddingVertical:6,borderBottomWidth:1,borderBottomColor:'#F1F1EC'},paymentDate:{color:'#77847B',fontSize:10},paymentAmount:{color:y.green,fontSize:10,fontWeight:'800'},paymentButton:{height:39,borderRadius:10,backgroundColor:y.green,alignItems:'center',justifyContent:'center',marginTop:12},paymentButtonText:{color:y.white,fontSize:11,fontWeight:'700'},emptyState:{alignItems:'center',paddingHorizontal:20,paddingVertical:32,backgroundColor:y.white,borderRadius:18,borderColor:y.line,borderWidth:1},emptyIcon:{fontSize:28,marginBottom:9},emptyTitle:{color:y.ink,fontSize:14,fontWeight:'800'},emptySubtitle:{color:y.muted,fontSize:10,textAlign:'center',marginTop:5,lineHeight:15},emptyAction:{color:y.green,fontSize:11,fontWeight:'800',marginTop:14},modalLayer:{flex:1,justifyContent:'flex-end'},scrim:{...l.default.absoluteFill,backgroundColor:'rgba(20,40,32,0.42)'},modalCard:{backgroundColor:y.cream,borderTopLeftRadius:25,borderTopRightRadius:25,paddingHorizontal:21,paddingTop:10,paddingBottom:18},modalHandle:{width:38,height:4,borderRadius:2,backgroundColor:'#D8DED5',alignSelf:'center',marginBottom:18},modalHeading:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:17},modalEyebrow:{color:y.orange,fontSize:8,letterSpacing:1.4,fontWeight:'800',marginBottom:5},modalTitle:{color:y.ink,fontSize:21,fontWeight:'800',letterSpacing:-.5},closeButton:{width:32,height:32,borderRadius:11,backgroundColor:'#EEEFE9',alignItems:'center',justifyContent:'center'},closeButtonText:{color:'#65736A',fontSize:22,lineHeight:25},paymentFor:{color:'#77847B',fontSize:11,marginTop:-8,marginBottom:16},inputLabel:{color:'#77847B',fontSize:8,letterSpacing:1,fontWeight:'800',marginBottom:7},input:{height:43,borderRadius:11,borderWidth:1,borderColor:'#E5E9E0',backgroundColor:y.white,paddingHorizontal:12,color:y.ink,fontSize:12,marginBottom:15},formError:{color:'#B64B35',fontSize:10,fontWeight:'700',marginBottom:12},saveButton:{height:47,borderRadius:13,backgroundColor:y.green,flexDirection:'row',alignItems:'center',justifyContent:'center',gap:9},saveButtonText:{color:y.white,fontSize:12,fontWeight:'800'},saveArrow:{color:'#E4BD94',fontSize:16}})},814,[39,295,296,29,303,104,248,313,176,813,2]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var t=r(d[0]);Object.keys(t).forEach(function(n){'default'===n||Object.prototype.hasOwnProperty.call(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})})},933,[934]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),Object.defineProperty(e,"ActionCodeOperation",{enumerable:!0,get:function(){return t.A}}),Object.defineProperty(e,"ActionCodeURL",{enumerable:!0,get:function(){return t.a}}),Object.defineProperty(e,"AuthCredential",{enumerable:!0,get:function(){return t.b}}),Object.defineProperty(e,"AuthErrorCodes",{enumerable:!0,get:function(){return t.c}}),Object.defineProperty(e,"EmailAuthCredential",{enumerable:!0,get:function(){return t.E}}),Object.defineProperty(e,"EmailAuthProvider",{enumerable:!0,get:function(){return t.d}}),Object.defineProperty(e,"FacebookAuthProvider",{enumerable:!0,get:function(){return t.F}}),Object.defineProperty(e,"FactorId",{enumerable:!0,get:function(){return t.e}}),Object.defineProperty(e,"GithubAuthProvider",{enumerable:!0,get:function(){return t.G}}),Object.defineProperty(e,"GoogleAuthProvider",{enumerable:!0,get:function(){return t.f}}),Object.defineProperty(e,"OAuthCredential",{enumerable:!0,get:function(){return t.O}}),Object.defineProperty(e,"OAuthProvider",{enumerable:!0,get:function(){return t.g}}),Object.defineProperty(e,"OperationType",{enumerable:!0,get:function(){return t.h}}),Object.defineProperty(e,"PhoneAuthCredential",{enumerable:!0,get:function(){return t.P}}),Object.defineProperty(e,"PhoneAuthProvider",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(e,"PhoneMultiFactorGenerator",{enumerable:!0,get:function(){return t.j}}),Object.defineProperty(e,"ProviderId",{enumerable:!0,get:function(){return t.k}}),Object.defineProperty(e,"RecaptchaVerifier",{enumerable:!0,get:function(){return t.R}}),Object.defineProperty(e,"SAMLAuthProvider",{enumerable:!0,get:function(){return t.S}}),Object.defineProperty(e,"SignInMethod",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(e,"TotpMultiFactorGenerator",{enumerable:!0,get:function(){return t.T}}),Object.defineProperty(e,"TotpSecret",{enumerable:!0,get:function(){return t.m}}),Object.defineProperty(e,"TwitterAuthProvider",{enumerable:!0,get:function(){return t.n}}),Object.defineProperty(e,"applyActionCode",{enumerable:!0,get:function(){return t.o}}),Object.defineProperty(e,"beforeAuthStateChanged",{enumerable:!0,get:function(){return t.p}}),Object.defineProperty(e,"browserCookiePersistence",{enumerable:!0,get:function(){return t.q}}),Object.defineProperty(e,"browserLocalPersistence",{enumerable:!0,get:function(){return t.r}}),Object.defineProperty(e,"browserPopupRedirectResolver",{enumerable:!0,get:function(){return t.s}}),Object.defineProperty(e,"browserSessionPersistence",{enumerable:!0,get:function(){return t.t}}),Object.defineProperty(e,"checkActionCode",{enumerable:!0,get:function(){return t.u}}),Object.defineProperty(e,"confirmPasswordReset",{enumerable:!0,get:function(){return t.v}}),Object.defineProperty(e,"connectAuthEmulator",{enumerable:!0,get:function(){return t.w}}),Object.defineProperty(e,"createUserWithEmailAndPassword",{enumerable:!0,get:function(){return t.x}}),Object.defineProperty(e,"debugErrorMap",{enumerable:!0,get:function(){return t.y}}),Object.defineProperty(e,"deleteUser",{enumerable:!0,get:function(){return t.z}}),Object.defineProperty(e,"fetchSignInMethodsForEmail",{enumerable:!0,get:function(){return t.B}}),Object.defineProperty(e,"getAdditionalUserInfo",{enumerable:!0,get:function(){return t.C}}),Object.defineProperty(e,"getAuth",{enumerable:!0,get:function(){return t.D}}),Object.defineProperty(e,"getIdToken",{enumerable:!0,get:function(){return t.H}}),Object.defineProperty(e,"getIdTokenResult",{enumerable:!0,get:function(){return t.I}}),Object.defineProperty(e,"getMultiFactorResolver",{enumerable:!0,get:function(){return t.J}}),Object.defineProperty(e,"getRedirectResult",{enumerable:!0,get:function(){return t.K}}),Object.defineProperty(e,"inMemoryPersistence",{enumerable:!0,get:function(){return t.L}}),Object.defineProperty(e,"indexedDBLocalPersistence",{enumerable:!0,get:function(){return t.M}}),Object.defineProperty(e,"initializeAuth",{enumerable:!0,get:function(){return t.N}}),Object.defineProperty(e,"initializeRecaptchaConfig",{enumerable:!0,get:function(){return t.Q}}),Object.defineProperty(e,"isSignInWithEmailLink",{enumerable:!0,get:function(){return t.U}}),Object.defineProperty(e,"linkWithCredential",{enumerable:!0,get:function(){return t.V}}),Object.defineProperty(e,"linkWithPhoneNumber",{enumerable:!0,get:function(){return t.W}}),Object.defineProperty(e,"linkWithPopup",{enumerable:!0,get:function(){return t.X}}),Object.defineProperty(e,"linkWithRedirect",{enumerable:!0,get:function(){return t.Y}}),Object.defineProperty(e,"multiFactor",{enumerable:!0,get:function(){return t.Z}}),Object.defineProperty(e,"onAuthStateChanged",{enumerable:!0,get:function(){return t._}}),Object.defineProperty(e,"onIdTokenChanged",{enumerable:!0,get:function(){return t.$}}),Object.defineProperty(e,"parseActionCodeURL",{enumerable:!0,get:function(){return t.a0}}),Object.defineProperty(e,"prodErrorMap",{enumerable:!0,get:function(){return t.a1}}),Object.defineProperty(e,"reauthenticateWithCredential",{enumerable:!0,get:function(){return t.a2}}),Object.defineProperty(e,"reauthenticateWithPhoneNumber",{enumerable:!0,get:function(){return t.a3}}),Object.defineProperty(e,"reauthenticateWithPopup",{enumerable:!0,get:function(){return t.a4}}),Object.defineProperty(e,"reauthenticateWithRedirect",{enumerable:!0,get:function(){return t.a5}}),Object.defineProperty(e,"reload",{enumerable:!0,get:function(){return t.a6}}),Object.defineProperty(e,"revokeAccessToken",{enumerable:!0,get:function(){return t.a7}}),Object.defineProperty(e,"sendEmailVerification",{enumerable:!0,get:function(){return t.a8}}),Object.defineProperty(e,"sendPasswordResetEmail",{enumerable:!0,get:function(){return t.a9}}),Object.defineProperty(e,"sendSignInLinkToEmail",{enumerable:!0,get:function(){return t.aa}}),Object.defineProperty(e,"setPersistence",{enumerable:!0,get:function(){return t.ab}}),Object.defineProperty(e,"signInAnonymously",{enumerable:!0,get:function(){return t.ac}}),Object.defineProperty(e,"signInWithCredential",{enumerable:!0,get:function(){return t.ad}}),Object.defineProperty(e,"signInWithCustomToken",{enumerable:!0,get:function(){return t.ae}}),Object.defineProperty(e,"signInWithEmailAndPassword",{enumerable:!0,get:function(){return t.af}}),Object.defineProperty(e,"signInWithEmailLink",{enumerable:!0,get:function(){return t.ag}}),Object.defineProperty(e,"signInWithPhoneNumber",{enumerable:!0,get:function(){return t.ah}}),Object.defineProperty(e,"signInWithPopup",{enumerable:!0,get:function(){return t.ai}}),Object.defineProperty(e,"signInWithRedirect",{enumerable:!0,get:function(){return t.aj}}),Object.defineProperty(e,"signOut",{enumerable:!0,get:function(){return t.ak}}),Object.defineProperty(e,"unlink",{enumerable:!0,get:function(){return t.al}}),Object.defineProperty(e,"updateCurrentUser",{enumerable:!0,get:function(){return t.am}}),Object.defineProperty(e,"updateEmail",{enumerable:!0,get:function(){return t.an}}),Object.defineProperty(e,"updatePassword",{enumerable:!0,get:function(){return t.ao}}),Object.defineProperty(e,"updatePhoneNumber",{enumerable:!0,get:function(){return t.ap}}),Object.defineProperty(e,"updateProfile",{enumerable:!0,get:function(){return t.aq}}),Object.defineProperty(e,"useDeviceLanguage",{enumerable:!0,get:function(){return t.ar}}),Object.defineProperty(e,"validatePassword",{enumerable:!0,get:function(){return t.as}}),Object.defineProperty(e,"verifyBeforeUpdateEmail",{enumerable:!0,get:function(){return t.at}}),Object.defineProperty(e,"verifyPasswordResetCode",{enumerable:!0,get:function(){return t.au}});var t=r(d[0]);r(d[1]),r(d[2]),r(d[3]),r(d[4])},934,[935,936,938,940,937]);
__d(function(e,t,n,r,i,s,o){"use strict";Object.defineProperty(s,'__esModule',{value:!0}),Object.defineProperty(s,"$",{enumerable:!0,get:function(){return Qn}}),Object.defineProperty(s,"A",{enumerable:!0,get:function(){return m}}),Object.defineProperty(s,"B",{enumerable:!0,get:function(){return Dn}}),Object.defineProperty(s,"C",{enumerable:!0,get:function(){return Bn}}),Object.defineProperty(s,"D",{enumerable:!0,get:function(){return Cs}}),Object.defineProperty(s,"E",{enumerable:!0,get:function(){return Rt}}),Object.defineProperty(s,"F",{enumerable:!0,get:function(){return $t}}),Object.defineProperty(s,"G",{enumerable:!0,get:function(){return Jt}}),Object.defineProperty(s,"H",{enumerable:!0,get:function(){return oe}}),Object.defineProperty(s,"I",{enumerable:!0,get:function(){return ae}}),Object.defineProperty(s,"J",{enumerable:!0,get:function(){return cr}}),Object.defineProperty(s,"K",{enumerable:!0,get:function(){return Vi}}),Object.defineProperty(s,"L",{enumerable:!0,get:function(){return Se}}),Object.defineProperty(s,"M",{enumerable:!0,get:function(){return Kr}}),Object.defineProperty(s,"N",{enumerable:!0,get:function(){return dt}}),Object.defineProperty(s,"O",{enumerable:!0,get:function(){return Ct}}),Object.defineProperty(s,"P",{enumerable:!0,get:function(){return Ft}}),Object.defineProperty(s,"Q",{enumerable:!0,get:function(){return Yn}}),Object.defineProperty(s,"R",{enumerable:!0,get:function(){return ri}}),Object.defineProperty(s,"S",{enumerable:!0,get:function(){return Xt}}),Object.defineProperty(s,"T",{enumerable:!0,get:function(){return Ts}}),Object.defineProperty(s,"U",{enumerable:!0,get:function(){return Rn}}),Object.defineProperty(s,"V",{enumerable:!0,get:function(){return pn}}),Object.defineProperty(s,"W",{enumerable:!0,get:function(){return ai}}),Object.defineProperty(s,"X",{enumerable:!0,get:function(){return wi}}),Object.defineProperty(s,"Y",{enumerable:!0,get:function(){return ji}}),Object.defineProperty(s,"Z",{enumerable:!0,get:function(){return fr}}),Object.defineProperty(s,"_",{enumerable:!0,get:function(){return er}}),Object.defineProperty(s,"a",{enumerable:!0,get:function(){return Ht}}),Object.defineProperty(s,"a0",{enumerable:!0,get:function(){return qt}}),Object.defineProperty(s,"a1",{enumerable:!0,get:function(){return _}}),Object.defineProperty(s,"a2",{enumerable:!0,get:function(){return fn}}),Object.defineProperty(s,"a3",{enumerable:!0,get:function(){return ci}}),Object.defineProperty(s,"a4",{enumerable:!0,get:function(){return Ti}}),Object.defineProperty(s,"a5",{enumerable:!0,get:function(){return Mi}}),Object.defineProperty(s,"a6",{enumerable:!0,get:function(){return ge}}),Object.defineProperty(s,"a7",{enumerable:!0,get:function(){return ir}}),Object.defineProperty(s,"a8",{enumerable:!0,get:function(){return Ln}}),Object.defineProperty(s,"a9",{enumerable:!0,get:function(){return wn}}),Object.defineProperty(s,"aA",{enumerable:!0,get:function(){return fs}}),Object.defineProperty(s,"aB",{enumerable:!0,get:function(){return Ve}}),Object.defineProperty(s,"aC",{enumerable:!0,get:function(){return P}}),Object.defineProperty(s,"aD",{enumerable:!0,get:function(){return Ki}}),Object.defineProperty(s,"aE",{enumerable:!0,get:function(){return qi}}),Object.defineProperty(s,"aF",{enumerable:!0,get:function(){return Pe}}),Object.defineProperty(s,"aG",{enumerable:!0,get:function(){return ke}}),Object.defineProperty(s,"aH",{enumerable:!0,get:function(){return xi}}),Object.defineProperty(s,"aI",{enumerable:!0,get:function(){return Ri}}),Object.defineProperty(s,"aJ",{enumerable:!0,get:function(){return Oi}}),Object.defineProperty(s,"aK",{enumerable:!0,get:function(){return $e}}),Object.defineProperty(s,"aL",{enumerable:!0,get:function(){return Ke}}),Object.defineProperty(s,"aM",{enumerable:!0,get:function(){return cs}}),Object.defineProperty(s,"aN",{enumerable:!0,get:function(){return V}}),Object.defineProperty(s,"aO",{enumerable:!0,get:function(){return Yt}}),Object.defineProperty(s,"aP",{enumerable:!0,get:function(){return Ee}}),Object.defineProperty(s,"aQ",{enumerable:!0,get:function(){return Sr}}),Object.defineProperty(s,"aR",{enumerable:!0,get:function(){return qe}}),Object.defineProperty(s,"aa",{enumerable:!0,get:function(){return On}}),Object.defineProperty(s,"ab",{enumerable:!0,get:function(){return Jn}}),Object.defineProperty(s,"ac",{enumerable:!0,get:function(){return nn}}),Object.defineProperty(s,"ad",{enumerable:!0,get:function(){return hn}}),Object.defineProperty(s,"ae",{enumerable:!0,get:function(){return gn}}),Object.defineProperty(s,"af",{enumerable:!0,get:function(){return kn}}),Object.defineProperty(s,"ag",{enumerable:!0,get:function(){return Nn}}),Object.defineProperty(s,"ah",{enumerable:!0,get:function(){return oi}}),Object.defineProperty(s,"ai",{enumerable:!0,get:function(){return vi}}),Object.defineProperty(s,"aj",{enumerable:!0,get:function(){return Di}}),Object.defineProperty(s,"ak",{enumerable:!0,get:function(){return rr}}),Object.defineProperty(s,"al",{enumerable:!0,get:function(){return an}}),Object.defineProperty(s,"am",{enumerable:!0,get:function(){return nr}}),Object.defineProperty(s,"an",{enumerable:!0,get:function(){return Fn}}),Object.defineProperty(s,"ao",{enumerable:!0,get:function(){return Vn}}),Object.defineProperty(s,"ap",{enumerable:!0,get:function(){return di}}),Object.defineProperty(s,"aq",{enumerable:!0,get:function(){return jn}}),Object.defineProperty(s,"ar",{enumerable:!0,get:function(){return tr}}),Object.defineProperty(s,"as",{enumerable:!0,get:function(){return Xn}}),Object.defineProperty(s,"at",{enumerable:!0,get:function(){return Mn}}),Object.defineProperty(s,"au",{enumerable:!0,get:function(){return An}}),Object.defineProperty(s,"av",{enumerable:!0,get:function(){return R}}),Object.defineProperty(s,"aw",{enumerable:!0,get:function(){return C}}),Object.defineProperty(s,"ax",{enumerable:!0,get:function(){return Fe}}),Object.defineProperty(s,"ay",{enumerable:!0,get:function(){return Me}}),Object.defineProperty(s,"az",{enumerable:!0,get:function(){return b}}),Object.defineProperty(s,"b",{enumerable:!0,get:function(){return It}}),Object.defineProperty(s,"c",{enumerable:!0,get:function(){return v}}),Object.defineProperty(s,"d",{enumerable:!0,get:function(){return Wt}}),Object.defineProperty(s,"e",{enumerable:!0,get:function(){return l}}),Object.defineProperty(s,"f",{enumerable:!0,get:function(){return Bt}}),Object.defineProperty(s,"g",{enumerable:!0,get:function(){return Kt}}),Object.defineProperty(s,"h",{enumerable:!0,get:function(){return f}}),Object.defineProperty(s,"i",{enumerable:!0,get:function(){return hi}}),Object.defineProperty(s,"j",{enumerable:!0,get:function(){return vs}}),Object.defineProperty(s,"k",{enumerable:!0,get:function(){return h}}),Object.defineProperty(s,"l",{enumerable:!0,get:function(){return p}}),Object.defineProperty(s,"m",{enumerable:!0,get:function(){return Es}}),Object.defineProperty(s,"n",{enumerable:!0,get:function(){return Qt}}),Object.defineProperty(s,"o",{enumerable:!0,get:function(){return bn}}),Object.defineProperty(s,"p",{enumerable:!0,get:function(){return Zn}}),Object.defineProperty(s,"q",{enumerable:!0,get:function(){return wr}}),Object.defineProperty(s,"r",{enumerable:!0,get:function(){return _r}}),Object.defineProperty(s,"s",{enumerable:!0,get:function(){return Is}}),Object.defineProperty(s,"t",{enumerable:!0,get:function(){return br}}),Object.defineProperty(s,"u",{enumerable:!0,get:function(){return Pn}}),Object.defineProperty(s,"v",{enumerable:!0,get:function(){return En}}),Object.defineProperty(s,"w",{enumerable:!0,get:function(){return ht}}),Object.defineProperty(s,"x",{enumerable:!0,get:function(){return Sn}}),Object.defineProperty(s,"y",{enumerable:!0,get:function(){return I}}),Object.defineProperty(s,"z",{enumerable:!0,get:function(){return sr}});var a=t(o[0]),c=t(o[1]),u=t(o[2]),d=t(o[3]);
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
const l={PHONE:'phone',TOTP:'totp'},h={FACEBOOK:'facebook.com',GITHUB:'github.com',GOOGLE:'google.com',PASSWORD:'password',PHONE:'phone',TWITTER:'twitter.com'},p={EMAIL_LINK:'emailLink',EMAIL_PASSWORD:'password',FACEBOOK:'facebook.com',GITHUB:'github.com',GOOGLE:'google.com',PHONE:'phone',TWITTER:'twitter.com'},f={LINK:'link',REAUTHENTICATE:'reauthenticate',SIGN_IN:'signIn'},m={EMAIL_SIGNIN:'EMAIL_SIGNIN',PASSWORD_RESET:'PASSWORD_RESET',RECOVER_EMAIL:'RECOVER_EMAIL',REVERT_SECOND_FACTOR_ADDITION:'REVERT_SECOND_FACTOR_ADDITION',VERIFY_AND_CHANGE_EMAIL:'VERIFY_AND_CHANGE_EMAIL',VERIFY_EMAIL:'VERIFY_EMAIL'};function g(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const I=
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
function(){return{"admin-restricted-operation":'This operation is restricted to administrators only.',"argument-error":'',"app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":'Cordova framework is not ready.',"cors-unsupported":'This browser is not supported.',"credential-already-in-use":'This credential is already associated with a different user account.',"custom-token-mismatch":'The custom token corresponds to a different audience.',"requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":'Multi-factor users must always have a verified email.',"email-already-in-use":'The email address is already in use by another account.',"emulator-config-failed":"Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling \"connectAuthEmulator()\" sooner.","expired-action-code":'The action code has expired.',"cancelled-popup-request":'This operation has been cancelled due to another conflicting popup being opened.',"internal-error":'An internal AuthError has occurred.',"invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":'The mobile app identifier is not registered for the current project.',"invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":'An internal AuthError has occurred.',"invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":'The continue URL provided in the request is invalid.',"invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":'The custom token format is incorrect. Please check the documentation.',"invalid-dynamic-link-domain":'The provided dynamic link domain is not configured or authorized for the current project.',"invalid-email":'The email address is badly formatted.',"invalid-emulator-scheme":'Emulator URL must start with a valid scheme (http:// or https://).',"invalid-api-key":'Your API key is invalid, please check you have copied it correctly.',"invalid-cert-hash":'The SHA-1 certificate hash provided is invalid.',"invalid-credential":'The supplied auth credential is incorrect, malformed or has expired.',"invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":'The request does not contain a valid proof of first factor successful sign-in.',"invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":'The password is invalid or the user does not have a password.',"invalid-persistence-type":'The specified persistence type is invalid. It can only be local, session or none.',"invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":'The specified provider ID is invalid.',"invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":'The verification ID used to create the phone auth credential is invalid.',"invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":'Login blocked by user-provided method: {$originalMessage}',"missing-android-pkg-name":'An Android Package Name must be provided if the Android App is required to be installed.',"auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":'The phone auth credential was created with an empty SMS verification code.',"missing-continue-uri":'A continue URL must be provided in the request.',"missing-iframe-start":'An internal AuthError has occurred.',"missing-ios-bundle-id":'An iOS Bundle ID must be provided if an App Store ID is provided.',"missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":'A non-empty password must be provided',"missing-multi-factor-info":'No second factor identifier is provided.',"missing-multi-factor-session":'The request is missing proof of first factor successful sign-in.',"missing-phone-number":'To send verification codes, provide a phone number for the recipient.',"missing-verification-id":'The phone auth credential was created with an empty verification ID.',"app-deleted":'This instance of FirebaseApp has been deleted.',"multi-factor-info-not-found":'The user does not have a second factor matching the identifier provided.',"multi-factor-auth-required":'Proof of ownership of a second factor is required to complete sign-in.',"account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":'A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.',"no-auth-event":'An internal AuthError has occurred.',"no-such-provider":'User was not linked to an account with the given provider.',"null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":"This operation is not supported in the environment this application is running on. \"location.protocol\" must be http, https or chrome-extension and web storage must be enabled.","popup-blocked":'Unable to establish a connection with the popup. It may have been blocked by the browser.',"popup-closed-by-user":'The popup has been closed by the user before finalizing the operation.',"provider-already-linked":'User can only be linked to one identity for the given provider.',"quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":'The redirect operation has been cancelled by the user before finalizing.',"redirect-operation-pending":'A redirect sign-in operation is already pending.',"rejected-credential":'The request contains malformed or mismatching credentials.',"second-factor-already-in-use":'The second factor is already enrolled on this account.',"maximum-second-factor-count-exceeded":'The maximum allowed number of second factors on a user has been exceeded.',"tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:'The operation has timed out.',"user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":'Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.',"unsupported-persistence-type":'The current environment does not support the specified persistence type.',"unsupported-tenant-operation":'This operation is not supported in a multi-tenant context.',"unverified-email":'The operation requires a verified email.',"user-cancelled":'The user did not grant your application the permissions it requested.',"user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":'The user account has been disabled by an administrator.',"user-mismatch":'The supplied credentials do not correspond to the previously signed in user.',"user-signed-out":'',"weak-password":'The password must be 6 characters long or more.',"web-storage-unsupported":'This browser is not supported or 3rd party cookies and data may be disabled.',"already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":'The reCAPTCHA token is missing when sending request to the backend.',"invalid-recaptcha-token":'The reCAPTCHA token is invalid when sending request to the backend.',"invalid-recaptcha-action":'The reCAPTCHA action is invalid when sending request to the backend.',"recaptcha-not-enabled":'reCAPTCHA Enterprise integration is not enabled for this project.',"missing-client-type":'The reCAPTCHA client type is missing when sending request to the backend.',"missing-recaptcha-version":'The reCAPTCHA version is missing when sending request to the backend.',"invalid-req-type":'Invalid request parameters.',"invalid-recaptcha-version":'The reCAPTCHA version is invalid when sending request to the backend.',"unsupported-password-policy-schema-version":'The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.',"password-does-not-meet-requirements":'The password does not meet the requirements.',"invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}},_=g,y=new c.ErrorFactory('auth','Firebase',{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),v={ADMIN_ONLY_OPERATION:'auth/admin-restricted-operation',ARGUMENT_ERROR:'auth/argument-error',APP_NOT_AUTHORIZED:'auth/app-not-authorized',APP_NOT_INSTALLED:'auth/app-not-installed',CAPTCHA_CHECK_FAILED:'auth/captcha-check-failed',CODE_EXPIRED:'auth/code-expired',CORDOVA_NOT_READY:'auth/cordova-not-ready',CORS_UNSUPPORTED:'auth/cors-unsupported',CREDENTIAL_ALREADY_IN_USE:'auth/credential-already-in-use',CREDENTIAL_MISMATCH:'auth/custom-token-mismatch',CREDENTIAL_TOO_OLD_LOGIN_AGAIN:'auth/requires-recent-login',DEPENDENT_SDK_INIT_BEFORE_AUTH:'auth/dependent-sdk-initialized-before-auth',DYNAMIC_LINK_NOT_ACTIVATED:'auth/dynamic-link-not-activated',EMAIL_CHANGE_NEEDS_VERIFICATION:'auth/email-change-needs-verification',EMAIL_EXISTS:'auth/email-already-in-use',EMULATOR_CONFIG_FAILED:'auth/emulator-config-failed',EXPIRED_OOB_CODE:'auth/expired-action-code',EXPIRED_POPUP_REQUEST:'auth/cancelled-popup-request',INTERNAL_ERROR:'auth/internal-error',INVALID_API_KEY:'auth/invalid-api-key',INVALID_APP_CREDENTIAL:'auth/invalid-app-credential',INVALID_APP_ID:'auth/invalid-app-id',INVALID_AUTH:'auth/invalid-user-token',INVALID_AUTH_EVENT:'auth/invalid-auth-event',INVALID_CERT_HASH:'auth/invalid-cert-hash',INVALID_CODE:'auth/invalid-verification-code',INVALID_CONTINUE_URI:'auth/invalid-continue-uri',INVALID_CORDOVA_CONFIGURATION:'auth/invalid-cordova-configuration',INVALID_CUSTOM_TOKEN:'auth/invalid-custom-token',INVALID_DYNAMIC_LINK_DOMAIN:'auth/invalid-dynamic-link-domain',INVALID_EMAIL:'auth/invalid-email',INVALID_EMULATOR_SCHEME:'auth/invalid-emulator-scheme',INVALID_IDP_RESPONSE:'auth/invalid-credential',INVALID_LOGIN_CREDENTIALS:'auth/invalid-credential',INVALID_MESSAGE_PAYLOAD:'auth/invalid-message-payload',INVALID_MFA_SESSION:'auth/invalid-multi-factor-session',INVALID_OAUTH_CLIENT_ID:'auth/invalid-oauth-client-id',INVALID_OAUTH_PROVIDER:'auth/invalid-oauth-provider',INVALID_OOB_CODE:'auth/invalid-action-code',INVALID_ORIGIN:'auth/unauthorized-domain',INVALID_PASSWORD:'auth/wrong-password',INVALID_PERSISTENCE:'auth/invalid-persistence-type',INVALID_PHONE_NUMBER:'auth/invalid-phone-number',INVALID_PROVIDER_ID:'auth/invalid-provider-id',INVALID_RECIPIENT_EMAIL:'auth/invalid-recipient-email',INVALID_SENDER:'auth/invalid-sender',INVALID_SESSION_INFO:'auth/invalid-verification-id',INVALID_TENANT_ID:'auth/invalid-tenant-id',MFA_INFO_NOT_FOUND:'auth/multi-factor-info-not-found',MFA_REQUIRED:'auth/multi-factor-auth-required',MISSING_ANDROID_PACKAGE_NAME:'auth/missing-android-pkg-name',MISSING_APP_CREDENTIAL:'auth/missing-app-credential',MISSING_AUTH_DOMAIN:'auth/auth-domain-config-required',MISSING_CODE:'auth/missing-verification-code',MISSING_CONTINUE_URI:'auth/missing-continue-uri',MISSING_IFRAME_START:'auth/missing-iframe-start',MISSING_IOS_BUNDLE_ID:'auth/missing-ios-bundle-id',MISSING_OR_INVALID_NONCE:'auth/missing-or-invalid-nonce',MISSING_MFA_INFO:'auth/missing-multi-factor-info',MISSING_MFA_SESSION:'auth/missing-multi-factor-session',MISSING_PHONE_NUMBER:'auth/missing-phone-number',MISSING_PASSWORD:'auth/missing-password',MISSING_SESSION_INFO:'auth/missing-verification-id',MODULE_DESTROYED:'auth/app-deleted',NEED_CONFIRMATION:'auth/account-exists-with-different-credential',NETWORK_REQUEST_FAILED:'auth/network-request-failed',NULL_USER:'auth/null-user',NO_AUTH_EVENT:'auth/no-auth-event',NO_SUCH_PROVIDER:'auth/no-such-provider',OPERATION_NOT_ALLOWED:'auth/operation-not-allowed',OPERATION_NOT_SUPPORTED:'auth/operation-not-supported-in-this-environment',POPUP_BLOCKED:'auth/popup-blocked',POPUP_CLOSED_BY_USER:'auth/popup-closed-by-user',PROVIDER_ALREADY_LINKED:'auth/provider-already-linked',QUOTA_EXCEEDED:'auth/quota-exceeded',REDIRECT_CANCELLED_BY_USER:'auth/redirect-cancelled-by-user',REDIRECT_OPERATION_PENDING:'auth/redirect-operation-pending',REJECTED_CREDENTIAL:'auth/rejected-credential',SECOND_FACTOR_ALREADY_ENROLLED:'auth/second-factor-already-in-use',SECOND_FACTOR_LIMIT_EXCEEDED:'auth/maximum-second-factor-count-exceeded',TENANT_ID_MISMATCH:'auth/tenant-id-mismatch',TIMEOUT:'auth/timeout',TOKEN_EXPIRED:'auth/user-token-expired',TOO_MANY_ATTEMPTS_TRY_LATER:'auth/too-many-requests',UNAUTHORIZED_DOMAIN:'auth/unauthorized-continue-uri',UNSUPPORTED_FIRST_FACTOR:'auth/unsupported-first-factor',UNSUPPORTED_PERSISTENCE:'auth/unsupported-persistence-type',UNSUPPORTED_TENANT_OPERATION:'auth/unsupported-tenant-operation',UNVERIFIED_EMAIL:'auth/unverified-email',USER_CANCELLED:'auth/user-cancelled',USER_DELETED:'auth/user-not-found',USER_DISABLED:'auth/user-disabled',USER_MISMATCH:'auth/user-mismatch',USER_SIGNED_OUT:'auth/user-signed-out',WEAK_PASSWORD:'auth/weak-password',WEB_STORAGE_UNSUPPORTED:'auth/web-storage-unsupported',ALREADY_INITIALIZED:'auth/already-initialized',RECAPTCHA_NOT_ENABLED:'auth/recaptcha-not-enabled',MISSING_RECAPTCHA_TOKEN:'auth/missing-recaptcha-token',INVALID_RECAPTCHA_TOKEN:'auth/invalid-recaptcha-token',INVALID_RECAPTCHA_ACTION:'auth/invalid-recaptcha-action',MISSING_CLIENT_TYPE:'auth/missing-client-type',MISSING_RECAPTCHA_VERSION:'auth/missing-recaptcha-version',INVALID_RECAPTCHA_VERSION:'auth/invalid-recaptcha-version',INVALID_REQ_TYPE:'auth/invalid-req-type',INVALID_HOSTING_LINK_DOMAIN:'auth/invalid-hosting-link-domain'},T=new u.Logger('@firebase/auth');function w(e,...t){T.logLevel<=u.LogLevel.WARN&&T.warn(`Auth (${a.SDK_VERSION}): ${e}`,...t)}function E(e,...t){T.logLevel<=u.LogLevel.ERROR&&T.error(`Auth (${a.SDK_VERSION}): ${e}`,...t)}
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
   */function b(e,...t){throw O(e,...t)}function P(e,...t){return O(e,...t)}function A(e,t,n){const r={..._(),[t]:n};return new c.ErrorFactory('auth','Firebase',r).create(t,{appName:e.name})}function S(e){return A(e,"operation-not-supported-in-this-environment",'Operations that alter the current user are not supported in conjunction with FirebaseServerApp')}function k(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&b(e,"argument-error"),A(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function O(e,...t){if('string'!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return y.create(e,...t)}function R(e,t,...n){if(!e)throw O(t,...n)}function N(e){const t="INTERNAL ASSERTION FAILED: "+e;throw E(t),new Error(t)}function C(e,t){e||N(t)}
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
   */function D(){return'undefined'!=typeof self&&self.location?.href||''}function L(){return'http:'===M()||'https:'===M()}function M(){return'undefined'!=typeof self&&self.location?.protocol||null}
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
   */function U(){if('undefined'==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
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
   */class j{constructor(e,t){this.shortDelay=e,this.longDelay=t,C(t>e,'Short delay should be less than long delay!'),this.isMobile=(0,c.isMobileCordova)()||(0,c.isReactNative)()}get(){return'undefined'!=typeof navigator&&navigator&&'onLine'in navigator&&'boolean'==typeof navigator.onLine&&(L()||(0,c.isBrowserExtension)()||'connection'in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
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
   */function F(e,t){C(e.emulator,'Emulator should always be set here');const{url:n}=e.emulator;return t?`${n}${t.startsWith('/')?t.slice(1):t}`:n}
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
   */class V{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:'undefined'!=typeof self&&'fetch'in self?self.fetch:'undefined'!=typeof globalThis&&globalThis.fetch?globalThis.fetch:'undefined'!=typeof fetch?fetch:void N('Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill')}static headers(){return this.headersImpl?this.headersImpl:'undefined'!=typeof self&&'Headers'in self?self.Headers:'undefined'!=typeof globalThis&&globalThis.Headers?globalThis.Headers:'undefined'!=typeof Headers?Headers:void N('Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill')}static response(){return this.responseImpl?this.responseImpl:'undefined'!=typeof self&&'Response'in self?self.Response:'undefined'!=typeof globalThis&&globalThis.Response?globalThis.Response:'undefined'!=typeof Response?Response:void N('Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill')}}
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
   */const x={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},H=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],q=new j(3e4,6e4);
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
   */function W(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function z(e,t,n,r,i={}){return G(e,i,async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=(0,c.querystring)({...s,key:e.config.apiKey}).slice(1),a=await e._getAdditionalHeaders();a["Content-Type"]='application/json',e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode);const u={method:t,headers:a,...i};return(0,c.isCloudflareWorker)()||(u.referrerPolicy='strict-origin-when-cross-origin'),e.emulatorConfig&&(0,c.isCloudWorkstation)(e.emulatorConfig.host)&&(u.credentials='include'),V.fetch()(await $(e,e.config.apiHost,n,o),u)})}async function G(e,t,n){e._canInitEmulator=!1;const r={...x,...t};try{const t=new J(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if('needConfirmation'in s)throw Y(e,"account-exists-with-different-credential",s);if(i.ok&&!('errorMessage'in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(' : ');if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Y(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Y(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Y(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,'-');if(o)throw A(e,a,o);b(e,a)}}catch(t){if(t instanceof c.FirebaseError)throw t;b(e,"network-request-failed",{message:String(t)})}}async function K(e,t,n,r,i={}){const s=await z(e,t,n,r,i);return'mfaPendingCredential'in s&&b(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function $(e,t,n,r){const i=`${t}${n}?${r}`,s=e,o=s.config.emulator?F(e.config,i):`${e.config.apiScheme}://${i}`;if(H.includes(n)&&(await s._persistenceManagerAvailable,"COOKIE"===s._getPersistenceType())){return s._getPersistence()._getFinalTarget(o).toString()}return o}function B(e){switch(e){case'ENFORCE':return"ENFORCE";case'AUDIT':return"AUDIT";case'OFF':return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class J{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(P(this.auth,"network-request-failed")),q.get())})}}function Y(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=P(e,t,r);return i.customData._tokenResponse=n,i}
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
   */function X(e){return void 0!==e&&void 0!==e.getResponse}function Q(e){return void 0!==e&&void 0!==e.enterprise}class Z{constructor(e){if(this.siteKey='',this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error('recaptchaKey undefined');this.siteKey=e.recaptchaKey.split('/')[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return B(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}
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
   */async function ee(e){return(await z(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||''}async function te(e,t){return z(e,"GET","/v2/recaptchaConfig",W(e,t))}
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
   */async function ne(e,t){return z(e,"POST","/v1/accounts:delete",t)}async function re(e,t){return z(e,"POST","/v1/accounts:update",t)}async function ie(e,t){return z(e,"POST","/v1/accounts:lookup",t)}
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
   */function se(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
   */function oe(e,t=!1){return(0,c.getModularInstance)(e).getIdToken(t)}async function ae(e,t=!1){const n=(0,c.getModularInstance)(e),r=await n.getIdToken(t),i=ue(r);R(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s='object'==typeof i.firebase?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:se(ce(i.auth_time)),issuedAtTime:se(ce(i.iat)),expirationTime:se(ce(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function ce(e){return 1e3*Number(e)}function ue(e){const[t,n,r]=e.split('.');if(void 0===t||void 0===n||void 0===r)return E('JWT malformed, contained fewer than 3 sections'),null;try{const e=(0,c.base64Decode)(n);return e?JSON.parse(e):(E('Failed to decode base64 JWT payload'),null)}catch(e){return E('Caught error parsing JWT payload as JSON',e?.toString()),null}}function de(e){const t=ue(e);return R(t,"internal-error"),R(void 0!==t.exp,"internal-error"),R(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
   */async function le(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw he(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}function he(e){return e instanceof c.FirebaseError&&("auth/user-disabled"===e.code||"auth/user-token-expired"===e.code)}
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
   */class pe{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e?.code&&this.schedule(!0))}this.schedule()}}
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
   */class fe{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=se(this.lastLoginAt),this.creationTime=se(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
   */async function me(e){const t=e.auth,n=await e.getIdToken(),r=await le(e,ie(t,{idToken:n}));R(r?.users.length,t,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const s=i.providerUserInfo?.length?_e(i.providerUserInfo):[],o=Ie(e.providerData,s),a=e.isAnonymous,c=!(e.email&&i.passwordHash||o?.length),u=!!a&&c,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new fe(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function ge(e){const t=(0,c.getModularInstance)(e);await me(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Ie(e,t){return[...e.filter(e=>!t.some(t=>t.providerId===e.providerId)),...t]}function _e(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||'',displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
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
   */async function ye(e,t){const n=await G(e,{},async()=>{const n=(0,c.querystring)({grant_type:'refresh_token',refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=await $(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();o["Content-Type"]='application/x-www-form-urlencoded';const a={method:"POST",headers:o,body:n};return e.emulatorConfig&&(0,c.isCloudWorkstation)(e.emulatorConfig.host)&&(a.credentials='include'),V.fetch()(s,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ve(e,t){return z(e,"POST","/v2/accounts:revokeToken",W(e,t))}
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
   */class Te{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e5}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(void 0!==e.idToken,"internal-error"),R(void 0!==e.refreshToken,"internal-error");const t='expiresIn'in e&&void 0!==e.expiresIn?Number(e.expiresIn):de(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){R(0!==e.length,"internal-error");const t=de(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(R(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ye(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Te;return n&&(R('string'==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(R('string'==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(R('number'==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Te,this.toJSON())}_performRefresh(){return N('not implemented')}}
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
   */function we(e,t){R('string'==typeof e||void 0===e,"internal-error",{appName:t})}class Ee{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new pe(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new fe(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await le(this,this.stsTokenManager.getToken(this.auth,e));return R(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ae(this,e)}reload(){return ge(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ee({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await me(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,a._isFirebaseServerApp)(this.auth.app))return Promise.reject(S(this.auth));const e=await this.getIdToken();return await le(this,ne(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||''}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,s=t.photoURL??void 0,o=t.tenantId??void 0,a=t._redirectEventId??void 0,c=t.createdAt??void 0,u=t.lastLoginAt??void 0,{uid:d,emailVerified:l,isAnonymous:h,providerData:p,stsTokenManager:f}=t;R(d&&f,e,"internal-error");const m=Te.fromJSON(this.name,f);R('string'==typeof d,e,"internal-error"),we(n,e.name),we(r,e.name),R('boolean'==typeof l,e,"internal-error"),R('boolean'==typeof h,e,"internal-error"),we(i,e.name),we(s,e.name),we(o,e.name),we(a,e.name),we(c,e.name),we(u,e.name);const g=new Ee({uid:d,auth:e,email:r,emailVerified:l,displayName:n,isAnonymous:h,photoURL:s,phoneNumber:i,tenantId:o,stsTokenManager:m,createdAt:c,lastLoginAt:u});return p&&Array.isArray(p)&&(g.providerData=p.map(e=>({...e}))),a&&(g._redirectEventId=a),g}static async _fromIdTokenResponse(e,t,n=!1){const r=new Te;r.updateFromServerResponse(t);const i=new Ee({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await me(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];R(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?_e(r.providerUserInfo):[],s=!(r.email&&r.passwordHash||i?.length),o=new Te;o.updateFromIdToken(n);const a=new Ee({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:s}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new fe(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||i?.length)};return Object.assign(a,c),a}}
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
   */const be=new Map;function Pe(e){C(e instanceof Function,'Expected a class definition');let t=be.get(e);return t?(C(t instanceof e,'Instance stored in cache mismatched with class'),t):(t=new e,be.set(e,t),t)}
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
   */class Ae{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ae.type='NONE';const Se=Ae;
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
   */function ke(e,t,n){return`firebase:${e}:${t}:${n}`}class Oe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ke(this.userKey,r.apiKey,i),this.fullPersistenceKey=ke("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if('string'==typeof e){const t=await ie(this.auth,{idToken:e}).catch(()=>{});return t?Ee._fromGetAccountInfoResponse(this.auth,t,e):null}return Ee._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,n="authUser"){if(!t.length)return new Oe(Pe(Se),e,n);const r=ke(n,e.config.apiKey,e.name);let i=null,s=null;const o=new Set;for(const n of t){let t=null;try{t=await n._get(r)}catch{o.add(n);continue}try{if(t){let r;if('string'==typeof t){const n=await ie(e,{idToken:t}).catch(()=>{});if(!n)break;r=await Ee._fromGetAccountInfoResponse(e,n,t)}else r=Ee._fromJSON(e,t);i=r,s=n;break}}catch{}}const a=(await Promise.all(t.map(async e=>{try{if(await e._isAvailable())return e;e._lastProbeTimedOut&&o.add(e)}catch{return}}))).filter(e=>e);let c=a[0]||Pe(Se),u=null;s&&i&&(s!==c&&(u=i),c=s);const d=a.filter(e=>e._shouldAllowMigration);return c._shouldAllowMigration&&d.length?(c=d[0],u&&await c._set(r,u.toJSON()),await Promise.all(t.map(async e=>{if(e!==c&&!o.has(e))try{await e._remove(r)}catch{}})),new Oe(c,e,n)):new Oe(c,e,n)}}
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
   */function Re(e){const t=e.toLowerCase();if(t.includes('opera/')||t.includes('opr/')||t.includes('opios/'))return"Opera";if(Le(t))return"IEMobile";if(t.includes('msie')||t.includes('trident/'))return"IE";if(t.includes('edge/'))return"Edge";if(Ne(t))return"Firefox";if(t.includes('silk/'))return"Silk";if(Ue(t))return"Blackberry";if(je(t))return"Webos";if(Ce(t))return"Safari";if((t.includes('chrome/')||De(t))&&!t.includes('edge/'))return"Chrome";if(Me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===n?.length)return n[1]}return"Other"}function Ne(e=(0,c.getUA)()){return/firefox\//i.test(e)}function Ce(e=(0,c.getUA)()){const t=e.toLowerCase();return t.includes('safari/')&&!t.includes('chrome/')&&!t.includes('crios/')&&!t.includes('android')}function De(e=(0,c.getUA)()){return/crios\//i.test(e)}function Le(e=(0,c.getUA)()){return/iemobile/i.test(e)}function Me(e=(0,c.getUA)()){return/android/i.test(e)}function Ue(e=(0,c.getUA)()){return/blackberry/i.test(e)}function je(e=(0,c.getUA)()){return/webos/i.test(e)}function Fe(e=(0,c.getUA)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ve(e=(0,c.getUA)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function xe(e=(0,c.getUA)()){return Fe(e)&&!!window.navigator?.standalone}function He(e=(0,c.getUA)()){return Fe(e)||Me(e)||je(e)||Ue(e)||/windows phone/i.test(e)||Le(e)}
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
   */function qe(e,t=[]){let n;switch(e){case"Browser":n=Re((0,c.getUA)());break;case"Worker":n=`${Re((0,c.getUA)())}-${e}`;break;default:n=e}const r=t.length?t.join(','):'FirebaseCore-web';return`${n}/JsCore/${a.SDK_VERSION}/${r}`}
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
   */class We{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(e){r(e)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:e?.message})}}}
/**
   * @license
   * Copyright 2023 Google LLC
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
   */async function ze(e,t={}){return z(e,"GET","/v2/passwordPolicy",W(e,t))}
/**
   * @license
   * Copyright 2023 Google LLC
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
   */class Ge{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),void 0!==t.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),void 0!==t.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),void 0!==t.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),void 0!==t.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,'ENFORCEMENT_STATE_UNSPECIFIED'===this.enforcementState&&(this.enforcementState='OFF'),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join('')??'',this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>='a'&&n<='z',n>='A'&&n<='Z',n>='0'&&n<='9',this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
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
   */class Ke{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Be(this),this.idTokenSubscription=new Be(this),this.beforeStateQueue=new We(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=y,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pe(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted){try{this.persistenceManager=await Oe.create(this,e)}catch(e){w(`Failed to initialize persistence: ${e}`),this.persistenceManager=await Oe.create(this,[])}finally{this._resolvePersistenceManagerAvailable?.()}if(!this._deleted){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}try{await this.initializeCurrentUser(t)}catch(e){w(`Failed to initialize current user: ${e}`)}this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await ie(this,{idToken:e}),n=await Ee._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(e){console.warn('FirebaseServerApp could not login user with provided authIdToken: ',e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if((0,a._isFirebaseServerApp)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=this.redirectUser?._redirectEventId,i=n?._redirectEventId,s=await this.tryRedirectSignIn(e);t&&t!==i||!s?.user||(n=s.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await me(e)}catch(e){if(he(e))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=U()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,a._isFirebaseServerApp)(this.app))return Promise.reject(S(this));const t=e?(0,c.getModularInstance)(e):null;return t&&R(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(0,a._isFirebaseServerApp)(this.app)?Promise.reject(S(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,a._isFirebaseServerApp)(this.app)?Promise.reject(S(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pe(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ze(this),t=new Ge(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new c.ErrorFactory('auth','Firebase',e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:'apple.com',tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await ve(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pe(e)||this._popupRedirectResolver;R(t,this,"argument-error"),this.redirectPersistenceManager=await Oe.create(this,[Pe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i='function'==typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(o,this,"internal-error"),o.then(()=>{s||i(this.currentUser)}).catch(e=>{if(!s)if('function'!=typeof t&&t.error)t.error(e);else{if(!n)throw e;n(e)}}),'function'==typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(e){const t=A(this,"internal-error",`An internal AuthError has occurred: ${e?.message||String(e)}`);throw t.customData={originalError:e},t}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await(this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if((0,a._isFirebaseServerApp)(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await(this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken());return e?.error&&w(`Error while retrieving App Check token: ${e.error}`),e?.token}}function $e(e){return(0,c.getModularInstance)(e)}class Be{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,c.createSubscribe)(e=>this.observer=e)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
   */let Je={async loadJS(){throw new Error('Unable to load external scripts')},recaptchaV2Script:'',recaptchaEnterpriseScript:'',gapiScript:''};function Ye(e){return Je.loadJS(e)}function Xe(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
   */const Qe=1e12;class Ze{constructor(e){this.auth=e,this.counter=Qe,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new nt(e,this.auth.name,t||{})),this.counter++,n}reset(e){const t=e||Qe;this._widgets.get(t)?.delete(),this._widgets.delete(t)}getResponse(e){const t=e||Qe;return this._widgets.get(t)?.getResponse()||''}async execute(e){const t=e||Qe;return this._widgets.get(t)?.execute(),''}}class et{constructor(){this.enterprise=new tt}ready(e){e()}execute(e,t){return Promise.resolve('token')}render(e,t){return''}}class tt{ready(e){e()}execute(e,t){return Promise.resolve('token')}render(e,t){return''}}class nt{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r='string'==typeof e?document.getElementById(e):e;R(r,"argument-error",{appName:t}),this.container=r,this.isVisible='invisible'!==this.params.size,this.isVisible?this.execute():this.container.addEventListener('click',this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener('click',this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=rt(50);const{callback:e,'expired-callback':t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()},6e4)},500))}checkIfDeleted(){if(this.deleted)throw new Error('reCAPTCHA mock was already deleted!')}}function rt(e){const t=[],n='1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(62*Math.random())));return t.join('')}
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
   */const it='NO_RECAPTCHA',st='onFirebaseAuthREInstanceReady';class ot{constructor(e){this.type="recaptcha-enterprise",this.auth=$e(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{te(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new Z(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error('recaptcha Enterprise site key undefined'))}).catch(e=>{n(e)})})}function r(t,n,r){const i=window.grecaptcha;Q(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n(it)})}):r(Error('No reCAPTCHA enterprise script loaded.'))}if(this.auth.settings.appVerificationDisabledForTesting){return(new et).execute('siteKey',{action:'verify'})}return new Promise((e,i)=>{n(this.auth).then(async n=>{if(!t&&Q(window.grecaptcha)&&ot.scriptInjectionDeferred)await ot.scriptInjectionDeferred.promise,r(n,e,i);else{if('undefined'==typeof window)return void i(new Error('RecaptchaVerifier is only supported in browser'));let t=Je.recaptchaEnterpriseScript;0!==t.length&&(t+=n+`&onload=${st}`),ot.scriptInjectionDeferred=new c.Deferred,window[st]=()=>{ot.scriptInjectionDeferred?.resolve()},Ye(t).then(()=>ot.scriptInjectionDeferred?.promise).then(()=>{r(n,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function at(e,t,n,r=!1,i=!1){const s=new ot(e);let o;if(i)o=it;else try{o=await s.verify(n)}catch(e){o=await s.verify(n,!0)}const a={...t};if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if('phoneEnrollmentInfo'in a){const e=a.phoneEnrollmentInfo.phoneNumber,t=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if('phoneSignInInfo'in a){const e=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ct(e,t,n,r,i){if("EMAIL_PASSWORD_PROVIDER"===i){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await at(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch(async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await at(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)})}if("PHONE_PROVIDER"===i){if(e._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const i=await at(e,t,n);return r(e,i).catch(async i=>{if("AUDIT"===e._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const i=await at(e,t,n,!1,!0);return r(e,i)}return Promise.reject(i)})}{const i=await at(e,t,n,!1,!0);return r(e,i)}}return Promise.reject(i+' provider is not supported.')}async function ut(e){const t=$e(e),n=await te(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Z(n);if(null==t.tenantId?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,r.isAnyProviderEnabled()){new ot(t).verify().catch(()=>{})}}
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
   */function dt(e,t){const n=(0,a._getProvider)(e,'auth');if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,c.deepEqual)(r,t??{}))return e;b(e,"already-initialized")}return n.initialize({options:t})}function lt(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Pe);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}function ht(e,t,n){const r=$e(e);R(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!n?.disableWarnings,s=pt(t),{host:o,port:a}=ft(t),u=null===a?'':`:${a}`,d={url:`${s}//${o}${u}/`},l=Object.freeze({host:o,port:a,protocol:s.replace(':',''),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator)return R(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void R((0,c.deepEqual)(d,r.config.emulator)&&(0,c.deepEqual)(l,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=d,r.emulatorConfig=l,r.settings.appVerificationDisabledForTesting=!0,(0,c.isCloudWorkstation)(o)?(0,c.pingServer)(`${s}//${o}${u}`):i||gt()}function pt(e){const t=e.indexOf(':');return t<0?'':e.substr(0,t+1)}function ft(e){const t=pt(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:'',port:null};const r=n[2].split('@').pop()||'',i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:mt(r.substr(e.length+1))}}{const[e,t]=r.split(':');return{host:e,port:mt(t)}}}function mt(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function gt(){function e(){const e=document.createElement('p'),t=e.style;e.innerText='Running in emulator mode. Do not use with production credentials.',t.position='fixed',t.width='100%',t.backgroundColor='#ffffff',t.border='.1em solid #000000',t.color='#b50000',t.bottom='0px',t.left='0px',t.margin='0px',t.zIndex='10000',t.textAlign='center',e.classList.add('firebase-emulator-warning'),document.body.appendChild(e)}'undefined'!=typeof console&&'function'==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),'undefined'!=typeof window&&'undefined'!=typeof document&&('loading'===document.readyState?window.addEventListener('DOMContentLoaded',e):e())}
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
   */ot.scriptInjectionDeferred=null;class It{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return N('not implemented')}_getIdTokenResponse(e){return N('not implemented')}_linkToIdToken(e,t){return N('not implemented')}_getReauthenticationResolver(e){return N('not implemented')}}
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
   */async function _t(e,t){return z(e,"POST","/v1/accounts:resetPassword",W(e,t))}async function yt(e,t){return z(e,"POST","/v1/accounts:update",t)}async function vt(e,t){return z(e,"POST","/v1/accounts:signUp",t)}async function Tt(e,t){return z(e,"POST","/v1/accounts:update",W(e,t))}
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
   */async function wt(e,t){return K(e,"POST","/v1/accounts:signInWithPassword",W(e,t))}async function Et(e,t){return z(e,"POST","/v1/accounts:sendOobCode",W(e,t))}async function bt(e,t){return Et(e,t)}async function Pt(e,t){return Et(e,t)}async function At(e,t){return Et(e,t)}async function St(e,t){return Et(e,t)}
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
   */async function kt(e,t){return K(e,"POST","/v1/accounts:signInWithEmailLink",W(e,t))}async function Ot(e,t){return K(e,"POST","/v1/accounts:signInWithEmailLink",W(e,t))}
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
   */class Rt extends It{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Rt(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Rt(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t='string'==typeof e?JSON.parse(e):e;if(t?.email&&t?.password){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ct(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",wt,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return kt(e,{email:this._email,oobCode:this._password});default:b(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ct(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vt,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Ot(e,{idToken:t,email:this._email,oobCode:this._password});default:b(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
   */async function Nt(e,t){return K(e,"POST","/v1/accounts:signInWithIdp",W(e,t))}
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
   */class Ct extends It{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ct(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):b("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t='string'==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,...i}=t;if(!n||!r)return null;const s=new Ct(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Nt(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Nt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Nt(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,c.querystring)(t)}return e}}
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
   */async function Dt(e,t){return z(e,"POST","/v1/accounts:sendVerificationCode",W(e,t))}async function Lt(e,t){return K(e,"POST","/v1/accounts:signInWithPhoneNumber",W(e,t))}async function Mt(e,t){const n=await K(e,"POST","/v1/accounts:signInWithPhoneNumber",W(e,t));if(n.temporaryProof)throw Y(e,"account-exists-with-different-credential",n);return n}const Ut={USER_NOT_FOUND:"user-not-found"};async function jt(e,t){return K(e,"POST","/v1/accounts:signInWithPhoneNumber",W(e,{...t,operation:'REAUTH'}),Ut)}
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
   */class Ft extends It{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ft({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ft({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Lt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Mt(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return jt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){'string'==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Ft({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
   */function Vt(e){switch(e){case'recoverEmail':return"RECOVER_EMAIL";case'resetPassword':return"PASSWORD_RESET";case'signIn':return"EMAIL_SIGNIN";case'verifyEmail':return"VERIFY_EMAIL";case'verifyAndChangeEmail':return"VERIFY_AND_CHANGE_EMAIL";case'revertSecondFactorAddition':return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xt(e){const t=(0,c.querystringDecode)((0,c.extractQuerystring)(e)).link,n=t?(0,c.querystringDecode)((0,c.extractQuerystring)(t)).deep_link_id:null,r=(0,c.querystringDecode)((0,c.extractQuerystring)(e)).deep_link_id;return(r?(0,c.querystringDecode)((0,c.extractQuerystring)(r)).link:null)||r||n||t||e}class Ht{constructor(e){const t=(0,c.querystringDecode)((0,c.extractQuerystring)(e)),n=t.apiKey??null,r=t.oobCode??null,i=Vt(t.mode??null);R(n&&r&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=xt(e);try{return new Ht(t)}catch{return null}}}function qt(e){return Ht.parseLink(e)}
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
   */class Wt{constructor(){this.providerId=Wt.PROVIDER_ID}static credential(e,t){return Rt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ht.parseLink(t);return R(n,"argument-error"),Rt._fromEmailAndCode(e,n.code,n.tenantId)}}Wt.PROVIDER_ID="password",Wt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Wt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class zt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
   */class Gt extends zt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Kt extends Gt{static credentialFromJSON(e){const t='string'==typeof e?JSON.parse(e):e;return R('providerId'in t&&'signInMethod'in t,"argument-error"),Ct._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return R(e.idToken||e.accessToken,"argument-error"),Ct._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Kt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Kt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!(n||r||t||i))return null;if(!o)return null;try{return new Kt(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(e){return null}}}
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
   */class $t extends Gt{constructor(){super("facebook.com")}static credential(e){return Ct._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!('oauthAccessToken'in e))return null;if(!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.FACEBOOK_SIGN_IN_METHOD="facebook.com",$t.PROVIDER_ID="facebook.com";
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
class Bt extends Gt{constructor(){super("google.com"),this.addScope('profile')}static credential(e,t){return Ct._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Bt.credential(t,n)}catch{return null}}}Bt.GOOGLE_SIGN_IN_METHOD="google.com",Bt.PROVIDER_ID="google.com";
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
class Jt extends Gt{constructor(){super("github.com")}static credential(e){return Ct._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!('oauthAccessToken'in e))return null;if(!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.GITHUB_SIGN_IN_METHOD="github.com",Jt.PROVIDER_ID="github.com";class Yt extends It{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){return Nt(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Nt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Nt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t='string'==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new Yt(n,i):null}static _create(e,t){return new Yt(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}
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
   */class Xt extends zt{constructor(e){R(e.startsWith("saml."),"argument-error"),super(e)}static credentialFromResult(e){return Xt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Xt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Yt.fromJSON(e);return R(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Yt._create(n,t)}catch(e){return null}}}
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
   */class Qt extends Gt{constructor(){super("twitter.com")}static credential(e,t){return Ct._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Qt.credential(t,n)}catch{return null}}}
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
async function Zt(e,t){return K(e,"POST","/v1/accounts:signUp",W(e,t))}
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
   */Qt.TWITTER_SIGN_IN_METHOD="twitter.com",Qt.PROVIDER_ID="twitter.com";class en{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Ee._fromIdTokenResponse(e,n,r),s=tn(n);return new en({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=tn(n);return new en({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function tn(e){return e.providerId?e.providerId:'phoneNumber'in e?"phone":null}
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
   */async function nn(e){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(S(e));const t=$e(e);if(await t._initializationPromise,t.currentUser?.isAnonymous)return new en({user:t.currentUser,providerId:null,operationType:"signIn"});const n=await Zt(t,{returnSecureToken:!0}),r=await en._fromIdTokenResponse(t,"signIn",n,!0);return await t._updateCurrentUser(r.user),r}
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
   */class rn extends c.FirebaseError{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,rn.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new rn(e,t,n,r)}}function sn(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw rn._fromErrorAndOperation(e,n,t,r);throw n})}
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
   */function on(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}
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
   */async function an(e,t){const n=(0,c.getModularInstance)(e);await un(!0,n,t);const{providerUserInfo:r}=await re(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),i=on(r||[]);return n.providerData=n.providerData.filter(e=>i.has(e.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function cn(e,t,n=!1){const r=await le(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return en._forOperation(e,"link",r)}async function un(e,t,n){await me(t);const r=!1===e?"provider-already-linked":"no-such-provider";R(on(t.providerData).has(n)===e,t.auth,r)}
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
   */async function dn(e,t,n=!1){const{auth:r}=e;if((0,a._isFirebaseServerApp)(r.app))return Promise.reject(S(r));const i="reauthenticate";try{const s=await le(e,sn(r,i,t,e),n);R(s.idToken,r,"internal-error");const o=ue(s.idToken);R(o,r,"internal-error");const{sub:a}=o;return R(e.uid===a,r,"user-mismatch"),en._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===e?.code&&b(r,"user-mismatch"),e}}
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
   */async function ln(e,t,n=!1){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(S(e));const r="signIn",i=await sn(e,r,t),s=await en._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function hn(e,t){return ln($e(e),t)}async function pn(e,t){const n=(0,c.getModularInstance)(e);return await un(!1,n,t.providerId),cn(n,t)}async function fn(e,t){return dn((0,c.getModularInstance)(e),t)}
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
   */async function mn(e,t){return K(e,"POST","/v1/accounts:signInWithCustomToken",W(e,t))}
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
   */async function gn(e,t){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(S(e));const n=$e(e),r=await mn(n,{token:t,returnSecureToken:!0}),i=await en._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
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
   */class In{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return'phoneInfo'in t?_n._fromServerResponse(e,t):'totpInfo'in t?yn._fromServerResponse(e,t):b(e,"internal-error")}}class _n extends In{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new _n(t)}}class yn extends In{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new yn(t)}}
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
   */function vn(e,t,n){R(n.url?.length>0,e,"invalid-continue-uri"),R(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),R(void 0===n.linkDomain||n.linkDomain.length>0,e,"invalid-hosting-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.linkDomain=n.linkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(R(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(R(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
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
   */async function Tn(e){const t=$e(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function wn(e,t,n){const r=$e(e),i={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};n&&vn(r,i,n),await ct(r,i,"getOobCode",Pt,"EMAIL_PASSWORD_PROVIDER")}async function En(e,t,n){await _t((0,c.getModularInstance)(e),{oobCode:t,newPassword:n}).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Tn(e),t})}async function bn(e,t){await Tt((0,c.getModularInstance)(e),{oobCode:t})}async function Pn(e,t){const n=(0,c.getModularInstance)(e),r=await _t(n,{oobCode:t}),i=r.requestType;switch(R(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":R(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":R(r.mfaInfo,n,"internal-error");default:R(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=In._fromServerResponse($e(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function An(e,t){const{data:n}=await Pn((0,c.getModularInstance)(e),t);return n.email}async function Sn(e,t,n){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(S(e));const r=$e(e),i=ct(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Zt,"EMAIL_PASSWORD_PROVIDER"),s=await i.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Tn(e),t}),o=await en._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(o.user),o}function kn(e,t,n){return(0,a._isFirebaseServerApp)(e.app)?Promise.reject(S(e)):hn((0,c.getModularInstance)(e),Wt.credential(t,n)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Tn(e),t})}
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
   */async function On(e,t,n){const r=$e(e),i={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};!(function(e,t){R(t.handleCodeInApp,r,"argument-error"),t&&vn(r,e,t)})(i,n),await ct(r,i,"getOobCode",At,"EMAIL_PASSWORD_PROVIDER")}function Rn(e,t){const n=Ht.parseLink(t);return"EMAIL_SIGNIN"===n?.operation}async function Nn(e,t,n){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(S(e));const r=(0,c.getModularInstance)(e),i=Wt.credentialWithLink(t,n||D());return R(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),hn(r,i)}
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
   */async function Cn(e,t){return z(e,"POST","/v1/accounts:createAuthUri",W(e,t))}
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
   */async function Dn(e,t){const n={identifier:t,continueUri:L()?D():'http://localhost'},{signinMethods:r}=await Cn((0,c.getModularInstance)(e),n);return r||[]}async function Ln(e,t){const n=(0,c.getModularInstance)(e),r={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&vn(n.auth,r,t);const{email:i}=await bt(n.auth,r);i!==e.email&&await e.reload()}async function Mn(e,t,n){const r=(0,c.getModularInstance)(e),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};n&&vn(r.auth,i,n);const{email:s}=await St(r.auth,i);s!==e.email&&await e.reload()}
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
   */async function Un(e,t){return z(e,"POST","/v1/accounts:update",t)}
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
   */async function jn(e,t){const{displayName:n,photoURL:r}=t;if(void 0===n&&void 0===r)return;const i=(0,c.getModularInstance)(e),s={idToken:await i.getIdToken(),displayName:n,photoUrl:r,returnSecureToken:!0},o=await le(i,Un(i.auth,s));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:e})=>"password"===e);a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function Fn(e,t){const n=(0,c.getModularInstance)(e);return(0,a._isFirebaseServerApp)(n.auth.app)?Promise.reject(S(n.auth)):xn(n,t,null)}function Vn(e,t){return xn((0,c.getModularInstance)(e),null,t)}async function xn(e,t,n){const{auth:r}=e,i={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(i.email=t),n&&(i.password=n);const s=await le(e,yt(r,i));await e._updateTokensIfNecessary(s,!0)}
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
   */function Hn(e){if(!e)return null;const{providerId:t}=e,n=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},r=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!t&&e?.idToken){const t=ue(e.idToken)?.firebase?.sign_in_provider;if(t){return new qn(r,"anonymous"!==t&&"custom"!==t?t:null)}}if(!t)return null;switch(t){case"facebook.com":return new zn(r,n);case"github.com":return new Gn(r,n);case"google.com":return new Kn(r,n);case"twitter.com":return new $n(r,n,e.screenName||null);case"custom":case"anonymous":return new qn(r,null);default:return new qn(r,t,n)}}class qn{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class Wn extends qn{constructor(e,t,n,r){super(e,t,n),this.username=r}}class zn extends qn{constructor(e,t){super(e,"facebook.com",t)}}class Gn extends Wn{constructor(e,t){super(e,"github.com",t,'string'==typeof t?.login?t?.login:null)}}class Kn extends qn{constructor(e,t){super(e,"google.com",t)}}class $n extends Wn{constructor(e,t,n){super(e,"twitter.com",t,n)}}function Bn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:Hn(n)}
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
   */function Jn(e,t){return(0,c.getModularInstance)(e).setPersistence(t)}function Yn(e){return ut(e)}async function Xn(e,t){return $e(e).validatePassword(t)}function Qn(e,t,n,r){return(0,c.getModularInstance)(e).onIdTokenChanged(t,n,r)}function Zn(e,t,n){return(0,c.getModularInstance)(e).beforeAuthStateChanged(t,n)}function er(e,t,n,r){return(0,c.getModularInstance)(e).onAuthStateChanged(t,n,r)}function tr(e){(0,c.getModularInstance)(e).useDeviceLanguage()}function nr(e,t){return(0,c.getModularInstance)(e).updateCurrentUser(t)}function rr(e){return(0,c.getModularInstance)(e).signOut()}function ir(e,t){return $e(e).revokeAccessToken(t)}async function sr(e){return(0,c.getModularInstance)(e).delete()}
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
   */class or{constructor(e,t,n){this.type=e,this.credential=t,this.user=n}static _fromIdtoken(e,t){return new or("enroll",e,t)}static _fromMfaPendingCredential(e){return new or("signin",e)}toJSON(){const e="enroll"===this.type?'idToken':'pendingCredential';return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){if(e?.multiFactorSession){if(e.multiFactorSession?.pendingCredential)return or._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(e.multiFactorSession?.idToken)return or._fromIdtoken(e.multiFactorSession.idToken)}return null}}
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
   */class ar{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=$e(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map(e=>In._fromServerResponse(n,e));R(r.mfaPendingCredential,n,"internal-error");const s=or._fromMfaPendingCredential(r.mfaPendingCredential);return new ar(s,i,async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o={...r,idToken:i.idToken,refreshToken:i.refreshToken};switch(t.operationType){case"signIn":const e=await en._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return R(t.user,n,"internal-error"),en._forOperation(t.user,t.operationType,o);default:b(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function cr(e,t){const n=(0,c.getModularInstance)(e),r=t;return R(t.customData.operationType,n,"argument-error"),R(r.customData._serverResponse?.mfaPendingCredential,n,"argument-error"),ar._fromError(n,r)}
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
   */function ur(e,t){return z(e,"POST","/v2/accounts/mfaEnrollment:start",W(e,t))}function dr(e,t){return z(e,"POST","/v2/accounts/mfaEnrollment:finalize",W(e,t))}function lr(e,t){return z(e,"POST","/v2/accounts/mfaEnrollment:finalize",W(e,t))}class hr{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>In._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new hr(e)}async getSession(){return or._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const n=e,r=await this.getSession(),i=await le(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t='string'==typeof e?e:e.uid,n=await this.user.getIdToken();try{const e=await le(this.user,(r=this.user.auth,i={idToken:n,mfaEnrollmentId:t},z(r,"POST","/v2/accounts/mfaEnrollment:withdraw",W(r,i))));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(e){throw e}var r,i}}const pr=new WeakMap;function fr(e){const t=(0,c.getModularInstance)(e);return pr.has(t)||pr.set(t,hr._fromUser(t)),pr.get(t)}const mr='__sak';
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
   */class gr{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mr,'1'),this.storage.removeItem(mr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
   */class Ir extends gr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=He(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);(0,c.isIE)()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent('storage',{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener('storage',this.boundEventHandler)}detachListener(){window.removeEventListener('storage',this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ir.type='LOCAL';const _r=Ir;
/**
   * @license
   * Copyright 2025 Google LLC
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
   */function yr(e){const t=e.replace(/[\\^$.*+?()[\]{}|]/g,'\\$&'),n=RegExp(`${t}=([^;]+)`);return document.cookie.match(n)?.[1]??null}function vr(e){return`${'http:'===window.location.protocol?'__dev_':'__HOST-'}FIREBASE_${e.split(':')[3]}`}class Tr{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(void 0===typeof window)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set('finalTarget',e),t}async _isAvailable(){return!('boolean'==typeof isSecureContext&&!isSecureContext)&&('undefined'!=typeof navigator&&'undefined'!=typeof document&&(navigator.cookieEnabled??!0))}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=vr(e);if(window.cookieStore){const e=await window.cookieStore.get(t);return e?.value}return yr(t)}async _remove(e){if(!this._isAvailable())return;if(!await this._get(e))return;const t=vr(e);document.cookie=`${t}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:'DELETE'}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;const n=vr(e);if(window.cookieStore){const e=e=>{const r=e.changed.find(e=>e.name===n);r&&t(r.value);e.deleted.find(e=>e.name===n)&&t(null)},r=()=>window.cookieStore.removeEventListener('change',e);return this.listenerUnsubscribes.set(t,r),window.cookieStore.addEventListener('change',e)}let r=yr(n);const i=setInterval(()=>{const e=yr(n);e!==r&&(t(e),r=e)},1e3);this.listenerUnsubscribes.set(t,()=>clearInterval(i))}_removeListener(e,t){const n=this.listenerUnsubscribes.get(t);n&&(n(),this.listenerUnsubscribes.delete(t))}}Tr.type='COOKIE';const wr=Tr;
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
   */class Er extends gr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Er.type='SESSION';const br=Er;
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
   */function Pr(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}}))}
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
   */class Ar{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Ar(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!s?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async e=>e(t.origin,i)),a=await Pr(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener('message',this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener('message',this.boundEventHandler)}}
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
function Sr(e="",t=10){let n='';for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
   */Ar.receivers=[];class kr{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener('message',e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r='undefined'!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=Sr('',20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener('message',s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
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
   */function Or(){return window}function Rr(e){Or().location.href=e}
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
   */function Nr(){return void 0!==Or().WorkerGlobalScope&&'function'==typeof Or().importScripts}async function Cr(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}
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
const Dr='firebaseLocalStorageDb',Lr='firebaseLocalStorage',Mr='fbase_key',Ur=2500,jr='DB_TIMEOUT';class Fr{constructor(e){this.request=e}toPromise(e=2500){return new Promise((t,n)=>{let r=!1;const i=setTimeout(()=>{if(!r){r=!0;try{this.request.transaction?.abort()}catch{}n(new Error(jr))}},e);this.request.addEventListener('success',()=>{r||(r=!0,clearTimeout(i),t(this.request.result))}),this.request.addEventListener('error',()=>{r||(r=!0,clearTimeout(i),n(this.request.error))})})}}function Vr(e,t){return e.transaction([Lr],t?'readwrite':'readonly').objectStore(Lr)}function xr(){const e=indexedDB.deleteDatabase(Dr);return new Fr(e).toPromise()}function Hr(){const e=indexedDB.open(Dr,1);return new Promise((t,n)=>{let r=!1;const i=setTimeout(()=>{r||(r=!0,n(new Error(jr)))},Ur);e.addEventListener('error',()=>{r||(r=!0,clearTimeout(i),n(e.error))}),e.addEventListener('upgradeneeded',()=>{const t=e.result;try{t.createObjectStore(Lr,{keyPath:Mr})}catch(e){r||(r=!0,clearTimeout(i),n(e))}}),e.addEventListener('success',async()=>{const s=e.result;if(r)s.close();else if(clearTimeout(i),s.objectStoreNames.contains(Lr))r=!0,t(s);else{s.close();try{await xr();const e=await Hr();r=!0,t(e)}catch(e){r||(r=!0,n(e))}}})})}async function qr(e,t,n,r=2500){const i=Vr(e,!0).put({[Mr]:t,value:n});return new Fr(i).toPromise(r)}async function Wr(e,t){const n=Vr(e,!1).get(t),r=await new Fr(n).toPromise();return void 0===r?null:r.value}function zr(e,t,n=2500){const r=Vr(e,!0).delete(t);return new Fr(r).toPromise(n)}class Gr{registerLifecycleListeners(){'undefined'!=typeof window&&'function'==typeof window.addEventListener&&(window.addEventListener('pagehide',this.onPageHide),window.addEventListener('pageshow',this.onPageShow))}unregisterLifecycleListeners(){'undefined'!=typeof window&&'function'==typeof window.removeEventListener&&(window.removeEventListener('pagehide',this.onPageHide),window.removeEventListener('pageshow',this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this._lastProbeTimedOut=!1,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){if(this.dbPromise)return this.dbPromise;const e=Hr();return this.dbPromise=e,e.catch(()=>{this.dbPromise===e&&(this.dbPromise=null)}),e}async _withRetries(e){let t=0;for(;;){let n,r=null;try{const t=this._openDb();return r=this.dbPromise,n=await t,await e(n)}catch(e){if(n)n.close(),r&&this.dbPromise===r&&(this.dbPromise=null);else if(this.dbPromise&&this.dbPromise===r){const e=this.dbPromise;this.dbPromise=null;try{(await e).close()}catch{}}if(e instanceof Error&&e.message===jr||t++>3)throw e}}}async initializeServiceWorkerMessaging(){return Nr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ar._getInstance(Nr()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Cr(),!this.activeServiceWorker)return;this.sender=new kr(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&(navigator?.serviceWorker?.controller||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){this._lastProbeTimedOut=!1;try{return!!indexedDB&&(await this._withRetries(async e=>{await qr(e,mr,'1',800),await zr(e,mr,800)}),!0)}catch(e){this._lastProbeTimedOut=e instanceof Error&&e.message===jr}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>qr(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){try{const t=await this._withRetries(t=>Wr(t,e));return this.localCache[e]=t,t}catch(t){if(t instanceof Error&&t.message===jr&&null!=this.localCache[e])return this.localCache[e];throw t}}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(e=>{const t=Vr(e,!1).getAll();return new Fr(t).toPromise()});if(this.isClosing)return[];if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}catch(e){return this.isClosing||w(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,e in this.localCache||this._get(e).catch(()=>{})),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.stopPolling(),this.unregisterLifecycleListeners())}}Gr.type='LOCAL';const Kr=Gr;
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
   */function $r(e,t){return z(e,"POST","/v2/accounts/mfaSignIn:start",W(e,t))}function Br(e,t){return z(e,"POST","/v2/accounts/mfaSignIn:finalize",W(e,t))}function Jr(e,t){return z(e,"POST","/v2/accounts/mfaSignIn:finalize",W(e,t))}
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
   */const Yr=Xe('rcb'),Xr=new j(3e4,6e4);class Qr{constructor(){this.hostLanguage='',this.counter=0,this.librarySeparatelyLoaded=!!Or().grecaptcha?.render}load(e,t=""){return R(Zr(t),e,"argument-error"),this.shouldResolveImmediately(t)&&X(Or().grecaptcha)?Promise.resolve(Or().grecaptcha):new Promise((n,r)=>{const i=Or().setTimeout(()=>{r(P(e,"network-request-failed"))},Xr.get());Or()[Yr]=()=>{Or().clearTimeout(i),delete Or()[Yr];const s=Or().grecaptcha;if(!s||!X(s))return void r(P(e,"internal-error"));const o=s.render;s.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(s)};Ye(`${Je.recaptchaV2Script}?${(0,c.querystring)({onload:Yr,render:'explicit',hl:t})}`).catch(()=>{clearTimeout(i),r(P(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Or().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Zr(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class ei{async load(e){return new Ze(e)}clearedOneInstance(){}}
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
   */const ti='recaptcha',ni={theme:'light',type:'image'};class ri{constructor(e,t,n={...ni}){this.parameters=n,this.type=ti,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=$e(e),this.isInvisible='invisible'===this.parameters.size,R('undefined'!=typeof document,this.auth,"operation-not-supported-in-this-environment");const r='string'==typeof t?document.getElementById(t):t;R(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new ei:new Qr,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){R(!this.parameters.sitekey,this.auth,"argument-error"),R(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),R('undefined'!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),'function'==typeof e)e(t);else if('string'==typeof e){const n=Or()[e];'function'==typeof n&&n(t)}}}assertNotDestroyed(){R(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement('div');e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){R(L()&&!Nr(),this.auth,"internal-error"),await ii(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await ee(this.auth);R(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return R(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function ii(){let e=null;return new Promise(t=>{'complete'!==document.readyState?(e=()=>t(),window.addEventListener('load',e)):t()}).catch(t=>{throw e&&window.removeEventListener('load',e),t})}
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
   */class si{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Ft._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function oi(e,t,n){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(S(e));const r=$e(e),i=await ui(r,t,(0,c.getModularInstance)(n));return new si(i,e=>hn(r,e))}async function ai(e,t,n){const r=(0,c.getModularInstance)(e);await un(!1,r,"phone");const i=await ui(r.auth,t,(0,c.getModularInstance)(n));return new si(i,e=>pn(r,e))}async function ci(e,t,n){const r=(0,c.getModularInstance)(e);if((0,a._isFirebaseServerApp)(r.auth.app))return Promise.reject(S(r.auth));const i=await ui(r.auth,t,(0,c.getModularInstance)(n));return new si(i,e=>fn(r,e))}async function ui(e,t,n){if(!e._getRecaptchaConfig())try{await ut(e)}catch(e){console.log('Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.')}try{let r;if(r='string'==typeof t?{phoneNumber:t}:t,'session'in r){const t=r.session;if('phoneNumber'in r){R("enroll"===t.type,e,"internal-error");const i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},s=ct(e,i,"mfaSmsEnrollment",async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===it){R(n?.type===ti,e,"argument-error");return ur(e,await li(e,t,n))}return ur(e,t)},"PHONE_PROVIDER");return(await s.catch(e=>Promise.reject(e))).phoneSessionInfo.sessionInfo}{R("signin"===t.type,e,"internal-error");const i=r.multiFactorHint?.uid||r.multiFactorUid;R(i,e,"missing-multi-factor-info");const s={mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},o=ct(e,s,"mfaSmsSignIn",async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===it){R(n?.type===ti,e,"argument-error");return $r(e,await li(e,t,n))}return $r(e,t)},"PHONE_PROVIDER");return(await o.catch(e=>Promise.reject(e))).phoneResponseInfo.sessionInfo}}{const t={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"},i=ct(e,t,"sendVerificationCode",async(e,t)=>{if(t.captchaResponse===it){R(n?.type===ti,e,"argument-error");return Dt(e,await li(e,t,n))}return Dt(e,t)},"PHONE_PROVIDER");return(await i.catch(e=>Promise.reject(e))).sessionInfo}}finally{n?._reset()}}async function di(e,t){const n=(0,c.getModularInstance)(e);if((0,a._isFirebaseServerApp)(n.auth.app))return Promise.reject(S(n.auth));await cn(n,t)}async function li(e,t,n){R(n.type===ti,e,"argument-error");const r=await n.verify();R('string'==typeof r,e,"argument-error");const i={...t};if('phoneEnrollmentInfo'in i){const e=i.phoneEnrollmentInfo.phoneNumber,t=i.phoneEnrollmentInfo.captchaResponse,n=i.phoneEnrollmentInfo.clientType,s=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:r,captchaResponse:t,clientType:n,recaptchaVersion:s}}),i}if('phoneSignInInfo'in i){const e=i.phoneSignInInfo.captchaResponse,t=i.phoneSignInInfo.clientType,n=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:e,clientType:t,recaptchaVersion:n}}),i}return Object.assign(i,{recaptchaToken:r}),i}
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
   */class hi{constructor(e){this.providerId=hi.PROVIDER_ID,this.auth=$e(e)}verifyPhoneNumber(e,t){return ui(this.auth,e,(0,c.getModularInstance)(t))}static credential(e,t){return Ft._fromVerification(e,t)}static credentialFromResult(e){const t=e;return hi.credentialFromTaggedObject(t)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ft._fromTokenResponse(t,n):null}}
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
function pi(e,t){return t?Pe(t):(R(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
   */hi.PROVIDER_ID="phone",hi.PHONE_SIGN_IN_METHOD="phone";class fi extends It{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Nt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Nt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function mi(e){return ln(e.auth,new fi(e),e.bypassAuthState)}function gi(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),dn(n,new fi(e),e.bypassAuthState)}async function Ii(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),cn(n,new fi(e),e.bypassAuthState)}
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
   */class _i{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{if(this.eventManager=await this.resolver._initialize(this.auth),!this.pendingPromise)return;if(await this.onExecution(),!this.pendingPromise)return;this.eventManager.registerConsumer(this)}catch(e){this.pendingPromise&&this.reject(e)}})}async onAuthEvent(e){if(!this.pendingPromise)return;const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mi;case"linkViaPopup":case"linkViaRedirect":return Ii;case"reauthViaPopup":case"reauthViaRedirect":return gi;default:b(this.auth,"internal-error")}}resolve(e){C(this.pendingPromise,'Pending promise was never set'),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){C(this.pendingPromise,'Pending promise was never set'),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
   */const yi=new j(2e3,1e4);async function vi(e,t,n){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(P(e,"operation-not-supported-in-this-environment"));const r=$e(e);k(e,t,zt);const i=pi(r,n);return new Ei(r,"signInViaPopup",t,i).executeNotNull()}async function Ti(e,t,n){const r=(0,c.getModularInstance)(e);if((0,a._isFirebaseServerApp)(r.auth.app))return Promise.reject(P(r.auth,"operation-not-supported-in-this-environment"));k(r.auth,t,zt);const i=pi(r.auth,n);return new Ei(r.auth,"reauthViaPopup",t,i,r).executeNotNull()}async function wi(e,t,n){const r=(0,c.getModularInstance)(e);k(r.auth,t,zt);const i=pi(r.auth,n);return new Ei(r.auth,"linkViaPopup",t,i,r).executeNotNull()}class Ei extends _i{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Ei.currentPopupAction&&Ei.currentPopupAction.cancel(),Ei.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){C(1===this.filter.length,'Popup operations only handle one event');const e=Sr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(P(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(P(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ei.currentPopupAction=null}pollUserCancellation(){const e=()=>{this.authWindow?.window?.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(P(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,yi.get())};e()}}Ei.currentPopupAction=null;
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
const bi='pendingRedirect',Pi=new Map;class Ai extends _i{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Pi.get(this.auth._key());if(!e){try{const t=await Si(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Pi.set(this.auth._key(),e)}return this.bypassAuthState||Pi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Si(e,t){const n=Ci(t),r=Ni(e);if(!await r._isAvailable())return!1;const i='true'===await r._get(n);return await r._remove(n),i}async function ki(e,t){return Ni(e)._set(Ci(t),'true')}function Oi(){Pi.clear()}function Ri(e,t){Pi.set(e._key(),t)}function Ni(e){return Pe(e._redirectPersistence)}function Ci(e){return ke(bi,e.config.apiKey,e.name)}
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
   */function Di(e,t,n){return Li(e,t,n)}async function Li(e,t,n){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(S(e));const r=$e(e);k(e,t,zt),await r._initializationPromise;const i=pi(r,n);return await ki(i,r),i._openRedirect(r,t,"signInViaRedirect")}function Mi(e,t,n){return Ui(e,t,n)}async function Ui(e,t,n){const r=(0,c.getModularInstance)(e);if(k(r.auth,t,zt),(0,a._isFirebaseServerApp)(r.auth.app))return Promise.reject(S(r.auth));await r.auth._initializationPromise;const i=pi(r.auth,n);await ki(i,r.auth);const s=await Hi(r);return i._openRedirect(r.auth,t,"reauthViaRedirect",s)}function ji(e,t,n){return Fi(e,t,n)}async function Fi(e,t,n){const r=(0,c.getModularInstance)(e);k(r.auth,t,zt),await r.auth._initializationPromise;const i=pi(r.auth,n);await un(!1,r,t.providerId),await ki(i,r.auth);const s=await Hi(r);return i._openRedirect(r.auth,t,"linkViaRedirect",s)}async function Vi(e,t){return await $e(e)._initializationPromise,xi(e,t,!1)}async function xi(e,t,n=!1){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(S(e));const r=$e(e),i=pi(r,t),s=new Ai(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function Hi(e){const t=Sr(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
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
   */class qi{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gi(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!zi(e)){const n=e.error.code?.split('auth/')[1]||"internal-error";t.onError(P(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wi(e))}saveEventToCache(e){this.cachedEventUids.add(Wi(e)),this.lastProcessedEventTime=Date.now()}}function Wi(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join('-')}function zi({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===t?.code}function Gi(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zi(e);default:return!1}}
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
   */async function Ki(e,t={}){return z(e,"GET","/v1/projects",t)}
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
   */const $i=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Bi=/^https?/;async function Ji(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ki(e);for(const e of t)try{if(Yi(e))return}catch{}b(e,"unauthorized-domain")}function Yi(e){const t=D(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith('chrome-extension://')){const i=new URL(e);return''===i.hostname&&''===r?'chrome-extension:'===n&&e.replace('chrome-extension://','')===t.replace('chrome-extension://',''):'chrome-extension:'===n&&i.hostname===r}if(!Bi.test(n))return!1;if($i.test(e))return r===e;const i=e.replace(/\./g,'\\.');return new RegExp('^(.+\\.'+i+'|'+i+')$','i').test(r)}
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
   */const Xi=new j(3e4,6e4);function Qi(){const e=Or().___jsl;if(e?.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function Zi(e){return new Promise((t,n)=>{function r(){Qi(),gapi.load('gapi.iframes',{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Qi(),n(P(e,"network-request-failed"))},timeout:Xi.get()})}if(Or().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else{if(!Or().gapi?.load){const t=Xe('iframefcb');return Or()[t]=()=>{gapi.load?r():n(P(e,"network-request-failed"))},Ye(`${Je.gapiScript}?onload=${t}`).catch(e=>n(e))}r()}}).catch(e=>{throw es=null,e})}let es=null;function ts(e){return es=es||Zi(e),es}
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
   */const ns=new j(5e3,15e3),rs={style:{position:'absolute',top:'-100px',width:'1px',height:'1px'},'aria-hidden':'true',tabindex:'-1'},is=new Map([["identitytoolkit.googleapis.com",'p'],['staging-identitytoolkit.sandbox.googleapis.com','s'],['test-identitytoolkit.sandbox.googleapis.com','t']]);function ss(e){const t=e.config;R(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?F(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:a.SDK_VERSION},i=is.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(',')),`${n}?${(0,c.querystring)(r).slice(1)}`}async function os(e){const t=await ts(e),n=Or().gapi;return R(n,e,"internal-error"),t.open({where:document.body,url:ss(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rs,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=P(e,"network-request-failed"),s=Or().setTimeout(()=>{r(i)},ns.get());function o(){Or().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}
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
   */const as={location:'yes',resizable:'yes',statusbar:'yes',toolbar:'no'};class cs{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function us(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a='';const u={...as,width:r.toString(),height:i.toString(),top:s,left:o},d=(0,c.getUA)().toLowerCase();n&&(a=De(d)?"_blank":n),Ne(d)&&(t=t||"http://localhost",u.scrollbars='yes');const l=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,'');if(xe(d)&&'_self'!==a)return ds(t||'',a),new cs(null);const h=window.open(t||'',a,l);R(h,e,"popup-blocked");try{h.focus()}catch(e){}return new cs(h)}function ds(e,t){const n=document.createElement('a');n.href=e,n.target=t;const r=document.createEvent('MouseEvent');r.initMouseEvent('click',!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
   */const ls='__/auth/handler',hs='emulator/auth/handler',ps=encodeURIComponent('fac');async function fs(e,t,n,r,i,s){R(e.config.authDomain,e,"auth-domain-config-required"),R(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:a.SDK_VERSION,eventId:i};if(t instanceof zt){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||'',(0,c.isEmpty)(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Gt){const e=t.getScopes().filter(e=>''!==e);e.length>0&&(o.scopes=e.join(','))}e.tenantId&&(o.tid=e.tenantId);const u=o;for(const e of Object.keys(u))void 0===u[e]&&delete u[e];const d=await e._getAppCheckToken(),l=d?`#${ps}=${encodeURIComponent(d)}`:'';return`${ms(e)}?${(0,c.querystring)(u).slice(1)}${l}`}function ms({config:e}){return e.emulator?F(e,hs):`https://${e.authDomain}/${ls}`}
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
   */const gs='webStorageSupport';const Is=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=br,this._completeRedirectFn=xi,this._overrideRedirectResult=Ri}async _openPopup(e,t,n,r){C(this.eventManagers[e._key()]?.manager,'_initialize() not called before _openPopup()');return us(e,await fs(e,t,n,D(),r),Sr())}async _openRedirect(e,t,n,r){await this._originValidation(e);return Rr(await fs(e,t,n,D(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(C(n,'If manager is not set, promise should be'),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await os(e),n=new qi(e);return t.register('authEvent',t=>{R(t?.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(gs,{type:gs},n=>{const r=n?.[0]?.[gs];void 0!==r&&t(!!r),b(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ji(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return He()||Ce()||Fe()}};class _s{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return N('unexpected MultiFactorSessionType')}}}class ys extends _s{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ys(e)}_finalizeEnroll(e,t,n){return dr(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Br(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class vs{constructor(){}static assertion(e){return ys._fromCredential(e)}}vs.FACTOR_ID='phone';class Ts{static assertionForEnrollment(e,t){return ws._fromSecret(e,t)}static assertionForSignIn(e,t){return ws._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;R(void 0!==t.user?.auth,"internal-error");const n=await(r=t.user.auth,i={idToken:t.credential,totpEnrollmentInfo:{}},z(r,"POST","/v2/accounts/mfaEnrollment:start",W(r,i)));var r,i;return Es._fromStartTotpMfaEnrollmentResponse(n,t.user.auth)}}Ts.FACTOR_ID="totp";class ws extends _s{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new ws(t,void 0,e)}static _fromEnrollmentId(e,t){return new ws(t,e)}async _finalizeEnroll(e,t,n){return R(void 0!==this.secret,e,"argument-error"),lr(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){R(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Jr(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Es{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Es(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){let n=!1;return(bs(e)||bs(t))&&(n=!0),n&&(bs(e)&&(e=this.auth.currentUser?.email||'unknownuser'),bs(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function bs(e){return void 0===e||0===e?.length}var Ps="@firebase/auth",As="1.13.11";
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
class Ss{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
   */function ks(e){switch(e){case"Node":return'node';case"ReactNative":return'rn';case"Worker":return'webworker';case"Cordova":return'cordova';case"WebExtension":return'web-extension';default:return}}
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
const Os=(0,c.getExperimentalSetting)('authIdTokenMaxAge')||300;let Rs=null;const Ns=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Os)return;const i=n?.token;Rs!==i&&(Rs=i,await fetch(e,{method:i?'POST':'DELETE',headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Cs(e=(0,a.getApp)()){const t=(0,a._getProvider)(e,'auth');if(t.isInitialized())return t.getImmediate();const n=dt(e,{popupRedirectResolver:Is,persistence:[Kr,_r,br]}),r=(0,c.getExperimentalSetting)('authTokenSyncURL');if(r&&'boolean'==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=Ns(e.toString());Zn(n,t,()=>t(n.currentUser)),Qn(n,e=>t(e))}}const i=(0,c.getDefaultEmulatorHost)('auth');return i&&ht(n,`http://${i}`),n}var Ds;Je={loadJS:function(e){return new Promise((t,n)=>{const r=document.createElement('script');try{(0,a._setTrustedScriptSrc)(r,e)}catch(e){return void n(e)}r.onload=t,r.onerror=e=>{const t=P("internal-error");t.customData=e,n(t)},r.type='text/javascript',r.charset='UTF-8',(document.getElementsByTagName('head')?.[0]??document).appendChild(r)})},gapiScript:'https://apis.google.com/js/api.js',recaptchaV2Script:'https://www.google.com/recaptcha/api.js',recaptchaEnterpriseScript:'https://www.google.com/recaptcha/enterprise.js?render='},Ds="Browser",(0,a._registerComponent)(new d.Component("auth",(e,{options:t})=>{const n=e.getProvider('app').getImmediate(),r=e.getProvider('heartbeat'),i=e.getProvider('app-check-internal'),{apiKey:s,authDomain:o}=n.options;R(s&&!s.includes(':'),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:Ds,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qe(Ds)},c=new Ke(n,r,i,a);return lt(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),(0,a._registerComponent)(new d.Component("auth-internal",e=>(e=>new Ss(e))($e(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,a.registerVersion)(Ps,As,ks(Ds)),(0,a.registerVersion)(Ps,As,'esm2020')},935,[936,938,940,937]);
__d(function(g,r,_i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"FirebaseError",{enumerable:!0,get:function(){return n.FirebaseError}}),Object.defineProperty(_e,"SDK_VERSION",{enumerable:!0,get:function(){return oe}}),Object.defineProperty(_e,"_DEFAULT_ENTRY_NAME",{enumerable:!0,get:function(){return H}}),Object.defineProperty(_e,"_addComponent",{enumerable:!0,get:function(){return W}}),Object.defineProperty(_e,"_addOrOverwriteComponent",{enumerable:!0,get:function(){return q}}),Object.defineProperty(_e,"_apps",{enumerable:!0,get:function(){return U}}),Object.defineProperty(_e,"_clearComponents",{enumerable:!0,get:function(){return ee}}),Object.defineProperty(_e,"_components",{enumerable:!0,get:function(){return J}}),Object.defineProperty(_e,"_getProvider",{enumerable:!0,get:function(){return Y}}),Object.defineProperty(_e,"_isFirebaseApp",{enumerable:!0,get:function(){return Q}}),Object.defineProperty(_e,"_isFirebaseServerApp",{enumerable:!0,get:function(){return Z}}),Object.defineProperty(_e,"_isFirebaseServerAppSettings",{enumerable:!0,get:function(){return X}}),Object.defineProperty(_e,"_registerComponent",{enumerable:!0,get:function(){return K}}),Object.defineProperty(_e,"_removeServiceInstance",{enumerable:!0,get:function(){return G}}),Object.defineProperty(_e,"_serverApps",{enumerable:!0,get:function(){return V}}),Object.defineProperty(_e,"_setTrustedScriptSrc",{enumerable:!0,get:function(){return Ne}}),Object.defineProperty(_e,"deleteApp",{enumerable:!0,get:function(){return fe}}),Object.defineProperty(_e,"getApp",{enumerable:!0,get:function(){return pe}}),Object.defineProperty(_e,"getApps",{enumerable:!0,get:function(){return le}}),Object.defineProperty(_e,"initializeApp",{enumerable:!0,get:function(){return se}}),Object.defineProperty(_e,"initializeServerApp",{enumerable:!0,get:function(){return ce}}),Object.defineProperty(_e,"onLog",{enumerable:!0,get:function(){return he}}),Object.defineProperty(_e,"registerVersion",{enumerable:!0,get:function(){return ue}}),Object.defineProperty(_e,"setLogLevel",{enumerable:!0,get:function(){return de}});var e=r(d[0]),t=r(d[1]),n=r(d[2]),i=r(d[3]);
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
class o{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(s(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(' ')}}function s(e){const t=e.getComponent();return"VERSION"===t?.type}const c="@firebase/app",p="0.16.7",l=new t.Logger('@firebase/app'),f="@firebase/app-compat",u="@firebase/analytics-compat",h="@firebase/analytics",b="@firebase/app-check-compat",w="@firebase/app-check",y="@firebase/auth",v="@firebase/auth-compat",C="@firebase/crashlytics",_="@firebase/database",D="@firebase/data-connect",O="@firebase/database-compat",P="@firebase/functions",E="@firebase/functions-compat",S="@firebase/installations",j="@firebase/installations-compat",A="@firebase/messaging",I="@firebase/messaging-compat",k="@firebase/performance",$="@firebase/performance-compat",F="@firebase/remote-config",N="@firebase/remote-config-compat",T="@firebase/storage",R="@firebase/storage-compat",x="@firebase/firestore",B="@firebase/ai",L="@firebase/firestore-compat",z="firebase",H='[DEFAULT]',M={[c]:'fire-core',[f]:'fire-core-compat',[h]:'fire-analytics',[u]:'fire-analytics-compat',[w]:'fire-app-check',[b]:'fire-app-check-compat',[y]:'fire-auth',[v]:'fire-auth-compat',[C]:'fire-cls',[_]:'fire-rtdb',[D]:'fire-data-connect',[O]:'fire-rtdb-compat',[P]:'fire-fn',[E]:'fire-fn-compat',[S]:'fire-iid',[j]:'fire-iid-compat',[A]:'fire-fcm',[I]:'fire-fcm-compat',[k]:'fire-perf',[$]:'fire-perf-compat',[F]:'fire-rc',[N]:'fire-rc-compat',[T]:'fire-gcs',[R]:'fire-gcs-compat',[x]:'fire-fst',[L]:'fire-fst-compat',[B]:'fire-vertex','fire-js':'fire-js',[z]:'fire-js-all'},U=new Map,V=new Map,J=new Map;function W(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function q(e,t){e.container.addOrOverwriteComponent(t)}function K(e){const t=e.name;if(J.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;J.set(t,e);for(const t of U.values())W(t,e);for(const t of V.values())W(t,e);return!0}function Y(e,t){const n=e.container.getProvider('heartbeat').getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function G(e,t,n=H){Y(e,t).clearInstance(n)}function Q(e){return void 0!==e.options}function X(e){return!Q(e)&&('authIdToken'in e||'appCheckToken'in e||'releaseOnDeref'in e||'automaticDataCollectionEnabled'in e)}function Z(e){return null!=e&&void 0!==e.settings}function ee(){J.clear()}
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
   */const te={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":'Firebase Server App has been deleted',"no-options":'Need to provide options, when not being deployed to hosting via source.',"invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":'First argument to `onLog` must be null or a function.',"idb-open":'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',"idb-get":'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',"idb-set":'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',"idb-delete":'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',"finalization-registry-not-supported":'FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.',"invalid-server-app-environment":'FirebaseServerApp is not for use in browser environments.'},re=new n.ErrorFactory('app','Firebase',te);
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
class ae{constructor(t,n,i){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new e.Component('app',()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw re.create("app-deleted",{appName:this._name})}}
/**
   * @license
   * Copyright 2023 Google LLC
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
   */function ne(e,t){const i=(0,n.base64Decode)(e.split('.')[1]);if(null===i)return void console.error(`FirebaseServerApp ${t} is invalid: second part could not be parsed.`);if(void 0===JSON.parse(i).exp)return void console.error(`FirebaseServerApp ${t} is invalid: expiration claim could not be parsed`);1e3*JSON.parse(i).exp-(new Date).getTime()<=0&&console.error(`FirebaseServerApp ${t} is invalid: the token has expired.`)}class ie extends ae{constructor(e,t,n,i){const o=void 0===t.automaticDataCollectionEnabled||t.automaticDataCollectionEnabled,s={name:n,automaticDataCollectionEnabled:o};if(void 0!==e.apiKey)super(e,s,i);else{super(e.options,s,i)}this._serverConfig={automaticDataCollectionEnabled:o,...t},this._serverConfig.authIdToken&&ne(this._serverConfig.authIdToken,'authIdToken'),this._serverConfig.appCheckToken&&ne(this._serverConfig.appCheckToken,'appCheckToken'),this._finalizationRegistry=null,'undefined'!=typeof FinalizationRegistry&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,ue(c,p,'serverapp')}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,void 0!==e&&null!==this._finalizationRegistry&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){this.isDeleted||fe(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw re.create("server-app-deleted")}}
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
   */const oe="13.4.0";function se(t,i={}){let o=t;if('object'!=typeof i){i={name:i}}const s={name:H,automaticDataCollectionEnabled:!0,...i},c=s.name;if('string'!=typeof c||!c)throw re.create("bad-app-name",{appName:String(c)});if(o||(o=(0,n.getDefaultAppConfig)()),!o)throw re.create("no-options");const p=U.get(c);if(p){if((0,n.deepEqual)(o,p.options)){if((0,n.deepEqual)(s,p.config))return p;throw re.create("duplicate-app",{appName:c,mismatchedParam:'config',oldValue:JSON.stringify(p.config),newValue:JSON.stringify(s)})}throw re.create("duplicate-app",{appName:c,mismatchedParam:'options',oldValue:JSON.stringify(p.options),newValue:JSON.stringify(o)})}const l=new e.ComponentContainer(c);for(const e of J.values())l.addComponent(e);const f=new ae(o,s,l);return U.set(c,f),f}function ce(t,i={}){if((0,n.isBrowser)()&&!(0,n.isWebWorker)())throw re.create("invalid-server-app-environment");let o,s=i||{};if(t&&(Q(t)?o=t.options:X(t)?s=t:o=t),void 0===s.automaticDataCollectionEnabled&&(s.automaticDataCollectionEnabled=!0),o||(o=(0,n.getDefaultAppConfig)()),!o)throw re.create("no-options");const c={...s,...o};void 0!==c.releaseOnDeref&&delete c.releaseOnDeref;if(void 0!==s.releaseOnDeref&&'undefined'==typeof FinalizationRegistry)throw re.create("finalization-registry-not-supported",{});const p=''+(l=JSON.stringify(c),[...l].reduce((e,t)=>Math.imul(31,e)+t.charCodeAt(0)|0,0));var l;const f=V.get(p);if(f)return f.incRefCount(s.releaseOnDeref),f;const u=new e.ComponentContainer(p);for(const e of J.values())u.addComponent(e);const h=new ie(o,s,p,u);return V.set(p,h),h}function pe(e=H){const t=U.get(e);if(!t&&e===H&&(0,n.getDefaultAppConfig)())return se();if(!t)throw re.create("no-app",{appName:e});return t}function le(){return Array.from(U.values())}async function fe(e){let t=!1;const n=e.name;if(U.has(n))t=!0,U.delete(n);else if(V.has(n)){e.decRefCount()<=0&&(V.delete(n),t=!0)}t&&(await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function ue(t,n,i){let o=M[t]??t;i&&(o+=`-${i}`);const s=o.match(/\s|\//),c=n.match(/\s|\//);if(s||c){const e=[`Unable to register library "${o}" with version "${n}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&c&&e.push('and'),c&&e.push(`version name "${n}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(' '))}K(new e.Component(`${o}-version`,()=>({library:o,version:n}),"VERSION"))}function he(e,n){if(null!==e&&'function'!=typeof e)throw re.create("invalid-log-argument");(0,t.setUserLogHandler)(e,n)}function de(e){(0,t.setLogLevel)(e)}
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
   */const be='firebase-heartbeat-store';let ge=null;function me(){return ge||(ge=(0,i.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(be)}catch(e){console.warn(e)}}}).catch(e=>{throw re.create("idb-open",{originalErrorMessage:e.message})})),ge}async function we(e){try{const t=(await me()).transaction(be),n=await t.objectStore(be).get(ve(e));return await t.done,n}catch(e){if(e instanceof n.FirebaseError)l.warn(e.message);else{const t=re.create("idb-get",{originalErrorMessage:e?.message});l.warn(t.message)}}}async function ye(e,t){try{const n=(await me()).transaction(be,'readwrite'),i=n.objectStore(be);await i.put(t,ve(e)),await n.done}catch(e){if(e instanceof n.FirebaseError)l.warn(e.message);else{const t=re.create("idb-set",{originalErrorMessage:e?.message});l.warn(t.message)}}}function ve(e){return`${e.name}!${e.options.appId}`}
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
   */class Ce{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider('app').getImmediate();this._storage=new Pe(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{const e=this.container.getProvider('platform-logger').getImmediate().getPlatformInfoString(),t=De();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>30){const e=Se(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){l.warn(e)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return'';const e=De(),{heartbeatsToSend:t,unsentEntries:i}=Oe(this._heartbeatsCache.heartbeats),o=(0,n.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return l.warn(e),''}}}function De(){return(new Date).toISOString().substring(0,10)}function Oe(e,t=1024){const n=[];let i=e.slice();for(const o of e){const e=n.find(e=>e.agent===o.agent);if(e){if(e.dates.push(o.date),Ee(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Ee(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Pe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,n.isIndexedDBAvailable)()&&(0,n.validateIndexedDBOpenable)().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await we(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return ye(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return ye(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function Ee(e){return(0,n.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}function Se(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}
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
/**
   * @license
   * Copyright 2026 Google LLC
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
const je='firebase-js-sdk-policy',Ae=['https://www.googletagmanager.com/gtag/js','https://apis.google.com/js/api.js','https://www.google.com/recaptcha/api.js','https://www.google.com/recaptcha/enterprise.js'];let Ie,ke=!1;function $e(e){if(!Ae.some(t=>e.startsWith(t)&&(e.length===t.length||'?'===e.charAt(t.length))))throw new TypeError(`Firebase: Refusing to load untrusted script URL: ${e}`);return e}function Fe(){if(void 0===Ie){Ie=null;const e='undefined'!=typeof window?window.trustedTypes:void 0;if(e?.createPolicy)try{Ie=e.createPolicy(je,{createScriptURL:$e})}catch{ke=!0}}return Ie}function Ne(e,t){$e(t);const n=Fe();if(n)e.src=n.createScriptURL(t);else try{e.src=t}catch(e){throw ke&&l.error(`Unable to load ${t} because this page requires Trusted Types for scripts but does not allow the "${je}" Trusted Types policy. To fix this, add "${je}" to the trusted-types directive of the page's Content-Security-Policy.`),e}}
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
   */var Te;Te='',K(new e.Component('platform-logger',e=>new o(e),"PRIVATE")),K(new e.Component('heartbeat',e=>new Ce(e),"PRIVATE")),ue(c,p,Te),ue(c,p,'esm2020'),ue('fire-js','')},936,[937,940,938,941]);
__d(function(g,r,i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"Component",{enumerable:!0,get:function(){return t}}),Object.defineProperty(_e,"ComponentContainer",{enumerable:!0,get:function(){return c}}),Object.defineProperty(_e,"Provider",{enumerable:!0,get:function(){return s}});var e=r(d[0]);class t{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
   */const n='[DEFAULT]';
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
   */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const t=new e.Deferred;if(this.instancesDeferred.set(n,t),this.isInitialized(n)||this.shouldAutoInitialize())try{const e=this.getOrInitializeService({instanceIdentifier:n});e&&t.resolve(e)}catch(e){}}return this.instancesDeferred.get(n).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(o(e))try{this.getOrInitializeService({instanceIdentifier:n})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>'INTERNAL'in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>'_delete'in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=n){return this.instances.has(e)}getOptions(e=n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const o=this.instances.get(n);return o&&e(o,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(o=e,o===n?void 0:o),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}var o;return s||null}normalizeInstanceIdentifier(e=n){return this.component?this.component.multipleInstances?e:n:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function o(e){return"EAGER"===e.instantiationMode}
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
   */class c{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},937,[938]);
__d(function(g,r,_i,_a,m,_e,_d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"CONSTANTS",{enumerable:!0,get:function(){return t}}),Object.defineProperty(_e,"DecodeBase64StringError",{enumerable:!0,get:function(){return u}}),Object.defineProperty(_e,"Deferred",{enumerable:!0,get:function(){return v}}),Object.defineProperty(_e,"ErrorFactory",{enumerable:!0,get:function(){return H}}),Object.defineProperty(_e,"FirebaseError",{enumerable:!0,get:function(){return z}}),Object.defineProperty(_e,"MAX_VALUE_MILLIS",{enumerable:!0,get:function(){return Ae}}),Object.defineProperty(_e,"RANDOM_FACTOR",{enumerable:!0,get:function(){return we}}),Object.defineProperty(_e,"Sha1",{enumerable:!0,get:function(){return fe}}),Object.defineProperty(_e,"areCookiesEnabled",{enumerable:!0,get:function(){return $}}),Object.defineProperty(_e,"assert",{enumerable:!0,get:function(){return n}}),Object.defineProperty(_e,"assertionError",{enumerable:!0,get:function(){return o}}),Object.defineProperty(_e,"async",{enumerable:!0,get:function(){return de}}),Object.defineProperty(_e,"base64",{enumerable:!0,get:function(){return c}}),Object.defineProperty(_e,"base64Decode",{enumerable:!0,get:function(){return l}}),Object.defineProperty(_e,"base64Encode",{enumerable:!0,get:function(){return a}}),Object.defineProperty(_e,"base64urlEncodeWithoutPadding",{enumerable:!0,get:function(){return f}}),Object.defineProperty(_e,"calculateBackoffMillis",{enumerable:!0,get:function(){return Ce}}),Object.defineProperty(_e,"contains",{enumerable:!0,get:function(){return ee}}),Object.defineProperty(_e,"createMockUserToken",{enumerable:!0,get:function(){return A}}),Object.defineProperty(_e,"createSubscribe",{enumerable:!0,get:function(){return le}}),Object.defineProperty(_e,"decode",{enumerable:!0,get:function(){return K}}),Object.defineProperty(_e,"deepCopy",{enumerable:!0,get:function(){return h}}),Object.defineProperty(_e,"deepEqual",{enumerable:!0,get:function(){return oe}}),Object.defineProperty(_e,"deepExtend",{enumerable:!0,get:function(){return d}}),Object.defineProperty(_e,"errorPrefix",{enumerable:!0,get:function(){return ye}}),Object.defineProperty(_e,"extractQuerystring",{enumerable:!0,get:function(){return ae}}),Object.defineProperty(_e,"generateSHA256Hash",{enumerable:!0,get:function(){return Be}}),Object.defineProperty(_e,"getDefaultAppConfig",{enumerable:!0,get:function(){return S}}),Object.defineProperty(_e,"getDefaultEmulatorHost",{enumerable:!0,get:function(){return j}}),Object.defineProperty(_e,"getDefaultEmulatorHostnameAndPort",{enumerable:!0,get:function(){return E}}),Object.defineProperty(_e,"getDefaults",{enumerable:!0,get:function(){return _}}),Object.defineProperty(_e,"getExperimentalSetting",{enumerable:!0,get:function(){return P}}),Object.defineProperty(_e,"getGlobal",{enumerable:!0,get:function(){return p}}),Object.defineProperty(_e,"getModularInstance",{enumerable:!0,get:function(){return ke}}),Object.defineProperty(_e,"getUA",{enumerable:!0,get:function(){return w}}),Object.defineProperty(_e,"isAdmin",{enumerable:!0,get:function(){return Z}}),Object.defineProperty(_e,"isBrowser",{enumerable:!0,get:function(){return T}}),Object.defineProperty(_e,"isBrowserExtension",{enumerable:!0,get:function(){return M}}),Object.defineProperty(_e,"isCloudWorkstation",{enumerable:!0,get:function(){return Ne}}),Object.defineProperty(_e,"isCloudflareWorker",{enumerable:!0,get:function(){return N}}),Object.defineProperty(_e,"isElectron",{enumerable:!0,get:function(){return x}}),Object.defineProperty(_e,"isEmpty",{enumerable:!0,get:function(){return re}}),Object.defineProperty(_e,"isIE",{enumerable:!0,get:function(){return I}}),Object.defineProperty(_e,"isIndexedDBAvailable",{enumerable:!0,get:function(){return F}}),Object.defineProperty(_e,"isMobileCordova",{enumerable:!0,get:function(){return C}}),Object.defineProperty(_e,"isNode",{enumerable:!0,get:function(){return D}}),Object.defineProperty(_e,"isNodeSdk",{enumerable:!0,get:function(){return L}}),Object.defineProperty(_e,"isReactNative",{enumerable:!0,get:function(){return B}}),Object.defineProperty(_e,"isSafari",{enumerable:!0,get:function(){return R}}),Object.defineProperty(_e,"isSafariOrWebkit",{enumerable:!0,get:function(){return U}}),Object.defineProperty(_e,"isUWP",{enumerable:!0,get:function(){return W}}),Object.defineProperty(_e,"isValidFormat",{enumerable:!0,get:function(){return Y}}),Object.defineProperty(_e,"isValidTimestamp",{enumerable:!0,get:function(){return Q}}),Object.defineProperty(_e,"isWebWorker",{enumerable:!0,get:function(){return k}}),Object.defineProperty(_e,"issuedAtTime",{enumerable:!0,get:function(){return X}}),Object.defineProperty(_e,"jsonEval",{enumerable:!0,get:function(){return G}}),Object.defineProperty(_e,"map",{enumerable:!0,get:function(){return ne}}),Object.defineProperty(_e,"ordinal",{enumerable:!0,get:function(){return De}}),Object.defineProperty(_e,"pingServer",{enumerable:!0,get:function(){return Me}}),Object.defineProperty(_e,"promiseWithTimeout",{enumerable:!0,get:function(){return se}}),Object.defineProperty(_e,"querystring",{enumerable:!0,get:function(){return ce}}),Object.defineProperty(_e,"querystringDecode",{enumerable:!0,get:function(){return ue}}),Object.defineProperty(_e,"safeGet",{enumerable:!0,get:function(){return te}}),Object.defineProperty(_e,"stringLength",{enumerable:!0,get:function(){return Se}}),Object.defineProperty(_e,"stringToByteArray",{enumerable:!0,get:function(){return Ee}}),Object.defineProperty(_e,"stringify",{enumerable:!0,get:function(){return q}}),Object.defineProperty(_e,"validateArgCount",{enumerable:!0,get:function(){return ge}}),Object.defineProperty(_e,"validateCallback",{enumerable:!0,get:function(){return Oe}}),Object.defineProperty(_e,"validateContextObject",{enumerable:!0,get:function(){return je}}),Object.defineProperty(_e,"validateIndexedDBOpenable",{enumerable:!0,get:function(){return V}}),Object.defineProperty(_e,"validateNamespace",{enumerable:!0,get:function(){return me}});var e=r(_d[0]);
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
   */const t={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:'${JSCORE_VERSION}'},n=function(e,t){if(!e)throw o(t)},o=function(e){return new Error('Firebase Database ('+t.SDK_VERSION+') INTERNAL ASSERT FAILED: '+e)},i=function(e){const t=[];let n=0;for(let o=0;o<e.length;o++){let i=e.charCodeAt(o);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&o+1<e.length&&56320==(64512&e.charCodeAt(o+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++o)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},s=function(e){const t=[];let n=0,o=0;for(;n<e.length;){const i=e[n++];if(i<128)t[o++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[o++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[o++]=String.fromCharCode(55296+(s>>10)),t[o++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],c=e[n++];t[o++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&c)}}return t.join('')},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+'+/='},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+'-_.'},HAS_NATIVE_SUPPORT:'function'==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error('encodeByteArray takes an array as a parameter');this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,c=s?e[t+1]:0,u=t+2<e.length,a=u?e[t+2]:0,f=i>>2,l=(3&i)<<4|c>>4;let h=(15&c)<<2|a>>6,d=63&a;u||(d=64,s||(h=64)),o.push(n[f],n[l],n[h],n[d])}return o.join('')},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const c=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==c||null==a)throw new u;const f=i<<2|s>>4;if(o.push(f),64!==c){const e=s<<4&240|c>>2;if(o.push(e),64!==a){const e=c<<6&192|a;o.push(e)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
   */class u extends Error{constructor(){super(...arguments),this.name='DecodeBase64StringError'}}const a=function(e){const t=i(e);return c.encodeByteArray(t,!0)},f=function(e){return a(e).replace(/\./g,'')},l=function(e){try{return c.decodeString(e,!0)}catch(e){console.error('base64Decode failed: ',e)}return null};
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
function h(e){return d(void 0,e)}function d(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&b(n)&&(e[n]=d(e[n],t[n]));return e}function b(e){return'__proto__'!==e}
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
   */function p(){if('undefined'!=typeof self)return self;if('undefined'!=typeof window)return window;if(void 0!==g)return g;throw new Error('Unable to locate global object.')}
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
   */const y=()=>{if('undefined'==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},O=()=>{if('undefined'==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&l(e[1]);return t&&JSON.parse(t)},_=()=>{try{return(0,e.getDefaultsFromPostinstall)()||p().__FIREBASE_DEFAULTS__||y()||O()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},j=e=>_()?.emulatorHosts?.[e],E=e=>{const t=j(e);if(!t)return;const n=t.lastIndexOf(':');if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const o=parseInt(t.substring(n+1),10);return'['===t[0]?[t.substring(1,n-1),o]:[t.substring(0,n),o]},S=()=>_()?.config,P=e=>_()?.[`_${e}`];
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
class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),'function'==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
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
   */function A(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||'demo-project',o=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s={iss:`https://securetoken.google.com/${n}`,aud:n,iat:o,exp:o+3600,auth_time:o,sub:i,user_id:i,firebase:{sign_in_provider:'custom',identities:{}},...e};return[f(JSON.stringify({alg:'none',type:'JWT'})),f(JSON.stringify(s)),''].join('.')}
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
   */function w(){return'undefined'!=typeof navigator&&'string'==typeof navigator.userAgent?navigator.userAgent:''}function C(){return'undefined'!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())}function D(){const e=_()?.forceEnvironment;if('node'===e)return!0;if('browser'===e)return!1;try{return'[object process]'===Object.prototype.toString.call(g.process)}catch(e){return!1}}function T(){return'undefined'!=typeof window||k()}function k(){return'undefined'!=typeof WorkerGlobalScope&&'undefined'!=typeof self&&self instanceof WorkerGlobalScope}function N(){return'undefined'!=typeof navigator&&'Cloudflare-Workers'===navigator.userAgent}function M(){const e='object'==typeof chrome?chrome.runtime:'object'==typeof browser?browser.runtime:void 0;return'object'==typeof e&&void 0!==e.id}function B(){return'object'==typeof navigator&&'ReactNative'===navigator.product}function x(){return w().indexOf('Electron/')>=0}function I(){const e=w();return e.indexOf('MSIE ')>=0||e.indexOf('Trident/')>=0}function W(){return w().indexOf('MSAppHost/')>=0}function L(){return!0===t.NODE_CLIENT||!0===t.NODE_ADMIN}function R(){return!D()&&!!navigator.userAgent&&navigator.userAgent.includes('Safari')&&!navigator.userAgent.includes('Chrome')}function U(){return!D()&&!!navigator.userAgent&&(navigator.userAgent.includes('Safari')||navigator.userAgent.includes('WebKit'))&&!navigator.userAgent.includes('Chrome')}function F(){try{return'object'==typeof indexedDB}catch(e){return!1}}function V(){return new Promise((e,t)=>{try{let n=!0;const o='validate-browser-context-for-indexeddb-analytics-module',i=self.indexedDB.open(o);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(o),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{t(i.error?.message||'')}}catch(e){t(e)}})}function $(){return!('undefined'==typeof navigator||!navigator.cookieEnabled)}
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
   */class z extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,z.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,H.prototype.create)}}class H{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},o=`${this.service}/${e}`,i=this.errors[e],s=i?J(i,n):'Error',c=`${this.serviceName}: ${s} (${o}).`;return new z(o,c,n)}}function J(e,t){try{let n=0,o='';for(;n<e.length;){const i=e.indexOf('{$',n);if(-1===i){o+=e.substring(n);break}const s=e.indexOf('}',i+2);if(-1===s){o+=e.substring(n);break}const c=e.substring(i+2,s),u=t[c];o+=e.substring(n,i)+(null!=u?String(u):`<${c}?>`),n=s+1}return o}catch(t){return e}}
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
   */function G(e){return JSON.parse(e)}function q(e){return JSON.stringify(e)}
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
   */const K=function(e){let t={},n={},o={},i='';try{const s=e.split('.');t=G(l(s[0])||''),n=G(l(s[1])||''),i=s[2],o=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:o,signature:i}},Q=function(e){const t=K(e).claims,n=Math.floor((new Date).getTime()/1e3);let o=0,i=0;return'object'==typeof t&&(t.hasOwnProperty('nbf')?o=t.nbf:t.hasOwnProperty('iat')&&(o=t.iat),i=t.hasOwnProperty('exp')?t.exp:o+86400),!!n&&!!o&&!!i&&n>=o&&n<=i},X=function(e){const t=K(e).claims;return'object'==typeof t&&t.hasOwnProperty('iat')?t.iat:null},Y=function(e){const t=K(e).claims;return!!t&&'object'==typeof t&&t.hasOwnProperty('iat')},Z=function(e){const t=K(e).claims;return'object'==typeof t&&!0===t.admin};
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
function ee(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function te(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function re(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ne(e,t,n){const o={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(o[i]=t.call(n,e[i],i,e));return o}function oe(e,t){if(e===t)return!0;const n=Object.keys(e),o=Object.keys(t);for(const i of n){if(!o.includes(i))return!1;const n=e[i],s=t[i];if(ie(n)&&ie(s)){if(!oe(n,s))return!1}else if(n!==s)return!1}for(const e of o)if(!n.includes(e))return!1;return!0}function ie(e){return null!==e&&'object'==typeof e}
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
   */function se(e,t=2e3){const n=new v;return setTimeout(()=>n.reject('timeout!'),t),e.then(n.resolve,n.reject),n.promise}
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
   */function ce(e){const t=[];for(const[n,o]of Object.entries(e))Array.isArray(o)?o.forEach(e=>{t.push(encodeURIComponent(n)+'='+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+'='+encodeURIComponent(o));return t.length?'&'+t.join('&'):''}function ue(e){const t={};return e.replace(/^\?/,'').split('&').forEach(e=>{if(e){const[n,o]=e.split('=');t[decodeURIComponent(n)]=decodeURIComponent(o)}}),t}function ae(e){const t=e.indexOf('?');if(!t)return'';const n=e.indexOf('#',t);return e.substring(t,n>0?n:void 0)}
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
   */class fe{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if('string'==typeof e)for(let o=0;o<16;o++)n[o]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let o=0;o<16;o++)n[o]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let o,i,s=this.chain_[0],c=this.chain_[1],u=this.chain_[2],a=this.chain_[3],f=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(o=a^c&(u^a),i=1518500249):(o=c^u^a,i=1859775393):e<60?(o=c&u|a&(c|u),i=2400959708):(o=c^u^a,i=3395469782);const t=(s<<5|s>>>27)+o+f+i+n[e]&4294967295;f=a,a=u,u=4294967295&(c<<30|c>>>2),c=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let o=0;const i=this.buf_;let s=this.inbuf_;for(;o<t;){if(0===s)for(;o<=n;)this.compress_(e,o),o+=this.blockSize;if('string'==typeof e){for(;o<t;)if(i[s]=e.charCodeAt(o),++s,++o,s===this.blockSize){this.compress_(i),s=0;break}}else for(;o<t;)if(i[s]=e[o],++s,++o,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let o=24;o>=0;o-=8)e[n]=this.chain_[t]>>o&255,++n;return e}}function le(e,t){const n=new he(e,t);return n.subscribe.bind(n)}class he{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let o;if(void 0===e&&void 0===t&&void 0===n)throw new Error('Missing Observer.');o=be(e,['next','error','complete'])?e:{next:e,error:t,complete:n},void 0===o.next&&(o.next=pe),void 0===o.error&&(o.error=pe),void 0===o.complete&&(o.complete=pe);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch(e){}}),this.observers.push(o),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){'undefined'!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function de(e,t){return(...n)=>{Promise.resolve(!0).then(()=>{e(...n)}).catch(e=>{t&&t(e)})}}function be(e,t){if('object'!=typeof e||null===e)return!1;for(const n of t)if(n in e&&'function'==typeof e[n])return!0;return!1}function pe(){}
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
   */const ge=function(e,t,n,o){let i;if(o<t?i='at least '+t:o>n&&(i=0===n?'none':'no more than '+n),i){throw new Error(e+' failed: Was called with '+o+(1===o?' argument.':' arguments.')+' Expects '+i+'.')}};function ye(e,t){return`${e} failed: ${t} argument `}function me(e,t,n){if((!n||t)&&'string'!=typeof t)throw new Error(ye(e,'namespace')+'must be a valid firebase namespace.')}function Oe(e,t,n,o){if((!o||n)&&'function'!=typeof n)throw new Error(ye(e,t)+'must be a valid function.')}function je(e,t,n,o){if((!o||n)&&('object'!=typeof n||null===n))throw new Error(ye(e,t)+'must be a valid context object.')}
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
   */const Ee=function(e){const t=[];let o=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,n(i<e.length,'Surrogate pair missing trail surrogate.');s=65536+(t<<10)+(e.charCodeAt(i)-56320)}s<128?t[o++]=s:s<2048?(t[o++]=s>>6|192,t[o++]=63&s|128):s<65536?(t[o++]=s>>12|224,t[o++]=s>>6&63|128,t[o++]=63&s|128):(t[o++]=s>>18|240,t[o++]=s>>12&63|128,t[o++]=s>>6&63|128,t[o++]=63&s|128)}return t},Se=function(e){let t=0;for(let n=0;n<e.length;n++){const o=e.charCodeAt(n);o<128?t++:o<2048?t+=2:o>=55296&&o<=56319?(t+=4,n++):t+=3}return t},Pe=1e3,ve=2,Ae=144e5,we=.5;function Ce(e,t=Pe,n=ve){const o=t*Math.pow(n,e),i=Math.round(we*o*(Math.random()-.5)*2);return Math.min(Ae,o+i)}
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
   */function De(e){return Number.isFinite(e)?e+Te(e):`${e}`}function Te(e){const t=(e=Math.abs(e))%100;if(t>=10&&t<=20)return'th';const n=e%10;return 1===n?'st':2===n?'nd':3===n?'rd':'th'}
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
   */function ke(e){return e&&e._delegate?e._delegate:e}
/**
   * @license
   * Copyright 2025 Google LLC
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
   */function Ne(e){try{return(e.startsWith('http://')||e.startsWith('https://')?new URL(e).hostname:e).endsWith('.cloudworkstations.dev')}catch{return!1}}async function Me(e){return(await fetch(e,{credentials:'include'})).ok}
/**
   * @license
   * Copyright 2025 Google LLC
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
   */async function Be(e){const t=(new TextEncoder).encode(e),n=await crypto.subtle.digest('SHA-256',t);return Array.from(new Uint8Array(n)).map(e=>e.toString(16).padStart(2,'0')).join('')}},938,[939]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),Object.defineProperty(e,"getDefaultsFromPostinstall",{enumerable:!0,get:function(){return t}});
/**
   * @license
   * Copyright 2025 Google LLC
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
const t=()=>{}},939,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),Object.defineProperty(e,"LogLevel",{enumerable:!0,get:function(){return n}}),Object.defineProperty(e,"Logger",{enumerable:!0,get:function(){return h}}),Object.defineProperty(e,"setLogLevel",{enumerable:!0,get:function(){return L}}),Object.defineProperty(e,"setUserLogHandler",{enumerable:!0,get:function(){return f}});
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
const t=[];var n;!(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(n||(n={}));const o={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},l=n.INFO,s={[n.DEBUG]:'log',[n.VERBOSE]:'log',[n.INFO]:'info',[n.WARN]:'warn',[n.ERROR]:'error'},u=(t,n,...o)=>{if(n<t.logLevel)return;const l=(new Date).toISOString(),u=s[n];if(!u)throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`);console[u](`[${l}]  ${t.name}:`,...o)};class h{constructor(n){this.name=n,this._logLevel=l,this._logHandler=u,this._userLogHandler=null,t.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in n))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel='string'==typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if('function'!=typeof t)throw new TypeError('Value assigned to `logHandler` must be a function');this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...t),this._logHandler(this,n.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...t),this._logHandler(this,n.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,n.INFO,...t),this._logHandler(this,n.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,n.WARN,...t),this._logHandler(this,n.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...t),this._logHandler(this,n.ERROR,...t)}}function L(n){t.forEach(t=>{t.setLogLevel(n)})}function f(l,s){for(const u of t){let t=null;s&&s.level&&(t=o[s.level]),u.userLogHandler=null===l?null:(o,s,...u)=>{const h=u.map(t=>{if(null==t)return null;if('string'==typeof t)return t;if('number'==typeof t||'boolean'==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}}).filter(t=>t).join(' ');s>=(t??o.logLevel)&&l({level:n[s].toLowerCase(),message:h,args:u,type:o.name})}}}},940,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),Object.defineProperty(e,"unwrap",{enumerable:!0,get:function(){return n.u}}),Object.defineProperty(e,"wrap",{enumerable:!0,get:function(){return n.w}}),Object.defineProperty(e,"deleteDB",{enumerable:!0,get:function(){return o}}),Object.defineProperty(e,"openDB",{enumerable:!0,get:function(){return t}});var n=r(d[0]);function t(t,o,{blocked:s,upgrade:c,blocking:u,terminated:l}={}){const f=indexedDB.open(t,o),b=(0,n.w)(f);return c&&f.addEventListener('upgradeneeded',t=>{c((0,n.w)(f.result),t.oldVersion,t.newVersion,(0,n.w)(f.transaction),t)}),s&&f.addEventListener('blocked',n=>s(n.oldVersion,n.newVersion,n)),b.then(n=>{l&&n.addEventListener('close',()=>l()),u&&n.addEventListener('versionchange',n=>u(n.oldVersion,n.newVersion,n))}).catch(()=>{}),b}function o(t,{blocked:o}={}){const s=indexedDB.deleteDatabase(t);return o&&s.addEventListener('blocked',n=>o(n.oldVersion,n)),(0,n.w)(s).then(()=>{})}const s=['get','getKey','getAll','getAllKeys','count'],c=['put','add','delete','clear'],u=new Map;function l(n,t){if(!(n instanceof IDBDatabase)||t in n||'string'!=typeof t)return;if(u.get(t))return u.get(t);const o=t.replace(/FromIndex$/,''),l=t!==o,f=c.includes(o);if(!(o in(l?IDBIndex:IDBObjectStore).prototype)||!f&&!s.includes(o))return;const b=async function(n,...t){const s=this.transaction(n,f?'readwrite':'readonly');let c=s.store;return l&&(c=c.index(t.shift())),(await Promise.all([c[o](...t),f&&s.done]))[0]};return u.set(t,b),b}(0,n.r)(n=>({...n,get:(t,o,s)=>l(t,o)||n.get(t,o,s),has:(t,o)=>!!l(t,o)||n.has(t,o)}))},941,[942]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),Object.defineProperty(e,"a",{enumerable:!0,get:function(){return p}}),Object.defineProperty(e,"i",{enumerable:!0,get:function(){return t}}),Object.defineProperty(e,"r",{enumerable:!0,get:function(){return l}}),Object.defineProperty(e,"u",{enumerable:!0,get:function(){return B}}),Object.defineProperty(e,"w",{enumerable:!0,get:function(){return I}});const t=(t,n)=>n.some(n=>t instanceof n);let n,o;const s=new WeakMap,c=new WeakMap,u=new WeakMap,f=new WeakMap,p=new WeakMap;function b(t){const n=new Promise((n,o)=>{const s=()=>{t.removeEventListener('success',c),t.removeEventListener('error',u)},c=()=>{n(I(t.result)),s()},u=()=>{o(t.error),s()};t.addEventListener('success',c),t.addEventListener('error',u)});return n.then(n=>{n instanceof IDBCursor&&s.set(n,t)}).catch(()=>{}),p.set(n,t),n}function v(t){if(c.has(t))return;const n=new Promise((n,o)=>{const s=()=>{t.removeEventListener('complete',c),t.removeEventListener('error',u),t.removeEventListener('abort',u)},c=()=>{n(),s()},u=()=>{o(t.error||new DOMException('AbortError','AbortError')),s()};t.addEventListener('complete',c),t.addEventListener('error',u),t.addEventListener('abort',u)});c.set(t,n)}let D={get(t,n,o){if(t instanceof IDBTransaction){if('done'===n)return c.get(t);if('objectStoreNames'===n)return t.objectStoreNames||u.get(t);if('store'===n)return o.objectStoreNames[1]?void 0:o.objectStore(o.objectStoreNames[0])}return I(t[n])},set:(t,n,o)=>(t[n]=o,!0),has:(t,n)=>t instanceof IDBTransaction&&('done'===n||'store'===n)||n in t};function l(t){D=t(D)}function y(c){return'function'==typeof c?(f=c)!==IDBDatabase.prototype.transaction||'objectStoreNames'in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(f)?function(...t){return f.apply(B(this),t),I(s.get(this))}:function(...t){return I(f.apply(B(this),t))}:function(t,...n){const o=f.call(B(this),t,...n);return u.set(o,t.sort?t.sort():[t]),I(o)}:(c instanceof IDBTransaction&&v(c),t(c,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(c,D):c);var f}function I(t){if(t instanceof IDBRequest)return b(t);if(f.has(t))return f.get(t);const n=y(t);return n!==t&&(f.set(t,n),p.set(n,t)),n}const B=t=>p.get(t)},942,[]);
__d(function(g,r,i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"useAsyncStorage",{enumerable:!0,get:function(){return n.useAsyncStorage}}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return o}});var e,t=r(d[0]),u=(e=t)&&e.__esModule?e:{default:e},n=r(d[1]),o=u.default},943,[944,946]);
__d(function(g,r,_i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return i}});var e,t=r(d[0]);const o=((e=t)&&e.__esModule?e:{default:e}).default.bind({concatArrays:!0,ignoreUndefined:!0});function n(e,t){const n=window.localStorage.getItem(e);if(n){const l=JSON.parse(n),c=JSON.parse(t),s=JSON.stringify(o(l,c));window.localStorage.setItem(e,s)}else window.localStorage.setItem(e,t)}function l(e,t){return new Promise((o,n)=>{try{const n=e();t?.(null,n),o(n)}catch(e){t?.(e),n(e)}})}function c(e,t,o){return Promise.all(e).then(e=>{const n=o?.(e)??null;return t?.(null,n),Promise.resolve(n)},e=>(t?.(e),Promise.reject(e)))}const s={getItem:(e,t)=>l(()=>window.localStorage.getItem(e),t),setItem:(e,t,o)=>l(()=>window.localStorage.setItem(e,t),o),removeItem:(e,t)=>l(()=>window.localStorage.removeItem(e),t),mergeItem:(e,t,o)=>l(()=>n(e,t),o),clear:e=>l(()=>window.localStorage.clear(),e),getAllKeys:e=>l(()=>{const e=window.localStorage.length,t=[];for(let o=0;o<e;o+=1){const e=window.localStorage.key(o)||"";t.push(e)}return t},e),flushGetRequests:()=>{},multiGet:(e,t)=>c(e.map(e=>s.getItem(e)),t,t=>t.map((t,o)=>[e[o],t])),multiSet:(e,t)=>c(e.map(e=>s.setItem(e[0],e[1])),t),multiRemove:(e,t)=>c(e.map(e=>s.removeItem(e)),t),multiMerge:(e,t)=>c(e.map(e=>s.mergeItem(e[0],e[1])),t)};var i=s},944,[945]);
__d(function(g,r,i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return u}});var e,t=r(d[0]),u=((e=t)&&e.__esModule?e:{default:e}).default},945,[807]);
__d(function(g,r,i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),_e.useAsyncStorage=function(e){return{getItem:(...t)=>u.default.getItem(e,...t),setItem:(...t)=>u.default.setItem(e,...t),mergeItem:(...t)=>u.default.mergeItem(e,...t),removeItem:(...t)=>u.default.removeItem(e,...t)}};var e,t=r(d[0]),u=(e=t)&&e.__esModule?e:{default:e}},946,[944]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var t=r(d[0]);Object.keys(t).forEach(function(n){'default'===n||Object.prototype.hasOwnProperty.call(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})});
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
(0,t.registerVersion)("firebase","13.4.0",'app')},947,[936]);