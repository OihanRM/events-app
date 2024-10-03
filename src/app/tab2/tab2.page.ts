import { Component } from '@angular/core';
import { EventosService } from '../servicios/eventos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  evento = {id: -1, speaker: 'yo', title: 'algo', place: 'Bilbao', date: '2024'};

  constructor(private eventosService : EventosService, private router:Router) {}

  enviarFormulario() {
    this.eventosService.addEvent(this.evento);
    this.evento = {id: -1, speaker: '', title: '', place: '', date: ''};
    this.router.navigate(['/tabs']);
  }
}
