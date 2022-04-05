import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './components/task/task.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/shared/shared.module';



@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
