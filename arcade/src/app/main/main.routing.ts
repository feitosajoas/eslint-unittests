import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "books",
    loadChildren: () =>
      import("./books/books.module").then((m) => m.BooksModule),
  },
];

export const MainRoutes = RouterModule.forChild(routes);
