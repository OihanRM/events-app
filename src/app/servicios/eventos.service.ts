import { Injectable } from '@angular/core';

export interface Event {
  id: number;
  speaker: string;
  title: string;
  place: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private events: Event[] = [];

  constructor() {
    this.events = [
      {
        id: 0,
        speaker: 'Homer Simpson',
        title: 'Emprender en Compuglobalhipermeganet',
        place: 'Bilbao',
        date: '2024-12-21'
      },
      {
        id:1,
        speaker: 'Peter Griffin',
        title: 'Como ganar amigos y amigas',
        place: 'Madrid',
        date: '2024-12-21'
      },
      {
        id:2,
        speaker: 'Eric Cartman',
        title: 'Saber es poder',
        place: 'Barcelona',
        date: '2024-12-21'
      },
      {
        id:3,
        speaker: 'Ralph Wiggum',
        title: 'Corre plátano',
        place: 'Valencia',
        date: '2024-12-21'
      }

    ];
  }
  
  searchData()
  {
    return this.events;
  }

}
