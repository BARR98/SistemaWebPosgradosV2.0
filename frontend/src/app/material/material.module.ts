import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    CdkAccordionModule,
    MatFormFieldModule,
    ScrollingModule,
    MatExpansionModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatProgressBarModule,
    MatListModule


  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    CdkAccordionModule,
    MatFormFieldModule,
    ScrollingModule,
    MatExpansionModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatProgressBarModule,
    MatListModule



  ]
})
export class MaterialModule { }
