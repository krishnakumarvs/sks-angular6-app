import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service/data-service.service';
import { Order } from './../models/model';
import { Router } from '@angular/router';
import { OverlayService } from '../services/overlay/overlay.service';

@Component({
  selector: 'app-add-new-order',
  templateUrl: './add-new-order.component.html',
  styleUrls: ['./add-new-order.component.css']
})
export class AddNewOrderComponent implements OnInit {

  order: Order = new Order();

  constructor(private dataService: DataService,
    private overlayService: OverlayService,
    private router: Router) { }

  ngOnInit() {
  }

  goToDashboard() {
    this.router.navigate(['dashboard']);
  }

  placeNewOrder() {
    this.overlayService.showOverlay();
    this.dataService.placeNewOrder(this.order).then(res => {
      this.overlayService.hideOverlay();
      this.goToDashboard();
    }, err => {
      alert("Some error in placing order, please try again later");
    });
  }
}
