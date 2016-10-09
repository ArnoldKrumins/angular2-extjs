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
var extpickerfieldMetaData = (function () {
    function extpickerfieldMetaData() {
    }
    extpickerfieldMetaData.XTYPE = 'pickerfield';
    extpickerfieldMetaData.INPUTNAMES = [
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
        'defaultPhonePickerConfig',
        'defaultTabletPickerConfig',
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
        'pickerSlotAlign',
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
        'usePicker',
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
    extpickerfieldMetaData.OUTPUTS = [
        { name: 'action', parameters: 'pickerfield,e' },
        { name: 'added', parameters: 'pickerfield,container,index' },
        { name: 'beforehide', parameters: 'pickerfield' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'pickerfield' },
        { name: 'beforetofront', parameters: 'pickerfield' },
        { name: 'blur', parameters: 'pickerfield,e' },
        { name: 'change', parameters: 'pickerfield,newValue,oldValue' },
        { name: 'clearicontap', parameters: 'pickerfield,input,e' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'pickerfield' },
        { name: 'floatingchange', parameters: 'pickerfield,positioned' },
        { name: 'focus', parameters: 'pickerfield,e' },
        { name: 'fullscreen', parameters: 'pickerfield' },
        { name: 'hide', parameters: 'pickerfield' },
        { name: 'initialize', parameters: 'pickerfield' },
        { name: 'keyup', parameters: 'pickerfield,e' },
        { name: 'mousedown', parameters: 'pickerfield,e' },
        { name: 'moved', parameters: 'pickerfield,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'paste', parameters: 'pickerfield,e' },
        { name: 'positionedchange', parameters: 'pickerfield,positioned' },
        { name: 'removed', parameters: 'pickerfield,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'pickerfield' },
        { name: 'tofront', parameters: 'pickerfield' },
        { name: 'updatedata', parameters: 'pickerfield,newData' },
        { name: 'ready', parameters: '' }
    ];
    extpickerfieldMetaData.OUTPUTNAMES = [
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
    return extpickerfieldMetaData;
}());
var extpickerfield = (function (_super) {
    __extends(extpickerfield, _super);
    function extpickerfield(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extpickerfieldMetaData);
    }
    extpickerfield.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extpickerfield.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extpickerfieldMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extpickerfield.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extpickerfield.prototype, "dynamicRef", void 0);
    extpickerfield = __decorate([
        core_1.Component({
            selector: 'ext-' + extpickerfieldMetaData.XTYPE,
            inputs: extpickerfieldMetaData.INPUTNAMES,
            outputs: extpickerfieldMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extpickerfield; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extpickerfield);
    return extpickerfield;
}(ext_base_1.extbase));
exports.extpickerfield = extpickerfield;
