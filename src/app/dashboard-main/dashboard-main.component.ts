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

  orders: Order[] = [];
  orderKeys: String[] = [];
  loadingComplete: boolean = false;
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
    this.loadingComplete = false;
    this.dataService.fetchAllOrders().subscribe((orders: Order[]) => {
      this.overlayService.hideOverlay();
      console.log("Orders ", orders);
      this.loadingComplete = true;
      if (orders) {
        this.orders = orders;
        this.orderKeys = Object.keys(orders);
      } else {
        this.clearOrders();
      }
    });
  }

  clearOrders() {
    this.orders = [];
    this.orderKeys = [];
  }

}
