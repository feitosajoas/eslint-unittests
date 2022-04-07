import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { BooksComponent } from './books.component';
import { BooksRoutes } from './books.routing';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [BooksComponent, FormsComponent],
  imports: [CommonModule, BooksRoutes, FormsModule, ReactiveFormsModule, SharedModule]
})
export class BooksModule {}
