import {Component, OnInit} from '@angular/core';
import {UploadService} from "../upload.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

comment = "";
postComment = [""];
body = {
}



constructor(public service: UploadService){
  this.service.postComments({

    "entity_id":[{"target_id":2}],
    "entity_type":[{"value":"node"}],
    "comment_type":[{"target_id":"comment"}],
    "field_comment_name":[{"value":"Hernani"}],
    "field_name":[{"value":""}],
    "field_email":[{"value":"hernaniborgesdefreitas@gmail.com"}],
    "subject":[{"value":"Hello World"}],
    "comment_body":[
      {"value":"<p>See you later!</p>","format":"plain_text"}
    ]

  })

}



  ngOnInit() {

  }
}
