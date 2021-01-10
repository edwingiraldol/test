import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AgegateComponent } from './agegate/agegate.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { SliderComponent } from './slider/slider.component';
import { InfoComponent } from './info/info.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const rutas: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'agegate'

  },
  {
    path: 'agegate',
    component: AgegateComponent
  }
]

var agegate_done = localStorage.getItem('data-birthday');
if(agegate_done){
  rutas.splice(0, 1);
}

@NgModule({
  declarations: [
    AppComponent,
    AgegateComponent,
    RegisterComponent,
    SliderComponent,
    InfoComponent,
    FooterComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas),
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
