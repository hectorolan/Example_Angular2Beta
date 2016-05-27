//Library
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
//Model
import {Place} from '../../model/Place';
import {MenuItem} from '../../model/menuItem';
//ServiceMenuItem
import {ServiceMenuItem} from '../../service/servicemenuitem';

@Component({
    selector: 'controller-managemenu',
    templateUrl: '../../app/view/account/viewmanagemenu.html',
    styleUrls: ['../../app/styles/account/stylemanagemenu.css']
})
export class ControllerManageMenu implements OnInit {
    
    constructor(
        private _router: Router,
        private _serviceMenuItem: ServiceMenuItem
    ){
    }
    ngOnInit(){
        
    }
    gotoPlace(){
        this._router.navigate(['ManagePlace', {id: 1}]);
    }
}