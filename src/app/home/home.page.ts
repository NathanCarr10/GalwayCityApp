import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

  constructor(public navCtrl: NavController) { }
  
  

  Restaurant() {

    this.navCtrl.navigateForward(['restaurants'])


  }

  Sports(){

    this.navCtrl.navigateForward(['sports'])

  }

  History(){

    this.navCtrl.navigateForward(['history'])

  }

  ThingsToDo(){

    this.navCtrl.navigateForward(['thingstodo'])

  }


}
