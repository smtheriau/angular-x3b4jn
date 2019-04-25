import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Video } from '../../app-types';

const apiUrl = "https://api.angularbootcamp.com/videos";

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {

  selectedVideo: Video;
  list: Video[] = [];

  constructor(http: HttpClient) {
    http.get<Video[]>(apiUrl)
      .subscribe(videos => { this.list = videos;
        this.selectedVideo = videos[0];
      })
  }

  ngOnInit() {
  }

}