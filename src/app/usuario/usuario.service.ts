
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsuario } from './IUsuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  cadastrarUsuario(usuario: IUsuario){
    return this.httpClient.post<IUsuario>("http://localhost:8080/usuarios", usuario);
  }

}
