import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})

export class MyserviceService {

  static BASE_URL = 'https://api.spotify.com/v1';


  constructor(private http: HttpClient) { }


  apiKey = environment.spotifyApiKey;


  query (
    URL: string,
    params?: Array<string>
  ): Observable<any[]> {
    let queryURL = `${MyserviceService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`;
    }
    const apiKey = environment.spotifyApiKey;

    return this.http.get(queryURL, {
      headers: {'Authorization': `Bearer ${apiKey}`}
    }).pipe(
      map(
        (res: any) => res )
    );
  }

  search(query: string, type: string): Observable<any[]> {
    return this.query(`/search`, [
      `q=${query}`,
      `type=${type}`
    ]);
  }


  searchTrack(query: string): Observable<any[]> {
    return this.search(query, 'track');
  }

  searchPlaylist(query: string): Observable<any[]> {
    return this.search(query, 'playlist');
  }

  getTrack(id: string): Observable<any[]> {
    return this.query(`/tracks/${id}`);
  }

  getTracks(): Observable<any[]> {
    return this.query('/tracks');
  }

  getArtist(id: string): Observable<any[]> {
    return this.query(`/artists/${id}`);
  }

  getPlaylist(id: string): Observable<any[]> {
    return this.query(`/playlists/${id}`);
  }

  getAlbum(id: string): Observable<any[]> {
    return this.query(`/albums/${id}`);
  }

  getInfo(x: string): Observable<any[]> {
    return this.query(`/artists/${x}`);
  }

}

export const SPOTIFY_PROVIDERS: Array<any> = [
  { provide: MyserviceService, useClass: MyserviceService }
];
