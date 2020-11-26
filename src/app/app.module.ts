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
import { HttpClientModule } from '@angular/common/http';
import { ShareService } from './ShareService';


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'trashmanage', component: TrashmanageComponent, canActivate: [AuthGuard] },
  { path: 'device', component: DeviceComponent, canActivate: [AuthGuard] },
  { path: 'trashreport', component: TrashreportComponent, canActivate: [AuthGuard] },
  { path: 'deviceReport', component: DeviceReportComponent, canActivate: [AuthGuard] },
  { path: 'setting', component: SettingComponent, canActivate: [AuthGuard] },
  { path: 'addtrash', component: AddtrashComponent, canActivate: [AuthGuard] },
  { path: 'addtypetrash', component: AddtypetrashComponent, canActivate: [AuthGuard] },
  { path: 'addroutecollectiontrash', component: AddroutecollectiontrashComponent, canActivate: [AuthGuard] },
  { path: 'adddriver', component: AdddriverComponent, canActivate: [AuthGuard] },
  { path: 'addcollectortrash', component: AddcollectortrashComponent, canActivate: [AuthGuard] },
  { path: 'addtruck', component: AddtruckComponent, canActivate: [AuthGuard] },
  { path: 'detailtrashdata', component: DetailtrashdataComponent , canActivate: [AuthGuard]},
  { path: 'manageUsers', component: ManageUsersComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }

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
    HttpClientModule,
    FormsModule
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
