//Library
import {Component, OnInit} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';
//Model
import {Place} from '../../model/place';
import {Schedule} from '../../model/schedule';
import {MenuItem} from '../../model/menuitem';
//Controller
import {ControllerManagePlaceDetail} from '../../controller/account/place/ControllerManagePlaceDetail';
import {ControllerManageMenu} from '../../controller/account/place/ControllerManageMenu';
//Service
import {ServicePlace} from '../../service/serviceplace';
import {ServiceSchedule} from '../../service/serviceschedule';
import {ServiceMenuItem} from '../../service/servicemenuitem';
//Log
import {Log} from '../../service/log';

@Component({
    selector: 'controller-manageplace',
    templateUrl: '../../../app/view/account/viewmanageplace.html',
    directives: [
        ControllerManagePlaceDetail,
        ControllerManageMenu
    ]
})
export class ControllerManagePlace implements OnInit {
    //Database original objects
    dbPlace: Place;
    dbSchedule: Schedule;
    dbMenuItems: MenuItem[] = [];
    //Section Active
    tabPlaceActive = true;
    tabMenuActive = false;
    tabPrintsActive = false;
    
    errors = {
      servicePlaceError: "",
      serviceScheduleError: "",
      serviceMenuItemError: ""  
    };

    constructor(
        private _servicePlace: ServicePlace,
        private _serviceSchedule: ServiceSchedule,
        private _serviceMenuItem: ServiceMenuItem
    ) {
    }
    ngOnInit() {
        this.LoadDBData();
    }
    //Events
    onClickTab(tab:string){
        this.tabPlaceActive = tab == "place" ? true : false;
        this.tabMenuActive = tab == "menu" ? true : false;
        this.tabPrintsActive = tab == "prints" ? true : false;
    }
    //Load Data from services
    LoadDBData(){
        this.LoadPlace();
        this.LoadSchedule();
        this.LoadMenuItem();
    }
    LoadPlace(){
        this.dbPlace = new Place();
        this.errors.servicePlaceError = "";
    }
    LoadSchedule(){
        this.dbSchedule = new Schedule();
        this.errors.serviceScheduleError = "";
    }
    LoadMenuItem(){
        this.errors.serviceMenuItemError = "";
    }

}

