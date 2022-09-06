import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
meuFormGroup!: FormGroup;


  constructor(private formBuilder: FormBuilder) {

    this.meuFormGroup = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      senha:['', Validators.required]
    });
  }

  postar(){
    if (!this.meuFormGroup.valid){
      console.log("Formulário inválido");
      return;
    }
    console.log("Formulário válido", this.meuFormGroup.value)
  }


  ngOnInit(): void {
  }

}
