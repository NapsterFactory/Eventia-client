import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SponsorsListComponent } from './sponsors-list/sponsors-list.component';
import { CreateSponsorsComponent } from './create-sponsors/create-sponsors.component';
import { UpdateSponsorsComponent } from './update-sponsors/update-sponsors.component';
import { DeleteSponsorsComponent } from './delete-sponsors/delete-sponsors.component';
import { ClientListComponent } from './client-list/client-list.component';

const routes: Routes = [
  {path: "sponsors", component: SponsorsListComponent},
  {path: "create-sponsors", component: CreateSponsorsComponent},
  {path:"", redirectTo:"sponsors", pathMatch: "full"},
  {path: "update-sponsors/:id", component: UpdateSponsorsComponent},

  {path: "client", component: ClientListComponent},
  {path: "delete-sponsors/:id", component: SponsorsListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
