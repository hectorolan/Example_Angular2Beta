import {Component, OnInit} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
import {Schedule} from '../../model/schedule';
import {ServiceSchedule} from '../../service/serviceschedule';

@Component({
    selector: 'controller-placeschedule',
    templateUrl: '../../app/view/place/viewplaceschedule.html',
    styleUrls: [
        '../../app/style/place/styleplaceschedule.css'
    ]
})
export class ControllerPlaceSchedule implements OnInit{
    schedule: Schedule;
    days: string[];
    
    constructor(
        private _routeParams: RouteParams,
        private _serviceSchedule: ServiceSchedule){
    }
    ngOnInit(){
        let id: number = +this._routeParams.get('id');
        this.getSchedule(id);
        this.days = this.getDays();
    }
    getSchedule(id){
        
        let schedule = new Schedule();
        schedule.id = 1;
        schedule.sundayOpen = "-";
        schedule.sundayClose = "-";
        schedule.mondayOpen = "5:00pm";
        schedule.mondayClose = "11:00pm";
        schedule.tuesdayOpen = "4:00pm";
        schedule.tuesdayClose = "11:00pm";
        schedule.wednesdayOpen = "11:00am";
        schedule.wednesdayClose = "11:00pm";
        schedule.thursdayOpen = "8:00am";
        schedule.thursdayClose = "11:00pm";
        schedule.fridayOpen = "8:00am";
        schedule.fridayClose = "11:00pm";
        schedule.saturdayOpen = "8:00am";
        schedule.saturdayClose = "11:00pm";
        schedule.placeId = id;
        return schedule;
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