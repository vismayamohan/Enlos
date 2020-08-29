import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(
    private Dialog: MatDialog
  ) { }

  
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit() { 

    this.galleryOptions = [
      {
          width: '100%',
          height: '250px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '250px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 600,
          width: '100%',
          height: '200px',
          preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/photo4.jpg',
        medium: 'assets/images/photo4.jpg',
        big: 'assets/images/photo4.jpg'
      },
      {
          small: 'assets/images/juice1.jpg',
          medium: 'assets/images/juice1.jpg',
          big: 'assets/images/juice1.jpg'
      },
      {
          small: 'assets/images/juice2.jpg',
          medium: 'assets/images/juice2.jpg',
          big: 'assets/images/juice2.jpg'
      },
      {
        small: 'assets/images/juice3.jpeg',
        medium: 'assets/images/juice3.jpeg',
        big: 'assets/images/juice3.jpeg'
      },
        
    ];
  }

  closeDialog() {
    this.Dialog.closeAll();
  }

}
