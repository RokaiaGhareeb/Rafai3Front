import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService:ProfileService) { }

  unsubscribeForUser;
  userDetails;

  ngOnInit(): void {
    this.unsubscribeForUser=this.profileService.getUserDetails().subscribe(
      (userData)=>{
        console.log(userData);
        this.userDetails=userData;   
      },
      (err)=>{
        console.log(err);
      }
    )
  }


   // navigate to edit/ passowrd compoennt to edit password after click
  //  navigatePassword() {

  //   this.router.navigateByUrl('/user/password/' + this.userDetails.username)

  // }

  // subscriber;

  // userProfile;

}
