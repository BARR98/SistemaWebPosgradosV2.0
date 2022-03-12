import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSidenavComponent } from './components/admin-sidenav/admin-sidenav.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule } from '@angular/router';
import { SidenavAdminComponent } from './components/sidenav-admin/sidenav-admin.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [AdminSidenavComponent, SidenavAdminComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    AdminSidenavComponent,
    SidenavAdminComponent
  ]
})
export class AdminSharedModule { }
