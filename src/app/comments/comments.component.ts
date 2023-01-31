import {Component, OnInit} from '@angular/core';
import {UploadService} from "../upload.service";
import { FormGroup, FormControl, Validators , FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

submitted=false;
postComment!:FormGroup;
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

}else{
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

}
