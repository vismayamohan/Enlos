import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';
// import { WindowState } from '@progress/kendo-angular-dialog';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isOpen: boolean = false;
  isDashboardMenu: boolean = false;
  isVisible: boolean = true;
  isDroupout: boolean = false;
  isItems: boolean = false;
  isOrders: boolean = false;
  isNews: boolean = false;
  addClass: string = 'contentBottom';
  itemsAdd: string = 'contentBottom';
  ordersAdd: string = 'contentBottom';
  newsAdded: string = 'contentBottom';
  isUser: boolean = false;

  constructor(
    private Dialog: MatDialog
  ) { }

  isOpenMenu() {
    this.isOpen = !this.isOpen;
  }

  isOpenDashMenu() {
    this.isDashboardMenu = !this.isDashboardMenu;
  }

  userDetail() {
    this.isUser = !this.isUser;
  }
  selectOpenDiv(option) {
    if(option=="dashboard") {
      this.isDroupout = !this.isDroupout;
      if(this.isDroupout) {
        this.addClass = '';
      } else {
        this.addClass = 'contentBottom';
      }
    }
    if(option=="items") {
      this.isItems = !this.isItems;
      if(this.isItems) {
        this.itemsAdd = '';
      } else {
        this.itemsAdd = 'contentBottom';
      }
    }
    if(option=="orders") {
      this.isOrders = !this.isOrders;
      if(this.isOrders) {
        this.ordersAdd = '';
      } else {
        this.ordersAdd = 'contentBottom';
      }
    }
    if(option=="newsAdd") {
      this.isNews = !this.isNews; 
      if(this.isNews) {
        this.newsAdded= '';
      } else {
        this.newsAdded = 'contentBottom'
      }
    }
  }

  // public windowState: WindowState = 'default';
  //   public opened: boolean = false;

  //   public openClose(isOpened: boolean) {
  //     this.opened = isOpened;
  //   }


  // galleryOptions: NgxGalleryOptions[];
  // galleryImages: NgxGalleryImage[];

  ngOnInit() { 

  //   this.galleryOptions = [
  //     {
  //         width: '100%',
  //         height: '250px',
  //         thumbnailsColumns: 4,
  //         imageAnimation: NgxGalleryAnimation.Slide
  //     },
  //     // max-width 800
  //     {
  //         breakpoint: 800,
  //         width: '100%',
  //         height: '250px',
  //         imagePercent: 80,
  //         thumbnailsPercent: 20,
  //         thumbnailsMargin: 20,
  //         thumbnailMargin: 20
  //     },
  //     // max-width 400
  //     {
  //         breakpoint: 600,
  //         width: '100%',
  //         height: '200px',
  //         preview: false
  //     }
  //   ];

  //   this.galleryImages = [
  //     {
  //       small: 'assets/images/photo4.jpg',
  //       medium: 'assets/images/photo4.jpg',
  //       big: 'assets/images/photo4.jpg'
  //     },
  //     {
  //         small: 'assets/images/juice1.jpg',
  //         medium: 'assets/images/juice1.jpg',
  //         big: 'assets/images/juice1.jpg'
  //     },
  //     {
  //         small: 'assets/images/juice2.jpg',
  //         medium: 'assets/images/juice2.jpg',
  //         big: 'assets/images/juice2.jpg'
  //     },
  //     {
  //       small: 'assets/images/juice3.jpeg',
  //       medium: 'assets/images/juice3.jpeg',
  //       big: 'assets/images/juice3.jpeg'
  //     },
        
  //   ];
  }

  openDialog() {
    const dialogRef = this.Dialog.open(PopupComponent, {
      width: '1000px',
      height: '600px'
    })
  }
  closeDialog() {
    this.Dialog.closeAll();
  }

}
