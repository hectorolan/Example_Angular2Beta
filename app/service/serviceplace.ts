import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Place} from '../../app/model/place';
import {Log} from '../../app/service/log';
import {Observable} from 'rxjs/Observable';
//import "rxjs";

@Injectable()
export class ServicePlace {
    path: string = "http://localhost:8080/restful-pam/webapi/place";

    constructor(
        private http: Http
    ) {
    }
    /*
     * Get a list of Places by criteria*/
    getPlaces(): Observable<Place[]> {
        let options = this.getOptions();
        return this.http.get(this.path, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    /*
     * Get a specific Place*/
    getPlace(id: number): Observable<Place> {
        let options = this.getOptions();
        return this.http.get(this.path + "/" + id, options)
            .map(this.extractData)
            .catch(this.handleError);
    } 
    /*
     * Save a new Place*/
    addPlace(name: string): Observable<Place> {
        //TODO
        let body = JSON.stringify({ name });
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