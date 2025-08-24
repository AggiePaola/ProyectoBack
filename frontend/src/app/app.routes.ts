import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { AdminComponent } from './pages/admin/admin.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'detalle/:id', component: DetailComponent },
    { path: 'admin', component: AdminComponent }
];
