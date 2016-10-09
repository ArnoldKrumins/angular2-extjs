import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { extbase } from './ext.base';
// Ext Class - Ext.viewport.Default
class extviewportMetaData {
	public static XTYPE: string = 'viewport';
	public static INPUTNAMES: string[] = [
		'activeItem',
		'alwaysOnTop',
		'autoDestroy',
		'autoRender',
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
		'maxHeight',
		'maxWidth',
		'minHeight',
		'minWidth',
		'modal',
		'padding',
		'plugins',
		'preventZooming',
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
		{name:'activate',parameters:'newActiveItem,viewport,oldActiveItem'},
		{name:'add',parameters:'viewport,item,index'},
		{name:'added',parameters:'viewport,container,index'},
		{name:'beforehide',parameters:'viewport'},
		{name:'beforeorientationchange',parameters:''},
		{name:'beforeshow',parameters:'viewport'},
		{name:'beforetofront',parameters:'viewport'},
		{name:'deactivate',parameters:'oldActiveItem,viewport,newActiveItem'},
		{name:'destroy',parameters:''},
		{name:'erased',parameters:'viewport'},
		{name:'floatingchange',parameters:'viewport,positioned'},
		{name:'fullscreen',parameters:'viewport'},
		{name:'hide',parameters:'viewport'},
		{name:'initialize',parameters:'viewport'},
		{name:'maximize',parameters:'viewport'},
		{name:'move',parameters:'viewport,item,toIndex,fromIndex'},
		{name:'moved',parameters:'viewport,container,toIndex,fromIndex'},
		{name:'orientationchange',parameters:'viewport,newOrientation,width,height'},
		{name:'painted',parameters:'element'},
		{name:'positionedchange',parameters:'viewport,positioned'},
		{name:'ready',parameters:'viewport'},
		{name:'remove',parameters:'viewport,item,index'},
		{name:'removed',parameters:'viewport,container,index'},
		{name:'renderedchange',parameters:'viewport,item,rendered'},
		{name:'resize',parameters:'element'},
		{name:'show',parameters:'viewport'},
		{name:'tofront',parameters:'viewport'},
		{name:'updatedata',parameters:'viewport,newData'},
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
		'maximize',
		'move',
		'moved',
		'orientationchange',
		'painted',
		'positionedchange',
		'ready',
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
  selector: 'ext-' + extviewportMetaData.XTYPE,
	inputs: extviewportMetaData.INPUTNAMES,
	outputs: extviewportMetaData.OUTPUTNAMES,
	providers: [{provide: extbase, useExisting: forwardRef(() => extviewport)}],
	template: '<template #dynamic></template>'
})
export class extviewport extends extbase {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef:ViewContainerRef) {
		super(eRef,resolver,vcRef,extviewportMetaData);
	}
	@ContentChildren(extbase,{read:ViewContainerRef}) extbaseRef:QueryList<ViewContainerRef>;
	@ViewChild('dynamic',{read:ViewContainerRef}) dynamicRef:ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,extviewportMetaData);}
}
