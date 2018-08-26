import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data-service/data-service.service';
import { Order } from '../models/model';
import { OverlayService } from '../services/overlay/overlay.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css']
})
export class DashboardMainComponent implements OnInit {

  orders: Order[];
  orderKeys: String[];
  constructor(private router: Router,
    private overlayService: OverlayService,
    private dataService: DataService) { }

  ngOnInit() {
    this.fetchAllOrders();
  }

  addNewBooking() {
    this.router.navigate(['new-order']);
  }

  fetchAllOrders() {
    this.overlayService.showOverlay();
    this.dataService.fetchAllOrders().subscribe((orders: Order[]) => {
      this.overlayService.hideOverlay();
      this.orders = orders;
      console.log("Orders ", orders);
      this.orderKeys = Object.keys(orders);
    });
  }

}
