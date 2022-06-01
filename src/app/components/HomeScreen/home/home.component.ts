import { Component, OnInit } from '@angular/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faF } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/services/InterfaceServices/theme.service';
import { LoadscriptsService } from 'src/app/services/InterfaceServices/loadscripts.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from 'src/app/services/InterfaceServices/translate-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isDarkMode: boolean;
  faLanguage = faLanguage;
  faMoon = faMoon;
  faUser = faUser;
  faNewspaper = faNewspaper;
  faWrench = faWrench;
  faStarOfLife = faStarOfLife;
  faEyeslash = faEyeSlash;
  faF = faF;
  a = 2;
  b = 1;

  constructor(public translate:TranslateService, private translateConfigService: TranslateConfigService, private themeService: ThemeService, private _LoadScripts:LoadscriptsService ) { 
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('en');
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
    _LoadScripts.Charge(["HomeScreen/scroll"])
  }
  toggleDarkMode() {
    this.isDarkMode = this.themeService.isDarkMode();

    this.isDarkMode
      ? this.themeService.update('light-mode')
      : this.themeService.update('dark-mode');
  }

  ngOnInit(): void {
  }
  changeValue1(){
    this.a = this.a + 1;
  }

  changeValue2(){
    this.b = this.b + 1;
  }
  changeLanguage(type: string) {
    this.translateConfigService.changeLanguage(type);
  }
}


