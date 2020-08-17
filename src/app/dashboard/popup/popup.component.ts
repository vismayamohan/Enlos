import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  public swiper;
  constructor(
    private Dialog: MatDialog
  ) { }

  // public galleryThumbs = new Swiper('.gallery-thumbs', {
  //   spaceBetween: 10,
  //   slidesPerView: 4,
  //   freeMode: true,
  //   watchSlidesVisibility: true,
  //   watchSlidesProgress: true,
  // });
  // public galleryTop = new Swiper('.gallery-top', {
  //   spaceBetween: 10,
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   thumbs: {
  //     swiper: this.galleryThumbs
  //   }
  // });

  ngOnInit() {
    this.swiper = new Swiper('.gallery-top', {
      loop: true,
      autoplay: true,
      slidesPerView: 4,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".home-pagination",
        clickable: false
      }
      // thumbs: {
      //   swiper: 
      // }
    });
  }

  closeDialog() {
    this.Dialog.closeAll();
  }
}
