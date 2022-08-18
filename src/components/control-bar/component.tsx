type ControlBarProps = { isPlaying: boolean; onDeal: () => void; onReset: () => void };

function ControlBar({ isPlaying, onDeal, onReset }: ControlBarProps) {
  return (
    <footer className="flex items-center flex-col justify-around font-alfa-slab-one">
      {isPlaying ? (
        <>
          <button
            data-testid="deal-button"
            className="bg-[#EFCE4B] w-80 h-28 font-bold hover:bg-yellow-600 text-6xl  py-2 px-4 border border-yellow-500 rounded-lg "
            type="button"
            onClick={onDeal}
          >
            DEAL
          </button>
          <button
            data-testid="reset-button"
            className="bg-transparent lg:self-end mt-14 w-36 h-14 border-4 border-[#EFCE4B] rounded-lg font-bold text-2xl text-[#EFCE4B]"
            type="button"
            onClick={onReset}
          >
            Reset
          </button>
        </>
      ) : (
        <button
          data-testid="play-button"
          className="bg-transparent w-44 h-14 border-4 border-[#EFCE4B] rounded-lg font-bold text-xl text-[#EFCE4B]"
          type="button"
          onClick={onReset}
        >
          Play Again
        </button>
      )}
    </footer>
  );
}

export default ControlBar;
