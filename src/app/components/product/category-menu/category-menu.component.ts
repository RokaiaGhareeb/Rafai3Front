import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})

export class CategoryMenuComponent implements OnInit {
  constructor() { }

  @Output() filterEmitt : EventEmitter<String> = new EventEmitter()
  ngOnInit(): void {
    this.onClickMenu('kitchen');
  }

  onClickMenu(filter){
    this.filterEmitt.emit(filter);
  }

}
