import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {infoVecinos} from "../common/ModeloDatosPrueba";

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  //urlBase = 'http://acnhapi.com/v1/villagers/';
  urlVecinos = 'assets/json/villagers.json';
  urlArte = 'assets/json/art.json';
  constructor(private http: HttpClient) { }

  //Ya no sirven, la api esta tumbada :(
 /* getVecinos(): Observable<infoVecinos[]> {
    return this.http.get<infoVecinos[]>(this.urlBase);
  }

  getVecino(id: number): Observable<infoVecinos> {
    return this.http.get<infoVecinos>(this.urlBase + '/' + id);
  }*/
  getVecinos(): Observable<infoVecinos[]> {
    return this.http.get<infoVecinos[]>(this.urlVecinos);
  }



}
