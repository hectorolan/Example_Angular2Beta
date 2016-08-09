//libs
import {Injectable, OnInit, OnDestroy} from '@angular/core';
//services
import {ServiceSessionData} from '../../service/servicesessiondata';
import {ServiceToolbar, IActionBar} from '../../service/servicetoolbar';
//controllers
import {ControllerManagePlace} from '../../controller/account/ControllerManagePlace';
import {ControllerManagePlaceDetail} from '../../controller/account/place/ControllerManagePlaceDetail';
import {ControllerManageMenu} from '../../controller/account/place/ControllerManageMenu';
import {ControllerManageMenuDetail} from '../../controller/account/place/ControllerManageMenuDetail';
import {ControllerManageMenuEdit} from '../../controller/account/place/ControllerManageMenuEdit';
import {ControllerManageUser} from '../../controller/account/ControllerManageUser';
import {ControllerHome} from '../../controller/home/ControllerHome';
import {ControllerHomePlaceDetail} from '../../controller/home/ControllerHomePlaceDetail';
import {ControllerPlace} from '../../controller/place/ControllerPlace';
import {ControllerPlaceDetail} from '../../controller/place/ControllerPlaceDetail';
import {ControllerPlaceMenu} from '../../controller/place/ControllerPlaceMenu';
import {ControllerPlaceSchedule} from '../../controller/place/ControllerPlaceSchedule';

export abstract class ControllerBase implements OnInit, OnDestroy, IActionBar{

    abstract onClickMenuBtn(button: string): void;
    
    constructor(
        protected _serviceSessionData: ServiceSessionData,
        protected _serviceToolbar: ServiceToolbar) {
    }
    ngOnInit(){
    }
    ngOnDestroy(){
        this._serviceToolbar.updateToolbar("clear");
    }
    setActionBar(menu: string){ 
        this._serviceToolbar.onActionClicks = this;
        this._serviceToolbar.updateToolbar(menu);
    }
}