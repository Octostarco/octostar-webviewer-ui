"use strict";(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[2711],{"./src/components/ModularComponents/FloatingHeader/Stories/HeadersInApp.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllHeaders:()=>AllHeaders,BottomAndLeftHeaders:()=>BottomAndLeftHeaders,BottomAndRightHeaders:()=>BottomAndRightHeaders,BottomCenterAndLeftHeaders:()=>BottomCenterAndLeftHeaders,BottomCenterAndRightHeaders:()=>BottomCenterAndRightHeaders,FloatiesWithOpacityLevels:()=>FloatiesWithOpacityLevels,FloatingOnAllSides:()=>FloatingOnAllSides,TopAndBottomHeaders:()=>TopAndBottomHeaders,TopAndLeftHeaders:()=>TopAndLeftHeaders,TopAndRightHeaders:()=>TopAndRightHeaders,TopCenterAndLeftHeaders:()=>TopCenterAndLeftHeaders,TopCenterAndRightHeaders:()=>TopCenterAndRightHeaders,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),components_App__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/App/index.js"),src_redux_initialState__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/redux/initialState.js"),_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ModularComponents/Helpers/mockHeaders.js"),helpers_storybookHelper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/helpers/storybookHelper.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}const __WEBPACK_DEFAULT_EXPORT__={title:"ModularComponents/FloatingHeader/App",component:components_App__WEBPACK_IMPORTED_MODULE_1__.A,parameters:{customizableUI:!0}};var Template=function(args){var stateWithHeaders=_object_spread_props(_object_spread({},src_redux_initialState__WEBPACK_IMPORTED_MODULE_2__.A),{viewer:_object_spread_props(_object_spread({},src_redux_initialState__WEBPACK_IMPORTED_MODULE_2__.A.viewer),{modularHeaders:args.headers,modularComponents:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.j2,openElements:{}}),featureFlags:{customizableUI:!0}});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(helpers_storybookHelper__WEBPACK_IMPORTED_MODULE_4__.os,{initialState:stateWithHeaders})};function createTemplate(headers){var template=Template.bind({});return template.args={headers},template.parameters={layout:"fullscreen",chromatic:{disableSnapshot:!0}},template}var TopAndLeftHeaders=createTemplate({defaultLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.Sd,secondFloatStartLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.jM,floatStartLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.jA,floatCenterLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.OS,floatEndLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.S1,defaultTopHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.yc,floatStartHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.w6,secondFloatStartHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.wo,floatCenterHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.jx,floatEndHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.zG}),TopCenterAndLeftHeaders=createTemplate({defaultLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.Sd,secondFloatStartLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.jM,floatStartLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.jA,floatCenterLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.OS,floatEndLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.S1,defaultTopHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.yc,floatCenterHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.jx,floatEndHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.zG}),TopAndRightHeaders=createTemplate({defaultRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.$9,secondFloatStartRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.mp,floatStartRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.EO,floatCenterRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.Nz,floatEndRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.tM,defaultTopHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.yc,floatStartHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.w6,secondFloatStartHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.wo,floatCenterHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.jx,floatEndHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.zG}),TopCenterAndRightHeaders=createTemplate({defaultRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.$9,secondFloatStartRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.mp,floatStartRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.EO,floatCenterRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.Nz,floatEndRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.tM,defaultTopHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.yc,floatCenterHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.jx}),BottomAndLeftHeaders=createTemplate({defaultLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.Sd,secondFloatStartLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.jM,floatStartLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.jA,floatCenterLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.OS,floatEndLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.S1,defaultBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.Om,floatStartBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.lU,secondFloatStartBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.hq,floatCenterBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.WR,floatEndBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.fR}),BottomCenterAndLeftHeaders=createTemplate({defaultLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.Sd,secondFloatStartLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.jM,floatStartLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.jA,floatCenterLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.OS,floatEndLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.S1,defaultBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.Om,floatCenterBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.WR,floatEndBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.fR}),BottomAndRightHeaders=createTemplate({defaultRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.$9,secondFloatStartRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.mp,floatStartRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.EO,floatCenterRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.Nz,floatEndRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.tM,defaultBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.Om,floatStartBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.lU,secondFloatStartBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.hq,floatCenterBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.WR,floatEndBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.fR}),BottomCenterAndRightHeaders=createTemplate({defaultRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.$9,secondFloatStartRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.mp,floatStartRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.EO,floatCenterRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.Nz,floatEndRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.tM,defaultBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.Om,floatCenterBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.WR}),TopAndBottomHeaders=createTemplate({defaultBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.Om,floatStartBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.lU,secondFloatStartBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.hq,floatCenterBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.WR,floatEndBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.fR,defaultTopHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.yc,floatStartHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.w6,secondFloatStartHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.wo,floatCenterHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.jx,floatEndHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.zG}),FloatingOnAllSides=createTemplate({floatStartHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.w6,secondFloatStartHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.wo,floatCenterHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.jx,floatEndHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.zG,floatStartLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.jA,secondFloatStartLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.jM,floatCenterLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.OS,floatEndLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.S1,floatStartRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.EO,secondFloatStartRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.mp,floatCenterRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.Nz,floatEndRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.tM,floatStartBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.lU,secondFloatStartBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.hq,floatCenterBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.WR,floatEndBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.fR}),FloatiesWithOpacityLevels=createTemplate({floatStarTopHeaderStatic:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.xF,floatCenterTopHeaderDynamic:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.TU,floatEndTopHeaderNone:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.Qo}),AllHeaders=createTemplate({defaultTopHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.yc,floatStartHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.w6,secondFloatStartHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.wo,floatCenterHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.jx,floatEndHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.zG,defaultLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.Sd,floatStartLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.jA,secondFloatStartLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.jM,floatCenterLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.OS,floatEndLeftHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.S1,defaultRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.$9,floatStartRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.EO,secondFloatStartRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.mp,floatCenterRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.Nz,floatEndRightHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.tM,defaultBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.Om,floatStartBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.lU,secondFloatStartBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.hq,floatCenterBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.WR,floatEndBottomHeader:_Helpers_mockHeaders__WEBPACK_IMPORTED_MODULE_3__.fR});TopAndLeftHeaders.parameters={...TopAndLeftHeaders.parameters,docs:{...TopAndLeftHeaders.parameters?.docs,source:{originalSource:"createTemplate({\n  defaultLeftHeader,\n  secondFloatStartLeftHeader,\n  floatStartLeftHeader,\n  floatCenterLeftHeader,\n  floatEndLeftHeader,\n  defaultTopHeader,\n  floatStartHeader,\n  secondFloatStartHeader,\n  floatCenterHeader,\n  floatEndHeader\n})",...TopAndLeftHeaders.parameters?.docs?.source}}},TopCenterAndLeftHeaders.parameters={...TopCenterAndLeftHeaders.parameters,docs:{...TopCenterAndLeftHeaders.parameters?.docs,source:{originalSource:"createTemplate({\n  defaultLeftHeader,\n  secondFloatStartLeftHeader,\n  floatStartLeftHeader,\n  floatCenterLeftHeader,\n  floatEndLeftHeader,\n  defaultTopHeader,\n  floatCenterHeader,\n  floatEndHeader\n})",...TopCenterAndLeftHeaders.parameters?.docs?.source}}},TopAndRightHeaders.parameters={...TopAndRightHeaders.parameters,docs:{...TopAndRightHeaders.parameters?.docs,source:{originalSource:"createTemplate({\n  defaultRightHeader,\n  secondFloatStartRightHeader,\n  floatStartRightHeader,\n  floatCenterRightHeader,\n  floatEndRightHeader,\n  defaultTopHeader,\n  floatStartHeader,\n  secondFloatStartHeader,\n  floatCenterHeader,\n  floatEndHeader\n})",...TopAndRightHeaders.parameters?.docs?.source}}},TopCenterAndRightHeaders.parameters={...TopCenterAndRightHeaders.parameters,docs:{...TopCenterAndRightHeaders.parameters?.docs,source:{originalSource:"createTemplate({\n  defaultRightHeader,\n  secondFloatStartRightHeader,\n  floatStartRightHeader,\n  floatCenterRightHeader,\n  floatEndRightHeader,\n  defaultTopHeader,\n  floatCenterHeader\n})",...TopCenterAndRightHeaders.parameters?.docs?.source}}},BottomAndLeftHeaders.parameters={...BottomAndLeftHeaders.parameters,docs:{...BottomAndLeftHeaders.parameters?.docs,source:{originalSource:"createTemplate({\n  defaultLeftHeader,\n  secondFloatStartLeftHeader,\n  floatStartLeftHeader,\n  floatCenterLeftHeader,\n  floatEndLeftHeader,\n  defaultBottomHeader,\n  floatStartBottomHeader,\n  secondFloatStartBottomHeader,\n  floatCenterBottomHeader,\n  floatEndBottomHeader\n})",...BottomAndLeftHeaders.parameters?.docs?.source}}},BottomCenterAndLeftHeaders.parameters={...BottomCenterAndLeftHeaders.parameters,docs:{...BottomCenterAndLeftHeaders.parameters?.docs,source:{originalSource:"createTemplate({\n  defaultLeftHeader,\n  secondFloatStartLeftHeader,\n  floatStartLeftHeader,\n  floatCenterLeftHeader,\n  floatEndLeftHeader,\n  defaultBottomHeader,\n  floatCenterBottomHeader,\n  floatEndBottomHeader\n})",...BottomCenterAndLeftHeaders.parameters?.docs?.source}}},BottomAndRightHeaders.parameters={...BottomAndRightHeaders.parameters,docs:{...BottomAndRightHeaders.parameters?.docs,source:{originalSource:"createTemplate({\n  defaultRightHeader,\n  secondFloatStartRightHeader,\n  floatStartRightHeader,\n  floatCenterRightHeader,\n  floatEndRightHeader,\n  defaultBottomHeader,\n  floatStartBottomHeader,\n  secondFloatStartBottomHeader,\n  floatCenterBottomHeader,\n  floatEndBottomHeader\n})",...BottomAndRightHeaders.parameters?.docs?.source}}},BottomCenterAndRightHeaders.parameters={...BottomCenterAndRightHeaders.parameters,docs:{...BottomCenterAndRightHeaders.parameters?.docs,source:{originalSource:"createTemplate({\n  defaultRightHeader,\n  secondFloatStartRightHeader,\n  floatStartRightHeader,\n  floatCenterRightHeader,\n  floatEndRightHeader,\n  defaultBottomHeader,\n  floatCenterBottomHeader\n})",...BottomCenterAndRightHeaders.parameters?.docs?.source}}},TopAndBottomHeaders.parameters={...TopAndBottomHeaders.parameters,docs:{...TopAndBottomHeaders.parameters?.docs,source:{originalSource:"createTemplate({\n  defaultBottomHeader,\n  floatStartBottomHeader,\n  secondFloatStartBottomHeader,\n  floatCenterBottomHeader,\n  floatEndBottomHeader,\n  defaultTopHeader,\n  floatStartHeader,\n  secondFloatStartHeader,\n  floatCenterHeader,\n  floatEndHeader\n})",...TopAndBottomHeaders.parameters?.docs?.source}}},FloatingOnAllSides.parameters={...FloatingOnAllSides.parameters,docs:{...FloatingOnAllSides.parameters?.docs,source:{originalSource:"createTemplate({\n  floatStartHeader,\n  secondFloatStartHeader,\n  floatCenterHeader,\n  floatEndHeader,\n  floatStartLeftHeader,\n  secondFloatStartLeftHeader,\n  floatCenterLeftHeader,\n  floatEndLeftHeader,\n  floatStartRightHeader,\n  secondFloatStartRightHeader,\n  floatCenterRightHeader,\n  floatEndRightHeader,\n  floatStartBottomHeader,\n  secondFloatStartBottomHeader,\n  floatCenterBottomHeader,\n  floatEndBottomHeader\n})",...FloatingOnAllSides.parameters?.docs?.source}}},FloatiesWithOpacityLevels.parameters={...FloatiesWithOpacityLevels.parameters,docs:{...FloatiesWithOpacityLevels.parameters?.docs,source:{originalSource:"createTemplate({\n  floatStarTopHeaderStatic,\n  floatCenterTopHeaderDynamic,\n  floatEndTopHeaderNone\n})",...FloatiesWithOpacityLevels.parameters?.docs?.source}}},AllHeaders.parameters={...AllHeaders.parameters,docs:{...AllHeaders.parameters?.docs,source:{originalSource:"createTemplate({\n  defaultTopHeader,\n  floatStartHeader,\n  secondFloatStartHeader,\n  floatCenterHeader,\n  floatEndHeader,\n  defaultLeftHeader,\n  floatStartLeftHeader,\n  secondFloatStartLeftHeader,\n  floatCenterLeftHeader,\n  floatEndLeftHeader,\n  defaultRightHeader,\n  floatStartRightHeader,\n  secondFloatStartRightHeader,\n  floatCenterRightHeader,\n  floatEndRightHeader,\n  defaultBottomHeader,\n  floatStartBottomHeader,\n  secondFloatStartBottomHeader,\n  floatCenterBottomHeader,\n  floatEndBottomHeader\n})",...AllHeaders.parameters?.docs?.source}}};const __namedExportsOrder=["TopAndLeftHeaders","TopCenterAndLeftHeaders","TopAndRightHeaders","TopCenterAndRightHeaders","BottomAndLeftHeaders","BottomCenterAndLeftHeaders","BottomAndRightHeaders","BottomCenterAndRightHeaders","TopAndBottomHeaders","FloatingOnAllSides","FloatiesWithOpacityLevels","AllHeaders"]},"./src/components/ModularComponents/Helpers/mockHeaders.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}__webpack_require__.d(__webpack_exports__,{$9:()=>defaultRightHeader,EO:()=>floatStartRightHeader,G5:()=>button7,GK:()=>button9,GZ:()=>button3,Nm:()=>button6,Nz:()=>floatCenterRightHeader,OS:()=>floatCenterLeftHeader,Om:()=>defaultBottomHeader,PE:()=>button4,Qo:()=>floatEndTopHeaderNone,S1:()=>floatEndLeftHeader,Sd:()=>defaultLeftHeader,TU:()=>floatCenterTopHeaderDynamic,Ud:()=>button1,WR:()=>floatCenterBottomHeader,Wg:()=>button5,fR:()=>floatEndBottomHeader,hq:()=>secondFloatStartBottomHeader,j2:()=>mockModularComponents,jA:()=>floatStartLeftHeader,jM:()=>secondFloatStartLeftHeader,jx:()=>floatCenterHeader,lU:()=>floatStartBottomHeader,mp:()=>secondFloatStartRightHeader,tM:()=>floatEndRightHeader,w6:()=>floatStartHeader,wo:()=>secondFloatStartHeader,xF:()=>floatStarTopHeaderStatic,yc:()=>defaultTopHeader,z8:()=>button8,zG:()=>floatEndHeader,zl:()=>button2});var baseButton={dataElement:"button",onClick:function(){return alert("Added")},disabled:!1,title:"Button 1",label:"Add",type:"customButton"},button1=_object_spread_props(_object_spread({},baseButton),{dataElement:"button1",label:"Button 1"}),button2=_object_spread_props(_object_spread({},baseButton),{dataElement:"button2",label:"Button 2"}),button3=_object_spread_props(_object_spread({},baseButton),{dataElement:"button3",label:"Button 3"}),button4=_object_spread_props(_object_spread({},baseButton),{dataElement:"button4",label:"Button 4"}),button5=_object_spread_props(_object_spread({},baseButton),{dataElement:"button5",label:"Button 5"}),button6=_object_spread_props(_object_spread({},baseButton),{dataElement:"button6",label:"Button 6"}),button7=_object_spread_props(_object_spread({},baseButton),{dataElement:"button7",label:"Button 7"}),button8=_object_spread_props(_object_spread({},baseButton),{dataElement:"button8",label:"Button 8"}),button9=_object_spread_props(_object_spread({},baseButton),{dataElement:"button9",label:"Button 9"}),defaultTopHeader={dataElement:"defaultHeader",placement:"top",gap:20,items:["button1","button2","divider","button3"]},floatStartHeader={dataElement:"floatStartHeader",placement:"top",float:!0,position:"start",items:["button1","button2"],gap:20},secondFloatStartHeader={dataElement:"floatStartHeader-2",placement:"top",float:!0,position:"start",items:["button3","button4"],gap:20},floatCenterHeader={dataElement:"floatCenterHeader",placement:"top",float:!0,position:"center",items:["button5","divider","button6"],gap:20},floatEndHeader={dataElement:"floatEndHeader",placement:"top",float:!0,position:"end",items:["button7","divider","button8","button9"],gap:20},defaultLeftHeader={dataElement:"defaultHeader",placement:"left",gap:20,items:["button1","button2","divider","button3"]},floatStartLeftHeader={dataElement:"floatStartLeftHeader",placement:"left",float:!0,position:"start",items:["button3","button4","leftPanelToggle"],gap:20},secondFloatStartLeftHeader={dataElement:"secondFloatLeftBottomHeader",placement:"left",float:!0,position:"start",items:["button5","button6"],gap:20},floatCenterLeftHeader={dataElement:"floatCenterLeftHeader",placement:"left",float:!0,position:"center",items:["button1","button2"],gap:20},floatEndLeftHeader={dataElement:"floatEndLeftHeader",placement:"left",float:!0,position:"end",items:["button7","button8","divider","button9"],gap:20},defaultRightHeader={dataElement:"defaultHeader",placement:"right",gap:20,items:["button1","button2","divider","button3"]},floatStartRightHeader={dataElement:"floatStartRightHeader",placement:"right",float:!0,position:"start",items:["button3","button4","notesPanelToggle"],gap:20},secondFloatStartRightHeader={dataElement:"secondFloatRightBottomHeader",placement:"right",float:!0,position:"start",items:["button5","button6"],gap:20},floatCenterRightHeader={dataElement:"floatCenterRightHeader",placement:"right",float:!0,position:"center",items:["button1","button2"],gap:20},floatEndRightHeader={dataElement:"floatEndRightHeader",placement:"right",float:!0,position:"end",items:["button7","button8","divider","button9"],gap:20},defaultBottomHeader={dataElement:"defaultBottomHeader",placement:"bottom",gap:20,items:["button1","button2","divider","button3"],getDimensionTotal:function(){return 32}},floatStartBottomHeader={dataElement:"floatStartBottomHeader",placement:"bottom",float:!0,position:"start",items:["button3","button4"],gap:20},secondFloatStartBottomHeader={dataElement:"secondFloatStartBottomHeader",placement:"bottom",float:!0,position:"start",items:["button5","button6"],gap:20},floatCenterBottomHeader={dataElement:"floatCenterBottomHeader",placement:"bottom",float:!0,position:"center",items:["button1","button2"],gap:20},floatEndBottomHeader={dataElement:"floatEndBottomHeader",placement:"bottom",float:!0,position:"end",items:["button7","button8","divider","button9"],gap:20},floatStarTopHeaderStatic={dataElement:"floatStarTopHeaderStatic",placement:"top",float:!0,position:"start",items:["button1","button2"],opacityMode:"static",opacity:"full"},floatCenterTopHeaderDynamic={dataElement:"floatStarTopHeaderDynamic",placement:"top",float:!0,position:"center",items:["button1","button2"],opacityMode:"dynamic",opacity:"low"},floatEndTopHeaderNone={dataElement:"floatStarTopHeaderNone",placement:"top",float:!0,position:"end",items:["button1","button2"],opacityMode:"dynamic",opacity:"none"},mockModularComponents={button1,button2,button3,button4,button5,button6,button7,button8,button9,divider:{type:"divider",dataElement:"divider-1"},leftPanelToggle:{dataElement:"leftPanelToggle",toggleElement:"leftPanel",disabled:!1,title:"Left Panel",img:"icon-header-sidebar-line",type:"toggleButton"},notesPanelToggle:{dataElement:"notesPanelToggle",toggleElement:"notesPanel",disabled:!1,title:"Notes Panel",img:"icon-header-chat-line",type:"toggleButton"}}},"./src/helpers/storybookHelper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xu:()=>createTemplate,os:()=>MockApp,y$:()=>createStore});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-redux/es/index.js"),_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),prop_types__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__),components_App__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/App/index.js"),reducers_rootReducer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/redux/reducers/rootReducer.js"),src_redux_initialState__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/redux/initialState.js"),src_redux_modularComponents__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/redux/modularComponents.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}var noop=function(){},createStore=function(preloadedState){return(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_6__.U1)({reducer:reducers_rootReducer__WEBPACK_IMPORTED_MODULE_3__.A,preloadedState,middleware:function(getDefaultMiddleware){return getDefaultMiddleware({serializableCheck:!1})}})},MockApp=function(param){var initialState=param.initialState;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Kq,{store:createStore(initialState)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_App__WEBPACK_IMPORTED_MODULE_2__.A,{removeEventHandlers:noop}))};MockApp.propTypes={initialState:prop_types__WEBPACK_IMPORTED_MODULE_7___default().object.isRequired};var BasicAppTemplate=function(args){var isMultiTab=(null==args?void 0:args.isMultiTab)||!1,stateWithHeaders=_object_spread_props(_object_spread({},src_redux_initialState__WEBPACK_IMPORTED_MODULE_4__.A),{viewer:_object_spread_props(_object_spread({},src_redux_initialState__WEBPACK_IMPORTED_MODULE_4__.A.viewer),{modularHeaders:args.headers,modularComponents:args.components,flyoutMap:args.flyoutMap,openElements:{},genericPanels:src_redux_modularComponents__WEBPACK_IMPORTED_MODULE_5__.$d,activeGroupedItems:["annotateGroupedItems"],lastPickedToolForGroupedItems:{annotateGroupedItems:"AnnotationCreateTextUnderline"},activeCustomRibbon:"annotations-ribbon-item",lastPickedToolAndGroup:{tool:"AnnotationCreateTextUnderline",group:["annotateGroupedItems"]},activeToolName:"AnnotationCreateTextUnderline",isMultiTab,tabs:isMultiTab?[{id:1,src:"file1.pdf",options:{filename:"Title A.pdf"}},{id:2,src:"file2.docx",options:{filename:"Title B.docx"}},{id:3,src:"file3.pptx",options:{filename:"Selected Document.pptx"}}]:[],activeTab:3}),featureFlags:{customizableUI:!0}});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(MockApp,{initialState:stateWithHeaders})},createTemplate=function(param){var _param_headers=param.headers,headers=void 0===_param_headers?{}:_param_headers,_param_components=param.components,components=void 0===_param_components?{}:_param_components,_param_flyoutMap=param.flyoutMap,flyoutMap=void 0===_param_flyoutMap?{}:_param_flyoutMap,_param_isMultiTab=param.isMultiTab,isMultiTab=void 0!==_param_isMultiTab&&_param_isMultiTab,template=BasicAppTemplate.bind({});return template.args={headers,components,flyoutMap,isMultiTab},template.parameters={layout:"fullscreen",customizableUI:!0},template};MockApp.__docgenInfo={description:"",methods:[],displayName:"MockApp",props:{initialState:{description:"",type:{name:"object"},required:!0}}}}}]);