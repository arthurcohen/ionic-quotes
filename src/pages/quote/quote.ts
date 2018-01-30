import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  quote: Quote;
  person: string;
  text: string;

  constructor(
    private viewCtrl: ViewController,
    private navParams: NavParams
  ){}

  private onClose(remove = false){
    this.viewCtrl.dismiss(remove);
  }

  ionViewWillEnter(){
    this.quote = this.navParams.get("quote");
    console.log("carregado");
    console.log(this.quote.person);
    console.log(this.quote.text);
    this.person = this.quote.person;
    this.text = this.quote.text;

  }
}
