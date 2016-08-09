//Library
import {Component, OnInit, OnDestroy} from '@angular/core';
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
import {ServiceToolbar, IActionBar} from '../../../service/servicetoolbar';
import {ServiceMenuItem} from '../../../service/servicemenuitem';
//Log
import {Log} from '../../../service/log';

@Component({
    selector: 'controller-managemenu',
    templateUrl: '../../../app/view/account/place/viewmanagemenu.html'
})
export class ControllerManageMenuEdit extends ControllerBase {
    //Database original objects
    dbMenuItem: MenuItem;
    errors = {
        serviceMenuItemError: ""
    };
    //Component Data
    categories: string[] = [];
    menuItems: MenuItem[] = [];
    formItem: ControlGroup;

    constructor(
        _serviceToolbar: ServiceToolbar,
        _serviceSessionData: ServiceSessionData,
        private _formBuilder: FormBuilder,
        private _router: Router,
        private _serviceMenuItem: ServiceMenuItem
    ) {
        super(_serviceSessionData, _serviceToolbar);
    }
    ngOnInit() {
        super.ngOnInit();
        this.LoadDBData();
        this.ngOnInit_BuildForm();
    }
    ngOnInit_BuildForm() {
        this.formItem = this._formBuilder.group({
            name: new Control('', Validators.compose([
                Validators.required,
                Validators.maxLength(25),
                Validators.minLength(3),
            ])),
            content: new Control(''),
            price: new Control(''),
            image: new Control(''),
            category: new Control(''),
            remark: new Control(''),
            calories: new Control('')
        });
        Log.writeMessage("---Item Form Created")
        Log.writeMessage(this.formItem);
    }
    onClickMenuBtn(button: string) {
        switch (button) {
            case ServiceToolbar.BTNADD:
                break;
            default:
                break;
        }
    }
    saveEditor() {

    }
    save() {
        Log.writeMessage("---Save in Manage Menu");
    }
    //Load Data from services
    LoadDBData() {
    }
    LoadMenuItem() {
        this.errors.serviceMenuItemError = "";
    }
}