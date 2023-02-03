import {Component, Input, OnInit} from '@angular/core';
import {UploadService} from "../upload.service";
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import {faFlag} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  faEllipsisV = faEllipsisV
  faFlag =faFlag

submitted=false;
postComment!:FormGroup;
  @Input() videoId!:number;
  @Input() type!:'video'|'channel';
  showReport = false
  reportSent = false
constructor(public service: UploadService , private  fb:FormBuilder){


  }


ngOnInit():void{
  this.postComment = this.fb.group({
    name:['',[Validators.required , Validators.maxLength(100)]],
    email:['',[Validators.required , Validators.email , Validators.maxLength(100)] ],
    message: ['',[Validators.required, Validators.maxLength(500)] ]
  },
    {  updateOn: 'submit' }
    );


}





  onSubmit(){
  this.submitted=true;
    console.log(this.postComment.hasError('required','message').valueOf())
if(this.postComment.valid){
  // send message to drupal
let name=this.postComment.get('name')?.value;
let email=this.postComment.get('email')?.value;
let message=this.postComment.get('message')?.value;

  let comment ={
    "entity_id":[{"target_id":this.videoId}],
    "entity_type":[{"value":"media"}],
    "field_name":[{"value":"field_comments_"}],
    "comment_type":[{"target_id":"video_comments"}],
    "comment_body":[{"value":message,"format":"plain_text"}],
    "field_email":[{"value":email}],
    "field_username":[{"value":name}]
  }
this.submitted=false;
  console.log(comment);
this.postComment.reset();
  //this.service.postComments(comment);
}
else{
  // throw errors on form
  this.validateFormFields(this.postComment);
}
}

private validateFormFields(form: FormGroup) {
  Object.keys(form.controls).forEach(field => {
    const control = form.get(field);
    if (control instanceof FormControl) {
      control.markAsDirty({onlySelf:true})
    } else  if(control instanceof FormGroup){
      this.validateFormFields(control);
    }
  });
}


  toggleReport() {
    this.showReport = !this.showReport
  }

  sendReport() {
    this.showReport = false
    this.reportSent = true
    let start = 1000;

    setTimeout( () => {
      this.reportSent = !this.reportSent
      console.log('a')
    }, start);


  }
}
