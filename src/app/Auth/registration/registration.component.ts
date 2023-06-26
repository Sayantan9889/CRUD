import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/AuthService/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  regData!:FormGroup;
  selectedImg!: File;
  formValues!: any;

  constructor(private aSer:AuthService, private fb:FormBuilder, private router:Router) {}

  ngOnInit():void {
    this.regData = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onFileSelection(ev: any) {
    this.selectedImg = ev.target.files[0];
    console.log("Selected image: ", this.selectedImg);
  }

  register() {
    this.formValues = this.regData.value;
    console.log("Data to be register: ", this.formValues);

    // line-35to40 for adding profile pic
      const formData:FormData=new FormData();
      formData.append('first_name',this.formValues.first_name);
      formData.append('last_name',this.formValues.last_name);
      formData.append('email',this.formValues.email);
      formData.append('password',this.formValues.password);
      formData.append('profile_pic',this.selectedImg,this.selectedImg.name);

    this.aSer.register_user(formData).subscribe((res:any) => {
      console.log(res);
      if(res.status === 200) {
        alert("Registration Successful: "+res.message);
        this.router.navigateByUrl('/login');
      } else {
        alert("Registration error: "+res.message);
      }
    })
  }
}
