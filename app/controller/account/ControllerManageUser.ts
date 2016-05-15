import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ControllerSetMenu} from '../../controller/account/ControllerSetMenu';
import {ControllerSetSchedule} from '../../controller/account/ControllerSetSchedule';
import {ControllerSetPlaceInformation} from '../../controller/account/ControllerSetPlaceInformation';
import {Place} from '../../model/place';

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

