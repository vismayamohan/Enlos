import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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
  itemsAdd: string = '';
  ordersAdd: string = '';
  newsAdded: string = '';

  // status: boolean = false;
  constructor(
    private Dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  isOpenMenu() {
    this.isOpen = !this.isOpen;
  }

  isOpenDashMenu() {
    this.isDashboardMenu = !this.isDashboardMenu;
  }


  selectOpenDiv(option) {
    if(option=="dashboard") {
      this.isDroupout = !this.isDroupout;
      if(this.isDroupout) {
        this.addClass = 'contentBottom';
      } else {
        this.addClass = '';
      }
    }
    if(option=="items") {
      this.isItems = !this.isItems;
      if(this.isItems) {
        this.itemsAdd = 'contentBottom';
      } else {
        this.itemsAdd = '';
      }
    }
    if(option=="orders") {
      this.isOrders = !this.isOrders;
      if(this.isOrders) {
        this.ordersAdd = 'contentBottom';
      } else {
        this.ordersAdd = '';
      }
    }
    if(option=="newsAdd") {
      this.isNews = !this.isNews; 
      if(this.isNews) {
        this.newsAdded = 'contentBottom'
      } else {
        this.newsAdded= '';
      }
    }
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig()
    this.Dialog.open(PopupComponent, {
      width: '1000px',
      height: '600px',
      disableClose: true
    });
  }

}
