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

  savedList = this.uploadService.saved


  constructor(public uploadService: UploadService) {
  }

  ngOnInit(): void {

    for (let i = 0; i < this.savedList.length; i++) {
      console.log(this.savedList)
      this.uploadService.getVideosById(this.savedList[i]).subscribe((saved) => {
        console.log(this.savedList[i])
        this.listaSaved.push(saved[0])
      })
    }
  }
}
