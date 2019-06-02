import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Soccer } from './soccer';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
    providedIn: 'root'
})
export class SoccerService {
    private soccersUrl = 'http://localhost:8080/api/soccers';  // URL to web api
    /**
     *
     */
    constructor(
        private http: HttpClient
    ) {
    }
    getSoccers(): Observable<Soccer[]> {
        return this.http.get<Soccer[]>(this.soccersUrl);
    }

    getSoccer(id: number): Observable<Soccer> {
        const url = `${this.soccersUrl}/${id}`;
        return this.http.get<Soccer>(url);
    }

    addSoccer(soccer: Soccer): Observable<Soccer> {
        return this.http.post<Soccer>(this.soccersUrl, soccer, httpOptions);
    }

    deleteSoccer(soccer: Soccer | number): Observable<Soccer> {
        const id = typeof soccer === 'number' ? soccer : soccer.id;
        const url = `${this.soccersUrl}/${id}`;
        return this.http.delete<Soccer>(url, httpOptions);
    }

    updateSoccer(soccer: Soccer): Observable<any> {
        return this.http.put(this.soccersUrl, soccer, httpOptions);
    }
}
