import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';
import { QuotesService } from '../../services/quotes';
import { QuotePage } from '../quote/quote';
import { MenuController } from 'ionic-angular';
import { SettingsService } from '../../services/settings';


@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  private quotes: Quote[];

  constructor (
    private quotesService: QuotesService,
    private modalCrtl: ModalController,
    private menuCtrl: MenuController,
    private settingsService: SettingsService
  ){}

  onViewQuote(quote: Quote){
    let modal = this.modalCrtl.create(QuotePage, {quote: quote})
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove){
        this.onRemoveFromFavorite(quote);
      }
    });
  }

  private onRemoveFromFavorite(quote: Quote){
    this.quotesService.removeQuoteFromFavorite(quote);
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  private onOpenMenu(){
    this.menuCtrl.open();
  }

  private getBackgroundStr(){
    return this.settingsService.isAlternativeTheme() ? 'altBackground' : 'light';
  }

  ionViewWillEnter(){
    this.quotes = this.quotesService.getFavoriteQuotes();
  }
}
