import { Component, OnInit, HostListener } from '@angular/core'
import { ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

 
  title = 'Home';
  showAdmin:boolean =false;
  showHead: boolean = false;
  constructor(private router: Router){
    router.events.forEach((event) => {
     
     
    });
  }
 
  //Logde=true;
  onDeactivate() {
    document.body.scrollTop = 0;
    // Alternatively, you can scroll to top by using this other call:
    // window.scrollTo(0, 0)
  }
  ngOnInit():void{
   
    window.scrollTo(0, 0);

  }
  
 }
