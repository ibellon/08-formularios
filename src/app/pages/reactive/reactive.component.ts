import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.crearFormulario();
    this.cargarDatosFormulario();
  }

  ngOnInit(): void {
  
  }

  get nombreNoValido() {
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched;
  }

  get apellidoNoValido() {
    return this.forma.get('apellido')?.invalid && this.forma.get('apellido')?.touched;
  }

  get emailNoValido() {
    return this.forma.get('email')?.invalid && this.forma.get('email')?.touched;
  }

  get provinciaNoValido() {
    return this.forma.get('domicilio.provincia')?.invalid && this.forma.get('domicilio.provincia')?.touched;
  }

  get municipioNoValido() {
    return this.forma.get('domicilio.municipio')?.invalid && this.forma.get('domicilio.municipio')?.touched;
  }

  get codigoPostalNoValido() {
    return this.forma.get('domicilio.codigoPostal')?.invalid && this.forma.get('domicilio.codigoPostal')?.touched;
  }

  get direccionNoValido() {
    return this.forma.get('domicilio.direccion')?.invalid && this.forma.get('domicilio.direccion')?.touched;
  }

  crearFormulario() {
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]],
      domicilio: this.fb.group({
        provincia: ['', Validators.required],
        municipio: ['', Validators.required],
        codigoPostal: ['', Validators.required],
        direccion: ['', Validators.required]
      })
    });
  }

  guardar() {
    console.log(this.forma);
    if( this.forma.invalid ) {
        return Object.values( this.forma.controls ).forEach ( control => {
          if(control instanceof FormGroup) {
            Object.values( this.forma.controls ).forEach (control =>
              control.markAllAsTouched());
          }
          else {
            control.markAllAsTouched();
          }
        

      });
    }
  }

  cargarDatosFormulario(){
    this.forma.reset(
      {
        "nombre": "Baltasar",
        "apellido": "Gracián",
        "email": "baltasar.gracian@gmail.com"
      }
    );
  }

}
