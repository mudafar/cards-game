enum CardSuit {
  Hearts = 'hearts',
  Diamonds = 'diamonds',
  Spades = 'spades',
  Clovers = 'clovers',
}

enum CardValue {
  Ace = 'A',
  Two = '2',
  Three = '3',
  Four = '4',
  Five = '5',
  Six = '6',
  Seven = '7',
  Eight = '8',
  Nine = '9',
  Ten = '10',
  Jack = 'J',
  Queen = 'Q',
  King = 'K',
}

type Card = { suit: CardSuit; value: CardValue };

export { CardSuit, CardValue };
export type { Card };
