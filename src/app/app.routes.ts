import { Routes } from '@angular/router';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { UpdateFormComponent } from './components/update-form/update-form.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
      },
  {
    path: 'online-banking',
    component: MainDashboardComponent,
  },
  {
    path: 'update',
    component: UpdateFormComponent,
  },
];
