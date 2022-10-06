import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  dateTimeEvent: EventEmitter<string> = new EventEmitter()
  @Output()
  registerEvent: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  makeReservation(nazwisko: string, imie: string, telefon: string, data: string, czas: string){
    console.log("Reserwacja...");
    console.log(nazwisko+' '+imie);
    console.log(telefon);
    console.log(data+' '+czas);
    
    this.dateTimeEvent.emit(data+' '+czas)
    
    
  }

}
