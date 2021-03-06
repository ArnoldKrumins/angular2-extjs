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
var xpivotgridMetaData = (function () {
    function xpivotgridMetaData() {
    }
    xpivotgridMetaData.XTYPE = 'pivotgrid';
    xpivotgridMetaData.INPUTNAMES = [
        'activeItem',
        'allowDeselect',
        'alwaysOnTop',
        'autoDestroy',
        'axisLock',
        'baseCls',
        'bind',
        'border',
        'bottom',
        'bufferSize',
        'cardSwitchAnimation',
        'centered',
        'cls',
        'clsGrandTotal',
        'clsGroupTotal',
        'columns',
        'container',
        'contentEl',
        'control',
        'controller',
        'data',
        'defaultListenerScope',
        'defaults',
        'defaultType',
        'deferEmptyText',
        'deselectOnContainerClick',
        'disabled',
        'disableSelection',
        'disclosureProperty',
        'docked',
        'draggable',
        'emptyText',
        'enableColumnSort',
        'enableLoadMask',
        'enterAnimation',
        'exitAnimation',
        'flex',
        'floated',
        'fullscreen',
        'grouped',
        'height',
        'hidden',
        'hideAnimation',
        'hideHeaders',
        'hideOnMaskTap',
        'html',
        'id',
        'indexBar',
        'infinite',
        'inline',
        'itemCls',
        'itemConfig',
        'itemHeight',
        'itemId',
        'itemMap',
        'items',
        'itemTpl',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'lastFocused',
        'lastSelected',
        'layout',
        'left',
        'leftAxisCellConfig',
        'listeners',
        'loadingText',
        'locked',
        'manageBorders',
        'margin',
        'masked',
        'matrix',
        'maxHeight',
        'maxItemCache',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'mode',
        'onItemDisclosure',
        'padding',
        'pinHeaders',
        'pinnedHeader',
        'plugins',
        'pressedDelay',
        'preventSelectionOnDisclose',
        'publishes',
        'record',
        'reference',
        'referenceHolder',
        'refreshHeightOnUpdate',
        'relative',
        'renderTo',
        'right',
        'rowLines',
        'scrollable',
        'scrollDock',
        'scrollToTopOnRefresh',
        'selection',
        'session',
        'shadow',
        'shim',
        'showAnimation',
        'startColGroupsCollapsed',
        'startRowGroupsCollapsed',
        'store',
        'striped',
        'style',
        'styleHtmlCls',
        'styleHtmlContent',
        'title',
        'toFrontOnShow',
        'tooltip',
        'top',
        'topAxisCellConfig',
        'totalColumnWidth',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'translatable',
        'triggerCtEvent',
        'triggerEvent',
        'twoWayBindable',
        'ui',
        'useBodyElement',
        'useComponents',
        'userCls',
        'useSimpleItems',
        'variableHeights',
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
    xpivotgridMetaData.OUTPUTS = [
        { name: 'activate', parameters: 'newActiveItem,pivotgrid,oldActiveItem' },
        { name: 'add', parameters: '' },
        { name: 'added', parameters: 'pivotgrid,container,index' },
        { name: 'beforehide', parameters: 'pivotgrid' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforeselectionchange', parameters: 'pivotgrid' },
        { name: 'beforeshow', parameters: 'pivotgrid' },
        { name: 'beforetofront', parameters: 'pivotgrid' },
        { name: 'columnadd', parameters: 'pivotgrid,column,index' },
        { name: 'columnhide', parameters: 'pivotgrid,column' },
        { name: 'columnmove', parameters: 'pivotgrid,column,fromIndex,toIndex' },
        { name: 'columnremove', parameters: 'pivotgrid,column' },
        { name: 'columnresize', parameters: 'pivotgrid,column,width' },
        { name: 'columnshow', parameters: 'pivotgrid,column' },
        { name: 'columnsort', parameters: 'pivotgrid,column,direction' },
        { name: 'containertap', parameters: '' },
        { name: 'deactivate', parameters: 'oldActiveItem,pivotgrid,newActiveItem' },
        { name: 'deselect', parameters: 'pivotgrid,record,supressed' },
        { name: 'destroy', parameters: '' },
        { name: 'disclose', parameters: 'pivotgrid,record,target,index,e' },
        { name: 'erased', parameters: 'pivotgrid' },
        { name: 'floatingchange', parameters: 'pivotgrid,positioned' },
        { name: 'fullscreen', parameters: 'pivotgrid' },
        { name: 'hide', parameters: 'pivotgrid' },
        { name: 'initialize', parameters: 'pivotgrid' },
        { name: 'itemdoubletap', parameters: 'pivotgrid,index,target,record,e' },
        { name: 'itemmouseenter', parameters: 'pivotgrid,index,target,record,e' },
        { name: 'itemmouseleave', parameters: 'pivotgrid,index,target,record,e' },
        { name: 'itemsingletap', parameters: 'pivotgrid,index,target,record,e' },
        { name: 'itemswipe', parameters: 'pivotgrid,index,target,record,e' },
        { name: 'itemtap', parameters: 'pivotgrid,index,target,record,e' },
        { name: 'itemtaphold', parameters: 'pivotgrid,index,target,record,e' },
        { name: 'itemtouchend', parameters: 'pivotgrid,index,target,record,e' },
        { name: 'itemtouchmove', parameters: 'pivotgrid,index,target,record,e' },
        { name: 'itemtouchstart', parameters: 'pivotgrid,index,target,record,e' },
        { name: 'move', parameters: '' },
        { name: 'moved', parameters: 'pivotgrid,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'element' },
        { name: 'pivotbeforereconfigure', parameters: 'matrix,config' },
        { name: 'pivotbeforerequest', parameters: 'matrix,params' },
        { name: 'pivotbuildtotals', parameters: 'matrix,totals' },
        { name: 'pivotcolumnsbuilt', parameters: 'matrix,columns' },
        { name: 'pivotdone', parameters: 'matrix' },
        { name: 'pivotgroupcelldoubletap', parameters: 'params,e' },
        { name: 'pivotgroupcelltap', parameters: 'params,e' },
        { name: 'pivotgroupcelltaphold', parameters: 'params,e' },
        { name: 'pivotgroupcollapse', parameters: 'matrix,type,group' },
        { name: 'pivotgroupdoubletap', parameters: 'params,e' },
        { name: 'pivotgroupexpand', parameters: 'matrix,type,group' },
        { name: 'pivotgrouptap', parameters: 'params,e' },
        { name: 'pivotgrouptaphold', parameters: 'params,e' },
        { name: 'pivotitemcelldoubletap', parameters: 'params,e' },
        { name: 'pivotitemcelltap', parameters: 'params,e' },
        { name: 'pivotitemcelltaphold', parameters: 'params,e' },
        { name: 'pivotitemdoubletap', parameters: 'params,e' },
        { name: 'pivotitemtap', parameters: 'params,e' },
        { name: 'pivotitemtaphold', parameters: 'params,e' },
        { name: 'pivotmodelbuilt', parameters: 'matrix,model' },
        { name: 'pivotprogress', parameters: 'matrix,index,total' },
        { name: 'pivotreconfigure', parameters: 'matrix,config' },
        { name: 'pivotrecordbuilt', parameters: 'matrix,record' },
        { name: 'pivotrequestexception', parameters: 'matrix,response' },
        { name: 'pivotstart', parameters: 'matrix' },
        { name: 'pivotstorebuilt', parameters: 'matrix,store' },
        { name: 'pivottotalcelldoubletap', parameters: 'params,e' },
        { name: 'pivottotalcelltap', parameters: 'params,e' },
        { name: 'pivottotalcelltaphold', parameters: 'params,e' },
        { name: 'pivottotaldoubletap', parameters: 'params,e' },
        { name: 'pivottotaltap', parameters: 'params,e' },
        { name: 'pivottotaltaphold', parameters: 'params,e' },
        { name: 'positionedchange', parameters: 'pivotgrid,positioned' },
        { name: 'refresh', parameters: 'pivotgrid' },
        { name: 'remove', parameters: '' },
        { name: 'removed', parameters: 'pivotgrid,container,index' },
        { name: 'renderedchange', parameters: 'pivotgrid,item,rendered' },
        { name: 'resize', parameters: 'element' },
        { name: 'select', parameters: 'pivotgrid,record' },
        { name: 'selectionchange', parameters: 'pivotgrid,records' },
        { name: 'show', parameters: 'pivotgrid' },
        { name: 'tofront', parameters: 'pivotgrid' },
        { name: 'updatedata', parameters: 'pivotgrid,newData' },
        { name: 'ready', parameters: '' }
    ];
    xpivotgridMetaData.OUTPUTNAMES = [
        'activate',
        'add',
        'added',
        'beforehide',
        'beforeorientationchange',
        'beforeselectionchange',
        'beforeshow',
        'beforetofront',
        'columnadd',
        'columnhide',
        'columnmove',
        'columnremove',
        'columnresize',
        'columnshow',
        'columnsort',
        'containertap',
        'deactivate',
        'deselect',
        'destroy',
        'disclose',
        'erased',
        'floatingchange',
        'fullscreen',
        'hide',
        'initialize',
        'itemdoubletap',
        'itemmouseenter',
        'itemmouseleave',
        'itemsingletap',
        'itemswipe',
        'itemtap',
        'itemtaphold',
        'itemtouchend',
        'itemtouchmove',
        'itemtouchstart',
        'move',
        'moved',
        'orientationchange',
        'painted',
        'pivotbeforereconfigure',
        'pivotbeforerequest',
        'pivotbuildtotals',
        'pivotcolumnsbuilt',
        'pivotdone',
        'pivotgroupcelldoubletap',
        'pivotgroupcelltap',
        'pivotgroupcelltaphold',
        'pivotgroupcollapse',
        'pivotgroupdoubletap',
        'pivotgroupexpand',
        'pivotgrouptap',
        'pivotgrouptaphold',
        'pivotitemcelldoubletap',
        'pivotitemcelltap',
        'pivotitemcelltaphold',
        'pivotitemdoubletap',
        'pivotitemtap',
        'pivotitemtaphold',
        'pivotmodelbuilt',
        'pivotprogress',
        'pivotreconfigure',
        'pivotrecordbuilt',
        'pivotrequestexception',
        'pivotstart',
        'pivotstorebuilt',
        'pivottotalcelldoubletap',
        'pivottotalcelltap',
        'pivottotalcelltaphold',
        'pivottotaldoubletap',
        'pivottotaltap',
        'pivottotaltaphold',
        'positionedchange',
        'refresh',
        'remove',
        'removed',
        'renderedchange',
        'resize',
        'select',
        'selectionchange',
        'show',
        'tofront',
        'updatedata',
        'ready'
    ];
    return xpivotgridMetaData;
}());
var xpivotgrid = (function (_super) {
    __extends(xpivotgrid, _super);
    function xpivotgrid(eRef, resolver, vcRef) {
        _super.call(this, eRef, resolver, vcRef, xpivotgridMetaData);
    }
    xpivotgrid.prototype.ngAfterContentInit = function () { this.AfterContentInit(this.extbaseRef); };
    xpivotgrid.prototype.ngOnInit = function () { this.OnInit(this.dynamicRef, xpivotgridMetaData); };
    __decorate([
        core_1.ContentChildren(x_base_1.xbase, { read: x_base_1.xbase }), 
        __metadata('design:type', core_1.QueryList)
    ], xpivotgrid.prototype, "extbaseRef", void 0);
    __decorate([
        core_1.ViewChild('dynamic', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], xpivotgrid.prototype, "dynamicRef", void 0);
    xpivotgrid = __decorate([
        core_1.Component({
            selector: 'x-' + xpivotgridMetaData.XTYPE,
            inputs: xpivotgridMetaData.INPUTNAMES,
            outputs: xpivotgridMetaData.OUTPUTNAMES,
            providers: [{ provide: x_base_1.xbase, useExisting: core_1.forwardRef(function () { return xpivotgrid; }) }],
            template: '<template #dynamic></template>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentFactoryResolver, core_1.ViewContainerRef])
    ], xpivotgrid);
    return xpivotgrid;
}(x_base_1.xbase));
exports.xpivotgrid = xpivotgrid;
