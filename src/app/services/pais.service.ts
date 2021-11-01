
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor( private http: HttpClient ) { 
  }

getPaises() {
    let arrayPaises :any = [];
    
    this.http.get("https://restcountries.com/v3.1/lang/spa")
    .pipe( map( (data: any) => data)).subscribe(paises => {
      paises.forEach((pais:any) => {
        //console.log(pais.name);
        //console.log(pais.alpha3Code);
        arrayPaises.push({"nombre": pais.name.common, "codigo": pais.cca3});
      })
    });

    return arrayPaises;
  }
}
