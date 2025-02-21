import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from'./home-page/home-page.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import { ProductComponent } from './product/product.component';
import { GalleryComponent } from './gallery/gallery.component';
const routes: Routes = [{
  path:'',component:HomePageComponent
},
{path:'home',component:HomePageComponent},
{path:'product',component:ProductComponent},
{path:'gallery',component:GalleryComponent},
{path:'Menu/:id/:text',component:HomePageComponent},
{path:'ContactUs',component:ContactUsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
