import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component'
import { AdminSharedModule } from './shared/admin-shared.module';
import { Router, RouterModule } from '@angular/router';
import { MastersListComponent } from './components/masters-list/masters-list.component';
import { AdminHomeComponentComponent } from './components/admin-home-component/admin-home-component.component';
import { CreateComponentComponent } from './components/create-component/create-component.component';
import { EditMasterComponent } from './components/edit-master/edit-master.component';
import { UserComponent } from './components/user/user.component';
import { ImageFormComponent } from './components/images/image-form/image-form.component';
import { ImagesListComponent } from './components/images/images-list/images-list.component';
import { ImagePreviewComponent } from './components/images/image-preview/image-preview.component';
import { ViewMasterImagesComponent } from './components/images/view-master-images/view-master-images.component';

@NgModule({
  declarations: [ AdminLayoutComponent,MastersListComponent, AdminHomeComponentComponent,CreateComponentComponent, EditMasterComponent, UserComponent, ImageFormComponent, ImagesListComponent, ImagePreviewComponent, ViewMasterImagesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminSharedModule,
    RouterModule,
    MaterialModule,
    
   
    
  ]


})
export class AdminModule { }
