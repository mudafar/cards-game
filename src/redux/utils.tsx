import { CardSuit, CardValue } from '../types/card';
import { Deck } from '../types/deck';

// generate deck of cards
function generateDeck(): Deck {
  const deck: Deck = [];
  Object.values(CardSuit).forEach((suit) => {
    Object.values(CardValue).forEach((value) => {
      deck.push({ suit, value });
    });
  });
  return deck;
}

// TODO asbtract random function to allow testing
// immutable shuffle deck
function shuffleDeck(deck: Deck): Deck {
  const shuffledDeck: Deck = [...deck];
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }
  return shuffledDeck;
}

// pick 5 cards from deck
function extract5Cards(deck: Deck): Deck {
  return deck.splice(0, 5);
}

export { generateDeck, shuffleDeck, extract5Cards };
