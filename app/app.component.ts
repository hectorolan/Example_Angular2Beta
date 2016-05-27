import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {CORE_DIRECTIVES} from '@angular/common';
import {FORM_DIRECTIVES} from '@angular/common';
import {ControllerPlace} from '../app/controller/place/ControllerPlace';
import {ControllerHome} from '../app/controller/home/ControllerHome';
import {ControllerManagePlace} from '../app/controller/account/ControllerManagePlace';
import {ControllerManageMenu} from '../app/controller/account/ControllerManageMenu';
import {ControllerManageUser} from '../app/controller/account/ControllerManageUser';
import {ServicePlace} from '../app/service/serviceplace';
import {ServiceMenuItem} from '../app/service/servicemenuitem';
import {ServiceSchedule} from '../app/service/serviceschedule';

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
        path: '/account/place/menu',
        name: 'SetMenu',
        component: ControllerManageMenu
    },
    {
        path: '/account',
        name: "ManageUser",
        component: ControllerManageUser
    }
])
@Component({
    selector: 'pam',
    templateUrl: 'app/view/viewapp.component.html',
    styleUrls: [
        'app/styles/styleviewapp.component.css'
    ],
    directives: [
        ROUTER_DIRECTIVES,
        CORE_DIRECTIVES,
        FORM_DIRECTIVES
    ],
    providers: [
        ServiceMenuItem,
        ServicePlace,
        ServiceSchedule,
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS
    ]
})
export class AppComponent { }
//
