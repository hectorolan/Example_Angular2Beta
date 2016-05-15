import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Place} from '../../model/Place';
import {MenuItem} from '../../model/menuItem';

@Component({
    selector: 'controller-setmenu',
    templateUrl: '../../app/view/account/viewsetmenu.html',
    styleUrls: ['../../app/style/account/stylesetmenu.css']
})
export class ControllerSetMenu implements OnInit {
    
    constructor(
        private _router: Router
    ){
    }
    ngOnInit(){
        
    }
    gotoPlace(){
        this._router.navigate(['ManagePlace', {id: 1}]);
    }
}