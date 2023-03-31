import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  
    public segment: string = "list";
    public arr = new Array(25);
  
  
    constructor(private alertController: AlertController) {}
    //crea el metodo
    async actualizar(){
    
        const alert = await this.alertController.create({
          header: 'ALERTA',
          message: 'Esta seguro que los datos ingresados con correctos',
          buttons: ['Confirmar'],
        });
        await alert.present();    
    }
  }
   

  
