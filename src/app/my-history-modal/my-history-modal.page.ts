import { ModalController, NavParams } from '@ionic/angular';
import { Component } from '@angular/core';


@Component({
  selector: 'app-my-history-modal',
  templateUrl: './my-history-modal.page.html',
  styleUrls: ['./my-history-modal.page.scss'],
})
export class MyHistoryModalPage {
  cardId: number;

  constructor(private modalController: ModalController, private navParams: NavParams) { 
    this.cardId = this.navParams.get('cardId');
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
