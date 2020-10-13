import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Barang } from '../barang.model';
import { BarangService } from '../Service/barang.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
})
export class ItemDetailsPage implements OnInit {

  loadedBarang: Barang

  constructor(

    private activatedRoute:ActivatedRoute,
    private barangservice:BarangService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('itemId')){return}
      const barangId = paramMap.get('itemId');
      this.loadedBarang = this.barangservice.getBarang(barangId);
    })
  }

}
