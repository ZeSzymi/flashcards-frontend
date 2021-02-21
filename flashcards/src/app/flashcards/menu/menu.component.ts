import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  options = [ { name: 'FLASHCARDS.ADD', type: "flashcards-frontend/add"} , { name: 'FLASHCARDS.LIST', type: "flashcards-frontend/list"}, { name: 'FLASHCARDS.ADMIN' , type: "flashcards-frontend/admin" } ];

  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  }

  changeOption(option) {
    console.log(option)
    this._router.navigate([option.type], { relativeTo: this._route});
  }

}
