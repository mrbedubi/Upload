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
    "entity_id":[{"target_id":11}],
    "entity_type":[{"value":"media"}],
    "field_name":[{"value":"field_comments_"}],
    "comment_type":[{"target_id":"video_comments"}],
    "comment_body":[{"value":"See you later!","format":"plain_text"}],
    "field_email":[{"value":"hernaniborgesdefreitas@gmail.com"}],
    "field_user_avatar":[{"value":"jkh"}],
    "field_username":[{"value":"Ola"}]


  })

}



  ngOnInit() {

  }
}
