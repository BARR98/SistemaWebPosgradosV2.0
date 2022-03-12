import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { UserService } from "../../../core/services/User/user";
import { User } from '../../../core/models/User/user.model'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public changeUserStatusSubject = new Subject<User>();
  public changeUserStatus$ = this.changeUserStatusSubject.asObservable();
  public urlUsuarioIngentaAcceder = '';
  public changeLoginStatusSubject = new Subject<boolean>();
  public changeLoginStatus$ = this.changeLoginStatusSubject.asObservable();

  user: User;
  readonly ISLOGGEDKEY = 'islogged';

  constructor(
    private userService: UserService) {
  }



  login(email: string, password: string): boolean {
    this.userService.existUser(email, password)
      .subscribe(
        res => {
          if (res != null) {
            this.user = res;
            localStorage.setItem(this.ISLOGGEDKEY, 'true');
            this.changeLoginStatusSubject.next(true);
            this.changeUserStatusSubject.next(this.user);
            return true;
          }
        },
        err => console.log(err)
      );
    return false;
  }

  logout() {
    localStorage.removeItem(this.ISLOGGEDKEY);
    this.changeLoginStatusSubject.next(false);
    this.changeUserStatusSubject.next(null);
  }

  isLoggedIn(url: string) {
    const isLogged = localStorage.getItem(this.ISLOGGEDKEY);
    if (!isLogged) {
      this.urlUsuarioIngentaAcceder = url;
      return false;
    }
    return true;
  }


}
