import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { SparkAngularModule } from "@sparkdesignsystem/spark-angular";
import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { DonutsComponent } from './donuts/donuts.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';

const appRoutes: Routes = [
  { path: 'donut', component: DonutsComponent },
  { path: 'donut/:id', component: DonutDetailComponent },
  { path: '', redirectTo: '/donut', pathMatch: 'full' },
 
];

@NgModule({
  declarations: [
    AppComponent,
    DonutDetailComponent,
    DonutsComponent,
    PeopleComponent,
    PersonComponent
  ],
  imports: [
    SparkAngularModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
