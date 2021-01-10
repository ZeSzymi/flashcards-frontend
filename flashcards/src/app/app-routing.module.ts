import { HomeComponent } from './core/home/home.component';
import { RegisterComponent } from './core/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from './flashcards/card-list/card-list.component';
import { CardFormComponent } from './flashcards/card-form/card-form.component';

const routes: Routes = [
  { path: 'list', component: CardListComponent },
  { path: 'add', component: CardFormComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
