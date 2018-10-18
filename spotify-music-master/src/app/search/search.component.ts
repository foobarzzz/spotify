import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {

  query: string;
  results: any;

  constructor(private spotify: SpotifyService) {
  }

  ngOnInit() {
  }

  searchTrack() {
   
    this.spotify
		.searchTrack(this.query)
		.subscribe(response => {
        if (response === null) {
          return;
        }
        console.log(response);
        this.results = response.items;
        console.log(this.results);
      },
      
    );
  }

}
