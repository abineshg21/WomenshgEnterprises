import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';
import{ HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home-page',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {
  Special:boolean =true;
  Soup:boolean=true;
  DISHColor:boolean =true;
  DrinkColor:boolean =true;
  Lunch:boolean =true;
  Appetizers=true;
  Supreme=true;
  HouseSpl=true;
  Especial=true;
  closeResult:string;
  Quesad =true;
  Carne =true;
  More=true;
  Filter=true;
  Load=true;
  AddonText:string;
  SplArray:[];
  FilterData=[] as any;
  ItemsArrayMenu:[];
  addtocartitem=[] as any;
  addonitem:[];
  AllArray=[] as any;
  LunchArray:[];
  AppArray=[] as any;
  HouseArray=[] as any;
  SoupArray=[] as any;
   data=[] as any;
   pricefilter=[] as any;
   Pricesec=[] as any;
   FromPrize : any;
   ToPrize :any;
   categoryName :string;
   SupremeArray=[] as any;
   PoultryArray=[] as any;
   RemainAllArray=[] as any;
   Poul=true;
   Pork=true;
   Vegetarian=true;
   FromSea=true;
   Combin=true;
   ACarte=true;
   Dessert=true;
   AddOns=[] as any;
   Little=true;
   DessertArray= [] as any;
      discoun=[] as any;
   PorkArray=[] as any;
   QualitiesArray =[] as any;
   menuid:string;
   menuname:string;
  constructor() { 
  }

  Dish(){
    debugger;
    this.DISHColor =true;
    this.DrinkColor=true;
  }

  Drink(){
    debugger;
    this.DrinkColor=false;
    this.DISHColor =false;
  }
 
  All(){
    debugger;
this.Special=this.Special ? false : true;

  }
  Soupless(){
    this.Soup= this.Soup ? false : true;
  }
  SpecialLess(){
    this.Special= this.Special ? false : true;
  }


  Addvariance(item:any,itemvar){
    debugger;
    var demote =item.menuvariance["0"].price1;
    for(let i=0;i<item.menuvariance.length;i++ ){
     debugger;
      if(item.menuvariance[i].menuVariance==itemvar){
        item.menuvariance["0"].price1=item.menuvariance[i].price;
        item.menuvariance["0"].imageUrl1=item.menuvariance[i].imageUrl;
        item.menuvariance["0"].description1=item.menuvariance[i].description;
        item.menuvariance["0"].menuvarianceName1=item.menuvariance[i].menuvarianceName;
        item.menuvariance["0"].menuVariance1=item.menuvariance[i].menuVariance;
      }
    }
    if (this.AddOns.length != 0) {
      for (var i = this.AddOns.length - 1; i >= 0; i--) {
        item.menuvariance["0"].price1=   item.menuvariance["0"].price1 + this.AddOns[i].prize ;
      }
      }
  }
  Addtocart(item:any){
    debugger;

  }

  ngOnInit(): void {
 debugger;



this.AllArray = JSON.parse(`[{
  "subCategoryName": "Products",
  "viewAll": "All",
  "subCategoryId": 1,
  "menuitem": [{
          "status": "Active",
          "itemName": "Fresh Milk",
          "menuvariance": [{
				  "price1": 24.00,
				  "menuvarianceName": "500ml",
				  "imageUrl1": "/assets/Images/Milk.jpg",
                  "description": "test",
				   "description1": "test",
                  "customization": []
              }
            
          ],
          "menuItemId": 1
      },
      {
          "status": "Active",
          "itemName": "Curd",
          "menuvariance": [{
                  "price1": 10.00,
                  "menuvarianceName": "100ml",
                  "imageUrl1": "/assets/Images/curd.png",
                  "description": "Curd 100 ml",
                  "customization": []
              }
          ],
          "menuItemId": 2
      },
      {
          "status": "Active",
          "itemName": "Panner",
          "menuvariance": [{
                  "price1": 100.00,
                  "menuvarianceName": "200g",
                  "imageUrl1": "/assets/Images/panner.png",
                  "description": "Panner 200 g",
                  "customization": []
              }
          ],
          "menuItemId": 3
      },
      {
          "status": "Active",
          "itemName": "Butter Milk",
          "menuvariance": [{
                  "price1": 10.00,
                  "menuvarianceName": "100ml",
                  "imageUrl1": "/assets/Images/buttermilk.png",
                  "description": "Butter Milk 100 ml",
                  "customization": []
              }
          ],
          "menuItemId": 4
      },
      {
          "status": "Active",
          "itemName": "Badam Milk",
          "menuvariance": [{
                  "price1": 10.00,
                  "menuvarianceName": "100ml",
                  "imageUrl1": "/assets/Images/badam.png",
                  "description": "Badam Milk 100 ml",
                  "customization": []
              }
          ],
          "menuItemId": 4
      },
      {
          "status": "Active",
          "itemName": "Rose Milk",
          "menuvariance": [{
                  "price1": 10.00,
                  "menuvarianceName": "100ml",
                  "imageUrl1": "/assets/Images/rose.png",
                  "description": "Rose Milk 100 ml",
                  "customization": []
              }
          ],
          "menuItemId": 4
      }
  ]
}]`);

  const totalItems = this.AllArray?.Menuitem?.length || 0;
  

  }
  
}
