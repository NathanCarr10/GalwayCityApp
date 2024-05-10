import { ModalController, NavParams } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-sports-modal',
  templateUrl: './my-sports-modal.page.html',
  styleUrls: ['./my-sports-modal.page.scss'],
})
export class MySportsModalPage {
  cardId: number;

  constructor(private modalController: ModalController, private navParams: NavParams) { 
    this.cardId = this.navParams.get('cardId');
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
