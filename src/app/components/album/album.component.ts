import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { MyserviceService } from '../../services/myservice.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.less']
})

export class AlbumComponent implements OnInit {

  id: string;
  album: any;

  constructor(private route: ActivatedRoute, private svc: MyserviceService, private router: Router, private location: Location) {
    route.params.subscribe(params => {
    this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.svc
    .getAlbum(this.id)
    .subscribe((res: any) => this.renderAlbum(res));
  }

  renderAlbum(res: any): void {
    this.album = res;
  }

  back(): void {
    this.location.back();
  }

}
