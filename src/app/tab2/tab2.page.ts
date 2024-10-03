import { Component } from '@angular/core';
import { EventosService } from '../servicios/eventos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  evento = {id: -1, speaker: 'yo', title: 'algo', place: 'Bilbao', date: '2024'};

  constructor(private eventosService : EventosService) {}

  enviarFormulario() {
    console.log(this.evento);
    this.eventosService.addEvent(this.evento);
  }
}
