//Library
import {Component, OnInit} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
//Model
import {Schedule} from '../../model/schedule';
//Service
import {ServiceSchedule} from '../../service/serviceschedule';

@Component({
    selector: 'controller-placeschedule',
    templateUrl: '../../app/view/place/viewplaceschedule.html',
    styleUrls: [
        '../../app/styles/place/styleplaceschedule.css'
    ]
})
export class ControllerPlaceSchedule implements OnInit{
    schedule: Schedule;
    error: string;
    days: string[];
    
    constructor(
        private _routeParams: RouteParams,
        private _serviceSchedule: ServiceSchedule){
    }
    ngOnInit(){
        let placeId: number = +this._routeParams.get('id');
        this.getSchedule(placeId);
        this.days = this.getDays();
    }
    getSchedule(placeId: number){
        this._serviceSchedule.getSchedule(placeId)
        .subscribe(
            schedule => this.schedule = schedule,
            error => this.error = <any> error
        );
    }
    getDays(){
        let days: string[] = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thrusday",
            "Friday",
            "Saturday"
        ];
        return days;
    }
}