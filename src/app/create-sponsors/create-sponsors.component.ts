import { Component, OnInit } from '@angular/core';
import { Sponsors } from '../sponsors';
import { SponsorsService } from '../sponsors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-sponsors',
  templateUrl: './create-sponsors.component.html',
  styleUrls: ['./create-sponsors.component.css']
})
export class CreateSponsorsComponent implements OnInit{
  sponsor: Sponsors =  new Sponsors();

  constructor(private sponsorService: SponsorsService, private router: Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  saveSponsors(){
    this.sponsorService.createSponsor(this.sponsor).subscribe((data)=>{
      console.log("Data", data);
  },
  (error) => {console.log("Error:", error)});
}
  
goToSponsorsList() {
  this.router.navigate(['/sponsors']);
}

  OnSubmit(){
    console.log(this.sponsor);
    this.saveSponsors();
  }

  }
