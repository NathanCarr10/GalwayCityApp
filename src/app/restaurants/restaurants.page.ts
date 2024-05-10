// restaurants.page.ts
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { MyModalPage } from '../my-modal/my-modal.page';


@Component({
  selector: 'app-restaurants',
  templateUrl: 'restaurants.page.html',
  styleUrls: ['restaurants.page.scss']
})
export class RestaurantsPage {

  constructor(public navCtrl: NavController, private modalController: ModalController) {

  }

  

  async openModal(cardId: number) {
    const modal = await this.modalController.create({
      component: MyModalPage,
      componentProps: {
      cardId: cardId
      }
    });
    return await modal.present();
  
}

}
