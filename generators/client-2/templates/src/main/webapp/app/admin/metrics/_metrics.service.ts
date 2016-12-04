import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class <%=jhiPrefixCapitalized%>MetricsService {

    constructor (private http: Http) {}

    getMetrics(): Observable<any> {
        return this.http.get('management/jhipster/metrics').map((res: Response) => res.json());
    }

    threadDump(): Observable<any> {
        return this.http.get('management/dump').map((res: Response) => res.json());
    }
}