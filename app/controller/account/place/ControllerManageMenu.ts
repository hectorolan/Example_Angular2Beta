//Library
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
//Model
import {Place} from '../../../model/Place';
import {MenuItem} from '../../../model/menuItem';
//ServiceMenuItem
import {ServiceToolbar, IActionBar} from '../../../service/servicetoolbar';
import {ServiceMenuItem} from '../../../service/servicemenuitem';
//Log
import {Log} from '../../../service/log';

@Component({
    selector: 'controller-managemenu',
    templateUrl: '../../../app/view/account/place/viewmanagemenu.html'
})
export class ControllerManageMenu implements OnInit, IActionBar {
    //Database original objects
    dbMenuItems: MenuItem[] = [];
    errors = {
      serviceMenuItemError: ""  
    };
    constructor(
        private _router: Router,
        private _serviceToolbar: ServiceToolbar,
        private _serviceMenuItem: ServiceMenuItem
    ){
    }
    ngOnInit(){
        this._serviceToolbar.btnActions = this;
    }
    onClickMenuBtn(button: string){
        switch (button) {
            case ServiceToolbar.BTNSAVE:
                this.save();
                break;
            default:
                break;
        }
    }
    btnClickAddNewItem(category: string){
        Log.writeMessage("---Btn Add New Item Clicked");
    }
    save(){
        Log.writeMessage("---Save in Manage Menu");
    }
    //Load Data from services
    LoadDBData(){
        this.LoadMenuItem();
    }
    LoadMenuItem(){
        this.errors.serviceMenuItemError = "";
    }
}