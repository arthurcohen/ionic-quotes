import { Quote } from "../data/quotes.interface";

export class QuotesService {
    private favoriteQuotes: Quote[] = [];

    // Add a new quote to the favorite quotes array
    public addQuoteToFavorite(quote: Quote){
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }

    // Find the current quote to remove from the fav quotes array
    public removeQuoteFromFavorite(quote: Quote){
        let position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });

        this.favoriteQuotes.splice(position, 1);
    }

    // Return a copy of the favorite quotes array
    public getFavoriteQuotes(){
        return this.favoriteQuotes.slice();
    }

    isFavoriteQuote(quote: Quote){
        return this.favoriteQuotes.find((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });
    }
}
