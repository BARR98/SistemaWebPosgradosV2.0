
import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.css']
})
export class AdminSidenavComponent {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;


  constructor(private observer: BreakpointObserver) {}

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).
    subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode= 'over';
        this.sidenav.close()
      }else{
        this.sidenav.mode= 'side'
        this.sidenav.open();
      }
    })
  }


}
