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
var x_base_1 = require('./x.base');
var xinputMetaData = (function () {
    function xinputMetaData() {
    }
    xinputMetaData.XTYPE = 'input';
    xinputMetaData.INPUTNAMES = [
        'alwaysOnTop',
        'autoCapitalize',
        'autoComplete',
        'autoCorrect',
        'axisLock',
        'baseCls',
        'bind',
        'border',
        'bottom',
        'centered',
        'checked',
        'cls',
        'contentEl',
        'controller',
        'data',
        'defaultListenerScope',
        'disabled',
        'docked',
        'draggable',
        'enterAnimation',
        'exitAnimation',
        'fastFocus',
        'flex',
        'floated',
        'fullscreen',
        'height',
        'hidden',
        'hideAnimation',
        'hideOnMaskTap',
        'html',
        'id',
        'isFocused',
        'itemId',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'left',
        'listeners',
        'margin',
        'maxHeight',
        'maxLength',
        'maxRows',
        'maxValue',
        'maxWidth',
        'minHeight',
        'minValue',
        'minWidth',
        'modal',
        'name',
        'originalValue',
        'padding',
        'pattern',
        'placeHolder',
        'plugins',
        'publishes',
        'readOnly',
        'record',
        'reference',
        'relative',
        'renderTo',
        'right',
        'scrollable',
        'session',
        'shadow',
        'shim',
        'showAnimation',
        'startValue',
        'stepValue',
        'style',
        'styleHtmlCls',
        'styleHtmlContent',
        'tabIndex',
        'toFrontOnShow',
        'tooltip',
        'top',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'translatable',
        'twoWayBindable',
        'type',
        'ui',
        'useBodyElement',
        'useMask',
        'userCls',
        'value',
        'viewModel',
        'width',
        'x',
        'xtype',
        'y',
        'zIndex',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    xinputMetaData.OUTPUTS = [
        { name: 'added', parameters: 'input,container,index' },
        { name: 'beforehide', parameters: 'input' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'input' },
        { name: 'beforetofront', parameters: 'input' },
        { name: 'blur', parameters: 'e' },
        { name: 'click', parameters: 'e' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'input' },
        { name: 'floatingchange', parameters: 'input,positioned' },
        { name: 'focus', parameters: 'e' },
        { name: 'fullscreen', parameters: 'input' },
        { name: 'hide', parameters: 'input' },
        { name: 'initialize', parameters: 'input' },
        { name: 'keyup', parameters: 'e' },
        { name: 'masktap', parameters: 'input,e' },
        { name: 'mousedown', parameters: 'e' },
        { name: 'moved', parameters: 'input,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'paste', parameters: 'e' },
        { name: 'positionedchange', parameters: 'input,positioned' },
        { name: 'removed', parameters: 'input,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'show', parameters: 'input' },
        { name: 'tofront', parameters: 'input' },
        { name: 'updatedata', parameters: 'input,newData' },
        { name: 'ready', parameters: '' }
    ];
    xinputMetaData.OUTPUTNAMES = [
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'blur',
        'click',
        'destroy',
        'erased',
        'floatingchange',
        'focus',
        'fullscreen',
        'hide',
        'initialize',
        'keyup',
        'masktap',
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
    return xinputMetaData;
}());
var xinput = (function (_super) {
    __extends(xinput, _super);
    function xinput(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xinputMetaData);
    }
    xinput.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xinput.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xinputMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xinput.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xinput.prototype, "dynamicRef", void 0);
    xinput = __decorate([
        core_1.Component({
            selector: 'x-' + xinputMetaData.XTYPE,
            inputs: xinputMetaData.INPUTNAMES,
            outputs: xinputMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xinput; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xinput);
    return xinput;
}(x_base_1.xbase));
exports.xinput = xinput;
