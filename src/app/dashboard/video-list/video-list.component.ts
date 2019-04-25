import { Component, OnInit, Input } from '@angular/core';

import { Video } from '../../app-types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  selectedId: string;
  @Input() vidoes: Video[]; 

  constructor() {
    //this.selectedId = this.videos[0].id;
   }

  ngOnInit() {
  }

}