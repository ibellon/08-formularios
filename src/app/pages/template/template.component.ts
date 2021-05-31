import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Isidro',
    apellido: 'Bellón',
    correo: 'isidro.bellon@gmail.com'
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar( form: NgForm ) {

    if( form.invalid ) {

      Object.values( form.controls ).forEach ( control => {
       control.markAllAsTouched();
      });

      return;
    }

    console.log("SUBMIT disparado: ", form);
    console.log("Nombre: ", form.value['nombre']);
  }
}
