import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Isidro',
    apellido: 'Bellón',
    correo: 'isidro.bellon@gmail.com',
    pais: ''
  }

  paises: any[] = [];

  constructor( private paisService: PaisService ) { 
  }

  ngOnInit(): void {
    this.paises = this.paisService.getPaises();
    this.paises.unshift({
      nombre: "[Seleccione un país]",
      codigo: ""
    });
    console.log(this.paises);
  }

  guardar( form: NgForm ) {

    if( form.invalid ) {

      Object.values( form.controls ).forEach ( control => {
       control.markAllAsTouched();
      });

      return;
    }

    console.log("SUBMIT disparado: ", form);
    console.log("Formulario: ", form.value);
  }
}
