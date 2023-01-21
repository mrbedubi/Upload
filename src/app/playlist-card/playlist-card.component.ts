import {Component, Input, OnInit} from '@angular/core';
import {UploadService} from "../upload.service";

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss']
})
export class PlaylistCardComponent implements OnInit {



  @Input() title?: string;
  @Input() category?: string;
  @Input() image?: string;
  @Input() date?: string;
  @Input() videosId!: string;
  @Input() playlist_id!: string;



  constructor(public service:UploadService) { }

  ngOnInit(): void {
    console.log(this.category)
  }

}
