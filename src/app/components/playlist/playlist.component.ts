import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../services/myservice.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.less']
})
export class PlaylistComponent implements OnInit {

  query: string;
  results: Object;
  showResults = false;

  constructor(private svc: MyserviceService,
              private route: ActivatedRoute,
              private router: Router) {

              this.route
              .queryParams
              .subscribe(params => {this.query = params ['query'] || ''; });
               }

  ngOnInit() {
  }

  submit(query: string): void {
    this.router.navigate(['playlist'], { queryParams: { query: query } })
      .then(_ => this.search() );
  }

  search(): void {
    console.log('this query', this.query);
    if (!this.query) {
      return;
    }
    this.svc
    .searchPlaylist(this.query)
    .subscribe((res: any) =>
    this.results = res.playlists.items
    );
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.tracks && res.tracks.items) {
      this.results = res.tracks.items;
    }
    console.log(this.results);
  }

  goToPlaylist(id: any) {
    console.log(id);
  }

}
