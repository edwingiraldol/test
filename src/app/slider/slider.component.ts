import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true
  }
}
