import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  options = [ { name: 'FLASHCARD.ADD', type: "flashcards-frontend/add"} , { name: 'FLASHCARD.LIST', type: "flashcards-frontend/list"}, { name: 'FLASHCARD.ADMIN' , type: "flashcards-frontend/admin" } ];

  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  }

  changeOption(option) {
    console.log(option)
    this._router.navigate([option.type], { relativeTo: this._route});
  }

}
