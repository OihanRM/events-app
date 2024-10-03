import { Component, OnInit } from '@angular/core';
import { Event, EventosService } from '../servicios/eventos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  eventos: any;
  constructor(private eventosService:EventosService, private router:Router) { }

  ngOnInit() {
    this.eventos = this.eventosService.searchData();

  }
  editEvento(evento: Event){
    this.router.navigate(['/edit-event', {evento: JSON.stringify(evento)}]);

  }

}
