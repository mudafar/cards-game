type CardCounterProps = { value: number; title: string; 'data-testid'?: string };

function CardCounter({ value, title, ...rest }: CardCounterProps) {
  // pluralize title if value is greater than 1
  const titleWithPlural = value > 1 ? `${title}s` : title;

  return (
    <hgroup
      aria-label={`${title} counter`}
      data-testid={rest['data-testid']}
      className=" mr-2 w-[180px] h-[112px] bg-black border border-[#FFF48C] font-courier-prime"
    >
      <h1
        data-testid="card-counter-value"
        className="text-center font-bold text-5xl text-white mt-[20px] leading-[53.91px] "
      >
        {value}
      </h1>
      <p
        data-testid="card-counter-title"
        className="text-center font-bold text-xl text-white leading-[22.46px]"
      >
        {`${titleWithPlural} Left`}
      </p>
    </hgroup>
  );
}

export default CardCounter;
