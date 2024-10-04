import { Injectable } from '@angular/core';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';

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
  addEvent(evento: Event)
  {
    let nuevoEvento = {id: this.events.length, speaker: evento.speaker, title: evento.title, place: evento.place, date: evento.date};
    this.events.push(nuevoEvento);
    //volver a la vista anterior
    
  }
  deleteEvent(evento: Event)
  {
    //delete from events where id = evento.id
    this.events = this.events.filter(e => e.id !== evento.id);
  }
  editEvent(evento: Event){
    this.events = this.events.map(e => e.id === evento.id ? evento : e);
    
  }

}
