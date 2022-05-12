import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: "books",
    loadChildren: () =>
      import("./books/books.module").then((m) => m.BooksModule),
  },
];

export const MainRoutes = RouterModule.forChild(routes);
