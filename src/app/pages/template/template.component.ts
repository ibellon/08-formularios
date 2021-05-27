import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Pepito'
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar( form: NgForm ) {
    console.log("SUBMIT disparado: ", form);
    console.log("Nombre: ", form.value['nombre']);
  }
}
