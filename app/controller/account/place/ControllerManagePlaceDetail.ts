//Library
import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgForm} from '@angular/common';
import {ControlGroup, Control, FormBuilder, AbstractControl, Validators} from '@angular/common';
//Model
import {Place} from '../../../model/place';
import {Schedule} from '../../../model/schedule';
//Controller
import {ControllerBase} from '../../../controller/pamsupport/ControllerBase';
import {ControllerFieldValidation} from '../../../controller/pamsupport/ControllerFieldValidation';
//Service
import {ServiceSessionData} from '../../../service/servicesessiondata';
import {ServiceToolbar, IActionBar} from '../../../service/servicetoolbar';
import {ServicePlace} from '../../../service/serviceplace';
import {ServiceSchedule} from '../../../service/serviceschedule';
//Log
import {Log} from '../../../service/log';

@Component({
    selector: 'controller-manageplace',
    templateUrl: '../../../app/view/account/place/viewmanageplacedetail.html',
    directives: [
        ControllerFieldValidation
    ]
})
export class ControllerManagePlaceDetail extends ControllerBase {
    dbPlace: Place;
    dbSchedule: Schedule;
    errors = {
        servicePlaceError: "",
        serviceScheduleError: "",
        errorSaving: ""
    };
    formPlace: ControlGroup;
    
    /* Constructor */
    constructor(
        _serviceToolbar: ServiceToolbar,
        _serviceSessionData: ServiceSessionData,
        private _formBuilder: FormBuilder,
        private _servicePlace: ServicePlace,
        private _serviceSchedule: ServiceSchedule
    ) {
        super(_serviceSessionData,_serviceToolbar);
    }
    /* OnInit */
    ngOnInit() {
        super.ngOnInit();
        this.setActionBar(ServiceToolbar.MENUMANAGEPLACE);
        this.ngOnInit_BuildForm();
        this.LoadPlace();
        this.LoadSchedule();
    }
    ngOnInit_BuildForm() {
        this.formPlace = this._formBuilder.group({
            name: new Control('', Validators.compose([
                Validators.required,
                Validators.maxLength(25),
                Validators.minLength(3),
            ])),
            city: new Control('', Validators.required),
            //validate file.
            image: new Control(''),
            category: new Control('', Validators.required),
            type: new Control('', Validators.required),
            phoneNumber: new Control(''),
            mondayOpen: new Control(''),
            mondayClose: new Control(''),
            tuesdayOpen: new Control(''),
            tuesdayClose: new Control(''),
            wednesdayOpen: new Control(''),
            wednesdayClose: new Control(''),
            thursdayOpen: new Control(''),
            thursdayClose: new Control(''),
            fridayOpen: new Control(''),
            fridayClose: new Control(''),
            saturdayOpen: new Control(''),
            saturdayClose: new Control(''),
            sundayOpen: new Control(''),
            sundayClose: new Control('')
        });
        Log.writeMessage("---Place Form Created")
        Log.writeMessage(this.formPlace);
    }
    onClickMenuBtn(button: string){
        Log.writeMessage("---Click menu on Manage Account Place");
        switch (button) {
            case ServiceToolbar.BTNSAVE:
                alert("Click Save on PlaceDetail");
                //this.save();
                break;
            default:
                break;
        }
    }
    /* Save */
    save() {
        Log.writeMessage("---Save on Manage Account Place");
        //if id exists - update Place
        if (this.dbPlace && this.dbPlace.id) {
            this.save_Update();
            return;
        }
        //Creating new Place
        this.save_New();
    }
    /* Get Place, Scheule from database */
    LoadPlace() {
        this.dbPlace = new Place();
        this.dbPlace.name = "El Restaurante";
        this.errors.servicePlaceError = "";
    }
    LoadSchedule() {
        this.dbSchedule = new Schedule();
        this.errors.serviceScheduleError = "";
    }
    /* Get Place, Schedule from control */
    placeFromControl(): Place {
        let place: Place = new Place();
        place.name = this.formPlace.controls['name'].value;
        place.category = this.formPlace.controls['category'].value;
        place.city = this.formPlace.controls['city'].value;
        place.type = this.formPlace.controls['type'].value;
        place.image = this.formPlace.controls['image'].value;
        place.phoneNumber = this.formPlace.controls['phoneNumber'].value;
        return place;
    }
    scheduleFromControl(): Schedule {
        let schedule: Schedule = new Schedule();
        schedule.sundayOpen = this.formPlace.controls['sundayOpen'].value;
        schedule.sundayClose = this.formPlace.controls['sundayClose'].value;
        schedule.mondayOpen = this.formPlace.controls['mondayOpen'].value;
        schedule.mondayClose = this.formPlace.controls['mondayClose'].value;
        schedule.tuesdayOpen = this.formPlace.controls['tuesdayOpen'].value;
        schedule.tuesdayClose = this.formPlace.controls['tuesdayClose'].value;
        schedule.wednesdayOpen = this.formPlace.controls['wednesdayOpen'].value;
        schedule.wednesdayClose = this.formPlace.controls['wednesdayClose'].value;
        schedule.thursdayOpen = this.formPlace.controls['thursdayOpen'].value;
        schedule.thursdayClose = this.formPlace.controls['thursdayClose'].value;
        schedule.fridayOpen = this.formPlace.controls['fridayOpen'].value;
        schedule.fridayClose = this.formPlace.controls['fridayClose'].value;
        schedule.saturdayOpen = this.formPlace.controls['saturdayOpen'].value;
        schedule.saturdayClose = this.formPlace.controls['saturdayClose'].value;
        return schedule;
    }

    /* Save Helpers - Start */
    save_Confirm() {
        //..TODO Yes, No, Cancel (cancel stops the page from moveon)
        return true;
    }
    save_New() {
        let place: Place = this.placeFromControl();
        this._servicePlace.addPlace(place)
            .subscribe(
            place => this.save_Schedule(place),
            error => this.save_ObservableSetError('errorNew', error));
    }
    save_Schedule(place: Place) {
        //Called just when new
        this.save_ObservableSetPlace('New', place);
        let schedule: Schedule = this.scheduleFromControl();
        this._serviceSchedule.addSchedule(place.id, schedule)
            .subscribe(
            schedule => this.save_ObservableSetSchedule('New', schedule),
            error => this.save_ObservableSetError('errorNew', error)
            );
    }
    save_Update() {
        let place: Place = this.placeFromControl();
        let schedule: Schedule = this.scheduleFromControl();
        if (Place.equal(place, this.dbPlace) && Schedule.equal(schedule, this.dbSchedule)) {
            //Nothing Change - ..TODO Tell the user everything is untouched
            Log.writeMessage("Place has no changes from original");
            if (Schedule.equal(schedule, this.dbSchedule)) {
                Log.writeMessage("Schedule has no changes from original");
            }
            return;
        }
        //Save
        if (!Place.equal(place, this.dbPlace)) {
            Log.writeMessage("Place has diferences");
            place.id = this.dbPlace.id;
            place.userId = this.dbPlace.userId;
            this._servicePlace.updatePlace(place).subscribe(
                place => this.save_ObservableSetPlace('Update', place),
                error => this.save_ObservableSetError('errorUpdate', error)
            );
        }
        if (!Schedule.equal(schedule, this.dbSchedule)) {
            Log.writeMessage("Schedule has diferences");
            schedule.id = this.dbSchedule.id;
            schedule.placeId = this.dbSchedule.placeId;
            this._serviceSchedule.updateSchedule(schedule).subscribe(
                schedule => this.save_ObservableSetSchedule('Update', schedule),
                error => this.save_ObservableSetError('errorUpdate', error)
            );
        }
    }
    save_ObservableSetPlace(message: string, place: Place) {
        Log.writeMessage(place.name + ":" + message);
        this.dbPlace = place;
    }
    save_ObservableSetSchedule(message: string, schedule: Schedule) {
        Log.writeMessage(schedule.placeId + "id:" + message);
        this.dbSchedule = schedule;
    }
    save_ObservableSetError(key: string, error: any) {
        Log.writeMessage(error);
        this.errors.errorSaving = <string>error;
    }
    /* Save Helpers - End */
}

