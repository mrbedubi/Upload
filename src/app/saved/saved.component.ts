import {Component, OnInit} from '@angular/core';
import {UploadService} from "../upload.service";
import {Video} from "../interface";

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit {
  listaSaved: Video[] = [];
  BaseUrl: string="https://dev-project-upskill2-grupo2.pantheonsite.io"


  constructor(public uploadService: UploadService) {
  }

  ngOnInit(): void {
    this.uploadService.getSaved().subscribe((saved: any) => {
      this.listaSaved = saved.data;

      for (let i = 0; i < this.listaSaved.length; i++) {

      }
    })
  }}
