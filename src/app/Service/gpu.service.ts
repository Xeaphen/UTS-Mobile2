import { Injectable } from '@angular/core';
import { Barang } from '../barang.model';

@Injectable({
  providedIn: 'root'
})
export class GPUService {
  
  gpu:Barang[]=[
    {
    id: '2',
    gambar:'https://cdn.vox-cdn.com/thumbor/AcVDe3cCsFVseXePV96BUSbcvBM=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/21845089/kNmhDjg.png',
    merek: 'NVIDIA',
    model: 'RTX 3090',
    stock: 0,
    harga: 2000000,
    deskripsi: ['SOLD OUT GAN']
    }
  ]

  constructor() { }
}
