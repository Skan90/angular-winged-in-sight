import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bird } from './bird';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root' })
export class BirdService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    public getBird(): Observable<Bird[]> {
        return this.http.get<Bird[]>(`${this.apiServerUrl}/bird/all`);
    }

    public addBird(bird: Bird): Observable<Bird> {
        return this.http.post<Bird>(`${this.apiServerUrl}/bird/add`, bird);
    }

    public updateBird(bird: Bird): Observable<Bird> {
        return this.http.put<Bird>(`${this.apiServerUrl}/bird/update`, bird);
      }

    public deleteBird(birdId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/bird/delete/${birdId}`);
    }
}

