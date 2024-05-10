import { ModalController, NavParams } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.page.html',
  styleUrls: ['./my-modal.page.scss'],
})
export class MyModalPage {
  cardId: number;

  constructor(private modalController: ModalController, private navParams: NavParams) { 
    this.cardId = this.navParams.get('cardId');
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}

