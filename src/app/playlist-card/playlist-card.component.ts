import {Component, Input, OnInit} from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
  }

}