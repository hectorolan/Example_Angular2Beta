//Library
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
//Model
import {Place} from '../../model/place';
//Controller
import {ControllerManageMenu} from '../../controller/account/ControllerManageMenu';

@Component({
    selector: 'controller-manageuser',
    templateUrl: '../../app/view/account/viewmanageuser.html',
    styleUrls: ['../../app/style/account/stylemanageuser.css'],
    directives: [
    ]
})
export class ControllerManageUser implements OnInit {
    
    constructor(
        
    ){
    }
    ngOnInit(){
        
    }
}

