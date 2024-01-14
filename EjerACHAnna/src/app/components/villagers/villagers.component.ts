import {Component, OnInit} from '@angular/core';
import {infoVecinos} from "../../common/ModeloDatosPrueba";
import {DatosService} from "../../services/datos.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-villagers',
  templateUrl: './villagers.component.html',
  styleUrls: ['./villagers.component.css']
})
export class VillagersComponent implements OnInit{

  vecinos: infoVecinos[] = [];

  constructor(private datosService: DatosService, private router: Router) { }
  verDetalles(vecino: infoVecinos) {
    this.router.navigate(['/vecino', vecino.id], { state: { vecino } });
  }
  ngOnInit():void {
    this.cargarVecinos();
  }
  private cargarVecinos() {
   this.datosService.getVecinos().subscribe(
     {
       next: (data:any) => {
         console.log(data)
         this.vecinos = Object.values(data);
       },
       error: err => {
         console.log(err)
       },
       complete: () => {
         console.log('completao')
       }
     }
   )
  }


}

