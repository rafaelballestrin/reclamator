import {Component} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  tarefas = [];

  constructor() {
  }

  inserir(input: HTMLInputElement){
    this.tarefas.push({
      titulo: input.value,
      feita: false
    });

    input.value = '';
    console.log(this.tarefas);
  }

}
