//Library
import {Component, Input, OnInit} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
//Model
import {Place} from '../../model/place';

@Component({
    selector: 'controller-homeplacedetail',
    templateUrl: '../../app/view/home/viewhomeplacedetail.html',
    styleUrls:['../../app/styles/home/stylehomeplacedetail.css']
})
export class ControllerHomePlaceDetail implements OnInit {
    @Input() place: Place;
    title: string;
    
    constructor(
        private _routeParams: RouteParams){
    }
    ngOnInit(){
        let id = +this._routeParams.get('id');
        this.title = this.getTitle();
    }
    getTitle(){
        return "Hme";
    }
}