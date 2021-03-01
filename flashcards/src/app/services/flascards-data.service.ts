import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root',
})
export class FlashcardsDataService extends HttpService {
    constructor(client: HttpClient) {
        super(client);
    }

    getFlashcards() {
        return this.get('flashcards');
    }

    addFlashcard(flashcard) {
        return this.post('flashcards', flashcard);
    }

    removeFlashcard(flashcardId) {
      return this.delete(`flashcards/${flashcardId}`)
    }
}
