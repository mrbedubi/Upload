import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Video} from "../interface";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
videos!:Video[]
  constructor( private route: ActivatedRoute , private router: Router ) { }

  ngOnInit(): void {



  }



}
