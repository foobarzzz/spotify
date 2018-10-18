import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

import { SpotifyAPIKey } from '../environments/spotifyApiKey';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  BASE_URL = 'https://api.spotify.com/v1';

  constructor(private http: Http) { }
  search(queryUrl: string): Observable<any> {
    const apiKey = SpotifyAPIKey;
    const headers = new Headers({
      Authorization: `Bearer ${apiKey}`
    });
    const options = new RequestOptions({
      headers: headers
    });

    return this.http.request(queryUrl, options).map((res: any) => res.json());
  }
}
