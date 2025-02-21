import { Component, OnInit, ChangeDetectionStrategy,ViewEncapsulation,  ViewChild,TemplateRef ,HostListener} from '@angular/core';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpParams } from "@angular/common/http";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.Default
})

export class HeaderComponentComponent implements OnInit {
  
  
 constructor(private modalService: NgbModal, private http: HttpClient) {
 
  }
 
  isMenuOpen = false;
  activeDropdownIndex: number | null = null;

  ngOnInit(): void {
   
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
