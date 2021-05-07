import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User //objeto da classe user.
  confimarSenha: string // variaveis um valor que aloca
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    //injeção de dependencia, esse modulo de cadastrar dente do auth service
    private router: Router
  ) { }

  ngOnInit(): void {
    window.scroll(0,0)//topo da tela

  }

confirmSenha(event: any) {
this.confimarSenha = event.target.value
}

tipoUser(event: any){
this.tipoUsuario = event.target.value
}

cadastrar(){
  this.user.tipo = this.tipoUsuario

  if(this.user.senha != this.confimarSenha){
alert('As senhas estão incorretas.')
  } else{
    this.authService.cadastrar(this.user).subscribe((resp: User) =>{
      this.user = resp
this.router.navigate(['/entrar'])
      alert('Usuário cadastrado com sucesso!')
    })
  }

}

}
