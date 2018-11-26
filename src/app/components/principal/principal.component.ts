import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MyserviceService } from '../../services/myservice.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.less'],
})

export class PrincipalComponent implements OnInit {

  query: string;
  results: Object;

  message: string;


  constructor (private svc: MyserviceService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route
    .queryParams
    .subscribe(params => { this.query = params['query'] || ''; }
    );
  }


  submit(query: string): void {
    this.router.navigate(['principal'], { queryParams: { query: query } })
      .then(_ => this.search() );
  }

  search(): void {
    console.log('this query', this.query);
    if (!this.query) {
      return;
    }
    this.svc
    .searchTrack(this.query)
    .subscribe((res: any) => this.renderResults(res));
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.tracks && res.tracks.items) {
      this.results = res.tracks.items;
    }
    console.log(this.results);
  }

}
