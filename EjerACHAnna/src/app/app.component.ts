import { Component } from '@angular/core';
import {Router} from "@angular/router";
//import vecinosJson from 'src/assets/datos/villagers.json';
import vecinosJson from '../assets/json/villagers.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EjerACHAnna';
  VecinosPr: any = vecinosJson;
}
