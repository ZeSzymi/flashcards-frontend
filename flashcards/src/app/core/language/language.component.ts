import { Component, OnInit } from '@angular/core';
import { DefaultLangChangeEvent, LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  currentLanguage: string;

  constructor(private _translationService: TranslateService) { }

  ngOnInit() {
    this._translationService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLanguage = event.lang;
    })
    
    this._translationService.onDefaultLangChange.subscribe((event: DefaultLangChangeEvent) => {
      this.currentLanguage = event.lang;
    });
  }

  changeLanguage(language: string) {
    this._translationService.use(language)
  }
}
