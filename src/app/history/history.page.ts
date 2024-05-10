import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { MyHistoryModalPage } from '../my-history-modal/my-history-modal.page';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage {

  constructor(public navCtrl: NavController, private modalController: ModalController) {

  }

  

  async openModal(cardId: number) {
    const modal = await this.modalController.create({
      component: MyHistoryModalPage,
      componentProps: {
      cardId: cardId
      }
    });
    return await modal.present();
  
}

}
