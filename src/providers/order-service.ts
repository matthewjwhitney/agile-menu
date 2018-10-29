/* Copyright 2017 Alt-Solutions, LLC. All rights reserved. */
import {Injectable} from '@angular/core';

@Injectable()
export class OrderService {

  orderItemCounter: number = 0;
  orderItems: Array<any> = [];

  getOrderItems() {
    return Promise.resolve(this.orderItems);
  }

  orderItem(item) {
    this.orderItemCounter = this.orderItemCounter + 1;
    this.orderItems.push({id: this.orderItemCounter, item: item});
	// console.log("Item Number: ",+this.orderItemCounter+", Item Title: "+item.title);
    return Promise.resolve();
  }

  unorderItem(orderItem) {
    let index = this.orderItems.indexOf(orderItem);
	// console.log("Deleted Item Number: ",+index);
    if (index > -1) {
      this.orderItems.splice(index, 1);
    }
    return Promise.resolve();
  }
  
  clearOrderItems() {
	this.orderItemCounter = 0;
	this.orderItems.splice(0, this.orderItems.length);
    return Promise.resolve();
  }

}
