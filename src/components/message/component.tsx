type MessageProps = { isShown: boolean };

function Message({ isShown }: MessageProps) {
  if (!isShown) {
    return null;
  }

  return (
    <p className="text-center text-white text-4xl whitespace-pre-wrap">
      {'You lose.\n Better luck next time!'}
    </p>
  );
}

export default Message;
