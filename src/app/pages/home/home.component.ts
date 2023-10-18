import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  filtro: any
  eventsSubject: Subject<any> = new Subject<any>();

  public getFiltro($event: any):void{
    this.filtro = $event
  }
}
