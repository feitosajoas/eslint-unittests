import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [InputComponent, ErrorMessageComponent, FormDebugComponent],
  imports: [CommonModule, FormsModule],
  exports: [InputComponent, FormDebugComponent]
})
export class SharedModule {}
