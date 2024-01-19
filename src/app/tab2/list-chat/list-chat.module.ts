import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListChatComponent } from './list-chat.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ListChatComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ListChatComponent]
})
export class ListChatModule { }
