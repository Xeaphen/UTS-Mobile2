import { Injectable } from '@angular/core';
import { Barang } from '../barang.model';


@Injectable({
  providedIn: 'root'
})
export class MotherboardService {

  motherboard:Barang[]=[
    {
    id: '3',
    gambar:'https://cdn.vox-cdn.com/thumbor/AcVDe3cCsFVseXePV96BUSbcvBM=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/21845089/kNmhDjg.png',
    merek: 'ASUS ROG',
    model: 'ROG Crosshair VIII Dark Hero',
    stock: 3,
    harga: 1500000,
    deskripsi: ['AMD AM4 socket:']
    }
  ]

  constructor() { }
}
