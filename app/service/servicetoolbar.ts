import {Injectable} from '@angular/core';
//Log
import {Log} from '../../app/service/log';
//Services
import {ServiceSessionData} from '../../app/service/servicesessiondata';

@Injectable()
export class ServiceToolbar {
    btnActions: IActionBar;
    //Buttons
    static BTNSAVE: string = "ButtonSave";
    static BTNADD: string= "ButtonAdd";
    static BTNHOME: string = "ButtonHome";
    btnSaveVisible: boolean = false;
    btnAddVisible: boolean = false;
    btnHomeVisible: boolean = false;
    //Menus
    static MENUMANAGEPLACE: string = "ControllerManagePlace";
    static MENUMANAGEMENU: string = "ControllerManageMenu";
    static MENUMANAGEPRINTS: string = "ControllerManagePrints"
    static MENUMANAGEUSER: string = "ControllerManageUser";
    //Constructor
    constructor() {
        
    }
    updateToolbar(component: string) {
        Log.writeMessage("---UpdateToolBar");
        //Hide All buttons
        this.btnHomeVisible = false;
        this.btnAddVisible = false;
        this.btnSaveVisible = false;
        //Select the buttons to show
        switch (component) {
            case ServiceToolbar.MENUMANAGEPLACE:
                this.btnSaveVisible = true;
                break;
            case ServiceToolbar.MENUMANAGEMENU:
                this.btnAddVisible = true;
                break;
            case ServiceToolbar.MENUMANAGEUSER:
                this.btnSaveVisible = true;
                break;
            default:
                this.btnActions = null;
                break;
        }
    }
}
export interface IActionBar {
    onClickMenuBtn(button: string): void;
}
