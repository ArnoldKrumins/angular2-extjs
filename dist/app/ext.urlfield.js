"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ext_base_1 = require('./ext.base');
var exturlfieldMetaData = (function () {
    function exturlfieldMetaData() {
    }
    exturlfieldMetaData.XTYPE = 'urlfield';
    exturlfieldMetaData.INPUTNAMES = [
        'alwaysOnTop',
        'autoCapitalize',
        'autoComplete',
        'autoCorrect',
        'axisLock',
        'baseCls',
        'bind',
        'bodyAlign',
        'border',
        'bottom',
        'centered',
        'clearIcon',
        'cls',
        'component',
        'contentEl',
        'controller',
        'data',
        'defaultListenerScope',
        'disabled',
        'docked',
        'draggable',
        'enterAnimation',
        'exitAnimation',
        'flex',
        'floated',
        'fullscreen',
        'height',
        'hidden',
        'hideAnimation',
        'hideOnMaskTap',
        'html',
        'id',
        'inputCls',
        'inputType',
        'isFocused',
        'itemId',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'label',
        'labelAlign',
        'labelCls',
        'labelTextAlign',
        'labelWidth',
        'labelWrap',
        'left',
        'listeners',
        'margin',
        'maxHeight',
        'maxLength',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'name',
        'padding',
        'placeHolder',
        'plugins',
        'publishes',
        'readOnly',
        'record',
        'reference',
        'relative',
        'renderTo',
        'required',
        'right',
        'scrollable',
        'session',
        'shadow',
        'shim',
        'showAnimation',
        'style',
        'styleHtmlCls',
        'styleHtmlContent',
        'tabIndex',
        'textAlign',
        'toFrontOnShow',
        'tooltip',
        'top',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'translatable',
        'triggers',
        'twoWayBindable',
        'ui',
        'useBodyElement',
        'userCls',
        'value',
        'viewModel',
        'width',
        'x',
        'xtype',
        'y',
        'zIndex',
        'fit',
        'config'
    ];
    exturlfieldMetaData.OUTPUTS = [
        { name: 'action', parameters: 'urlfield,e' },
        { name: 'added', parameters: 'urlfield,container,index' },
        { name: 'beforehide', parameters: 'urlfield' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'urlfield' },
        { name: 'beforetofront', parameters: 'urlfield' },
        { name: 'blur', parameters: 'urlfield,e' },
        { name: 'change', parameters: 'urlfield,newValue,oldValue' },
        { name: 'clearicontap', parameters: 'urlfield,input,e' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'urlfield' },
        { name: 'floatingchange', parameters: 'urlfield,positioned' },
        { name: 'focus', parameters: 'urlfield,e' },
        { name: 'fullscreen', parameters: 'urlfield' },
        { name: 'hide', parameters: 'urlfield' },
        { name: 'initialize', parameters: 'urlfield' },
        { name: 'keyup', parameters: 'urlfield,e' },
        { name: 'mousedown', parameters: 'urlfield,e' },
        { name: 'moved', parameters: 'urlfield,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'paste', parameters: 'urlfield,e' },
        { name: 'positionedchange', parameters: 'urlfield,positioned' },
        { name: 'removed', parameters: 'urlfield,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'urlfield' },
        { name: 'tofront', parameters: 'urlfield' },
        { name: 'updatedata', parameters: 'urlfield,newData' },
        { name: 'ready', parameters: '' }
    ];
    exturlfieldMetaData.OUTPUTNAMES = [
        'action',
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'blur',
        'change',
        'clearicontap',
        'destroy',
        'erased',
        'floatingchange',
        'focus',
        'fullscreen',
        'hide',
        'initialize',
        'keyup',
        'mousedown',
        'moved',
        'orientationchange',
        'painted',
        'paste',
        'positionedchange',
        'removed',
        'resize',
        'show',
        'tofront',
        'updatedata',
        'ready'
    ];
    return exturlfieldMetaData;
}());
var exturlfield = (function (_super) {
    __extends(exturlfield, _super);
    function exturlfield(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, exturlfieldMetaData);
    }
    exturlfield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    exturlfield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, exturlfieldMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], exturlfield.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], exturlfield.prototype, "dynamicRef", void 0);
    exturlfield = __decorate([
        core_1.Component({
            selector: 'ext-' + exturlfieldMetaData.XTYPE,
            inputs: exturlfieldMetaData.INPUTNAMES,
            outputs: exturlfieldMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return exturlfield; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], exturlfield);
    return exturlfield;
}(ext_base_1.extbase));
exports.exturlfield = exturlfield;
