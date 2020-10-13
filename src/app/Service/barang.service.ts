import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Barang } from '../barang.model';

@Injectable({
  providedIn: 'root'
})
export class BarangService {
  barangs:Barang[]=[
    {
      id: '1',
    gambar:'https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-569-V10.jpg',
    merek: 'AMD',
    model: 'Ryzen 5',
    stock: 2,
    harga: 1000000,
    deskripsi: ['Base Clock Speed 3.4 GHz','Max Boost Clock. Up to 4.2GHz.','# of Threads : 12']
    },

    {
      id: '2',
      gambar:'https://cdn.vox-cdn.com/thumbor/AcVDe3cCsFVseXePV96BUSbcvBM=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/21845089/kNmhDjg.png',
      merek: 'NVIDIA',
      model: 'RTX 3090',
      stock: 0,
      harga: 2000000,
      deskripsi: ['SOLD OUT GAN']
    },

    {
      id: '3',
      gambar:'https://www.asus.com/media/global/products/08gi3ii5h7adqqax/P_setting_000_1_90_end_500.png',
      merek: 'ASUS ROG',
      model: 'ROG Crosshair VIII Dark Hero',
      stock: 3,
      harga: 1500000,
      deskripsi: ['AMD AM4 socket:']
    },
    {
      id: '4',
      gambar:'https://www.corsair.com/medias/sys_master/images/images/h1f/hbd/9420610568222/-CMW16GX4M2C3200C16-Gallery-Vengeance-RGB-Pro-01.png',
      merek: 'Corsair',
      model: 'VENGEANCE® RGB PRO 16GB (2 x 8GB) DDR4 BLACK',
      stock: 3,
      harga: 800000,
      deskripsi: ['DDR4','3200MHz']
      }
  ]

  constructor() { }

  getAllbarangs()
  {
    return this.barangs;
  }

  getBarang(barangid:string)
  {
    return this.barangs.find(barang => {
      return barang.id === barangid;
    });
  }

  adddata(form:NgForm)
  {
    const iterasi:number = this.barangs.length+1
    this.barangs.push(
      {
      id:iterasi.toString(),
      gambar:form.value.gambar,
      merek: form.value.merek ,
      model: form.value.model,
      stock: form.value.stock,
      harga: form.value.harga,
      deskripsi: form.value.deskripsi.split(',')
      }
    );
  }

  deletedata(barangid:string)
  {
    this.barangs = this.barangs.filter(barang=>{
      return barang.id !== barangid;
    });
  }

  updatedata(form:NgForm,barangid:string)
  {
    const deskripsi = form.value.deskripsi.toString();
    return{...this.barangs.find(barang=>{
      if(barang.id===barangid)
      {
      barang.gambar=form.value.gambar,
      barang.merek=form.value.merek ,
      barang.model=form.value.model,
      barang.stock=form.value.stock,
      barang.harga=form.value.harga,
      barang.deskripsi=deskripsi.split(',')
      }
    })}
  }
}
