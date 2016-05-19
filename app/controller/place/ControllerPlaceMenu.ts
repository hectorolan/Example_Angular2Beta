//Library
import {Component, OnInit} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
import {Observable} from 'rxjs/Observable';
import Rx from 'rxjs/Rx';
//Model
import {MenuItem} from '../../model/menuItem';
//Service
import {ServiceMenuItem} from '../../service/servicemenuitem';

@Component({
    selector: 'controller-placemenu',
    templateUrl: '../../app/view/place/viewplacemenu.html',
    styleUrls: ['../../app/style/place/styleplacemenu.css']
})
export class ControllerPlaceMenu implements OnInit {
    menuItems: MenuItem[] = [];
    categories: string[] = [];
    error: string;

    constructor(
        private _routeParams: RouteParams,
        private _serviceMenu: ServiceMenuItem) {
    }
    ngOnInit() {
        let placeId = +this._routeParams.get('id');
        this.getMenus(placeId);
    }
    getMenus(placeId: number) {
        this._serviceMenu.getMenuItems(placeId)
            .subscribe(
                menuItems => this.menuItems = menuItems,
                error => this.error = <string>error,
                () => this.getCategories(this.menuItems)
            );
    }
    getCategories(menus: MenuItem[]) {
        Rx
        .Observable
        .from(menus)
        .map((m:MenuItem) => m.category)
        .distinctUntilChanged()
        .subscribe(category => this.categories.push(category));
    }
    /*
    * Style Background */
    setStyleBackground(category: string) {
        let i: number;
        for (i = 0; i < this.categories.length; i++) {
            if (this.categories[i] == category) {
                break;
            }
        }
        let styles = {
            // CSS property names
            'background': (i % 2 != 0) ? '#f0f3f5' : '#f3f5f0',  // background
        }
        return styles;
    }
}