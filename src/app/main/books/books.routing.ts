import { RouterModule, Routes } from "@angular/router";
import { BooksComponent } from "./books.component";
import { FormsComponent } from "./forms/forms.component";

const routes: Routes = [
  { path: "", component: BooksComponent },
  { path: "new", component: FormsComponent },
];

export const BooksRoutes = RouterModule.forChild(routes);
