import clover from '../../../assets/Clover.svg';
import diamond from '../../../assets/Diamond.svg';
import heart from '../../../assets/Heart.svg';
import spade from '../../../assets/Spade.svg';
import { Card as CardType, CardSuit } from '../../../types/card';
import style from './style.module.css';

type CardProps = { card: CardType };

const suiteToSVGSrc = {
  [CardSuit.Clovers]: clover,
  [CardSuit.Diamonds]: diamond,
  [CardSuit.Hearts]: heart,
  [CardSuit.Spades]: spade,
};

const suitToFontClass = {
  [CardSuit.Clovers]: 'text-black',
  [CardSuit.Spades]: 'text-black',
  [CardSuit.Diamonds]: 'text-red-500',
  [CardSuit.Hearts]: 'text-red-500',
};

function Card({ card }: CardProps) {
  const { suit, value } = card;

  return (
    <li
      className={`${style.card} flex flex-col  bg-white mr-2 mb-2 w-28 h-36 lg:w-40 lg:h-56 p-3 rounded-3xl font-courier-prime`}
      data-testid="card"
      aria-label={`${value} of ${suit} card`}
    >
      <p
        data-testid="card-value"
        className={`${suitToFontClass[suit]} font-bold text-4xl lg:text-7xl`}
      >
        {value}
      </p>
      <img
        data-testid="card-small-suit-image"
        src={suiteToSVGSrc[suit]}
        alt={`small ${suit} suit`}
        className="w-1/4 "
      />
      <img
        data-testid="card-suit-image"
        src={suiteToSVGSrc[suit]}
        alt={`${suit} suit`}
        className="w-3/5 self-end my-auto"
      />
    </li>
  );
}

export default Card;
