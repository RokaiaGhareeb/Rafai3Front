import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  searchedName: string;
  @Output('searchEmitter') searchEmitter = new EventEmitter();

  search() {
      this.searchEmitter.emit(this.searchedName);
  }
}
