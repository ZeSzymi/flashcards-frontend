import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FlashcardsDataService } from 'src/app/services/flascards-data.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  flashcards: any[];

  constructor(private _flashcardsService: FlashcardsDataService, private _notifierService: NotifierService, private _translateService: TranslateService) {

  }

  ngOnInit() {
    this.refresh();
  }

  answer() {
    this.flashcards.forEach(flashcard => {
      flashcard.answers.forEach(answer => {
        answer.disabled = true;
      });
      flashcard.selectedAnswers?.forEach(answer => {
        answer.correct ? answer.correctAnswer = true : answer.wrongAnswer = true;
      })
    })
  }

  refresh() {
    this._flashcardsService.getFlashcards().subscribe((data: any) => {
      this.flashcards = data;
    })
  }

  remove(flashcard) {
    this._flashcardsService.removeFlashcard(flashcard.id).subscribe((data: any) => {
      this._notifierService.notify('success', this._translateService.instant('FLASHCARDS.REMOVED_SUCCESS'))
      this.refresh();
    })
  }

}
