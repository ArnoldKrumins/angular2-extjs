import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
// Ext Class - Ext.TitleBar
class exttitlebarMetaData {
	public static XTYPE: string = 'titlebar';
	public static INPUTNAMES: string[] = [
		'activeItem',
		'alwaysOnTop',
		'autoDestroy',
		'axisLock',
		'baseCls',
		'bind',
		'border',
		'bottom',
		'cardSwitchAnimation',
		'centered',
		'cls',
		'contentEl',
		'control',
		'controller',
		'data',
		'defaultButtonUI',
		'defaultListenerScope',
		'defaults',
		'defaultType',
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
		'maxButtonWidth',
		'maxHeight',
		'maxWidth',
		'minHeight',
		'minWidth',
		'modal',
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
		'style',
		'styleHtmlCls',
		'styleHtmlContent',
		'title',
		'titleAlign',
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
	public static OUTPUTS: any[] = [
		{name:'activate',parameters:'newActiveItem,titlebar,oldActiveItem'},
		{name:'add',parameters:'titlebar,item,index'},
		{name:'added',parameters:'titlebar,container,index'},
		{name:'beforehide',parameters:'titlebar'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'titlebar'},
		{name:'beforetofront',parameters:'titlebar'},
		{name:'deactivate',parameters:'oldActiveItem,titlebar,newActiveItem'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'titlebar'},
		{name:'floatingchange',parameters:'titlebar,positioned'},
		{name:'fullscreen',parameters:'titlebar'},
		{name:'hide',parameters:'titlebar'},
		{name:'initialize',parameters:'titlebar'},
		{name:'move',parameters:'titlebar,item,toIndex,fromIndex'},
		{name:'moved',parameters:'titlebar,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:''},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'titlebar,positioned'},
		{name:'remove',parameters:'titlebar,item,index'},
		{name:'removed',parameters:'titlebar,container,index'},
		{name:'renderedchange',parameters:'titlebar,item,rendered'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'titlebar'},
		{name:'tofront',parameters:'titlebar'},
		{name:'updatedata',parameters:'titlebar,newData'},
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
  selector: 'ext-' + exttitlebarMetaData.XTYPE,
	inputs: exttitlebarMetaData.INPUTNAMES,
	outputs: exttitlebarMetaData.OUTPUTNAMES,
	providers: [{provide: extbase, useExisting: forwardRef(() => exttitlebar)}],
	template: '<template #dynamic></template>'
})
export class exttitlebar extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,exttitlebarMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,exttitlebarMetaData);}
}
