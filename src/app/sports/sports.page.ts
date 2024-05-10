import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { MySportsModalPage } from '../my-sports-modal/my-sports-modal.page';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})

export class SportsPage {

  constructor(public navCtrl: NavController, private modalController: ModalController) {

  }

  async openModal(cardId: number) {
    const modal = await this.modalController.create({
      component: MySportsModalPage,
      componentProps: {
      cardId: cardId
      }
    });
    return await modal.present();
  
}

}