import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../event.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  eventForm!: FormGroup;
  selectedEvent: any;
  events: any[] | undefined;
  fileName= 'ExcelSheet.xlsx';
  
  constructor(private formBuilder: FormBuilder,private eventService:EventService) {
    this.eventService.getAllEvents().subscribe((events: any[]) => {
      this.events = events;
    });
  }

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getAllEvents().subscribe(
      (response) => {
        this.events = response;
      },
      (error) => {
        console.error('Error loading events:', error);
      }
    );
  }

  onSubmit() {
    if (this.eventForm && this.eventForm.valid) {
      console.log(this.eventForm.value);
      if (this.selectedEvent) {
        this.updateEvent();
      } else {
        this.createEvent();
      }
    }
  }

  createEvent() {
    const event = this.eventForm.value;
    this.eventService.createEvent(event).subscribe(
      (response) => {
        console.log('Event created:', response);
        this.loadEvents();
        this.eventForm.reset();
      },
      (error) => {
        console.error('Error creating event:', error);
      }
    );
  }

  updateEvent() {
    const event = this.eventForm.value;
    event.number = this.selectedEvent.number; 
    this.eventService.updateEvent(event).subscribe(
      (response) => {
        console.log('Event updated:', response);
        this.loadEvents();
        this.eventForm.reset();
        this.selectedEvent = null;
      },
      (error) => {
        console.error('Error updating event:', error);
      }
    );
  }

  editEvent(event: any): void {
    this.selectedEvent = event;
    this.eventForm.patchValue({
      name: event.name,
      number: event.number,
      starting_date: event.starting_date,
      end_date: event.end_date
    });
  }
  cancelEdit(): void {
    this.selectedEvent = null;
    this.eventForm.reset();
  }
  deleteEvent(event: any): void {
    console.log('Delete event:', event);
    this.eventService.deleteEvent(event).subscribe(
      (response) => {
        console.log('Event deleted:', response);
        this.loadEvents(); // Refresh the event list after successful deletion
      },
      (error) => {
        console.error('Error deleting event:', error);
      }
    );
  }

  exportexcel(): void
  {
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
 
  }
}

