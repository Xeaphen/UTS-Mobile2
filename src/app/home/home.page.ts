import { Component } from '@angular/core';
import { Barang } from '../barang.model';
import { BarangService } from '../Service/barang.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  barangs:Barang[];
  allowedGrid:boolean;
  allowedList:boolean;

  constructor(
    private barangService: BarangService
  ) {}

  ngOnInit()
  {
    this.allowedList = true;
    this.allowedGrid = false;
  }

  ionViewWillEnter()
  {
    this.barangs = this.barangService.getAllbarangs();
  }

  ChangetoGrid()
  {
    this.allowedGrid = true;
    this.allowedList = false;
  }

  ChangetoList()
  {
    this.allowedGrid = false;
    this.allowedList = true;
  }
}
