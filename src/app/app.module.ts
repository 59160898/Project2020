import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { LeftMenuComponent } from './left-menu/left-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeviceComponent } from './device/device.component';
import { ReportComponent } from './report/report.component';

import { RouterModule, Routes } from '@angular/router';
import { ManageUsersComponent } from './manage-users/manage-users.component';
const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'device', component: DeviceComponent },
  { path: 'report', component: ReportComponent },
  { path: 'manageUsers', component: ManageUsersComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    DashboardComponent,
    ReportComponent,
    DeviceComponent,
    ManageUsersComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
