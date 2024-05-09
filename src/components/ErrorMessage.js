const error = {
  margin: "5px",
  fontSize: "20px",
};

function ErrorMessage({ message, error }) {
  return (
    <p style={error}>
      <span>⛔️</span> {message}
    </p>
  );
}

export default ErrorMessage;
