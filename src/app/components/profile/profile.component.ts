import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

<<<<<<< HEAD
  formdata: FormData = new FormData();
  constructor() { }
=======
  constructor(private profileService:ProfileService,private router:Router) { }

  unsubscribeForUser;
  userDetails;
>>>>>>> 46a8fa5f7be69d6633fe4da6e83790fe724b75b6

  ngOnInit(): void {
    this.unsubscribeForUser=this.profileService.getUserDetails().subscribe(
      (userData)=>{
        console.log(userData);
        this.userDetails=userData;   

      },
      (err)=>{
        console.log(err);

        this.router.navigateByUrl('authenticationFailed')
      
        // if (err['error'].error == "authentication failed") {
        //   this.router.navigateByUrl('authenticationFailed')
        // }
      }
    )
  }


  // navigate to edit/ passowrd compoennt to edit password after click
   navigatePassword() {

    this.router.navigateByUrl("/user/password" )

  }

  subscriber;

  userProfile;

}
