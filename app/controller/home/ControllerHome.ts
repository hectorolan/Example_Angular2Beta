//Library
import {Component, OnInit} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';
import {Observable} from 'rxjs/Observable';
//Model
import {Place} from '../../model/Place';
//Controller
import {ControllerHomePlaceDetail} from '../../controller/home/ControllerHomePlaceDetail';
//Service
import {ServicePlace} from '../../service/serviceplace'

@Component({
    selector: 'controller-home',
    templateUrl: '../../app/view/home/viewhome.html',
    styleUrls: ['../../app/style/home/stylehome.css'],
    directives: [
        ControllerHomePlaceDetail
    ]
})
export class ControllerHome implements OnInit {
    places: Place[] = [];
    error: string;
    
    colorset: number = 0;

    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _servicePlace: ServicePlace) {
    }
    ngOnInit() {
        let id = +this._routeParams.get('id');
        this.getPlaces();
    }
    /*
     * Get Places */
    getPlaces() {
        this._servicePlace.getPlaces()
            .subscribe(
            places => this.places = places,
            error => this.error = <string>error);
    }
    /*
     * Go to Place */
    toPlace(place: Place){
        this._router.navigate(['Place', {id: place.id}]);
    }
    /*
     * Style Background */
    setStyleBackground() {
        let styles = {
            // CSS property names
            'background': (this.colorset++ % 2 != 0) ? '#f0f3f5' : '#f3f5f0',  // background
        }
        return styles;
    }
} 