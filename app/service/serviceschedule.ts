import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Schedule} from '../../app/model/schedule';
import {Log} from '../../app/service/log';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ServiceSchedule {
    path: string = "http://localhost:8080/restful-pam/webapi/place/";
    
    constructor(
        private http: Http
    ) {
    }
    /*
     * Get place schedule*/
    getSchedule(placeId: number): Observable<Schedule> {
        let options = this.getOptions();
        return this.http.get(this.path + placeId + "/schedule", options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    /*
     * Save new schedule*/
    addSchedule(schedule: Schedule): Observable<Schedule> {
        //TODO
        let body = JSON.stringify({ schedule });
        let options = this.getOptions();
        return this.http.post(this.path, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    /*
     * Set Header */
    private getOptions(): RequestOptions{
        let headers = new Headers({ 
                'Content-Type': 'application/json'
            });
        headers.append("Authorization","Basic " + btoa("hector"+":"+"olan"))
        let options = new RequestOptions({ headers: headers });
        return options;
    }
    /*
     * Get Request*/
    private extractData(response: Response) {
        if (response.status < 200 || response.status >= 300) {
            try {
            throw new Error('E:' + response.status);
            }catch(
                ex
            ){}
        }
        let body = response.json();
        Log.writeError(body);
        return body || {};
    }
    /*
     * Error*/
    private handleError(error: any) {
        let message = error.message || 'Server error';
        Log.writeError(message);
        return Observable.throw(message);
    }
}