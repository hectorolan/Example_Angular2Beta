import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {ControllerPlace} from '../../app/controller/place/ControllerPlace';
import {ControllerHome} from '../../app/controller/home/ControllerHome';
import {ControllerManagePlace} from '../../app/controller/account/ControllerManagePlace';
import {ControllerManagePlaceDetail} from '../../app/controller/account/place/ControllerManagePlaceDetail';
import {ControllerManageMenu} from '../../app/controller/account/place/ControllerManageMenu';
import {ControllerManageUser} from '../../app/controller/account/ControllerManageUser';
import {ServiceSessionData} from '../../app/service/servicesessiondata';
import {ServiceToolbar} from '../../app/service/servicetoolbar';
import {ServicePlace} from '../../app/service/serviceplace';
import {ServiceMenuItem} from '../../app/service/servicemenuitem';
import {ServiceSchedule} from '../../app/service/serviceschedule';

@RouteConfig([
    {
        path: '/pam',
        name: "Home",
        component: ControllerHome,
        useAsDefault: true
    },
    {
        path: '/place/:id',
        name: "Place",
        component: ControllerPlace
    },
    {
        path: '/account/place',
        name: "ManagePlace",
        component: ControllerManagePlace
    },
    {
        path: '/account',
        name: "ManageUser",
        component: ControllerManageUser
    }
])
@Component({
    selector: 'pam',
    templateUrl: 'app/view/viewmain.html',
    directives: [
        ROUTER_DIRECTIVES,
        CORE_DIRECTIVES,
        FORM_DIRECTIVES
    ],
    providers: [
        ServiceSessionData,
        ServiceToolbar,
        ServiceMenuItem,
        ServicePlace,
        ServiceSchedule,
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS
    ]
})
export class AppComponent {
    constructor(
        private _serviceToolbar: ServiceToolbar
    ) { }
}
//
