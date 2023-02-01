import {Component, OnInit} from '@angular/core';
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

  submitted = false;
  postComment!: FormGroup;
  showReport1 = false
  showReport2 = false
  reportSent = false


  constructor(public service: UploadService, private fb: FormBuilder) {


  }


  ngOnInit(): void {
    this.postComment = this.fb.group({
        name: ['', [Validators.required, Validators.maxLength(100)]],
        email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
        message: ['', [Validators.required, Validators.maxLength(500)]]
      },
      {updateOn: 'submit'}
    );


  }


  onSubmit() {
    this.submitted = true;
    console.log(this.postComment.hasError('required', 'message').valueOf())
    if (this.postComment.valid) {
      // send message to drupal

    } else {
      // throw errors on form
      this.validateFormFields(this.postComment);
    }
  }

  private validateFormFields(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({onlySelf: true})
      } else if (control instanceof FormGroup) {
        this.validateFormFields(control);
      }
    });
  }


  toggleReport() {
this.showReport1 = !this.showReport1

}
  toggleReport2() {
    this.showReport2 = !this.showReport2

  }

  sendReport(){
    this.showReport1 = false
    this.showReport2 = false
    this.reportSent = true
  }


}
