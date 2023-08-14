function Welcome(props) {
  return (
    <div>
      <h1>
        Hello, {props.name} {props.surname}! How are you today?
      </h1>
      <p>Last seen on: {new Date().toDateString()}</p>
    </div>
  );
}

export default Welcome;
