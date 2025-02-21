import { Component, OnInit, ChangeDetectionStrategy,ViewEncapsulation,  ViewChild,TemplateRef ,HostListener} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.Default
})

export class HeaderComponentComponent implements OnInit {
  
  
 constructor() {
 
  }
 
  isMenuOpen = false;
  activeDropdownIndex: number | null = null;

  ngOnInit(): void {
   
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
