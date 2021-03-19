import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {

  // check if 
 this.checkIfAdmin= window.location.href.includes('admin')

 console.log(this.checkIfAdmin)


  }


  checkIfAdmin=false;



}
