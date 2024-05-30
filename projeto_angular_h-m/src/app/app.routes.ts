import { Routes } from '@angular/router';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { HomeComponent } from './core/home/home.component';
import { ModalComponent } from './modal/modal.component';
import { ModallogoutComponent } from './modallogout/modallogout.component';
import { ProductsComponent } from './products/products/products.component';
import { ProductinfoComponent } from './products/productinfo/productinfo.component';
import { WishlistComponent } from './wishlist/wishlist/wishlist.component';
// import { ProductsapiComponent } from './products/productsapi/productsapi/productsapi.component';

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
    // {
    //     path: 'products',
    //     component: ProductsapiComponent,
    //     title: 'Todos os produtos'
    // },
    {
        path: 'modal',
        component: ModalComponent,
        title: 'login'
    },
    {
        path: 'modallogout',
        component: ModallogoutComponent,
        title: 'logout'
    },
    {
        path: 'products/:id',
        component: ProductinfoComponent,
        title: 'productinfo'
    },
    {
        path: 'wishlist',
        component: WishlistComponent,
        title: 'wishlist'
    },
    {
        path: '**',
        component: NotfoundComponent,
        title: 'Página não encontrada'
    }
];
