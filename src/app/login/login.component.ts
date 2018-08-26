import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data-service/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private dataService: DataService) { }

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
