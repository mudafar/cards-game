import { Deck } from '../../types/deck';
import Card from './card';

type CardsProps = { cards: Deck };

function Cards({ cards }: CardsProps) {
  return (
    <main className="overflow-auto">
      <ol
        className="flex flex-row flex-wrap lg:flex-nowrap lg:items-end lg:min-h-[22rem] lg:overflow-hidden justify-evenly mb-5"
        aria-label="dealt cards"
      >
        {cards.map((card) => (
          <Card key={`${card.suit}-${card.value}`} card={card} />
        ))}
      </ol>
    </main>
  );
}

export default Cards;
