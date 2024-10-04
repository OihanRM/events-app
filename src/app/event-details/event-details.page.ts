import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {
  eventos: any;
  evento = {id: -1, speaker: '', title: '', place: '', date: ''};
  constructor(private router:Router,private route:ActivatedRoute) {}


  ngOnInit() {
    const eventoParam = this.route.snapshot.paramMap.get('event');

    if (eventoParam) {
      this.evento = JSON.parse(eventoParam);
    }

  }
}
