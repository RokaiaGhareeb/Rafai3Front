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

    // console.log(this.router.url.startsWith('/admin'))
    // console.log(this.router.url=='/admin')


  }


  checkUserOrAdmin;



}
