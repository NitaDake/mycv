import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  path: any = "assets/imgs/nita.png"

  constructor(public navCtrl: NavController) {

  }

}
