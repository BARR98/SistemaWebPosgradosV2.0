import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    NavigationComponent
  ]
})
export class PublicSharedModule { }
