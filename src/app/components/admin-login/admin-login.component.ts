import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
=======
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
>>>>>>> 46a8fa5f7be69d6633fe4da6e83790fe724b75b6
import { AdminService } from 'src/services/admin/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {

  // inject admin service
<<<<<<< HEAD
  constructor(private adminServ:AdminService) {
=======
  constructor(private adminServ:AdminService,private router:Router) { 
>>>>>>> 46a8fa5f7be69d6633fe4da6e83790fe724b75b6

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }


  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(5)])
  })

  subscriber;

  faliedLogin: string = "";

  firstLoginClick=false;

  login(_user, _pass) {

    this.firstLoginClick=true;

    const loginUserInfo = { username: _user.value, password: _pass.value }

   // console.log(loginUserInfo)

    this.subscriber = this.adminServ.login(loginUserInfo).subscribe(

      (data) => {
        console.log(data)
        localStorage.setItem('rafai3Token', data["token"]);

        this.router.navigateByUrl('/admin/order')

         //make page refresh again when navigate from logged in to check authorization and hide
        // logged in and register buttons
        this.router.navigate(['admin/order'])
           .then(() => {
             window.location.reload();
           });

      },
      (err) => {

        console.log(err['error'])
        this.faliedLogin = err['error'].error;
      },
      () => {

        this.subscriber.unsubscribe();
      }

    )

  }


}
