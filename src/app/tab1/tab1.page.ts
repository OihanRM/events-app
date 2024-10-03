import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { EventosService } from '../servicios/eventos.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  eventos: any;
  constructor(private eventosService: EventosService) {}

  ngOnInit(): void {
    this.eventos = this.eventosService.searchData();  
  }

}
