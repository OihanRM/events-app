import { Component, OnInit } from '@angular/core';
import { EventosService } from '../servicios/eventos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  eventos: any;

  constructor(private eventosService:EventosService, private router:Router) { }

  ngOnInit() {
    this.eventos = this.eventosService.searchData();

  }
  navigateDetails(event:Event){
    let evento =  JSON.stringify(event);
    this.router.navigate(['event-details',{event: evento}]);
  }

}
