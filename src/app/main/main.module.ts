import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MainRoutes } from "./main.routing";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [CommonModule, MainRoutes],
})
export class MainModule {}
