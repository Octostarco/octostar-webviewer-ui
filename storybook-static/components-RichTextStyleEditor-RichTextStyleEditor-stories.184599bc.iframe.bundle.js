"use strict";(self.webpackChunkwebviewer_ui=self.webpackChunkwebviewer_ui||[]).push([[615],{"./src/components/RichTextStyleEditor/RichTextStyleEditor.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),src_redux_initialState__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/redux/initialState.js"),react_redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-redux/es/index.js"),_RichTextStyleEditor__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/RichTextStyleEditor/RichTextStyleEditor.js"),_Panel__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Panel/index.js"),helpers_initialColorStates__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__("./src/components/StylePicker/StylePicker.scss"),__webpack_require__("./src/helpers/initialColorStates.js"));function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/RichTextStyleEditor",component:_RichTextStyleEditor__WEBPACK_IMPORTED_MODULE_3__.A};var state=function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},src_redux_initialState__WEBPACK_IMPORTED_MODULE_1__.A),{viewer:{openElements:{watermarkPanel:!0,stylePopup:!0,stylePanel:!0,stylePopupTextStyleContainer:!0,stylePopupColorsContainer:!0,stylePopupLabelTextContainer:!0,panel:!0,header:!0},selectedScale:void 0,colorMap:{textField:{currentStyleTab:"StrokeColor",iconColor:"StrokeColor"}},fonts:["Helvetica","Times New Roman","Arimo"],isSnapModeEnabled:!1,customElementOverrides:{},panelWidths:{panel:264},colors:["#fdac0f","#fa9933","#f34747","#21905b","#c531a4","#e5631a","#3e5ece","#dc9814","#c27727","#b11c1c","#13558c","#76287b","#347842","#318f29","#ffffff","#cdcdcd","#9c9c9c","#696969","#272727","#000000"],textColors:helpers_initialColorStates__WEBPACK_IMPORTED_MODULE_6__.k,toolColorOverrides:{},disabledElements:{logoBar:{disabled:!0}},sortStrategy:"position",isInDesktopOnlyMode:!0,modularHeaders:{}}}),noop=function(){},store=(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__.U1)({reducer:function(){return state}}),Basic=function(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Kq,{store},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Panel__WEBPACK_IMPORTED_MODULE_4__.A,{dataElement:"panel",location:"left"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"StylePicker"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RichTextStyleEditor__WEBPACK_IMPORTED_MODULE_3__.A,props))))}.bind({annotation:"",editor:{},style:{},isFreeTextAutoSize:!1,onFreeTextSizeToggle:function(){},onPropertyChange:function(){},onRichTextStyleChange:function(){}});Basic.args={currentStyleTab:"StrokeColor",isInFormBuilderAndNotFreeText:!0,style:{FillColor:new window.Core.Annotations.Color(212,211,211),StrokeColor:new window.Core.Annotations.Color(0,0,0),TextColor:new window.Core.Annotations.Color(0,0,0),Opacity:null,StrokeThickness:1,FontSize:"12pt",Style:"solid"},colorMapKey:"textField",colorPalette:"StrokeColor",disableSeparator:!0,hideSnapModeCheckbox:!0,isFreeText:!1,isEllipse:!1,isTextStyleContainerActive:!0,isLabelTextContainerActive:!0,properties:{StrokeStyle:"solid"},isRedaction:!1,fonts:["Helvetica","Times New Roman","Arimo"],isSnapModeEnabled:!1,onSliderChange:noop,onStyleChange:noop,closeElement:noop,openElement:noop,onPropertyChange:noop,onRichTextStyleChange:noop,onLineStyleChange:noop},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"BasicComponent.bind({\n  annotation: '',\n  editor: {},\n  style: {},\n  isFreeTextAutoSize: false,\n  onFreeTextSizeToggle: () => {},\n  onPropertyChange: () => {},\n  onRichTextStyleChange: () => {}\n})",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./src/components/Panel/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _Panel__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Panel/Panel.js");const __WEBPACK_DEFAULT_EXPORT__=_Panel__WEBPACK_IMPORTED_MODULE_0__.A;_Panel__WEBPACK_IMPORTED_MODULE_0__.A.__docgenInfo={description:"",methods:[],displayName:"Panel",props:{children:{description:"",type:{name:"node"},required:!1},isCustom:{description:"",type:{name:"bool"},required:!1},dataElement:{description:"",type:{name:"string"},required:!1},location:{description:"",type:{name:"string"},required:!1}}}}}]);