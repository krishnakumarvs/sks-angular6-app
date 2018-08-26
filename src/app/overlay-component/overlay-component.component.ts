import { Component, OnInit } from '@angular/core';
import { OverlayService } from '../services/overlay/overlay.service';

@Component({
  selector: 'app-overlay-component',
  templateUrl: './overlay-component.component.html',
  styleUrls: ['./overlay-component.component.css']
})
export class OverlayComponentComponent implements OnInit {

  showOverlay: boolean = false;
  constructor(private overlayService: OverlayService) { }

  ngOnInit() {
    this.overlayService.getUpdates().subscribe((res:boolean)=> {
      this.showOverlay = res;
    });
  }

}
