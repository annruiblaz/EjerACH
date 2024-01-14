import {Component, OnInit} from '@angular/core';
import {infoVecinos} from "../../common/ModeloDatosPrueba";
import {DatosService} from "../../services/datos.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-villager',
  templateUrl: './villager.component.html',
  styleUrls: ['./villager.component.css']
})
export class VillagerComponent implements OnInit{

  vecino: infoVecinos;
  private id: number;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit():void {
  //  this.id = this.activatedRoute.snapshot.params['id'];
  //  this.getVecinoconId();
    const state = window.history.state; //Obtiene el objeto de estado almacenado en la historia del navegador
    if (state && state.vecino) { //comprobamos si tienen un state y si ese state contiene el vecino
      this.vecino = state.vecino;
    }
  }

 /* private getVecinoconId() {
    this.datosServicio.getVecino(this.id).subscribe(
      {next: (data:any) =>
        {
          console.log(data)
          this.vecino = data;
        },
        error: err => {
        console.log(err)
        },
        complete: () => {
        console.log('Completado Vecino')
        }
      }
    )
  }*/



 /* siguiente(){
    this.id++;
    this.router.navigateByUrl('vecino/'+this.id)
      .then(() => {
        this.getVecinoconId()
      })
  }

  anterior(){
    this.id--;
    this.router.navigateByUrl('vecino/'+this.id)
      .then(() => {
        this.getVecinoconId()
      })
  }*/

}
