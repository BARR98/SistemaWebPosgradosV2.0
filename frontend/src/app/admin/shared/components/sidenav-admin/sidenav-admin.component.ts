import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from 'src/app/core/services/Login/login.service';
@Component({
  selector: 'app-sidenav-admin',
  templateUrl: './sidenav-admin.component.html',
  styleUrls: ['./sidenav-admin.component.css']
})
export class SidenavAdminComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private loginService: LoginService, ) {}

  logout(){
    this.loginService.logout();
  }
}
