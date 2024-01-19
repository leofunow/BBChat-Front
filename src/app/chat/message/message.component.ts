import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent  implements OnInit {


  @Input() message: string = 'null';
  @Input() align: string = 'right';
  @Input() time: string = '00:00';

  constructor() { }

  ngOnInit() {}

}
