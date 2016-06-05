//Library
import {Component, Input, OnInit} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
//Model
import {Place} from '../../model/place';
//Controller
import {ControllerPlaceSchedule} from '../../controller/place/ControllerPlaceSchedule';

@Component({
    selector: 'controller-placedetail',
    templateUrl: '../../app/view/place/viewplacedetail.html',
    directives: [
        ControllerPlaceSchedule
    ]
})
export class ControllerPlaceDetail implements OnInit {
    @Input() place: Place;
    title: string;
    info: string[];
    
    constructor(
        private _routeParams: RouteParams){
    }
    ngOnInit(){
        let id = +this._routeParams.get('id');
        this.title = this.getTitle();
        this.info = this.getInfo();
    }
    getTitle(){
        return "Information";
    }
    getInfo(){
        let info: string[] =[
            "Open Hours"
        ];
        return info;
    }
}