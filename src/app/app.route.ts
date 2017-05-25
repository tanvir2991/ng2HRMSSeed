// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsComponent } from './dashboard/charts/charts.component';
import { EmployeelistComponent } from './dashboard/employeelist/employeelist.component';
// import { logRoutes } from './login/login.route';




// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent}, // ...logRoutes,
  { path: 'dashboard', component: DashboardComponent, children : [

    {path : '', pathMatch: 'full' , component : ChartsComponent , outlet : 'board'},
    {path : 'employeelist', component : EmployeelistComponent, outlet: 'board'},
    {path : 'charts', component : ChartsComponent , outlet: 'board'}


  ]

  } // Add dog routes form a different file
 /* ...logRoutes,
  ...dashRoutes*/
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
