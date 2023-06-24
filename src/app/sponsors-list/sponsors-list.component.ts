import { Component, OnInit } from '@angular/core';
import { Sponsors } from '../sponsors';
import { SponsorsService } from '../sponsors.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sponsors-list',
  templateUrl: './sponsors-list.component.html',
  styleUrls: ['./sponsors-list.component.css']
})
export class SponsorsListComponent implements OnInit {
  sponsors!: Sponsors[];
  
  constructor(private sponsorService: SponsorsService, private router: Router) {}

  ngOnInit(): void{
    this.getSponsors();
}

private getSponsors(){
  this.sponsorService.getSponsorsList().subscribe(data => {
    this.sponsors = data;});
}

updateSponsor(sponsor:Sponsors){
  this.router.navigate(['update-sponsor']);
}
DeleteSponsor(id:number){
  this.sponsorService.deleteSponsor(id).subscribe(data =>{
    console.log(data);
    this.getSponsors();
  } )
 
}
}

