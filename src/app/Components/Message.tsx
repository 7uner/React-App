interface Props {
  msg: string;
}

function Message({ msg }: Props) {
  return (
    <h2
      style={{
        margin: 10,
      }}
    >
      {msg}
    </h2>
  );
}

export default Message;
