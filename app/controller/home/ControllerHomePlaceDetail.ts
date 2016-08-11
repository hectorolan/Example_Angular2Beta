//Library
import {Component, Input} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
//Model
import {Place} from '../../model/place';
//Controller
import {ControllerBase} from '../../controller/pamsupport/ControllerBase';
//Service
import {ServiceSessionData} from '../../service/servicesessiondata';
import {ServiceToolbar} from '../../service/servicetoolbar';

@Component({
    selector: 'controller-homeplacedetail',
    templateUrl: '../../app/view/home/viewhomeplacedetail.html'
})
export class ControllerHomePlaceDetail extends ControllerBase {
    @Input() place: Place;
    title: string;
    
    constructor(
        _serviceSessionData: ServiceSessionData, 
        _serviceToolbar: ServiceToolbar,
        private _routeParams: RouteParams){
            super(_serviceSessionData, _serviceToolbar);
    }
    ngOnInit(){
        super.ngOnInit();
        let id = +this._routeParams.get('id');
        this.title = this.getTitle();
    }
    onClickMenuBtn(button: string){
        
    }
    getTitle(){
        return "Hme";
    }
}