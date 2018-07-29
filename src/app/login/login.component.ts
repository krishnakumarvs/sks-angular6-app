import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../services/data-service/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private dataServiceService: DataServiceService) { }

  ngOnInit() {
    // this.dataServiceService.fetchSampleData().subscribe(queriedItems => {
    //   console.log("queriedItems ", queriedItems);
    // });
  }

  userAuthenticate() {
    this.goToDashoardMain();
  }

  goToDashoardMain() {
    this.router.navigate(['dashboard']);
  }

}
