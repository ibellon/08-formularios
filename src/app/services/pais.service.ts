
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
    
    this.http.get("https://restcountries.eu/rest/v2/lang/es")
    .pipe( map( (data: any) => data)).subscribe(paises => {
      paises.forEach((pais:any) => {
        //console.log(pais.name);
        //console.log(pais.alpha3Code);
        arrayPaises.push({"nombre": pais.name, "codigo": pais.alpha3Code});
      })
    });

    return arrayPaises;
  }
}
