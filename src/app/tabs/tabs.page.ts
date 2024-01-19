import { Component } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private routerOutlet: IonRouterOutlet) {
  }
  ionViewDidEnter() {
    this.routerOutlet.swipeGesture = false;
  }
  ionViewWillLeave() {
    this.routerOutlet.swipeGesture = true;
  }

}
