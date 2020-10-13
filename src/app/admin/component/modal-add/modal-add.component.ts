import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { BarangService } from 'src/app/Service/barang.service';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss'],
})
export class ModalAddComponent implements OnInit {

  constructor(
    private modalCtrl:ModalController,
    private barangservice:BarangService
  ) { }

  ngOnInit() {}

  onSubmit(form:NgForm)
  {
    this.barangservice.adddata(form);
  }

  onCancel()
  {
    this.modalCtrl.dismiss(null,'cancel');
  }

  onSave()
  {
    this.modalCtrl.dismiss({message:'Added to data'},'confirm')
  }

  


}
