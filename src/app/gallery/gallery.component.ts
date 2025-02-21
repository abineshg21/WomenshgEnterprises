import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  dataSource:any;
  dataSource1:any;
  closeResult:String;
  constructor() { }

  ngOnInit(): void {
    this.dataSource = JSON.parse(`[{
      "galleryFileName": "/assets/Images/walfare1.png",
      "galleryName": ""
  },{
      "galleryFileName": "/assets/Images/walfare2.png",
      "galleryName": ""
  },{
      "galleryFileName": "/assets/Images/walfare3.png",
      "galleryName": ""
  }
      ]`);
  
  }

}
