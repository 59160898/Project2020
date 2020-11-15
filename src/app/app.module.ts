import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeviceComponent } from './device/device.component';
import { TrashreportComponent } from './trashreport/trashreport.component';
import { DeviceReportComponent } from './device-report/device-report.component';
import { TrashmanageComponent } from './trashmanage/trashmanage.component';
import { SettingComponent } from './setting/setting.component';
import { AddtrashComponent } from './addtrash/addtrash.component';
import { AddtypetrashComponent } from './addtypetrash/addtypetrash.component';
import { AddroutecollectiontrashComponent } from './addroutecollectiontrash/addroutecollectiontrash.component';
import { AdddriverComponent } from './adddriver/adddriver.component';
import { AddcollectortrashComponent } from './addcollectortrash/addcollectortrash.component';
import { AddtruckComponent } from './addtruck/addtruck.component';
import { DetailtrashdataComponent } from './detailtrashdata/detailtrashdata.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { LoginComponent } from './login/login.component';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'trashmanage', component: TrashmanageComponent },
  { path: 'device', component: DeviceComponent },
  { path: 'trashreport', component: TrashreportComponent },
  { path: 'deviceReport', component: DeviceReportComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'addtrash', component: AddtrashComponent },
  { path: 'addtypetrash', component: AddtypetrashComponent },
  { path: 'addroutecollectiontrash', component: AddroutecollectiontrashComponent },
  { path: 'adddriver', component: AdddriverComponent },
  { path: 'addcollectortrash', component: AddcollectortrashComponent },
  { path: 'addtruck', component: AddtruckComponent },
  { path: 'detailtrashdata', component: DetailtrashdataComponent },
  { path: 'manageUsers', component: ManageUsersComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    DashboardComponent,
    TrashreportComponent,
    DeviceComponent,
    TrashmanageComponent,
    SettingComponent,
    AddtrashComponent,
    AddtypetrashComponent,
    AddroutecollectiontrashComponent,
    AdddriverComponent,
    AddcollectortrashComponent,
    AddtruckComponent,
    DetailtrashdataComponent,
    ManageUsersComponent,
    LoginComponent,
    DeviceReportComponent
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
