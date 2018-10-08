import { Component } from '@angular/core';
//import {FormGroup, FormControlName, FormControl}   from '@angular/forms'
import {FormBuilder,Validators}  from  '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

      constructor(private fb : FormBuilder){}
        registrationForm=this.fb.group({
          userName:["",[Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
          password:["",[Validators.required, Validators.pattern("[A-Z][A-Za-z 0-9]{3,10}[!@#$%^&*]")]],
          Cpassword:["", [Validators.required, Validators.pattern("[A-Z][A-Za-z 0-9]{3,10}[!@#$%^&*]")]],
          address: this.fb.group({
            city:["", [Validators.required, Validators.pattern("[A-Za-z]{3,10}]")]],
            pincode:[null,[Validators.required, Validators.pattern("^[0-9]{3,6}]")]],
            street:["", [Validators.required, Validators.pattern("[A-Za-z]{9,30}]")]],

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

      userName:"Jim Moriarity",
      password:"Holmes",
      Cpassword:"Heisenberg",
      address: {
        city:"la",
        pincode:"12345",
        street:"2nd Baker Street"
      }
    });


  }
  printdata(value){
   
    alert(value.userName  +"\n" + value.password +"\n" + value.Cpassword  +"\n"+value.address.city+"\n"+value.address.pincode+"\n"+value.address.street);
    
  }
}    
    

    
  


  

