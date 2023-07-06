import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllEvents() {
    return this.http.get<any[]>(`${this.baseUrl}/events`);;
  }

  createEvent(event: any) {
    return this.http.post<any>(`${this.baseUrl}/events`, event);
  }

  updateEvent(event: any) {
    return this.http.put<any>(`${this.baseUrl}/events/${event.number}`, event);
  }

  deleteEvent(event: any) {
    return this.http.delete<any>(`${this.baseUrl}/events/${event.number}`);
  }
}
