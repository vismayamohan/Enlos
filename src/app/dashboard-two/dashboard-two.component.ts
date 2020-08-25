import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-two',
  templateUrl: './dashboard-two.component.html',
  styleUrls: ['./dashboard-two.component.css']
})
export class DashboardTwoComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

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

}
