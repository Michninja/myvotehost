import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'details', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'products', loadChildren: './products/products.module#ProductsPageModule' },
  { path: 'leaderboard', loadChildren: './leaderboard/leaderboard.module#LeaderboardPageModule' },
 
  
  
  //{ path: 'new-task', loadChildren: './new-task/new-task.module#NewTaskPageModule' },
  // { path: 'new-task-modal', loadChildren: './new-task-modal/new-task-modal.module#NewTaskModalPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
