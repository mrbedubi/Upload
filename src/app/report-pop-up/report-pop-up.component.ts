import {Component, Input, OnInit} from '@angular/core';
import {UploadService} from "../upload.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {faFlag} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-report-pop-up',
  templateUrl: './report-pop-up.component.html',
  styleUrls: ['./report-pop-up.component.scss']
})
export class ReportPopUpComponent implements OnInit {
  faFlag =faFlag
  reportComment!: FormGroup;
  show=false;
  @Input() comment_id!: number|string ;
  @Input() comment_type!: 'video' | 'channel';

  constructor(public service: UploadService , private  fb:FormBuilder) {

    this.reportComment = this.fb.group({
      reason: ['', Validators.required],
      otherReason: ['']
    });
  }

  ngOnInit(): void {
  }

  openReport(){
    this.show=true;
  }

  closeReport(){
    this.show=false;
  }

  sendReport() {
    let  reason = this.reportComment.get('reason')?.value;
    let otherReason = this.reportComment.get('otherReason')?.value;
    let comentaryId;

    console.log(this.reportComment.value);
    this.reportComment.reset();
  }


}
