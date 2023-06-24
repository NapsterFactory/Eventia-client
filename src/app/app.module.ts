import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SponsorsListComponent } from './sponsors-list/sponsors-list.component';
import { CreateSponsorsComponent } from './create-sponsors/create-sponsors.component';
import { FormsModule } from '@angular/forms';
import { UpdateSponsorsComponent } from './update-sponsors/update-sponsors.component';
import { DeleteSponsorsComponent } from './delete-sponsors/delete-sponsors.component';

@NgModule({
  declarations: [
    AppComponent,
    SponsorsListComponent,
    CreateSponsorsComponent,
    UpdateSponsorsComponent,
    DeleteSponsorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
