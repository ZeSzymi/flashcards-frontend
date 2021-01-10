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

    GetFlashcards() {
        return this.get('/flashcards');
    }
}