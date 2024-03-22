import { Component } from '@angular/core';

@Component({
  selector: 'primeiro',
  templateUrl: './primeiro.component.html',
  styleUrl: './primeiro.component.css'
})
export class PrimeiroComponent {
  nome: string = "Ewerton, Will, Nick"
  sobreNome = "Silva, Viana, Diego"
  src = "https://s2-ge.glbimg.com/3j3QOX_B9epqtIuErrNL-GWip5Y=/0x0:1440x959/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/d/o/YixZGvSNWecfKsNMcmBA/cristiano-1710847050-3327148668194208472-173560420.jpg"
  cumprimenta () {
    return "olá"
  }

  //property binding
  corDaFonte = 'red'
  validaCor = true

  //Event binding
  corDoTexto = ""
  mudaCor(){
    this.corDoTexto = "darkorange"
    console.log(this.corDoTexto)
  }

  nomeDaClasse = 'estilo1'
  alterarModo(value: string) {
    console.log(value)
    this.nomeDaClasse = value
  }
}
