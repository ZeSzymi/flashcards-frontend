import { AdminComponent } from './identity/components/admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from './flashcards/card-list/card-list.component';
import { CardFormComponent } from './flashcards/card-form/card-form.component';

const routes: Routes = [
  { path: 'flashcards-frontend/list', component: CardListComponent },
  { path: 'flashcards-frontend/add', component: CardFormComponent },
  { path: 'flashcards-frontend/admin', component: AdminComponent },
  { path: '', redirectTo: 'flashcards-frontend/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
