import { Component, OnInit ,ViewChild} from '@angular/core';
import { Feedback, ContactType } from '../shared/feedback';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;
  @ViewChild('fform') feedbackFormDirective;

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      telnum: [0,Validators.required],
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname:'',
      lastname:'',
      telnum:'',
      email:'',
      agree:false,
      cantacttype:'None',
      message:''

    });
    this.feedbackFormDirective.resetForm();
  }
}
