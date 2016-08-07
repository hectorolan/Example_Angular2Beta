//Library
import {Component} from '@angular/core';
//Controller
import {ControllerBase} from '../../../controller/pamsupport/ControllerBase';
import {ControllerManageMenuDetail} from '../../../controller/account/place/controllermanagemenudetail';
import {ControllerManageMenuEdit} from '../../../controller/account/place/controllermanagemenuedit';
//ServiceMenuItem
import {ServiceSessionData} from '../../../service/servicesessiondata';
import {ServiceToolbar} from '../../../service/servicetoolbar';
//Log
import {Log} from '../../../service/log';

@Component({
    selector: 'controller-managemenu',
    templateUrl: '../../../app/view/account/place/viewmanagemenu.html',
    directives: [
        ControllerManageMenuDetail,
        ControllerManageMenuEdit
    ]
})
export class ControllerManageMenu extends ControllerBase {
    menuDetailVisible = true;
    menuEditVisible = false;
    constructor(_serviceToolbar: ServiceToolbar, _serviceSessionData: ServiceSessionData) {
        super(_serviceSessionData, _serviceToolbar);
    }
    onClickMenuBtn(button: string) {
        return;
    }
}