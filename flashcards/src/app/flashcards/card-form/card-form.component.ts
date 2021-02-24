import { TranslateService } from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FlashcardsDataService } from 'src/app/services/flascards-data.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {

  question: string;
  answer: string;
  answers: string[] = [];
  selectedAnswers: string[] = [];

  constructor(private _flashcardsService: FlashcardsDataService, private _notifyService: NotifierService, private _translateService: TranslateService) {

  }

  ngOnInit() {

  }

  reset() {
    this.answer = '';
    this.answers = [];
    this.question = '';
  }

  save() {
    const flashcard = {
      question: this.question,
      answers : this.answers.map(answer => ({
        content : answer,
        correct : this.selectedAnswers.includes(answer) ? true : false
      }))
    };

    if (flashcard.question != null && flashcard.question !== '' && flashcard.answers.length > 0) {
        this._flashcardsService.addFlashcard(flashcard)
          .subscribe(() => { this._notifyService.notify('success', this._translateService.instant('FLASHCARDS.ADD_SUCCESS')); this.reset()});
    } else {
      this._notifyService.notify('error', this._translateService.instant('FLASHCARDS.QUESTION_ANSWER_NOT_NULL'))
    }
  }

  addAnswer() {
    if (this.answer != null && this.answer !== '') {
      this.answers.push(this.answer);
      this.answer = '';
    } else {
      this._notifyService.notify('error', this._translateService.instant('FLASHCARDS.ANSWER_NOT_NULL'))
    }
  }

}
