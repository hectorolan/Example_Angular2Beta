//Library
import {Component, OnInit} from '@angular/core';
import {NgForm}    from '@angular/common';
import {Router} from '@angular/router-deprecated';
import {ControlGroup, Control, FormBuilder, AbstractControl, Validators} from '@angular/common';
//Model
import {Place} from '../../model/place';
import {Schedule} from '../../model/schedule';
//Controller
import {ControllerManageMenu} from '../../controller/account/ControllerManageMenu';
import {ControllerFieldValidation} from '../../controller/pamsupport/ControllerFieldValidation';
//Service
import {ServicePlace} from '../../service/serviceplace';
import {ServiceSchedule} from '../../service/serviceschedule';
import {Log} from '../../service/log';

@Component({
    selector: 'controller-manageplace',
    templateUrl: '../../app/view/account/viewmanageplace.html',
    styleUrls: ['../../app/styles/account/stylemanageplace.css'],
    directives: [
        ControllerManageMenu,
        ControllerFieldValidation
    ]
})
export class ControllerManagePlace implements OnInit {
    /*
    * To make diferent:
    * place.id == null ? then is new Place to create
    * if not: Edit Place*/

    formPlace: ControlGroup;
    originalPlace: Place;
    originalSchedule: Schedule;
    errorSaving: string;
    title: string;

    constructor(
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _servicePlace: ServicePlace,
        private _serviceSchedule: ServiceSchedule
    ) {
    }
    ngOnInit() {
        //TODO
        /*
        * Here the app will look for the logged user to check
        * if a Place already exists, If not the user is creating the new
        * place. For now this only is for add places news
        */
        this.title = "Create Place";
        this.ngOnInit_BuildForm();
        this.ngOnInit_GetSavedPlace();
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
        console.log(this.formPlace);
    }
    ngOnInit_GetSavedPlace() {
        this.originalPlace = new Place();
        this.originalSchedule = new Schedule();
    }

    /* Btn Menu - Ask for Save, Move to Menu */
    gotoMenu() {
        let place = this.placeFromControl();
        let schedule = this.scheduleFromControl();
        this.save();
        this._router.navigate(['SetMenu', { id: 1 }]);
    }

    /* Submit Form - Save */
    onSubmitSaveChanges() {
        this.save();
    }
    /* Save */
    save() {
        //if id exists - update Place
        if (this.originalPlace.id) {
            this.save_Update();
            return;
        }
        //Creating new Place
        this.save_New();
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
        if (Place.equal(place, this.originalPlace) && Schedule.equal(schedule, this.originalSchedule)) {
            //Nothing Change - ..TODO Tell the user everything is untouched
            Log.writeMessage("Place has no changes from original");
            if (Schedule.equal(schedule, this.originalSchedule)) {
                Log.writeMessage("Schedule has no changes from original");
            }
            return;
        }
        //Save
        if (!Place.equal(place, this.originalPlace)) {
            Log.writeMessage("Place has diferences");
            place.id = this.originalPlace.id;
            place.userId = this.originalPlace.userId;
            this._servicePlace.updatePlace(place).subscribe(
                place => this.save_ObservableSetPlace('Update', place),
                error => this.save_ObservableSetError('errorUpdate', error)
            );
        }
        if (!Schedule.equal(schedule, this.originalSchedule)) {
            Log.writeMessage("Schedule has diferences");
            schedule.id = this.originalSchedule.id;
            schedule.placeId = this.originalSchedule.placeId;
            this._serviceSchedule.updateSchedule(schedule).subscribe(
                schedule => this.save_ObservableSetSchedule('Update', schedule),
                error => this.save_ObservableSetError('errorUpdate', error)
            );
        }
    }
    save_ObservableSetPlace(message: string, place: Place) {
        Log.writeMessage(place.name + ":" + message);
        this.originalPlace = place;
    }
    save_ObservableSetSchedule(message: string, schedule: Schedule) {
        Log.writeMessage(schedule.placeId + "id:" + message);
        this.originalSchedule = schedule;
    }
    save_ObservableSetError(key: string, error: any) {
        Log.writeMessage(error);
        this.errorSaving = <string>error;
    }
    /* Save Helpers - End */

    /* Get Place from control */
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
    /* Get Schedule from control */
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
}

