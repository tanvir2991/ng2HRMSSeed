import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeelistComponent } from './dashboard/employeelist/employeelist.component';
import { ChartsComponent } from  './dashboard/charts/charts.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.route';
import { EmployeeServiceService } from './employee-service.service';
import { DataTableModule } from 'ng2-data-table';
import { GoogleChartComponent } from './google-chart/google-chart.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    DataTableModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeelistComponent,
    LoginComponent,
    ChartsComponent,
    GoogleChartComponent
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
