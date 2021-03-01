import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  options = [ { name: 'FLASHCARDS.ADD', type: "flashcards-frontend/add", privilege: "add_cards"} , { name: 'FLASHCARDS.LIST', type: "flashcards-frontend/list", privilege: "get_cards"}, { name: 'FLASHCARDS.ADMIN' , type: "flashcards-frontend/admin", privilege: "admin"} ];

  constructor(private _router: Router, private _route: ActivatedRoute, public authService: AuthService) { }

  ngOnInit() {
  }

  changeOption(option) {
    this._router.navigate([option.type], { relativeTo: this._route});
  }

}
