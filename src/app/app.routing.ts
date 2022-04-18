import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/index';
import { LoginComponent } from './login-page/index';
import { SignupPageComponent } from './signup-page/index';
import { AuthGuard } from './guards/index';

const appRoutes: Routes = [
    { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: SignupPageComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);