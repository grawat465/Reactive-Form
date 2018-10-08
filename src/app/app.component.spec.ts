import { TestBed, async ,ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
describe('AppComponent', () => {
  let comp:AppComponent;
let fixture:ComponentFixture<AppComponent>;

  beforeEach(() => {
   TestBed.configureTestingModule({
     declarations: [
        AppComponent
      ],
      imports:[FormsModule, ReactiveFormsModule],
      providers:[ AppComponent]
    });

  fixture=TestBed.createComponent(AppComponent);
  comp=fixture.componentInstance;
});
  it( 'is the app defined',() => {
  
    expect(comp).toBeDefined();
  });
  
  it( 'is the form valid when empty',() => {
    
    expect(comp.registrationForm.valid).toBeFalsy();
  });

  it( 'is the username when empty',() => {
    let username=comp.registrationForm.controls['userName'];
    username.setValue("Govind");
    expect(username.valid).toBeTruthy();
     });

     it( 'is the passowrd when empty',() => {
      let pwd=comp.registrationForm.controls['password'];
      pwd.setValue("Captain123!");
      expect(pwd.valid).toBeTruthy();
       });

       it( 'is the Confirm  passowrd when empty',() => {
        let cpwd=comp.registrationForm.controls['Cpassword'];
        cpwd.setValue("Captain1234!");
        expect(cpwd).toBeTruthy();
         });

         it( 'is the street when empty',() => {
          let addy=comp.registrationForm.controls['address'];
          addy.setValue(
            {city:"Leasvegas", 
            pincode:1234567,
            street:"Secondbakerss"
            
            });
          expect(addy.valid).toBeTruthy();
           });
  
});