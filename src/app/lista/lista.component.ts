import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['lista.component.scss']
})
export class ListaComponent {
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

}
