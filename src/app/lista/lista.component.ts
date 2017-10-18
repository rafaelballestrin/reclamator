import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  valor = 0;
  tarefas = [
    {
      titulo: 'Comprar uma Harley',
      feita: false
    },
    {
      titulo: 'Apagar o Atom do computador',
      feita: false
    },
    {
      titulo: 'Apagar o React do computador',
      feita: false
    }
  ];

  incrementar(){
    this.valor++;
  }

}
