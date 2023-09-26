import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TimeValidator } from '../custom/time-validator';

@Component({
  selector: 'app-schedule-surgery',
  templateUrl: './schedule-surgery.component.html',
  styleUrls: ['./schedule-surgery.component.scss']
})
export class ScheduleSurgeryComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      startTime: ['', Validators.required],
      endTime: ['', Validators.required]
    },
      { validators: TimeValidator }
    );
  }
}
