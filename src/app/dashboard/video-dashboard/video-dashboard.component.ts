import { Component, OnInit } from '@angular/core';

import { StatFiltersComponent } from '../stat-filers/stat-filters.component';


@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {

  videoUrl = 'https://api.angularbootcamp.com/videos';

  constructor() { }

  ngOnInit() {
  }

}