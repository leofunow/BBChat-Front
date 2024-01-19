import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-chat',
  templateUrl: './list-chat.component.html',
  styleUrls: ['./list-chat.component.scss'],
})
export class ListChatComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goToChat(){
    this.router.navigate(['/chat']);
  }

}
