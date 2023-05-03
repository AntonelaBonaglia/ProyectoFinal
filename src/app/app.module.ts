import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegistroComponent } from './Pages/registro/registro.component';
import {HttpClientModule} from '@angular/common/http';
import { ConcatenarPipe } from './concatenar.pipe';
import { LoginComponent } from './Pages/login/login.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { DetalleComponent } from './Pages/detalle/detalle.component';
import { ProductoComponent } from './Components/producto/producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    ConcatenarPipe,
    LoginComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    DetalleComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
