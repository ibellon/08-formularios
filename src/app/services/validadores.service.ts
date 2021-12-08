import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noIsidro(control: FormControl): {[s: string]: boolean} {
    if(control.value?.toLowerCase() === 'isidro') {
        return {
          noIsidro: true
        }
    }
    return null;
  }
}
