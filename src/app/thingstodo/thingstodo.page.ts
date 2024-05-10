import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { MySportsModalPage } from '../my-sports-modal/my-sports-modal.page';
import { MyThingsModalPage } from '../my-things-modal/my-things-modal.page';

@Component({
  selector: 'app-thingstodo',
  templateUrl: './thingstodo.page.html',
  styleUrls: ['./thingstodo.page.scss'],
})
export class ThingstodoPage  {

  constructor(public navCtrl: NavController, private modalController: ModalController) {

  }

  toggleFullScreen() {
    const card = document.querySelector('.fullscreen-card');
    card?.classList.toggle('fullscreen');
  }

  async openModal(cardId: number) {
    const modal = await this.modalController.create({
      component: MyThingsModalPage,
      componentProps: {
      cardId: cardId
      }
    });
    return await modal.present();
  
}
}
