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
    @Input() mainController: IDialog;
    @ViewChild('dialog') dialog: ElementRef;
    message: string;
    config: string;
    visible: boolean = false;

    //Buttons
    static BTNOK: string = "ButtonOk";
    static BTNCANCEL: string= "ButtonCancel";
    static BTNYES: string = "ButtonYes";
    static BTNNO: string = "ButtonNo";
    private btnOkVisible: boolean = false;
    private btnCancelVisible: boolean = false;
    private btnYesVisible: boolean = false;
    private btnNoVisible: boolean = false;
    //Config
    static CFGYESNO: string = "YesNoButtons";
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