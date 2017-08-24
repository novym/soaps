import { CarwashComponent } from './carwash/carwash.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: AppComponent
  },
  {
    path: 'carwash',
    component: CarwashComponent
  },

];

export const AppRouter: ModuleWithProviders = RouterModule.forRoot(routes);
