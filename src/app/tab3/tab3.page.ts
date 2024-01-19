import { Component } from '@angular/core';
import { AuthService } from '../services/user/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  themeChecked = false;

  constructor(private authService: AuthService) {
    let theme = localStorage.getItem('theme');
    this.themeChecked = theme == 'dark';
  }

  logout() {
    this.authService.removeAuthToken();
  }

  toggleTheme(event: any) {
    document.body.classList.toggle('dark', event.detail.checked);
    localStorage.setItem('theme', event.detail.checked ? 'dark' : 'light');
    let prefDark = window.matchMedia('(prefers-color-scheme: dark)');
  }

}
