//Library
import {Component, OnInit, Input} from '@angular/core';
import {Control, Validators} from '@angular/common';

@Component({
    selector: 'controller-fieldvalidation',
    templateUrl: '../../app/view/pamsupport/viewfieldvalidation.html'//,
    //styleUrls: ['../../app/styles/account/stylemanagemenu.css']
})
export class ControllerFieldValidation implements OnInit {
    @Input() control: Control;
    constructor(){
    }
    ngOnInit(){
    }
}