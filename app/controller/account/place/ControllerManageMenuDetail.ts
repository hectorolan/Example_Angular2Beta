//Library
import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {NgForm} from '@angular/common';
import {ControlGroup, Control, FormBuilder, AbstractControl, Validators} from '@angular/common';
//Controller
import {ControllerBase} from '../../../controller/pamsupport/ControllerBase';
//Model
import {Place} from '../../../model/Place';
import {MenuItem} from '../../../model/menuItem';
//ServiceMenuItem
import {ServiceSessionData} from '../../../service/servicesessiondata';
import {ServiceToolbar} from '../../../service/servicetoolbar';
import {ServiceMenuItem} from '../../../service/servicemenuitem';
//Log
import {Log} from '../../../service/log';

@Component({
    selector: 'controller-managemenudetail',
    templateUrl: '../../../app/view/account/place/viewmanagemenudetail.html'
})
export class ControllerManageMenuDetail extends ControllerBase{
    //Database original objects
    errors = {
        serviceMenuItemError: ""
    };
    //Component Data
    categories: string[] = [];
    menuItems: MenuItem[] = [];

    constructor(
        _serviceToolbar: ServiceToolbar,
        _serviceSessionData: ServiceSessionData,
        private _router: Router,
        private _serviceMenuItem: ServiceMenuItem
    ) {
        super(_serviceSessionData, _serviceToolbar);
    }
    ngOnInit() {
        super.ngOnInit();
        this.LoadDBData();
        Log.writeMessage("--- Manage Menu Detail OnInitCompleted")
    }
    onClickMenuBtn(button: string) {
        switch (button) {
            case ServiceToolbar.BTNADD:
                alert("Hello World");
                break;
            default:
                break;
        }
    }

    //Load Data from services
    LoadDBData() {
        this.LoadMenuItem();
        this.categories.push("Appetizers");
        this.categories.push("Deserts");
        let item = new MenuItem();
        item.category = ("Appetizers");
        item.name = "Onion Rings";
        item.calories = "(379cal)";
        item.remark = "The best rings in town!";
        item.content = "";
        item.price = 7.99;
        this.menuItems.push(item);
        item = new MenuItem();
        item.category = ("Appetizers");
        item.name = "Lava tomato bread";
        item.calories = "(400cal)";
        item.remark = "I dare you";
        item.content = "Spicy tomato onion fip, parmesan cheese, tosted flat bread, green chili pepper";
        item.price = 4.99;
        this.menuItems.push(item);
        item = new MenuItem();
        item.category = ("Deserts");
        item.name = "Chocolate Mountain";
        item.calories = "(510cal)";
        item.remark = "";
        item.content = "Vanilla ice cream, hot fudge chocolate, brownie, almonds";
        item.price = 5.99;
        this.menuItems.push(item);
    }
    LoadMenuItem() {
        this.errors.serviceMenuItemError = "";
    }
}