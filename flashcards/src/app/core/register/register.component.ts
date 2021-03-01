import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _authService: AuthService, private _notifierService: NotifierService, private _translateService: TranslateService) { }

  group: FormGroup;

  ngOnInit() {
    this.group = new FormGroup({
      login: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  register() {
    const user = this.group.value;
    this._authService.register(user.login, user.email, user.password).subscribe((response: any) => {
      this._authService.setSession(response.token)
      this._notifierService.notify('success', this._translateService.instant('IDENTITY.REGISTER_SUCCESS'));
    });
  }

}
