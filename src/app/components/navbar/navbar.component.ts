import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/services/admin/admin.service';
import { UserService } from 'src/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:ActivatedRoute,private adminServ:AdminService,private userServ:UserService) { 

  }


  subscriber;

  // inject both user and admin service then check if user logged in or not and same for admin
  //   to display navbar related to each one ((and add log in or log out in same logic))
  ngOnInit(): void {

  // check if route satart with admin
 this.checkIfAdmin= window.location.href.includes('admin')

 // get data of admin to display .. Admin and hist name
 if(this.checkIfAdmin){

  

 }



// get data from user to display welcome and name of user
 if(!this.checkIfAdmin){

 this.subscriber= this.userServ.getUserDetails().subscribe(

    (data)=>{

      console.log(data)
      this.userDetails=data;
    },
    (err)=>{

      console.log(err)
    },
    ()=>{
      
      this.subscriber.unsubscribe();
    }
  )

 }

  }


  logout(){

    localStorage.removeItem('rafai3Token');
    this.userDetails=null;
    this.adminDetails=null;
  }


  checkIfAdmin=false;

  userDetails;
  adminDetails;


}
