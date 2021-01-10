import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.sass']
})
export class CardFormComponent implements OnInit {

  question: string;
  answer: string;
  answers: string[] = [];
  selectedAnswers: any[] = [];

  ngOnInit() {

  }

  save() {
    console.log(this.selectedAnswers);
  }

  addAnswer() {
    if (this.answer != null && this.answer !== '') {
      this.answers.push(this.answer);
      this.answer = '';
    }
  }

}
