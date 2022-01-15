import {Component,ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
  selector:"register-page",
  templateUrl:"./register.component.html"
})
export class RegisterComponent{
  @ViewChild("f") registerForm!: NgForm;
  onSubmit(){
    console.log(this.registerForm);
  }
}
