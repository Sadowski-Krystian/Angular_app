import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App';
  myAppName = "<i>edu</i>"
  @Input()
  dateTime: string =""
  @Input()
  registerData: string =""
  constructor(){
    console.log("construct");
    
  }

  @HostListener('window:load')
  onLoad(){
    console.log('loads');
    let p = document.querySelector('p')
    console.log(p);
    // p.textContent = "<i>edu</i>"
    
    
  }

  ngOnIniy(){
    console.log("init");
    
  }

  mojaMetoda (){
    console.log("cześć")
  }
  getDateTime(dateTime: string){
    console.log("app.dateTime: "+this.dateTime);
    
  }
}
