import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service/data-service.service';
import { Order } from './../models/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-order',
  templateUrl: './add-new-order.component.html',
  styleUrls: ['./add-new-order.component.css']
})
export class AddNewOrderComponent implements OnInit {

  order: Order = new Order();

  constructor(private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
  }

  goToDashboard() {
    this.router.navigate(['dashboard']);
  }

  placeNewOrder() {
    this.dataService.placeNewOrder(this.order).then(res => {
      console.log("Save complete", res);
      alert("Order is palced");
      this.goToDashboard();
    }, err => {
      alert("Some error in placing order, please try again later");
    });
  }
}
