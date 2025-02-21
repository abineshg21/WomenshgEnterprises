import { Component, OnInit } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {
  ItemsArrayMenu:[];
  TimeArray:[];
  StartTime;
  constructor(private modalService: NgbModal,private http:HttpClient) { }

  ngOnInit(): void {
    
  }
}
