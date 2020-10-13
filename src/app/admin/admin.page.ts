import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Barang } from 'src/app/barang.model';
import { BarangService } from '../Service/barang.service';
import { ModalAddComponent } from './component/modal-add/modal-add.component';
import { ModalUpdateComponent } from './component/modal-update/modal-update.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  barangs:Barang[];
  constructor(
    private barangService:BarangService,
    private modalCtrl:ModalController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter()
  {
    this.barangs = this.barangService.getAllbarangs();
  }

  async presentModal()
  {
    const modal = await this.modalCtrl.create(
      {
        component:ModalAddComponent,
      }
    );
    modal.onDidDismiss().then(resultdata=>{
      this.barangs = this.barangService.getAllbarangs();
    });

    return await modal.present();
  }

  async updatedata(barangId:string)
  {
    const modal = await this.modalCtrl.create({
      component:ModalUpdateComponent,
      componentProps:{barangId:barangId}
    });

    modal.onDidDismiss().then(resultdata=>{

    });

    return await modal.present(); 
  }

  deletedata(barangId:string)
  {
    this.barangService.deletedata(barangId);
    this.barangs = this.barangService.getAllbarangs();
  }
  

  

}
