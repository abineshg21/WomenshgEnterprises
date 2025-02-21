import { Component, OnInit } from '@angular/core';
import{ HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {
  ItemsArrayMenu:[];
  TimeArray:[];
  StartTime;
  constructor() { }

  ngOnInit(): void {
    
  }
}
