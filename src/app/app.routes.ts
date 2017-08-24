import { CarwashComponent } from './carwash/carwash.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: LandingComponent
  },
  {
    path: 'carwash',
    component: CarwashComponent
  },

];

export const AppRouter: ModuleWithProviders = RouterModule.forRoot(routes);
