import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page',
    },
    {
        path: 'signup',
        component: RegisterComponent,
        title: 'Register',
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dasboard',
    }
];
