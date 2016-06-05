//Library
import {Component, OnInit, Input} from '@angular/core';
import {Control, Validators} from '@angular/common';

@Component({
    selector: 'controller-fieldvalidation',
    templateUrl: '../../app/view/pamsupport/viewfieldvalidation.html'
})
export class ControllerFieldValidation implements OnInit {
    @Input() control: Control;
    constructor(){
    }
    ngOnInit(){
    }
}