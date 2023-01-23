import {Component, OnInit} from '@angular/core';

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

post(){

    "entity_id":[{"target_id":2}]
    "entity_type":[{"value":"node"}],
    "comment_type":[{"target_id":"comment"}],
    "field_comment_name":[{"value":"Hernani"}],
    "field_name":[{"value":"field_channel_comments"}],
    "field_email":[{"value":"hernaniborgesdefreitas@gmail.com"}],
    "subject":[{"value":"Hello World"}],
    "comment_body":[
    {"value":"<p>See you later!</p>","format":"plain_text"}
  ]

}

constructor(){}

  ngOnInit() {

  }
}
