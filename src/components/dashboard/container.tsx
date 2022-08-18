import AcesLeft from './container-aces-left';
import CardsLeft from './container-cards-left';

function Banner() {
  return (
    <header className="flex flex-row justify-center mb-5">
      <CardsLeft title="Card" data-testid="cards-left" />
      <AcesLeft title="Ace" data-testid="aces-left" />
    </header>
  );
}

export default Banner;
