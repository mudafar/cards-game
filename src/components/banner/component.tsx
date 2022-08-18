import winner from '../../assets/winner.svg';

type BannerProps = { isShown: boolean };

function Banner({ isShown }: BannerProps) {
  if (!isShown) {
    return null;
  }

  return (
    <img
      alt="winner banner"
      data-testid="winner-banner-image"
      src={winner}
      className="absolute top-32 left-1/2 transform -translate-x-1/2 "
    />
  );
}

export default Banner;
