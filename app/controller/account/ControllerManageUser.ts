//Library
import {Component} from '@angular/core';
//Model
import {Place} from '../../model/place';
//Controller
import {ControllerBase} from '../../controller/pamsupport/ControllerBase';
//Service
import {ServiceSessionData} from '../../service/servicesessiondata';
import {ServiceToolbar} from '../../service/servicetoolbar';

@Component({
    selector: 'controller-manageuser',
    templateUrl: '../../app/view/account/viewmanageuser.html',
    directives: [
    ]
})
export class ControllerManageUser extends ControllerBase {
    
    constructor(_serviceSessionData: ServiceSessionData, _serviceSessionToolbar: ServiceToolbar){
        super(_serviceSessionData, _serviceSessionToolbar);
    }
    onClickMenuBtn(button: string){

    }
}

