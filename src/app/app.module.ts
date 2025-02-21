import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table' ;
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from  '@angular/material/sort';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { ProductComponent } from './product/product.component';
import { GalleryComponent } from './gallery/gallery.component';
@NgModule({
  declarations: [
   
    AppComponent,
    HomePageComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    ContactUsComponent,
    ProductComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,MatDialogModule ,MatTableModule,MatPaginatorModule,MatSortModule,MatDatepickerModule,MatFormFieldModule,
     MatNativeDateModule, AppRoutingModule,HttpClientModule,BrowserAnimationsModule,FormsModule,ReactiveFormsModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
