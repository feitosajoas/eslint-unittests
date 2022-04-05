import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BooksComponent } from "./books.component";
import { BooksRoutes } from "./books.routing";

@NgModule({
  declarations: [BooksComponent],
  imports: [CommonModule, BooksRoutes],
})
export class BooksModule {}
