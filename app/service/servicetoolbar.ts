import {Injectable} from '@angular/core';
//Log
import {Log} from '../../app/service/log';
//Services
import {ServiceSessionData} from '../../app/service/servicesessiondata';

@Injectable()
export class ServiceToolbar {
    onActionClicks: IActionBar;
    //Buttons
    static BTNSAVE: string = "ButtonSave";
    static BTNADD: string= "ButtonAdd";
    static BTNHOME: string = "ButtonHome";
    private btnSaveVisible: boolean = false;
    private btnAddVisible: boolean = false;
    private btnHomeVisible: boolean = false;
    //Menus
    static MENUHOME: string = "MenuHome";
    static MENUMANAGEPLACE: string = "MenuManagePlace";
    static MENUMANAGEMENUDETAIL: string = "MenuManageMenuDetail";
    static MENUMANAGEMENUEDIT: string = "MenuManageMenuEdit";
    static MENUMANAGEPRINTS: string = "MenuManagePrints"
    static MENUMANAGEUSER: string = "MenuManageUser";
    //Constructor
    constructor() {
        
    }
    updateToolbar(menu: string) {
        Log.writeMessage("---UpdateToolBar :" + menu);
        //Hide All buttons
        this.btnHomeVisible = false;
        this.btnAddVisible = false;
        this.btnSaveVisible = false;
        //Select the buttons to show
        switch (menu) {
            case ServiceToolbar.MENUMANAGEPLACE:
                this.btnSaveVisible = true;
                break;
            case ServiceToolbar.MENUMANAGEMENUDETAIL:
                this.btnAddVisible = true;
                break;
            case ServiceToolbar.MENUMANAGEUSER:
                this.btnSaveVisible = true;
                break;
            case ServiceToolbar.MENUMANAGEMENUEDIT:
                break;
            default:
                this.onActionClicks = null;
                break;
        }
    }
}
export interface IActionBar {
    setActionBar(menu: string): void;
    onClickMenuBtn(button: string): void;
}
