// =============================


// =============================

import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, DefaultUrlSerializer, UrlSerializer, UrlTree } from '@angular/router';
import { MercadosComponent } from './components/mercados/mercados.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { SimboloComponent } from './components/simbolo/simbolo.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AboutComponent } from './components/about/about.component';
import { WebinarsComponent } from './components/webinars/webinars.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { Utilities } from './services/utilities';



@Injectable()
export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
    parse(url: string): UrlTree {
        const possibleSeparators = /[?;#]/;
        const indexOfSeparator = url.search(possibleSeparators);
        let processedUrl: string;

        if (indexOfSeparator > -1) {
            const separator = url.charAt(indexOfSeparator);
            const urlParts = Utilities.splitInTwo(url, separator);
            urlParts.firstPart = urlParts.firstPart.toLowerCase();

            processedUrl = urlParts.firstPart + separator + urlParts.secondPart;
        } else {
            processedUrl = url.toLowerCase();
        }

        return super.parse(processedUrl);
    }
}


const routes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'Home' } },
    { path: 'mercados', component: MercadosComponent, data: { title: 'Mercados' } },
    { path: 'calendario', component: CalendarioComponent, data: { title: 'Calendario' } },
    { path: 'noticias', component: NoticiasComponent, data: { title: 'Noticias' } },
    { path: 'webinars', component: WebinarsComponent, data: { title: 'Webinars' } },
    { path: 'simbolo', component: SimboloComponent, data: { title: 'Simbolo' } },
    { path: 'login', component: LoginComponent, data: { title: 'Login' } },
    { path: 'register', component: RegisterComponent, data: { title: 'Register' } },
    { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard], data: { title: 'Customers' } },
    { path: 'products', component: ProductsComponent, canActivate: [AuthGuard], data: { title: 'Products' } },
    { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard], data: { title: 'Orders' } },
    { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard], data: { title: 'Settings' } },
    { path: 'about', component: AboutComponent, data: { title: 'About Us' } },
    { path: 'home', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent, data: { title: 'Page Not Found' } }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        AuthService,
        AuthGuard,
        { provide: UrlSerializer, useClass: LowerCaseUrlSerializer }]
})
export class AppRoutingModule { }
