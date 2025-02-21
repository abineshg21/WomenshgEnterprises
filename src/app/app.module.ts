import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JwPaginationModule } from 'jw-angular-pagination';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
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
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  AmazonLoginProvider,
} from 'angularx-social-login';
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
    BrowserModule, JwPaginationModule,MatDialogModule ,MatTableModule,MatPaginatorModule,MatSortModule,MatDatepickerModule,MatFormFieldModule,
    NgxMaterialTimepickerModule, MatNativeDateModule, AppRoutingModule,HttpClientModule,CarouselModule,BrowserAnimationsModule,FormsModule,ReactiveFormsModule, NgbModule,
    
    SocialLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
