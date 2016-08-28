//Library
import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import {Control, Validators} from '@angular/common';
//Controller
import {ControllerBase} from './ControllerBase';

@Component({
    selector: 'controller-dialogfeedback',
    templateUrl: '../../app/view/pamsupport/viewdialogfeedback.html'
})
export class ControllerDialogFeedback  implements OnInit {
    @ViewChild('dialog') dialog: ElementRef;
    mainController: IDialog;
    message: string;
    config: string;

    //Buttons
    static BTNOK: string = "Ok";
    static BTNCANCEL: string= "Cancel";
    static BTNYES: string = "Yes";
    static BTNNO: string = "No";
    private btnOkVisible: boolean = false;
    private btnCancelVisible: boolean = false;
    private btnYesVisible: boolean = false;
    private btnNoVisible: boolean = false;
    //Config
    static CFGYESNO: string = "YesNoButtons";
    static CFGYESCANCEL: string = "YesCancelButtons";
    static CFGOK: string = "OkButton";
    static CFGCANCEL: string = "CancelButton";
    static CFGOKCANCEL: string = "OkCancelButtons";
    //Constructor
    constructor(){
    }
    ngOnInit(){
    }
    setConfiguration(message: string, config: string){
        this.message = message;
        this.config = config;
        //init
        this.btnYesVisible = false;
        this.btnNoVisible = false;
        this.btnOkVisible = false;
        this.btnCancelVisible = false;
        //Set Button Configuration
        switch (this.config){
            case ControllerDialogFeedback.CFGYESNO:
                this.btnYesVisible = true;
                this.btnNoVisible = true;
                break;
            case ControllerDialogFeedback.CFGOKCANCEL:
                this.btnOkVisible = true;
                this.btnNoVisible = true;
                break;
            case ControllerDialogFeedback.CFGYESCANCEL:
                this.btnYesVisible = true;
                this.btnCancelVisible = true;
                break;
            case ControllerDialogFeedback.CFGCANCEL:
                this.btnCancelVisible = true;
                break;
            case ControllerDialogFeedback.CFGOK:
            default:
                this.btnOkVisible = true;
                break;
        }
        this.dialog.nativeElement.showModal();
    }
    onUserResponse(response: string){
        this.mainController.onDialogResponse(this.message, response);
        this.dialog.nativeElement.close();
    }
}
export interface IDialog {
    onDialogResponse(message: string, response: string): void;
}