import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Swiper } from 'swiper';
import { NgImageSliderModule } from 'ng-image-slider'

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  constructor(
    private Dialog: MatDialog
  ) { }

  imageObject: Array<object> = [{
    image: '/assets/images/placeholder.com-logo1.jpg',
    thumbImage: '/assets/images/placeholder.com-logo1.jpg',
    alt: 'alt of image',
    title: 'title of image'
  }, {
    image: 'https://i.picsum.photos/id/838/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/838/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://i.picsum.photos/id/93/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/93/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://i.picsum.photos/id/543/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/543/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://i.picsum.photos/id/613/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/613/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://i.picsum.photos/id/609/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/609/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://i.picsum.photos/id/717/1020/600.jpg',
    thumbImage: 'https://i.picsum.photos/id/717/400/350.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }
  ];

  ngOnInit() { }

  closeDialog() {
    this.Dialog.closeAll();
  }
}
