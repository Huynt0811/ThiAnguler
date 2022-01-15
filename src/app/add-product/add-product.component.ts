import { Component, ViewChild } from '@angular/core';
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent{

  @ViewChild("f") registerForm!: NgForm;
  onSubmit(){
    console.log(this.registerForm.value);
  }

}
