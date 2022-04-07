import { Component, Input } from "@angular/core";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent {
  @Input() isInput: boolean = true;
  @Input() inputType: string = "";
  @Input() inputId: string = "";
  @Input() placeholder: string = "";
  @Input() labelName: string = "";
}
