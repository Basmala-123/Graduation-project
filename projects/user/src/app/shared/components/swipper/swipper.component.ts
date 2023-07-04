import { Component , Input } from '@angular/core';
import SwiperCore , { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-swipper',
  templateUrl: './swipper.component.html',
  styleUrls: ['./swipper.component.css']
})
export class SwipperComponent {
  @Input() slides :any=[];
  
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 50
      }
    },
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  onSwiper(swiper: any) {}
  onSlideChange() {}

}
