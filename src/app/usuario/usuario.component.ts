import { Component, OnInit } from '@angular/core';
import { IUsuario } from './IUsuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})



export class UsuarioComponent implements OnInit {
hide = true;
usuario: IUsuario = {
  nome: "",
  email: "",
  senha: ""
}

  constructor(private usuarioService: UsuarioService) {}

  cadastrarUsuario() {
    this.usuarioService.cadastrarUsuario(this.usuario).subscribe(res => this.usuario = res);
    alert("Cadastrado com Sucesso!")
  }
  ngOnInit(): void {
  }

}
