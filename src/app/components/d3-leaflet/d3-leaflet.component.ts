import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import * as d3 from 'd3';
@Component({
  selector: 'app-d3-leaflet',
  templateUrl: './d3-leaflet.component.html',
  styleUrls: ['./d3-leaflet.component.css']
})
export class D3LeafletComponent implements OnInit {

  @ViewChild('map') public mapDom: ElementRef;

  map = null;

  constructor() { }

  ngOnInit() {
    this.initMap();
  }

  initMap () {
    this.map = L.map(this.mapDom.nativeElement).setView([51.505, -0.09], 8);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);
  }

}
