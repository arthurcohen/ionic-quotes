import { Component } from '@angular/core';
import { IonicPage, Toggle } from 'ionic-angular';
import { SettingsService } from '../../services/settings';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(
    private settings: SettingsService
  ){};
  

  private onThemeToggle(toggle: Toggle){
    this.settings.changeAlternativeTheme(toggle.checked);
  }

  private isThemeAlternative(){
    return this.settings.isAlternativeTheme();
  }
}
