//Library
import {Component} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';
import {Observable} from 'rxjs/Observable';
//Model
import {Place} from '../../model/Place';
//Controller
import {ControllerBase} from '../../controller/pamsupport/ControllerBase';
import {ControllerHomePlaceDetail} from '../../controller/home/ControllerHomePlaceDetail';
//Service
import {ServiceSessionData} from '../../service/servicesessiondata';
import {ServiceToolbar} from '../../service/servicetoolbar';
import {ServicePlace} from '../../service/serviceplace'

@Component({
    selector: 'controller-home',
    templateUrl: '../../app/view/home/viewhome.html',
    directives: [
        ControllerHomePlaceDetail
    ]
})
export class ControllerHome extends ControllerBase {
    places: Place[] = [];
    error: string;
    colorset: number = 0;

    constructor(
        _serviceSessionData: ServiceSessionData, 
        _serviceToolbar: ServiceToolbar,
        private _router: Router,
        private _routeParams: RouteParams,
        private _servicePlace: ServicePlace) {
            super(_serviceSessionData, _serviceToolbar);
    }
    ngOnInit() {
        super.ngOnInit();
        this.getPlaces();
    }
    onClickMenuBtn(button: string){
        
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