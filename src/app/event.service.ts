import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  events: any[] = [
    { name: 'Event 1', number: 1, starting_date: '2023-07-01', end_date: '2023-07-05' },
    { name: 'Event 2', number: 2, starting_date: '2023-07-10', end_date: '2023-07-15' }
  ];

  constructor() { }

  getAllEvents(): any[] {
    return this.events;
  }

  createEvent(event: any): void {
    this.events.push(event);
  }

  updateEvent(event: any): void {
    const index = this.events.findIndex(e => e.number === event.number);
    if (index !== -1) {
      this.events[index] = event;
    }
  }

  deleteEvent(event: any): void {
    const index = this.events.findIndex(e => e.number === event.number);
    if (index !== -1) {
      this.events.splice(index, 1);
    }
  }
}
