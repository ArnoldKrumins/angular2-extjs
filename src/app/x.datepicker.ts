import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.picker.Date
class xdatepickerMetaData {
	public static XTYPE: string = 'datepicker';
	public static INPUTNAMES: string[] = [
		'activeItem',
		'alwaysOnTop',
		'anchor',
		'anchorPosition',
		'autoDestroy',
		'axisLock',
		'baseCls',
		'bind',
		'bodyBorder',
		'bodyPadding',
		'border',
		'bottom',
		'cancelButton',
		'cardSwitchAnimation',
		'centered',
		'closable',
		'closeAction',
		'closeToolText',
		'cls',
		'contentEl',
		'control',
		'controller',
		'data',
		'dayText',
		'defaultListenerScope',
		'defaults',
		'defaultType',
		'disabled',
		'docked',
		'doneButton',
		'draggable',
		'enter',
		'enterAnimation',
		'exit',
		'exitAnimation',
		'flex',
		'floated',
		'fullscreen',
		'header',
		'height',
		'hidden',
		'hideAnimation',
		'hideOnMaskTap',
		'html',
		'icon',
		'iconCls',
		'id',
		'itemId',
		'items',
		'keyMap',
		'keyMapEnabled',
		'keyMapTarget',
		'layout',
		'left',
		'listeners',
		'manageBorders',
		'margin',
		'masked',
		'maxHeight',
		'maxWidth',
		'minHeight',
		'minWidth',
		'modal',
		'monthText',
		'padding',
		'plugins',
		'publishes',
		'record',
		'reference',
		'referenceHolder',
		'relative',
		'renderTo',
		'right',
		'scrollable',
		'session',
		'shadow',
		'shim',
		'showAnimation',
		'slotOrder',
		'slots',
		'stretchX',
		'stretchY',
		'style',
		'styleHtmlCls',
		'styleHtmlContent',
		'title',
		'toFrontOnShow',
		'toolbar',
		'tools',
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
		'useTitles',
		'value',
		'viewModel',
		'width',
		'x',
		'xtype',
		'y',
		'yearFrom',
		'yearText',
		'yearTo',
		'zIndex',
		'platformConfig',
		'responsiveConfig',
		'fitToParent',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'activate',parameters:'newActiveItem,datepicker,oldActiveItem'},
		{name:'add',parameters:'datepicker,item,index'},
		{name:'added',parameters:'datepicker,container,index'},
		{name:'beforehide',parameters:'datepicker'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'datepicker'},
		{name:'beforetofront',parameters:'datepicker'},
		{name:'cancel',parameters:'datepicker'},
		{name:'change',parameters:'datepicker,value'},
		{name:'deactivate',parameters:'oldActiveItem,datepicker,newActiveItem'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'datepicker'},
		{name:'floatingchange',parameters:'datepicker,positioned'},
		{name:'fullscreen',parameters:'datepicker'},
		{name:'hide',parameters:'datepicker'},
		{name:'initialize',parameters:'datepicker'},
		{name:'move',parameters:'datepicker,item,toIndex,fromIndex'},
		{name:'moved',parameters:'datepicker,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'pick',parameters:'datepicker,values,slot'},
		{name:'positionedchange',parameters:'datepicker,positioned'},
		{name:'remove',parameters:'datepicker,item,index'},
		{name:'removed',parameters:'datepicker,container,index'},
		{name:'renderedchange',parameters:'datepicker,item,rendered'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'datepicker'},
		{name:'tofront',parameters:'datepicker'},
		{name:'updatedata',parameters:'datepicker,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'activate',
		'add',
		'added',
		'beforehide',
		'beforeorientationchange',
		'beforeshow',
		'beforetofront',
		'cancel',
		'change',
		'deactivate',
		'destroy',
		'erased',
		'floatingchange',
		'fullscreen',
		'hide',
		'initialize',
		'move',
		'moved',
		'orientationchange',
		'painted',
		'pick',
		'positionedchange',
		'remove',
		'removed',
		'renderedchange',
		'resize',
		'show',
		'tofront',
		'updatedata',
		'ready'
];
}
@Component({
  selector: 'x-' + xdatepickerMetaData.XTYPE,
	inputs: xdatepickerMetaData.INPUTNAMES,
	outputs: xdatepickerMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xdatepicker)}],
	template: '<template #dynamic></template>'
})
export class xdatepicker extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xdatepickerMetaData);
	}
	//@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(xbase,{read: xbase}) extbaseRef: QueryList<xbase>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xdatepickerMetaData);}
}
