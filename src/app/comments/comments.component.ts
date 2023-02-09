import {Component, Input, OnInit , OnChanges} from '@angular/core';
import {UploadService} from "../upload.service";
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import {faFlag} from "@fortawesome/free-solid-svg-icons";
import {Comments} from "../interface";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnChanges {
  faEllipsisV = faEllipsisV
  faFlag =faFlag

submitted=false;
postComment!:FormGroup;
  @Input() Id!:number |string;
  @Input() type!:'video'|'channel';
  showReport = false;
  reportSent = false;
  comments: Comments[]=[];
  commentsNumber!:number;

constructor(public service: UploadService , private  fb:FormBuilder){
  this.postComment = this.fb.group({
      name:['',[Validators.required , Validators.maxLength(100)]],
      email:['',[Validators.required , Validators.email , Validators.maxLength(100)] ],
      message: ['',[Validators.required, Validators.maxLength(500)] ]
    },
    {  updateOn: 'submit' }
  );

  }


ngOnChanges(){
  this.getComments();
  console.log("lssdsdsadsdsad  ",this.service.lang);
}





  onSubmit(){
  this.submitted=true;
    console.log(this.postComment.hasError('required','message').valueOf())
if(this.postComment.valid){
  // send message to drupal
let name=this.postComment.get('name')?.value;
let email=this.postComment.get('email')?.value;
let message=this.postComment.get('message')?.value;
let newComment:Comments;
  let comment={};
if(this.type=='video'){
   comment ={
    "entity_id":[{"target_id":this.Id}],
    "entity_type":[{"value":"media"}],
    "field_name":[{"value":"field_comments_"}],
    "comment_type":[{"target_id":"video_comments"}],
    "comment_body":[{"value":message,"format":"plain_text"}],
    "field_email":[{"value":email}],
    "field_username":[{"value":name}],
    "pid":[],
    "langcode": [{"value":this.service.lang=='en'?'en' : 'pt-pt' }]
  }
} else {
  comment ={
    "entity_id":[{"target_id":this.Id}],
    "entity_type":[{"value":"node"}],
    "field_name":[{"value":"field_channel_comments"}],
    "comment_type":[{"target_id":"channel_comments"}],
    "comment_body":[{"value":message,"format":"plain_text"}],
    "field_email":[{"value":email}],
    "field_username":[{"value":name}],
    "pid":[],
    "langcode": [{"value":this.service.lang=='en'?'en' : 'pt-pt' }]
  }
}

  console.log(comment);
  this.service.postComments(comment);
  newComment={
    "comment": message,
    "email": email,
    "username": name,
    "date": "just now",
    "id": this.Id,
    "comment_id": "",
    "reply_comment_id": "",
  }
  this.comments.unshift(newComment);
this.submitted=false;
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



  getComments(){

    if(this.type=='video'){
      this.service.getComments(this.Id , "video").subscribe((comments)=>{
        this.comments=comments
      })
    }else {

      this.service.getComments(this.Id , "channel").subscribe((comments)=>{
        this.comments=comments
      })
    }
  }




}
