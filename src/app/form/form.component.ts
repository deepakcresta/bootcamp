import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  loginForm:FormGroup= new FormGroup({});
  submitted: boolean | undefined;
  isSubmitting: boolean | undefined;

  // forms:any;
   
constructor(
    private router: Router,
    private formBuilder: FormBuilder,

  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: [
        undefined,
        [
          Validators.required,
          Validators.maxLength(60),
          Validators.minLength(3),
          Validators.pattern('^[a-z A-Z]{3,60}$'),
        ],
      ],
      password: [
        undefined,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ],
      ],
   
    });
  }
  get forms(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  onLoginForm(login: any) {

}
}
