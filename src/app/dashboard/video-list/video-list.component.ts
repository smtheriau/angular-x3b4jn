import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Video } from '../../app-types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() vidoes: Video[]; 
  @Input() selectedId: string;
  @Output() videoSelected = new EventEmitter<Video>();

  constructor() {
    //this.selectedId = this.videos[0].id;
   }

  ngOnInit() {
  }

  selectVideo(video: Video) {
    this.videoSelected.emit(video);
  }

}