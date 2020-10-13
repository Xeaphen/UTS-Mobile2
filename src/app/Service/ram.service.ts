import { Injectable } from '@angular/core';
import { Barang } from '../barang.model';

@Injectable({
  providedIn: 'root'
})
export class RAMService {

  ram:Barang[]=[
    {
    id: '4',
    gambar:'https://www.corsair.com/medias/sys_master/images/images/h1f/hbd/9420610568222/-CMW16GX4M2C3200C16-Gallery-Vengeance-RGB-Pro-01.png',
    merek: 'Corsair',
    model: 'VENGEANCE® RGB PRO 16GB (2 x 8GB) DDR4 DRAM 3200MHz C16 Memory Kit — Black',
    stock: 3,
    harga: 800000,
    deskripsi: ['DDR4','3200MHz']
    }
  ]

  constructor() { }
}
