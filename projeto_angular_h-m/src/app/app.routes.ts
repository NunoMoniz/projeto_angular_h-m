import { Routes } from '@angular/router';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { HomeComponent } from './core/home/home.component';
import { ProductsComponent } from './products/products/products.component';
import { ModalComponent } from './modal/modal.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'H&M – Loja'
    },
    {
        path: 'products',
        component: ProductsComponent,
        title: 'Todos os produtos'
    },
    {
        path: 'modal',
        component: ModalComponent,
        title: 'login'
    },
    {
        path: '**',
        component: NotfoundComponent,
        title: 'Página não encontrada'
    }
];
