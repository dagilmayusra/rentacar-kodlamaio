import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ){} 

  ngOnInit(): void {
      // Register translation languages
    this.translate.addLangs(['en', 'tr']);
    // Set default language
    this.translate.setDefaultLang('tr');
  }
  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

}
