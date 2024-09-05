(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[1581],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties});var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=(0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.A)(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}},"./node_modules/@pdftron/webviewer-react-toolkit/dist/esm/components/Choice/Choice.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>Choice});var tslib_es6=__webpack_require__("./node_modules/@pdftron/webviewer-react-toolkit/node_modules/tslib/tslib.es6.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js");var tabObservable=new(function(){function AccessibleFocusObservable(){var _this=this;this._handleFirstTab=function(event){"Tab"===event.key&&(_this._setIsUserTabbing(!0),_this._tabToMouseListener())},this._handleFirstMouse=function(){_this._setIsUserTabbing(!1),_this._mouseToTabListener()},this._subscribers=[],this._isUserTabbing=!1}return Object.defineProperty(AccessibleFocusObservable.prototype,"value",{get:function(){return this._isUserTabbing},enumerable:!1,configurable:!0}),AccessibleFocusObservable.prototype.subscribe=function(subscriber){return 0===this._subscribers.length&&(this._isUserTabbing?this._tabToMouseListener():this._mouseToTabListener()),this._subscribers.includes(subscriber)||this._subscribers.push(subscriber),this._unsubscribe(subscriber)},AccessibleFocusObservable.prototype._unsubscribe=function(subscriber){var _this=this;return function(){_this._subscribers=_this._subscribers.filter((function(s){return s!==subscriber})),0===_this._subscribers.length&&_this._removeAllListeners()}},AccessibleFocusObservable.prototype._setIsUserTabbing=function(isUserTabbing){this._isUserTabbing=isUserTabbing,this._subscribers.forEach((function(subscriber){return subscriber()}))},AccessibleFocusObservable.prototype._tabToMouseListener=function(){window.removeEventListener("keydown",this._handleFirstTab),window.addEventListener("mousedown",this._handleFirstMouse)},AccessibleFocusObservable.prototype._mouseToTabListener=function(){window.removeEventListener("mousedown",this._handleFirstMouse),window.addEventListener("keydown",this._handleFirstTab)},AccessibleFocusObservable.prototype._removeAllListeners=function(){window.removeEventListener("mousedown",this._handleFirstMouse),window.removeEventListener("keydown",this._handleFirstTab)},AccessibleFocusObservable}()),useFocus=__webpack_require__("./node_modules/@pdftron/webviewer-react-toolkit/dist/esm/hooks/useFocus.js"),useID=__webpack_require__("./node_modules/@pdftron/webviewer-react-toolkit/dist/esm/hooks/useID.js"),Icon=__webpack_require__("./node_modules/@pdftron/webviewer-react-toolkit/dist/esm/components/Icon/Icon.js"),Choice=(0,react.forwardRef)((function(_a,ref){var label=_a.label,leftLabel=_a.leftLabel,className=_a.className,children=_a.children,id=_a.id,radio=_a.radio,isSwitch=_a.isSwitch,center=_a.center,disabledLabelChange=_a.disabledLabelChange,onChange=_a.onChange,onFocus=_a.onFocus,onBlur=_a.onBlur,props=(0,tslib_es6.Tt)(_a,["label","leftLabel","className","children","id","radio","isSwitch","center","disabledLabelChange","onChange","onFocus","onBlur"]),inputRef=(0,react.useRef)(null);(0,react.useImperativeHandle)(ref,(function(){return inputRef.current}));var isUserTabbing=function useAccessibleFocus(observable){void 0===observable&&(observable=tabObservable);var _a=(0,react.useState)(observable.value),isUserTabbing=_a[0],setIsUserTabbing=_a[1];return(0,react.useEffect)((function(){return observable.subscribe((function(){return setIsUserTabbing(observable.value)}))}),[observable]),isUserTabbing}(),_b=(0,useFocus.i)(onFocus,onBlur),focused=_b.focused,handleOnFocus=_b.handleOnFocus,handleOnBlur=_b.handleOnBlur,choiceID=(0,useID.B)(id),_c=(0,react.useState)((function(){var _a,_b,_c;return null!==(_c=null!==(_a=props.checked)&&void 0!==_a?_a:null===(_b=inputRef.current)||void 0===_b?void 0:_b.checked)&&void 0!==_c&&_c})),checked=_c[0],setChecked=_c[1];(0,react.useEffect)((function(){void 0!==props.checked&&setChecked(props.checked)}),[props.checked]);(0,react.useEffect)((function(){if(props.name&&radio)return observable.subscribe(props.name,(function(){inputRef.current&&inputRef.current.checked!==checked&&setChecked(inputRef.current.checked)}))}),[checked,props.name,radio]);var choiceClass=classnames_default()("ui__base ui__choice",{"ui__choice--radio":radio,"ui__choice--leftLabel":leftLabel,"ui__choice--checked":checked,"ui__choice--center":center,"ui__choice--disabled":props.disabled},className),inputClass=classnames_default()("ui__choice__input",{"ui__choice__input--switch":isSwitch}),checkClass=isSwitch?classnames_default()("ui__choice__input__switch",{"ui__choice__input__switch--checked":checked,"ui__choice__input__switch--disabled":props.disabled,"ui__choice__input__switch--focus":isUserTabbing&&focused}):classnames_default()("ui__choice__input__check",{"ui__choice__input__check--checked":checked,"ui__choice__input__check--disabled":props.disabled,"ui__choice__input__check--focus":isUserTabbing&&focused}),labelClass=classnames_default()("ui__choice__label",{"ui__choice__label--disabled":props.disabled&&disabledLabelChange}),labelElement=(0,react.useMemo)((function(){if(label)return react.createElement("label",{className:labelClass,htmlFor:choiceID},label)}),[choiceID,label,labelClass]);return react.createElement("span",{className:choiceClass},leftLabel?labelElement:void 0,react.createElement("span",{className:inputClass},isSwitch?react.createElement("div",{className:checkClass},react.createElement("div",{className:"ui__choice__input__toggle"})):react.createElement("div",{className:checkClass},checked&&!radio?react.createElement(Icon.I,{icon:"Check",className:"ui__choice__input__icon"}):void 0),react.createElement("input",(0,tslib_es6.Cl)({},props,{id:choiceID,type:radio?"radio":"checkbox",onChange:function(event){void 0===props.checked&&setChecked(event.target.checked),null==onChange||onChange(event)},ref:inputRef,onFocus:handleOnFocus,onBlur:handleOnBlur}),children)),leftLabel?void 0:labelElement)})),observable=new(function(){function RadioObservable(){this._subscribers=[]}return RadioObservable.prototype.subscribe=function(name,subscriber){return this._trigger(name),this._subscribers.push({name,subscriber}),this._unsubscribe(subscriber)},RadioObservable.prototype._trigger=function(name){this._subscribers.forEach((function(s){name===s.name&&s.subscriber()}))},RadioObservable.prototype._unsubscribe=function(subscriber){var _this=this;return function(){_this._subscribers=_this._subscribers.filter((function(s){return s.subscriber!==subscriber}))}},RadioObservable}())},"./node_modules/@pdftron/webviewer-react-toolkit/dist/esm/hooks/useID.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>useID});var react=__webpack_require__("./node_modules/react/index.js"),currentId=0;function getStringId(prefix){return void 0===prefix&&(prefix="id"),prefix+"_"+(currentId++).toString(16)}function useID(id){return(0,react.useMemo)((function(){return id||getStringId("label")}),[id])}},"./node_modules/@pdftron/webviewer-react-toolkit/dist/esm/utils/domUtils.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O1:()=>focusableElementDomString});var focusableElementDomString=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",")},"./node_modules/lodash/_baseTrim.js":(module,__unused_webpack_exports,__webpack_require__)=>{var trimmedEndIndex=__webpack_require__("./node_modules/lodash/_trimmedEndIndex.js"),reTrimStart=/^\s+/;module.exports=function baseTrim(string){return string?string.slice(0,trimmedEndIndex(string)+1).replace(reTrimStart,""):string}},"./node_modules/lodash/_trimmedEndIndex.js":module=>{var reWhitespace=/\s/;module.exports=function trimmedEndIndex(string){for(var index=string.length;index--&&reWhitespace.test(string.charAt(index)););return index}},"./node_modules/lodash/debounce.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isObject=__webpack_require__("./node_modules/lodash/isObject.js"),now=__webpack_require__("./node_modules/lodash/now.js"),toNumber=__webpack_require__("./node_modules/lodash/toNumber.js"),nativeMax=Math.max,nativeMin=Math.min;module.exports=function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=!1,maxing=!1,trailing=!0;if("function"!=typeof func)throw new TypeError("Expected a function");function invokeFunc(time){var args=lastArgs,thisArg=lastThis;return lastArgs=lastThis=void 0,lastInvokeTime=time,result=func.apply(thisArg,args)}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime;return void 0===lastCallTime||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&time-lastInvokeTime>=maxWait}function timerExpired(){var time=now();if(shouldInvoke(time))return trailingEdge(time);timerId=setTimeout(timerExpired,function remainingWait(time){var timeWaiting=wait-(time-lastCallTime);return maxing?nativeMin(timeWaiting,maxWait-(time-lastInvokeTime)):timeWaiting}(time))}function trailingEdge(time){return timerId=void 0,trailing&&lastArgs?invokeFunc(time):(lastArgs=lastThis=void 0,result)}function debounced(){var time=now(),isInvoking=shouldInvoke(time);if(lastArgs=arguments,lastThis=this,lastCallTime=time,isInvoking){if(void 0===timerId)return function leadingEdge(time){return lastInvokeTime=time,timerId=setTimeout(timerExpired,wait),leading?invokeFunc(time):result}(lastCallTime);if(maxing)return clearTimeout(timerId),timerId=setTimeout(timerExpired,wait),invokeFunc(lastCallTime)}return void 0===timerId&&(timerId=setTimeout(timerExpired,wait)),result}return wait=toNumber(wait)||0,isObject(options)&&(leading=!!options.leading,maxWait=(maxing="maxWait"in options)?nativeMax(toNumber(options.maxWait)||0,wait):maxWait,trailing="trailing"in options?!!options.trailing:trailing),debounced.cancel=function cancel(){void 0!==timerId&&clearTimeout(timerId),lastInvokeTime=0,lastArgs=lastCallTime=lastThis=timerId=void 0},debounced.flush=function flush(){return void 0===timerId?result:trailingEdge(now())},debounced}},"./node_modules/lodash/now.js":(module,__unused_webpack_exports,__webpack_require__)=>{var root=__webpack_require__("./node_modules/lodash/_root.js");module.exports=function(){return root.Date.now()}},"./node_modules/lodash/toNumber.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseTrim=__webpack_require__("./node_modules/lodash/_baseTrim.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),isSymbol=__webpack_require__("./node_modules/lodash/isSymbol.js"),reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;module.exports=function toNumber(value){if("number"==typeof value)return value;if(isSymbol(value))return NaN;if(isObject(value)){var other="function"==typeof value.valueOf?value.valueOf():value;value=isObject(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NaN:+value}},"./node_modules/react-i18next/dist/es/withTranslation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>withTranslation});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_useTranslation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-i18next/dist/es/utils.js"),_excluded=["forwardedRef"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function withTranslation(ns){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function Extend(WrappedComponent){function I18nextWithTranslation(_ref){var forwardedRef=_ref.forwardedRef,rest=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded),_useTranslation=(0,_useTranslation__WEBPACK_IMPORTED_MODULE_3__.B)(ns,rest),_useTranslation2=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__.A)(_useTranslation,3),t=_useTranslation2[0],i18n=_useTranslation2[1],ready=_useTranslation2[2],passDownProps=_objectSpread(_objectSpread({},rest),{},{t,i18n,tReady:ready});return options.withRef&&forwardedRef?passDownProps.ref=forwardedRef:!options.withRef&&forwardedRef&&(passDownProps.forwardedRef=forwardedRef),react__WEBPACK_IMPORTED_MODULE_1__.createElement(WrappedComponent,passDownProps)}I18nextWithTranslation.displayName="withI18nextTranslation(".concat((0,_utils__WEBPACK_IMPORTED_MODULE_5__.Mn)(WrappedComponent),")"),I18nextWithTranslation.WrappedComponent=WrappedComponent;return options.withRef?react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function forwardRef(props,ref){return react__WEBPACK_IMPORTED_MODULE_1__.createElement(I18nextWithTranslation,Object.assign({},props,{forwardedRef:ref}))})):I18nextWithTranslation}}}}]);