import { Component, OnInit } from '@angular/core';
import { Event, EventosService } from '../servicios/eventos.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  eventos: any;

  constructor(private eventosService : EventosService) {}

  ngOnInit() {
    this.eventos = this.eventosService.searchData();

  }
  
  eliminarEvento(evento: Event){
    this.eventosService.deleteEvent(evento);
    this.eventos = this.eventosService.searchData();
  }

}
