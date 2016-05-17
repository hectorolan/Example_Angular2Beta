//Library
import {Component, OnInit} from '@angular/core';
import {NgForm}    from '@angular/common';
import {Router} from '@angular/router-deprecated';
//Model
import {Place} from '../../model/place';
import {Schedule} from '../../model/schedule';
//Controller
import {ControllerManageMenu} from '../../controller/account/ControllerManageMenu';
//Service
import {ServicePlace} from '../../service/serviceplace';
import {ServiceSchedule} from '../../service/serviceschedule';
import {Log} from '../../service/log';

@Component({
    selector: 'controller-manageplace',
    templateUrl: '../../app/view/account/viewmanageplace.html',
    styleUrls: ['../../app/style/account/stylemanageplace.css'],
    directives: [
        ControllerManageMenu
    ]
})
export class ControllerManagePlace implements OnInit {
    /*
    * To make diferent:
    * place.id == null ? then is new Place to create
    * if not: Edit Place*/
    
    //Original
    place: Place;
    schedule: Schedule;
    //Bind Forms
    formPlace: Place;
    formSchedule: Schedule;
    
    title: string;
    
    constructor(
        private _router: Router,
        private _servicePlace: ServicePlace,
        private _serviceSchedule: ServiceSchedule
    ){
    }
    ngOnInit(){
        //TODO
        /*
        * Here the app will look for the logged user to check
        * if a Place already exists, If not the user is creating the new
        * place. For now this only is for add places news
        */
        this.title = "Create Place";
        this.formPlace = new Place();
        this.formSchedule = new Schedule();
        this.formPlace.name = "";
    }
    gotoMenu(){
        this._router.navigate(['SetMenu', {id: 1}]);
    }
    onSubmitSaveChanges(){
        console.error(this.formPlace);
    }
}

