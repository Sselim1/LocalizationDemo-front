import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'module1', loadChildren: () => import('./module-one/module-one.module').then(m => m.ModuleOneModule) },
  { path: 'module2', loadChildren: () => import('./module-two/module-two.module').then(m => m.ModuleTWoModule) },
  { path: '', redirectTo: '/module1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
