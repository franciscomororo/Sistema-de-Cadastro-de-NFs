import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module';
import { TemplateModule } from './template/template.module';
import { MatIconModule } from '@angular/material/icon';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioComponent } from './usuario/usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    TemplateModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
