import {Injectable} from '@angular/core';
//Models
import {User} from '../../app/model/user';
//Log
import {Log} from '../../app/service/log';
//controllers
import {ControllerManagePlace} from '../../app/controller/account/ControllerManagePlace';
import {ControllerManagePlaceDetail} from '../../app/controller/account/place/ControllerManagePlaceDetail';
import {ControllerManageMenu} from '../../app/controller/account/place/ControllerManageMenu';
import {ControllerManageMenuDetail} from '../../app/controller/account/place/ControllerManageMenuDetail';
import {ControllerManageMenuEdit} from '../../app/controller/account/place/ControllerManageMenuEdit';
import {ControllerManageUser} from '../../app/controller/account/ControllerManageUser';
import {ControllerHome} from '../../app/controller/home/ControllerHome';
import {ControllerHomePlaceDetail} from '../../app/controller/home/ControllerHomePlaceDetail';
import {ControllerPlace} from '../../app/controller/place/ControllerPlace';
import {ControllerPlaceDetail} from '../../app/controller/place/ControllerPlaceDetail';
import {ControllerPlaceMenu} from '../../app/controller/place/ControllerPlaceMenu';
import {ControllerPlaceSchedule} from '../../app/controller/place/ControllerPlaceSchedule';

@Injectable()
export class ServiceSessionData {

    constructor() {
    }

}