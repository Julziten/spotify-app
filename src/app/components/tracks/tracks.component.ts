import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MyserviceService } from '../../services/myservice.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.less']
})

export class TracksComponent implements OnInit {

  tracks: any;

  constructor(private svc: MyserviceService) { }

  ngOnInit() {
  }

}
