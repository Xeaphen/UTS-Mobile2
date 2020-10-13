import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { from } from 'rxjs';
import { Barang } from 'src/app/barang.model';
import { BarangService } from 'src/app/Service/barang.service';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.scss'],
})
export class ModalUpdateComponent implements OnInit {

  @Input() barangId:string;
  barang:Barang;
  constructor(
    private modalCtrl:ModalController,
    private barangservice:BarangService,
    private alertCtrl:AlertController
  ) { }

  ngOnInit() {
    this.barang=this.barangservice.getBarang(this.barangId);
    
  }

  onSubmit(form:NgForm,barangId:string)
  {
    this.ilang();
    this.barangservice.updatedata(form,barangId);
  }

  oncancel()
  {
    this.modalCtrl.dismiss(null,'cancel');
  }

   async onSave(form:NgForm,barangId:string)
  {
    const alert = await this.alertCtrl.create({
      header: 'Edit',
      message: 'Do you wish to Update the Item',
      buttons: [
        {
          text: 'cancel',
          role: 'cancel',
        }, {
          text: 'Okay',
          handler: () => this.onSubmit(form,barangId)
        }
      ]
    });
    await alert.present();
  }

  ilang()
  {
    this.modalCtrl.dismiss(null,'confirm')
  }

}
