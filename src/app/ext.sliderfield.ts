import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
// Ext Class - Ext.field.Slider
class extsliderfieldMetaData {
	public static XTYPE: string = 'sliderfield';
	public static INPUTNAMES: string[] = [
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
		'fit',
		'config'
];
	public static OUTPUTS: any[] = [
		{name:'added',parameters:'sliderfield,container,index'},
		{name:'beforehide',parameters:'sliderfield'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'sliderfield'},
		{name:'beforetofront',parameters:'sliderfield'},
		{name:'change',parameters:'me,newValue,oldValue'},
		{name:'destroy',parameters:''},
		{name:'drag',parameters:'sliderfield,sl,thumb,e'},
		{name:'dragchange',parameters:'me,sl,thumb,newValue,oldValue'},
		{name:'dragend',parameters:'sliderfield,sl,thumb,value,e'},
		{name:'dragstart',parameters:'sliderfield,sl,thumb,value,e'},
		{name:'erased',parameters:'sliderfield'},
		{name:'floatingchange',parameters:'sliderfield,positioned'},
		{name:'fullscreen',parameters:'sliderfield'},
		{name:'hide',parameters:'sliderfield'},
		{name:'initialize',parameters:'sliderfield'},
		{name:'moved',parameters:'sliderfield,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'sliderfield,positioned'},
		{name:'removed',parameters:'sliderfield,container,index'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'sliderfield'},
		{name:'tofront',parameters:'sliderfield'},
		{name:'updatedata',parameters:'sliderfield,newData'},
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
  selector: 'ext-' + extsliderfieldMetaData.XTYPE,
	inputs: extsliderfieldMetaData.INPUTNAMES,
	outputs: extsliderfieldMetaData.OUTPUTNAMES,
	providers: [{provide: extbase, useExisting: forwardRef(() => extsliderfield)}],
	template: '<template #dynamic></template>'
})
export class extsliderfield extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extsliderfieldMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,extsliderfieldMetaData);}
}
