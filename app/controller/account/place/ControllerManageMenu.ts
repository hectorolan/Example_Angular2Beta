//Library
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
//Model
import {Place} from '../../../model/Place';
import {MenuItem} from '../../../model/menuItem';
//ServiceMenuItem
import {ServiceSessionData} from '../../../service/servicesessiondata';
import {ServiceToolbar, IActionBar} from '../../../service/servicetoolbar';
import {ServiceMenuItem} from '../../../service/servicemenuitem';
//Log
import {Log} from '../../../service/log';

@Component({
    selector: 'controller-managemenu',
    templateUrl: '../../../app/view/account/place/viewmanagemenu.html'
})
export class ControllerManageMenu implements OnInit, IActionBar {
    SessionData: ServiceSessionData;
    //Database original objects
    dbMenuItems: MenuItem[] = [];
    errors = {
      serviceMenuItemError: ""  
    };
    //Component Data
    categories: string[] = [];
    menuItems: MenuItem[] = [];

    constructor(
        private _router: Router,
        private _serviceToolbar: ServiceToolbar,
        private _serviceSessionData: ServiceSessionData,
        private _serviceMenuItem: ServiceMenuItem
    ){
        this.SessionData = ServiceSessionData;
    }
    ngOnInit(){
        this._serviceToolbar.btnActions = this;
        this.LoadDBData();
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
        this.categories.push("Appetizers");
        this.categories.push("Deserts");
        let item = new MenuItem();
        item.category=("Appetizers");
        item.name="Onion Rings";
        item.calories="(379cal)";
        item.remark="The best rings in town!";
        item.content="";
        item.price=7.99;
        this.menuItems.push(item);
        item = new MenuItem();
        item.category=("Appetizers");
        item.name="Lava tomato bread";
        item.calories="(400cal)";
        item.remark="I dare you";
        item.content="Spicy tomato onion fip, parmesan cheese, tosted flat bread, green chili pepper";
        item.price=4.99;
        this.menuItems.push(item);
        item = new MenuItem();
        item.category=("Deserts");
        item.name="Chocolate Mountain";
        item.calories="(510cal)";
        item.remark="";
        item.content="Vanilla ice cream, hot fudge chocolate, brownie, almonds";
        item.price=5.99;
        this.menuItems.push(item);
    }
    LoadMenuItem(){
        this.errors.serviceMenuItemError = "";
    }
}