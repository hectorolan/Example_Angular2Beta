import {Injectable} from '@angular/core';
//Models
import {User} from '../../app/model/user';
//Log
import {Log} from '../../app/service/log';

@Injectable()
export class ServiceSessionData {
    //Main Controllers
    //Session Variables
    static user: User;
    static currentPage: string;

    constructor() {
    }

}