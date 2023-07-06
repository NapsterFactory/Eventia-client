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
  constructor(private formBuilder: FormBuilder,private eventService:EventService) {
    this.events = this.eventService.getAllEvents(); }

  events: any[];
  
  fileName= 'ExcelSheet.xlsx';

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

  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
}

