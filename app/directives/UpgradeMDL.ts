import {Directive, AfterViewInit} from '@angular/core';
declare var componentHandler: any;

@Directive({
    selector: '[mdl]'
})    
export class MDL_DIRECTIVE implements AfterViewInit {
    ngAfterViewInit() {
        componentHandler.upgradeAllRegistered();
    }
}