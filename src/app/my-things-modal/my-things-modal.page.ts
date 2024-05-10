import { ModalController, NavParams } from '@ionic/angular';
import { Component } from '@angular/core';


@Component({
  selector: 'app-my-things-modal',
  templateUrl: './my-things-modal.page.html',
  styleUrls: ['./my-things-modal.page.scss'],
})
export class MyThingsModalPage {
  cardId: number;

  constructor(private modalController: ModalController, private navParams: NavParams) { 
    this.cardId = this.navParams.get('cardId');
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
