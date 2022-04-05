import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { P404Component } from "src/shared/components/p404-component/p404-component.component";

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: "**", component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
