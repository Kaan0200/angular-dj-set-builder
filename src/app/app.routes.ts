import { Routes } from '@angular/router';
import { HomePage } from './pages/HomePage/home';
import { AboutPage } from './pages/CreditPage/about';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'about',
        component: AboutPage
    }
];
