import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  bookForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      authorName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
    });
  }
}
