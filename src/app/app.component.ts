import { Component } from '@angular/core';
//import {FormGroup, FormControlName, FormControl}   from '@angular/forms'
import {FormBuilder}  from  '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

      constructor(private fb : FormBuilder){}
        registrationForm=this.fb.group({
          userName:[""],
          password:[""],
          Cpassword:[""],
          address: this.fb.group({
            city:[],
            pincode:[],
            street:[]

          })

        })
      
  // registrationForm=new FormGroup({
  //  userName: new FormControl("Rawat"),
  //  password: new FormControl(""),
  //  Cpassword:new FormControl(""),
  //  address: new FormGroup({
   //   city: new FormControl(""),
  //    pincode: new FormControl(""),
  //    street: new FormControl(""),

 //   })
//  });
  loaddata(){
    this.registrationForm.setValue({

      userName:"Pant",
      password:"Bing",
      Cpassword:"Bing",
      address: {
        city:"la",
        pincode:"123345",
        street:"2nd Baker Street"
      }
    });
  }
}    
    

    
  


  

