//Library
import {Component, OnInit} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';
//Model
import {Place} from '../../model/Place';
//Controller
import {ControllerPlaceDetail} from '../../controller/place/ControllerPlaceDetail';
import {ControllerPlaceMenu} from '../../controller/place/ControllerPlaceMenu';
//Service
import {ServicePlace} from '../../service/serviceplace';

@Component({
    selector: 'controller-place',
    templateUrl: '../../app/view/place/viewplace.html',
    styleUrls: ['../../app/style/place/styleplace.css'],
    directives: [
        ControllerPlaceDetail, 
        ControllerPlaceMenu
    ]
})
export class ControllerPlace implements OnInit {
    place: Place;
    error: string;
    status: string;
    
    constructor(
        private _servicePlace: ServicePlace,
        private _router: Router,
        private _routeParams: RouteParams){
    }
    ngOnInit(){
        this.place = new Place();
        let id = +this._routeParams.get('id');
        if (!id) {
            id = -1;
        }
        this.getPlace(id);
    }
    getPlace(id: number){
        this._servicePlace.getPlace(id)
            .subscribe(
                place => this.place = place,
                error => this.error = <string>error
            );
    }
}