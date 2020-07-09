import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isFormSubmit: boolean = false;
  isSuccessAlert: boolean = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.makeContactForm();
  }

  private makeContactForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      body: ''
    });
  }

  contactFormSubmit() {
    this.isFormSubmit = true;
    if (!this.contactForm.invalid) {
      console.log(this.contactForm.value);
      this.isFormSubmit = false;
      this.isSuccessAlert = true;
      this.contactForm.reset();
      setTimeout(() => {
        this.isSuccessAlert = false;
      }, 5000);
    }
  }
}
