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
var extd3_packMetaData = (function () {
    function extd3_packMetaData() {
    }
    extd3_packMetaData.XTYPE = 'd3-pack';
    extd3_packMetaData.INPUTNAMES = [
        'alwaysOnTop',
        'axisLock',
        'baseCls',
        'bind',
        'border',
        'bottom',
        'centered',
        'clipScene',
        'clipText',
        'cls',
        'colorAxis',
        'componentCls',
        'contentEl',
        'controller',
        'data',
        'defaultListenerScope',
        'disabled',
        'docked',
        'draggable',
        'enterAnimation',
        'exitAnimation',
        'expandEventName',
        'flex',
        'floated',
        'fullscreen',
        'height',
        'hidden',
        'hideAnimation',
        'hideOnMaskTap',
        'hierarchyCls',
        'html',
        'id',
        'itemId',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'layout',
        'left',
        'listeners',
        'margin',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'nodeChildren',
        'nodeClass',
        'nodeKey',
        'nodeText',
        'nodeTransform',
        'nodeValue',
        'noSizeLayout',
        'padding',
        'plugins',
        'publishes',
        'record',
        'reference',
        'relative',
        'renderLinks',
        'renderTo',
        'right',
        'rootVisible',
        'scrollable',
        'selectEventName',
        'selection',
        'session',
        'shadow',
        'shim',
        'showAnimation',
        'size',
        'sorter',
        'store',
        'style',
        'styleHtmlCls',
        'styleHtmlContent',
        'textPadding',
        'toFrontOnShow',
        'tooltip',
        'top',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'translatable',
        'twoWayBindable',
        'ui',
        'useBodyElement',
        'userCls',
        'viewModel',
        'width',
        'x',
        'xtype',
        'y',
        'zIndex',
        'fit',
        'config'
    ];
    extd3_packMetaData.OUTPUTS = [
        { name: 'added', parameters: 'd3-pack,container,index' },
        { name: 'beforehide', parameters: 'd3-pack' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeshow', parameters: 'd3-pack' },
        { name: 'beforetofront', parameters: 'd3-pack' },
        { name: 'destroy', parameters: '' },
        { name: 'erased', parameters: 'd3-pack' },
        { name: 'floatingchange', parameters: 'd3-pack,positioned' },
        { name: 'fullscreen', parameters: 'd3-pack' },
        { name: 'hide', parameters: 'd3-pack' },
        { name: 'initialize', parameters: 'd3-pack' },
        { name: 'moved', parameters: 'd3-pack,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'positionedchange', parameters: 'd3-pack,positioned' },
        { name: 'removed', parameters: 'd3-pack,container,index' },
        { name: 'resize', parameters: 'element' },
        { name: 'sceneresize', parameters: 'component,scene,size' },
        { name: 'scenesetup', parameters: 'component,scene' },
        { name: 'show', parameters: 'd3-pack' },
        { name: 'tofront', parameters: 'd3-pack' },
        { name: 'updatedata', parameters: 'd3-pack,newData' },
        { name: 'ready', parameters: '' }
    ];
    extd3_packMetaData.OUTPUTNAMES = [
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeshow',
        'beforetofront',
        'destroy',
        'erased',
        'floatingchange',
        'fullscreen',
        'hide',
        'initialize',
        'moved',
        'orientationchange',
        'painted',
        'positionedchange',
        'removed',
        'resize',
        'sceneresize',
        'scenesetup',
        'show',
        'tofront',
        'updatedata',
        'ready'
    ];
    return extd3_packMetaData;
}());
var extd3_pack = (function (_super) {
    __extends(extd3_pack, _super);
    function extd3_pack(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, extd3_packMetaData);
    }
    extd3_pack.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    extd3_pack.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, extd3_packMetaData); };
    __decorate([
        core_1.ContentChildren(ext_base_1.extbase, { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.QueryList)
    ], extd3_pack.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], extd3_pack.prototype, "dynamicRef", void 0);
    extd3_pack = __decorate([
        core_1.Component({
            selector: 'ext-' + extd3_packMetaData.XTYPE,
            inputs: extd3_packMetaData.INPUTNAMES,
            outputs: extd3_packMetaData.OUTPUTNAMES,
            providers: [{ provide: ext_base_1.extbase, useExisting: core_1.forwardRef(function () { return extd3_pack; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], extd3_pack);
    return extd3_pack;
}(ext_base_1.extbase));
exports.extd3_pack = extd3_pack;
