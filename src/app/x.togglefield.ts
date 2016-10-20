import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { xbase } from './x.base';
// Ext Class - Ext.field.Toggle
class xtogglefieldMetaData {
	public static XTYPE: string = 'togglefield';
	public static INPUTNAMES: string[] = [
		'activeLabel',
		'alwaysOnTop',
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
		'inactiveLabel',
		'increment',
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
		'liveUpdate',
		'margin',
		'maxHeight',
		'maxValue',
		'maxWidth',
		'minHeight',
		'minValue',
		'minWidth',
		'modal',
		'name',
		'padding',
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
		'value',
		'values',
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
	public static OUTPUTS: any[] = [
		{name:'added',parameters:'togglefield,container,index'},
		{name:'beforehide',parameters:'togglefield'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'togglefield'},
		{name:'beforetofront',parameters:'togglefield'},
		{name:'change',parameters:'togglefield,newValue,oldValue'},
		{name:'destroy',parameters:''},
		{name:'drag',parameters:''},
		{name:'dragchange',parameters:'me,newValue,oldValue'},
		{name:'dragend',parameters:''},
		{name:'dragstart',parameters:''},
		{name:'erased',parameters:'togglefield'},
		{name:'floatingchange',parameters:'togglefield,positioned'},
		{name:'fullscreen',parameters:'togglefield'},
		{name:'hide',parameters:'togglefield'},
		{name:'initialize',parameters:'togglefield'},
		{name:'moved',parameters:'togglefield,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'togglefield,positioned'},
		{name:'removed',parameters:'togglefield,container,index'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'togglefield'},
		{name:'tofront',parameters:'togglefield'},
		{name:'updatedata',parameters:'togglefield,newData'},
		{name:'ready',parameters:''}
];
	public static OUTPUTNAMES: string[] = [
		'added',
		'beforehide',
		'beforeorientationchange',
		'beforeshow',
		'beforetofront',
		'change',
		'destroy',
		'drag',
		'dragchange',
		'dragend',
		'dragstart',
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
		'show',
		'tofront',
		'updatedata',
		'ready'
];
}
@Component({
  selector: 'x-' + xtogglefieldMetaData.XTYPE,
	inputs: xtogglefieldMetaData.INPUTNAMES,
	outputs: xtogglefieldMetaData.OUTPUTNAMES,
	providers: [{provide: xbase, useExisting: forwardRef(() => xtogglefield)}],
	template: '<template #dynamic></template>'
})
export class xtogglefield extends xbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,xtogglefieldMetaData);
	}
	@ContentChildren(xbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,xtogglefieldMetaData);}
}