import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { QuotesService } from '../../services/quotes';
import { SettingsService } from '../../services/settings';
// import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quoteService: QuotesService,
    private settingsService: SettingsService
  ){}
  
  ngOnInit(){
    this.quoteGroup = this.navParams.data;
    console.log(this.quoteGroup.quotes)
  }

  private onAddToFavorite(quote: Quote){
    this.alertCtrl.create({
      title: 'Add quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to favorite this quote?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.quoteService.addQuoteToFavorite(quote)
          }
        },
        {
          text: 'No',
          role: 'cancel'
        }
      ]

    }).present();
  }

  private onRemoveFromFavorite(quote: Quote){
    this.alertCtrl.create({
      title: 'Remove quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure to remove this quote from your favorites quotes?',
      buttons:[
        {
          text: 'Yes',
          handler: () =>{
            this.quoteService.removeQuoteFromFavorite(quote);
          }
        },
        {
          text: 'No',
          role: 'cancel'
        }
      ]
    }).present();
  }

  private isFavorite(quote: Quote){
    return this.quoteService.isFavoriteQuote(quote);
  }

  private getBackgroundStr(){
    return this.settingsService.isAlternativeTheme() ? 'altBackground' : 'light';
  }
}
