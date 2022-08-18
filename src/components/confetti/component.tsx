import { useWindowSize } from '@react-hook/window-size';
import Confetti from 'react-confetti';

type ConfettiProps = { isShown: boolean };

function Confettii({ isShown }: ConfettiProps) {
  const [width, height] = useWindowSize();
  if (!isShown) {
    return null;
  }

  return <Confetti width={width} height={height} />;
}

export default Confettii;
