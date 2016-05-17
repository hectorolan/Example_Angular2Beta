//Library
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
//Model
import {Place} from '../../model/Place';
import {MenuItem} from '../../model/menuItem';
//ServiceMenuItem
import {ServiceMenuItem} from '../../service/servicemenuitem';

@Component({
    selector: 'controller-setmenu',
    templateUrl: '../../app/view/account/viewmanagemenu.html',
    styleUrls: ['../../app/style/account/stylemanagemenu.css']
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