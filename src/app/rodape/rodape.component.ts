import {Component, OnInit} from '@angular/core';
import {TarefasService} from "../tarefas.service";

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent implements OnInit {
  estatisticas;

  constructor(tarefasService: TarefasService) {
    this.estatisticas = tarefasService.estatisticas;

  }

  ngOnInit() {
  }

}
