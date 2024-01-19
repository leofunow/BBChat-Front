import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, public navCtrl: NavController) { }

  public setAuthToken(token: string) {
    localStorage.setItem('token', token);
    // this.router.navigate(['/']);
    this.navCtrl.navigateRoot('/', {animated: false});
  }

  public getAuthToken(): string | null {
    return localStorage.getItem('token');
  }

  public removeAuthToken() {
    localStorage.removeItem('token');
    // this.router.navigate(['/login']);
    this.navCtrl.navigateRoot('/login', {animated: false});
  }
}
