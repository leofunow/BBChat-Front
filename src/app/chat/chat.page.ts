import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements AfterViewInit {

  @ViewChild(IonContent) content?: IonContent;
  @ViewChild('message') message: any;

  text = "";
  messages = [
    {
      message:"hello man",
      align: "left",
      time:'14:45'
    },
    {
      message:`wassup?


      All's fine?`,
      align: "left",
      time:'14:45'
    },
  ] 

  constructor() { 
    
  }

  getHTMLMessage(message: string){
    return message.replace(/(?:\r\n|\r|\n)/g, '<br>');
  }

  send() {
    if(this.text == "") return;
    this.message.setFocus();
    // console.log(this.message.el.focus())
    this.messages.push({
      message: this.text,
      align: "right",
      time: new Date().toLocaleTimeString()
    });
    this.text = "";
  }

  ngAfterViewInit() {
    this.content?.scrollToBottom();
  }

}
