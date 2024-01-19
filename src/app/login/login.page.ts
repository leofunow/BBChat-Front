import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/user/auth.service';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  user = {
    login: '',
    password: ''
  }


  constructor(private authService: AuthService, private routerOutlet: IonRouterOutlet) { }

  login() {
    this.authService.setAuthToken(this.user.login);
  }
  ionViewDidEnter() {
    this.routerOutlet.swipeGesture = false;
  }
  ionViewWillLeave() {
    this.routerOutlet.swipeGesture = true;
  }

}
