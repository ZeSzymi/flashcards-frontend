import { PrivilegesComponent } from './identity/components/privileges/privileges.component';
import { UsersComponent } from './identity/components/users/users.component';
import { HttpErrorInterceptor } from './services/errors-interceptor';
import { LanguageComponent } from './core/language/language.component';
import { RolesEditComponent } from './identity/components/roles-edit/roles-edit.component';
import { CardFormComponent } from './flashcards/card-form/card-form.component';
import { CardListComponent } from './flashcards/card-list/card-list.component';
import { MenuComponent } from './flashcards/menu/menu.component';
import { FlashcardsDataService } from './services/flascards-data.service';
import { CardComponent } from './flashcards/card/card.component';
import { HttpService } from './services/http.service';
import { TokenInterceptor } from './services/interceptor';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RolesComponent } from './identity/components/roles/roles.component'
import { AdminComponent } from './identity/components/admin/admin.component'
import { MatDialogModule } from '@angular/material/dialog';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from 'src/environments/environment';
import { NotifierModule } from "angular-notifier";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `${environment.backendUrl}translations/`, '');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    CardComponent,
    MenuComponent,
    CardListComponent,
    CardFormComponent,
    RolesComponent,
    AdminComponent,
    RolesEditComponent,
    LanguageComponent,
    UsersComponent,
    PrivilegesComponent
  ],
  imports: [
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    }),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatListModule,
    MatDividerModule,
    MatSidenavModule,
    MatDialogModule,
    NgSelectModule,
    NotifierModule
  ],
  providers: [
    AuthService,
    HttpService,
    FlashcardsDataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
