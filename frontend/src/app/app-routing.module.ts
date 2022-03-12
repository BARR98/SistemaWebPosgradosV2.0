import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AdminLayoutComponent } from './admin/components/admin-layout/admin-layout.component';
import { PublicLayoutComponent } from './public/components/public-layout/public-layout.component';
import { SelectMasterComponent } from './public/components/select-master/select-master.component';
import { PublicModule } from './public/public.module';
import { LoginComponent } from './public/components/login/login.component';
const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '' ,
        loadChildren: () => import('./admin/admin.module').then(m => AdminModule )
      }
    ]
    
  },
  { 
    path: 'select-master',
    component: SelectMasterComponent,
  },
  { 
    path: 'public/:id',
    component: PublicLayoutComponent,
    children: [
      {
        path: '' ,
        loadChildren: () => import('./public/public.module').then(m => PublicModule )
      }
    ]
    
  },
  { 
    path: '',
    component: SelectMasterComponent,    
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
