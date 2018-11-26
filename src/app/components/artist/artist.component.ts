import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { MyserviceService } from '../../services/myservice.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.less']
})

export class ArtistComponent implements OnInit {

  id: string;
  artist: any;

  constructor(private route: ActivatedRoute, private svc: MyserviceService, private router: Router) {

    route.params.subscribe(params => {
      this.id = params['id'];
    });

  }

  ngOnInit(): void {
    this.svc
    .getArtist(this.id)
    .subscribe((res: any) => this.renderArtist(res));
  }


  renderArtist(res: any): void {
    this.artist = res;
    console.log(this.artist);
  }


}
