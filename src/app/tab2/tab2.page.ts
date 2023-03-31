import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(private alertController: AlertController) {}
  //crea el metodo
  async pagado(){
  
      const alert = await this.alertController.create({
        header: 'ALERTA',
        message: 'Esta seguro de esta operación',
        buttons: ['Ok'],
      });
      await alert.present();    
  }
}
