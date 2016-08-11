//Library
import {Component, OnInit, OnDestroy} from '@angular/core';
//Controller
//import {ControllerBase} from '../../controller/pamsupport/ControllerBase';
import {ControllerManagePlaceDetail} from '../../controller/account/place/ControllerManagePlaceDetail';
import {ControllerManageMenu} from '../../controller/account/place/ControllerManageMenu';
//Service
import {ServiceSessionData} from '../../service/servicesessiondata';
import {ServiceToolbar, IActionBar} from '../../service/servicetoolbar';
//Log
import {Log} from '../../service/log';

/** This component manage the Toolbar, and the action bar.
 * The menu component has multiple actionbars, 
 * ControllerManageMenu will managethe actionbar too. */
@Component({
    selector: 'controller-manageplace',
    templateUrl: '../../../app/view/account/viewmanageplace.html',
    directives: [
        ControllerManagePlaceDetail,
        ControllerManageMenu
    ]
})
export class ControllerManagePlace {
    //Section Active
    tabPlaceActive = true;
    tabMenuActive = false;
    tabPrintsActive = false;
    manageplace: any;

    constructor(
        private _serviceSessionData: ServiceSessionData,
        private _serviceToolbar: ServiceToolbar) {
        //super(_serviceSessionData, _serviceToolbar);
    }
    onClickMenuBtn(button: string){

    }
    //Manage Tabs and Actionbar
    onClickTab(tab: string, iActionBar: IActionBar) {
        //Tabs init
        this.tabPlaceActive = false;
        this.tabMenuActive = false;
        this.tabPrintsActive = false;
        //Tabs select 
        //Update Menu
        switch (tab) {
            case "place":
                this.tabPlaceActive = true;
                iActionBar.setActionBar(ServiceToolbar.MENUMANAGEPLACE);
                break;
            case "menu":
                this.tabMenuActive = true;
                iActionBar.setActionBar(ServiceToolbar.MENUMANAGEMENUDETAIL);
                break;
            case "prints":
            this.tabPrintsActive = true;
                break;
        }
    }

}

