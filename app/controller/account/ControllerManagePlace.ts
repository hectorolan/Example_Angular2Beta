//Library
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
//Model
import {Place} from '../../model/place';
//Controller
import {ControllerSetMenu} from '../../controller/account/ControllerSetMenu';
import {ControllerSetSchedule} from '../../controller/account/ControllerSetSchedule';
import {ControllerSetPlaceInformation} from '../../controller/account/ControllerSetPlaceInformation';

@Component({
    selector: 'controller-manageplace',
    templateUrl: '../../app/view/account/viewmanageplace.html',
    styleUrls: ['../../app/style/account/stylemanageplace.css'],
    directives: [
        ControllerSetMenu,
        ControllerSetSchedule,
        ControllerSetPlaceInformation
    ]
})
export class ControllerManagePlace implements OnInit {
    /*
    * To make diferent:
    * place.id == null ? then is new Place to create
    * if not: Edit Place*/
    place: Place;
    operation: string;
    
    constructor(
        private _router: Router
    ){
    }
    ngOnInit(){
        this.operation = "Create Place";
    }
    gotoMenu(){
        this._router.navigate(['SetMenu', {id: 1}]);
    }
}

