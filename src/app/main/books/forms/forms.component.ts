import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  bookForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      authorName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      bookName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      price: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40), Validators.pattern('^[0-9]*$')]],
      publishdate: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(80), Validators.pattern('^[0-9]*$')]],
      publishingCompany: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]]
    });
  }

  verifyValidTouched(input: string) {
    return !this.bookForm.get(input)?.valid && (this.bookForm.get(input)?.touched || this.bookForm.get(input)?.dirty);
  }

  validateClass(input: string) {
    return {
      'is-invalid': this.verifyValidTouched(input)
    };
  }
}
