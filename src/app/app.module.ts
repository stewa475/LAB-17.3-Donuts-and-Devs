import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { DonutsComponent } from './donuts/donuts.component';

const appRoutes: Routes = [
  { path: 'donut', component: DonutsComponent },
  { path: 'donut/:id', component: DonutDetailComponent },
  { path: '', redirectTo: '/donut', pathMatch: 'full' },
 
];

@NgModule({
  declarations: [
    AppComponent,
    DonutDetailComponent,
    DonutsComponent
  ],
  imports: [
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
