import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
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
  constructor(private modalService: NgbModal, private route: ActivatedRoute,private http:HttpClient) { 
    this.menuid=this.route.snapshot.params.id;
    this.menuname=this.route.snapshot.params.text;
  }
  Allcilick(itrm)
  {
    debugger;
    if(itrm.viewAll =="less"){
      itrm.viewAll="All";
    }
    else{
      itrm.viewAll="less";
    }

  }
  LoadDetail(){
    this.More =this.More ? false :true;
  }
  
  menuopen(menu) {
    debugger;
    var x = document.getElementById(menu);

    if (x.style.display == "block") {
        x.style.display = "none";
      
    }
    else {
        x.style.display = "block";
    }
 }

ShowHidePrice (menu) {
  debugger;
  var x = document.getElementById(menu);

  if (x.style.display == "block") {
      x.style.display = "none";
      document.getElementById("priceplus").className = "glyphicon glyphicon-plus pull-right";
  }
  else {
      x.style.display = "block";
      document.getElementById("priceplus").className = "glyphicon glyphicon-minus pull-right";
  }
}
ShowHideCategory(menu) {
  debugger;
  var x = document.getElementById(menu);

  if (x.style.display == "block") {
      x.style.display = "none";
      document.getElementById("Categoryplus").className = "glyphicon glyphicon-plus pull-right";
  }
  else {
      x.style.display = "block";
      document.getElementById("Categoryplus").className = "glyphicon glyphicon-minus pull-right";

  }
}
ShowHidePayment (menu) {
  debugger;
  var x = document.getElementById(menu);

  if (x.style.display == "block") {
      x.style.display = "none";
      document.getElementById("Paymentplus").className = "glyphicon glyphicon-plus pull-right";
  }
  else {
      x.style.display = "block";
      document.getElementById("Paymentplus").className = "glyphicon glyphicon-minus pull-right";
  }
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

  customOptions: OwlOptions;
  ngOnInit(): void {
 debugger;

 window.scrollTo(0, 0);
if( this.menuid != "" && this.menuid != null){
  this.Filter =true;
  if(Number (this.menuid) > Number(6))
  {
    this.More=true; 
  
   self.location.href="/#"+this.menuname;
  }
  else{
    //window.location.href="/#"+this.menuname;
   // location.assign("/#" + this.menuname);
  // parent.location.hash = "/#" + this.menuname;
 // window.open("/#" + this.menuname, "_self");
  // window.open("/#" + this.menuname);

  self.location.href="/#"+this.menuname;
  }
}

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
  handleoffer($event,offer){
    debugger;
    var UserId=sessionStorage.getItem('CustomerId');
    var GustId= sessionStorage.getItem('GuesId');
    if ($event.target.checked === true) {



      if( offer== "Discount" )
      {

if( this.FilterData != 0){
for(let i=0;i< this.FilterData ;i++){
  if(this.FilterData[i].couponAmt  != 0){
    if(this.discoun.length != 0){
      this.discoun.push({"couponAmt":this.FilterData[i].couponAmt,"couponAmt1":this.FilterData[i].couponAmt1, "couponType":this.FilterData[i].couponType, "description":this.FilterData[i].description,"discount":this.FilterData[i].discount,"favId":this.FilterData[i].favId, "imageUrl":this.FilterData[i].imageUrl,"itemName":this.FilterData[i].itemName,"menuItemId":this.FilterData[i].menuItemId,"menuVariance":this.FilterData[i].menuVariance,"newPrice":this.FilterData[i].newPrice,"price":this.FilterData[i].price,"quan":this.FilterData[i].quan});
    }
else{
this.discoun=this.FilterData(i,1);
}
  }
}
this.FilterData = this.discoun;
}
else{
  var value= this.http.get(environment.apiUrl + 'Filter/FOffer?Type='+offer + '&Cus_Id='+UserId +'&GustId='+GustId).toPromise().then(
    (data:any)=> {
      debugger;
    if(data.length!=0 ){
      this.Filter=false;
      this.FilterData=data;
    }
    else{
    };
    });
}

        
      }
      else{
        this.FilterData=[];
      }
    }
    else{
      this.FilterData=this.pricefilter;
    }
  }
  
}
