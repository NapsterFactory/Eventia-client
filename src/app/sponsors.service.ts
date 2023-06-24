import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sponsors } from './sponsors';

@Injectable({
  providedIn: 'root'
})
export class SponsorsService {

  private baseURL="http://localhost:8089/api/v1/Getsponsors";
  private baseURL2="http://localhost:8089/api/v1/sponsors";
  private baseURL3="http://localhost:8089/api/v1/sponsors/{id}";



  constructor(private httpClient: HttpClient) { }
  getSponsorsList(): Observable<Sponsors[]>{
    return this.httpClient.get<Sponsors[]>(this.baseURL);
  }
  createSponsor(sponsor: Sponsors): Observable<any>{
    return this.httpClient.post(this.baseURL2, sponsor);
  }
  
  deleteSponsor(id: number): Observable<Object>{
    return this.httpClient.delete(this.baseURL3);
  }
 
 
}
