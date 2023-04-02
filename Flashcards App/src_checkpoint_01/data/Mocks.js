//Mocks.js
import CardModel from './Card';
import DeckModel from './Deck';
import {mkReviews} from './QuizCardView';
let MockCards=
	[
	new CardModel('der Hund','the Dog','fakeDeckID'),
	new CardModel('das Kind','the Chile','fakeDeckID'),
	new CardModel('die Frau','the Woman','fakeDeckID'),
	new CardModel('die Katze','the Cat','fakeDeckID')
	];
let MockCard=MockCards[0];
let MockReviews=mkReviews(MockCards);
let MockDecks=[new DeckModel('French'),new DeckModel('German')];
MockDecks.map(deck=>
	{
	deck.addCard(new CardModel('der Hund','the Dog',deck.id));
	deck.addCard(new CardModel('der Katze','the Cat',deck.id));
	deck.addCard(new CardModel('das Brot','the Bread',deck.id));
	deck.addCard(new CardModel('die Frau','the Woman',deck.id));
	return deck;
	});
let MockDeck=MockDecks[0];
export {MockReviews,MockCards,MockCard,MockDecks,MockDeck};