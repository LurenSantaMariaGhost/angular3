import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { noLisurasValidator } from '../utils/validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {
  userForm: FormGroup;
  constructor (private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group ({
      name: ['', [Validators.required, noLisurasValidator]],
      lastname: ['', [Validators.required, Validators.max]],
      email: ['', [Validators.required, Validators.email]],
      password: this.formBuilder.control (''),
    });
  }
  get emailControl() {
    return this.userForm.controls['email'];
   } 
    onSubmit (): void {
      console.log(this.userForm.value);
      console.log(this.userForm.controls ['email'].value);

      if (this.userForm.invalid) {
        alert('Formulario invalido');
      } else {
        console.log(this.userForm.value);
      }
    }
}
