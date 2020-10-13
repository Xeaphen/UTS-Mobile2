import { Injectable } from '@angular/core';
import { Barang } from '../barang.model';

@Injectable({
  providedIn: 'root'
})
export class CPUService {

  cpu:Barang[]=[
    {
      id: '1',
    gambar:'https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-569-V10.jpg',
    merek: 'AMD',
    model: 'Ryzen 5',
    stock: 2,
    harga: 1000000,
    deskripsi: ['Base Clock Speed 3.4 GHz','Max Boost Clock. Up to 4.2GHz.','# of Threads : 12']
    }
  ]

  constructor() { }

  
}
