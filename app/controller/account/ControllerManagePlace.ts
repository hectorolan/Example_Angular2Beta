//Library
import {Component, OnInit, OnDestroy} from '@angular/core';
//Controller
import {ControllerManagePlaceDetail} from '../../controller/account/place/ControllerManagePlaceDetail';
import {ControllerManageMenu} from '../../controller/account/place/ControllerManageMenu';
//Service
import {ServiceSessionData} from '../../service/servicesessiondata';
import {ServiceToolbar, IActionBar} from '../../service/servicetoolbar';
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
export class ControllerManagePlace implements OnInit, OnDestroy {
    //Section Active
    tabPlaceActive = true;
    tabMenuActive = false;
    tabPrintsActive = false;

    constructor(
        private _serviceSessionData: ServiceSessionData,
        private _serviceToolbar: ServiceToolbar) {
    }
    ngOnInit() {
        this.setActionBarMenu("place");
    }
    /* OnDestroy */
    ngOnDestroy() {
        //Set menu to defaults
        this._serviceToolbar.updateToolbar("");
    }
    //Events
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
                break;
            case "menu":
            this.tabMenuActive = true;
                break;
            case "prints":
            this.tabPrintsActive = true;
                break;
        }
        this.setActionBarMenu(tab);
        this._serviceToolbar.btnActions = iActionBar;
    }
    setActionBarMenu(tab: string) {
        switch (tab) {
            case "place":
                this._serviceToolbar.updateToolbar(ServiceToolbar.MENUMANAGEPLACE);
                break;
            case "menu":
                this._serviceToolbar.updateToolbar(ServiceToolbar.MENUMANAGEMENU);
                break;
            case "prints":
                this._serviceToolbar.updateToolbar(ServiceToolbar.MENUMANAGEPRINTS);
                break;
        }
    }

}

