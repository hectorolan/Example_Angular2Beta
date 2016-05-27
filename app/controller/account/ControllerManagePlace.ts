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
import {PamSupport} from '../../service/pamsupport';
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
    
    //Original
    place: Place;
    schedule: Schedule;
    //Bind Forms
    formPlace: ControlGroup;
    formSchedule: Schedule;
    
    title: string;
    
    constructor(
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _servicePlace: ServicePlace,
        private _serviceSchedule: ServiceSchedule
    ){
    }
    ngOnInit(){
        //TODO
        /*
        * Here the app will look for the logged user to check
        * if a Place already exists, If not the user is creating the new
        * place. For now this only is for add places news
        */
        this.ngOnInit_BuildForm();
        this.title = "Create Place";
        this.formSchedule = new Schedule();
    }
    ngOnInit_BuildForm(){
        this.formPlace = this._formBuilder.group({
            name : new Control('', Validators.compose([
                Validators.required,
                Validators.maxLength(25),
                Validators.minLength(3),
            ])),
            city: new Control(''),
            image: [''],
            category: [''],
            type: [''],
            phoneNumber: [''],
            schedule: this._formBuilder.group({
                mondayOpen: [''],
                mondayClose: [''],
                tuesdayOpen: [''],
                tuesdayClose: [''],
                wednesdayOpen: [''],
                wednesdayClose: [''],
                thursdayOpen: [''],
                thursdayClose: [''],
                fridayOpen: [''],
                fridayClose: [''],
                saturdayOpen: [''],
                saturdayClose: [''],
                sundayOpen: [''],
                sundayClose:['']
            })
        });
        console.log(this.formPlace);
    }
    gotoMenu(){
        this._router.navigate(['SetMenu', {id: 1}]);
    }
    onSubmitSaveChanges(){
        if (this.onValFormValid()) {
            let command = this.getSubmitCommand();
        }
        console.error("Form not valid.");
    }
    onValFormValid(): boolean{
        console.info(this.formPlace.value);
        console.info(this.formPlace);
        /*if (PamSupport.isNullOrEmpty(this.formPlace.name)) {
            return false;
        }
        if (PamSupport.isNullOrEmpty(this.formPlace.type)){
            return false;
        }
        if (PamSupport.isNullOrEmpty(this.formPlace.category)){
            return false;
        }
        if (PamSupport.isNullOrEmpty(this.formPlace.city)){
            return false;
        }*/
        return true;
    }
    print(control: any){
        console.log(control);
        console.log(this.formPlace);
    }
    /**
     * Depending on the objects we will create new place/schedule or update.
     */
    getSubmitCommand(): string{
        return "";
    }
}

