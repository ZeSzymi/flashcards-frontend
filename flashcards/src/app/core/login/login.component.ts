import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService) { }

  group: FormGroup;

  ngOnInit() {
    this.group = new FormGroup({
      login: new FormControl(),
      password: new FormControl()
    })
  }

  login() {
    const user = this.group.value;
    this.authService.login(user.login, user.password).subscribe((response: any) => 
      this.authService.setSession(response.token)
    );
  }

}
