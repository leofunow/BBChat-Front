import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    let theme = localStorage.getItem('theme');
    if(!theme) {
      let prefDark = window.matchMedia('(prefers-color-scheme: dark)');
      theme = prefDark.matches ? 'dark' : 'light';
      localStorage.setItem('theme', prefDark.matches ? 'dark' : 'light');
    }
    document.body.classList.toggle('dark', theme === 'dark');
  }
}
