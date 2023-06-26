import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/AuthService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logData!: FormGroup;

  constructor(private fb:FormBuilder, private ser:AuthService) {}

  ngOnInit():void {
    this.logData = this.fb.group({
      email: ['',Validators.required],
      password: ['', Validators.required]
    });
  }

  logIn() {
    this.ser.login_user(this.logData.value).subscribe((user:any) => {
      console.log("User Details: ", user);
      alert(user.message);
    })
  }
}
