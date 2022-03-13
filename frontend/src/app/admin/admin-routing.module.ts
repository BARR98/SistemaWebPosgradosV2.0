import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MastersListComponent } from './components/masters-list/masters-list.component';
import { CreateComponentComponent } from './components/create-component/create-component.component';
import { AdminHomeComponentComponent } from './components/admin-home-component/admin-home-component.component';
import { EditMasterComponent } from './components/edit-master/edit-master.component';
import { UserComponent } from './components/user/user.component';
import { ImagesListComponent } from './components/images/images-list/images-list.component';
import { ImageFormComponent } from './components/images/image-form/image-form.component';
import { ImagePreviewComponent } from './components/images/image-preview/image-preview.component';
import { ViewMasterImagesComponent } from './components/images/view-master-images/view-master-images.component';
import { FilesListComponent } from './components/files/files-list/files-list.component';
import { ViewMasterFileComponent } from './components/files/view-master-file/view-master-file.component';
import { FileFormComponent } from './components/files/file-form/file-form.component';

const routes: Routes = [
  {
    path: 'home',
    component: AdminHomeComponentComponent
  },
  {
    path:'create',
    component:CreateComponentComponent
  },  
  {
    path: 'masters-list',
    component:MastersListComponent
  },
  {
    path: 'master-edit/:id',
    component:EditMasterComponent
  },
  {
    path: 'users',
    component:UserComponent
  },
  {
    path: 'logos',
    component:ImagesListComponent
  },
  {
    path: 'upload-logo',
    component:ImageFormComponent
  },
  {
    path: 'logo-preview/:id',
    component:ImagePreviewComponent
  },
  {
    path: 'view-master-images/:master',
    component:ViewMasterImagesComponent
  },
  {
    path: 'upload-file',
    component:FileFormComponent
  },
  {
    path: 'files-list',
    component:FilesListComponent
  },
  {
    path: 'view-master-files/:master',
    component:ViewMasterFileComponent
  },
  {
    path: '',
    component:MastersListComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
