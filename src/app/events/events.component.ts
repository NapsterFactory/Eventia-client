import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  eventForm!: FormGroup;
  selectedEvent: any;
  constructor(private formBuilder: FormBuilder,private eventService:EventService) {
    this.events = this.eventService.getAllEvents(); }

  events: any[];

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      starting_date: ['', Validators.required],
      end_date: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.eventForm && this.eventForm.valid) {
      console.log(this.eventForm.value);
    }
  }
  
  editEvent(event: any): void {
    this.selectedEvent = event;
    // Set the event data to the form fields
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
  }

}

