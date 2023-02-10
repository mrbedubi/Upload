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
  @Input() username!:string;

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
    if(this.reportComment.valid){
    let  reason = this.reportComment.get('reason')?.value;
    let otherReason = this.reportComment.get('otherReason')?.value;
    let comentaryId= this.comment_id;
    this.reportComment.reset();
    this.show=false;
    this.service.postReport({
      "entity_id":[comentaryId],
      "entity_type":["comment"],
      "field_reason_option":[reason],
      "field_reason":[otherReason? otherReason!="" :""],
      "flag_id":"report_comments",
      "uid":["0"]
    })
    }



  }


}
