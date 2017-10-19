import {Injectable} from '@angular/core';

@Injectable()
export class TarefasService {
  tarefas = [];
  estatisticas = {
    total: 0,
    pendentes: 0,
    feitas: 0
  };

  constructor() {
  }

  inserirTarefa(titulo: string) {
    this.tarefas.push({
      titulo: titulo,
      feita: false
    });

    this.estatisticas.total = this.tarefas.length;
  }

}
