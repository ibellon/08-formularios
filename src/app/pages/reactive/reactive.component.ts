import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;

  constructor(private fb: FormBuilder,
              private validadores:ValidadoresService) { 
    this.forma = this.crearFormulario();
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

  get pass1NoValido() {
    return this.forma.get('pass1')?.invalid && this.forma.get('pass1')?.touched;
  }

  get pass2NoValido() {
    const pass1 = this.forma.get('pass1').value;
    const pass2 = this.forma.get('pass2').value;
    return (pass1 === pass2)? false: true;
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

  get pasatiempos() {
    return this.forma.get('pasatiempos') as FormArray;
  }

  crearFormulario() {
    return this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5), this.validadores.noIsidro]],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]],
      pass1: ['', Validators.required],
      pass2: ['', Validators.required],
      domicilio: this.fb.group({
        provincia: ['', Validators.required],
        municipio: ['', Validators.required],
        codigoPostal: ['', Validators.required],
        direccion: ['', Validators.required]
      }),
      pasatiempos: this.fb.array([])
    });
  }

  agregarPasatiempo(){
    console.log("AgregarPasatiempo");
    this.pasatiempos.push(this.fb.control(''));
  }

  borrarPasatiempo(index:number) {
    this.pasatiempos.removeAt(index);
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

    ['Comer', 'Dormir'].forEach(p => {
      this.pasatiempos.push(this.fb.control(p));
    });
  }

}
