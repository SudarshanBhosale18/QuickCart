import { RouterModule, Routes } from '@angular/router';
import { Cart } from './cart/cart';
import { Home } from './home/home';
import { Login } from './login/login';
import { Register } from './register/register';
import { NgModule } from '@angular/core';
import { Admin } from './admin/admin';

export const routes: Routes = [

    {path: '', component: Home},
    {path: 'Home', component: Home},
    {path: 'Cart', component: Cart},
    {path: 'Login', component: Login},
    {path: 'Register', component: Register},
    {path: 'Admin', component: Admin}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}