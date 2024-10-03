import { Component, OnInit } from '@angular/core';
import { Event, EventosService } from '../servicios/eventos.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.page.html',
  styleUrls: ['./edit-event.page.scss'],
})
export class EditEventPage implements OnInit {
  event : any;

  constructor(private eventosService:EventosService, private activatedRoute:ActivatedRoute, private router:Router) {

   }

  ngOnInit() {
    this.event = this.activatedRoute.snapshot.paramMap.get('evento');
    if(this.event!= null){
    this.event = JSON.parse(this.event);
    }else{
      console.log("MIERDA");
    } 
    console.log(this.event);
  }
  enviarFormulario(){
    this.eventosService.editEvent(this.event);
    this.eventosService.searchData();
    this.router.navigate(['/tabs/tab4']);
  }

}
